from flask import Flask, request, jsonify, send_from_directory
import sqlite3
import json
import os
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import re

# Crear la aplicación Flask
app = Flask(__name__)
app.config['SECRET_KEY'] = 'biodiversidad-chile-2025'

# Configuración de la base de datos
DATABASE = 'biodiversidad.db'

def get_db_connection():
    """Crear conexión a la base de datos SQLite"""
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row  # Para poder acceder por nombre de columna
    return conn

def init_database():
    """Inicializar la base de datos con las tablas necesarias"""
    conn = get_db_connection()
    
    # Crear tabla de suscriptores
    conn.execute('''
        CREATE TABLE IF NOT EXISTS subscribers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            date_subscribed TEXT NOT NULL
        )
    ''')
    
    # Crear tabla de mensajes de contacto
    conn.execute('''
        CREATE TABLE IF NOT EXISTS contact_messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            subject TEXT NOT NULL,
            message TEXT NOT NULL,
            date_sent TEXT NOT NULL
        )
    ''')
    
    # Crear tabla de especies (opcional para futuras funcionalidades)
    conn.execute('''
        CREATE TABLE IF NOT EXISTS species (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            scientific_name TEXT NOT NULL,
            type TEXT NOT NULL,
            region TEXT NOT NULL,
            description TEXT NOT NULL,
            conservation_status TEXT NOT NULL
        )
    ''')
    
    conn.commit()
    conn.close()
    print("✅ Base de datos inicializada correctamente")

def validate_email(email):
    """Validar formato de email"""
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

def send_simple_email(to_email, subject, message):
    """Función simple para enviar emails (opcional - desactivada por defecto)"""
    try:
        # Configuración de email (descomenta y configura si quieres usar)
        """
        smtp_server = "smtp.gmail.com"
        smtp_port = 587
        sender_email = "tu_email@gmail.com"  # Cambiar por tu email
        sender_password = "tu_password"      # Cambiar por tu password
        
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = to_email
        msg['Subject'] = subject
        
        msg.attach(MIMEText(message, 'plain', 'utf-8'))
        
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(sender_email, sender_password)
        text = msg.as_string()
        server.sendmail(sender_email, to_email, text)
        server.quit()
        
        print(f"✅ Email enviado a {to_email}")
        return True
        """
        
        # Por ahora solo simulamos el envío
        print(f"📧 Simulando envío de email a {to_email}: {subject}")
        return True
        
    except Exception as e:
        print(f"❌ Error enviando email: {str(e)}")
        return False

# RUTAS PARA SERVIR ARCHIVOS ESTÁTICOS
@app.route('/')
def index():
    """Servir la página principal"""
    return send_from_directory('.', 'index.html')

@app.route('/styles.css')
def styles():
    """Servir el archivo CSS"""
    return send_from_directory('.', 'styles.css')

@app.route('/script.js')
def script():
    """Servir el archivo JavaScript"""
    return send_from_directory('.', 'script.js')

# RUTAS DE LA API
@app.route('/api/subscribe', methods=['POST'])
def subscribe():
    """Manejar suscripciones al boletín"""
    try:
        # Obtener datos del formulario
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'No se recibieron datos'}), 400
        
        name = data.get('name', '').strip()
        email = data.get('email', '').strip().lower()
        
        # Validaciones básicas
        if not name or not email:
            return jsonify({'error': 'Nombre y email son requeridos'}), 400
        
        if len(name) < 2:
            return jsonify({'error': 'El nombre debe tener al menos 2 caracteres'}), 400
        
        if not validate_email(email):
            return jsonify({'error': 'Por favor ingresa un email válido'}), 400
        
        # Conectar a la base de datos
        conn = get_db_connection()
        
        # Verificar si el email ya existe
        existing = conn.execute(
            'SELECT id FROM subscribers WHERE email = ?', (email,)
        ).fetchone()
        
        if existing:
            conn.close()
            return jsonify({'message': 'Este email ya está suscrito a nuestro boletín'}), 200
        
        # Insertar nuevo suscriptor
        current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        conn.execute(
            'INSERT INTO subscribers (name, email, date_subscribed) VALUES (?, ?, ?)',
            (name, email, current_time)
        )
        conn.commit()
        subscriber_id = conn.lastrowid
        conn.close()
        
        # Enviar email de bienvenida (simulado)
        welcome_message = f"""
        ¡Hola {name}!
        
        ¡Bienvenido/a a BiodiversidadChile!
        
        Gracias por unirte a nuestra comunidad dedicada a la conservación 
        y educación ambiental de Chile.
        
        Pronto recibirás noticias sobre la increíble flora y fauna de nuestro país.
        
        ¡Juntos podemos proteger la biodiversidad de Chile!
        
        Saludos,
        El equipo de BiodiversidadChile
        """
        
        send_simple_email(email, "¡Bienvenido a BiodiversidadChile!", welcome_message)
        
        print(f"✅ Nueva suscripción: {name} ({email})")
        
        return jsonify({
            'message': '¡Gracias por suscribirte! Recibirás nuestro primer boletín pronto.',
            'success': True
        }), 201
        
    except Exception as e:
        print(f"❌ Error en suscripción: {str(e)}")
        return jsonify({'error': 'Ocurrió un error. Por favor intenta nuevamente.'}), 500

@app.route('/api/contact', methods=['POST'])
def contact():
    """Manejar mensajes de contacto"""
    try:
        # Obtener datos del formulario
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'No se recibieron datos'}), 400
        
        name = data.get('name', '').strip()
        email = data.get('email', '').strip().lower()
        subject = data.get('subject', '').strip()
        message = data.get('message', '').strip()
        
        # Validaciones básicas
        if not all([name, email, subject, message]):
            return jsonify({'error': 'Todos los campos son requeridos'}), 400
        
        if len(name) < 2:
            return jsonify({'error': 'El nombre debe tener al menos 2 caracteres'}), 400
        
        if not validate_email(email):
            return jsonify({'error': 'Por favor ingresa un email válido'}), 400
        
        if len(subject) < 5:
            return jsonify({'error': 'El asunto debe tener al menos 5 caracteres'}), 400
        
        if len(message) < 10:
            return jsonify({'error': 'El mensaje debe tener al menos 10 caracteres'}), 400
        
        # Guardar mensaje en la base de datos
        conn = get_db_connection()
        current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        
        conn.execute(
            'INSERT INTO contact_messages (name, email, subject, message, date_sent) VALUES (?, ?, ?, ?, ?)',
            (name, email, subject, message, current_time)
        )
        conn.commit()
        message_id = conn.lastrowid
        conn.close()
        
        # Enviar notificación por email (simulado)
        notification = f"""
        Nuevo mensaje de contacto en BiodiversidadChile:
        
        Nombre: {name}
        Email: {email}
        Asunto: {subject}
        Fecha: {current_time}
        
        Mensaje:
        {message}
        """
        
        send_simple_email("admin@biodiversidadchile.cl", f"Contacto: {subject}", notification)
        
        print(f"✅ Nuevo mensaje de contacto de {name} ({email}): {subject}")
        
        return jsonify({
            'message': 'Mensaje enviado correctamente. Te responderemos pronto.',
            'success': True
        }), 201
        
    except Exception as e:
        print(f"❌ Error en contacto: {str(e)}")
        return jsonify({'error': 'Ocurrió un error. Por favor intenta nuevamente.'}), 500

@app.route('/api/subscribers', methods=['GET'])
def get_subscribers():
    """Obtener lista de suscriptores (para administración)"""
    try:
        conn = get_db_connection()
        subscribers = conn.execute(
            'SELECT * FROM subscribers ORDER BY date_subscribed DESC'
        ).fetchall()
        conn.close()
        
        # Convertir a lista de diccionarios
        subscribers_list = []
        for sub in subscribers:
            subscribers_list.append({
                'id': sub['id'],
                'name': sub['name'],
                'email': sub['email'],
                'date_subscribed': sub['date_subscribed']
            })
        
        return jsonify({
            'subscribers': subscribers_list,
            'total': len(subscribers_list)
        }), 200
        
    except Exception as e:
        print(f"❌ Error obteniendo suscriptores: {str(e)}")
        return jsonify({'error': 'Error obteniendo datos'}), 500

@app.route('/api/messages', methods=['GET'])
def get_messages():
    """Obtener mensajes de contacto (para administración)"""
    try:
        conn = get_db_connection()
        messages = conn.execute(
            'SELECT * FROM contact_messages ORDER BY date_sent DESC'
        ).fetchall()
        conn.close()
        
        # Convertir a lista de diccionarios
        messages_list = []
        for msg in messages:
            messages_list.append({
                'id': msg['id'],
                'name': msg['name'],
                'email': msg['email'],
                'subject': msg['subject'],
                'message': msg['message'],
                'date_sent': msg['date_sent']
            })
        
        return jsonify({
            'messages': messages_list,
            'total': len(messages_list)
        }), 200
        
    except Exception as e:
        print(f"❌ Error obteniendo mensajes: {str(e)}")
        return jsonify({'error': 'Error obteniendo datos'}), 500

@app.route('/api/stats', methods=['GET'])
def get_stats():
    """Obtener estadísticas básicas"""
    try:
        conn = get_db_connection()
        
        total_subscribers = conn.execute('SELECT COUNT(*) as count FROM subscribers').fetchone()['count']
        total_messages = conn.execute('SELECT COUNT(*) as count FROM contact_messages').fetchone()['count']
        
        conn.close()
        
        return jsonify({
            'total_subscribers': total_subscribers,
            'total_messages': total_messages,
            'status': 'active'
        }), 200
        
    except Exception as e:
        print(f"❌ Error obteniendo estadísticas: {str(e)}")
        return jsonify({'error': 'Error obteniendo estadísticas'}), 500

# RUTA DE ADMINISTRACIÓN SIMPLE
@app.route('/admin')
def admin():
    """Panel de administración básico"""
    admin_html = '''
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Admin - BiodiversidadChile</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
            .container { max-width: 1200px; margin: 0 auto; }
            .card { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
            .stat { background: #2d5a27; color: white; padding: 20px; border-radius: 8px; text-align: center; }
            .stat h3 { margin: 0; font-size: 2em; }
            .stat p { margin: 10px 0 0 0; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
            th { background: #4a7c59; color: white; }
            .btn { background: #2d5a27; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; margin: 10px 5px; }
            .btn:hover { background: #4a7c59; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🌿 Panel de Administración - BiodiversidadChile</h1>
            
            <div class="stats" id="stats">
                <!-- Las estadísticas se cargarán aquí -->
            </div>
            
            <div class="card">
                <h2>📧 Suscriptores Recientes</h2>
                <button class="btn" onclick="loadSubscribers()">Actualizar Lista</button>
                <div id="subscribers-content">
                    <p>Clic en "Actualizar Lista" para ver los suscriptores</p>
                </div>
            </div>
            
            <div class="card">
                <h2>💬 Mensajes de Contacto Recientes</h2>
                <button class="btn" onclick="loadMessages()">Actualizar Mensajes</button>
                <div id="messages-content">
                    <p>Clic en "Actualizar Mensajes" para ver los mensajes</p>
                </div>
            </div>
        </div>
        
        <script>
            // Cargar estadísticas al inicio
            loadStats();
            
            async function loadStats() {
                try {
                    const response = await fetch('/api/stats');
                    const data = await response.json();
                    
                    document.getElementById('stats').innerHTML = `
                        <div class="stat">
                            <h3>${data.total_subscribers}</h3>
                            <p>Suscriptores</p>
                        </div>
                        <div class="stat">
                            <h3>${data.total_messages}</h3>
                            <p>Mensajes</p>
                        </div>
                        <div class="stat">
                            <h3>✅</h3>
                            <p>Sistema Activo</p>
                        </div>
                    `;
                } catch (error) {
                    console.error('Error cargando estadísticas:', error);
                }
            }
            
            async function loadSubscribers() {
                try {
                    const response = await fetch('/api/subscribers');
                    const data = await response.json();
                    
                    let html = `<p><strong>Total: ${data.total} suscriptores</strong></p>`;
                    
                    if (data.subscribers.length > 0) {
                        html += `
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Email</th>
                                        <th>Fecha de Suscripción</th>
                                    </tr>
                                </thead>
                                <tbody>
                        `;
                        
                        data.subscribers.forEach(sub => {
                            html += `
                                <tr>
                                    <td>${sub.name}</td>
                                    <td>${sub.email}</td>
                                    <td>${sub.date_subscribed}</td>
                                </tr>
                            `;
                        });
                        
                        html += '</tbody></table>';
                    } else {
                        html += '<p>No hay suscriptores aún.</p>';
                    }
                    
                    document.getElementById('subscribers-content').innerHTML = html;
                } catch (error) {
                    console.error('Error cargando suscriptores:', error);
                }
            }
            
            async function loadMessages() {
                try {
                    const response = await fetch('/api/messages');
                    const data = await response.json();
                    
                    let html = `<p><strong>Total: ${data.total} mensajes</strong></p>`;
                    
                    if (data.messages.length > 0) {
                        html += `
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Email</th>
                                        <th>Asunto</th>
                                        <th>Fecha</th>
                                    </tr>
                                </thead>
                                <tbody>
                        `;
                        
                        data.messages.forEach(msg => {
                            html += `
                                <tr>
                                    <td>${msg.name}</td>
                                    <td>${msg.email}</td>
                                    <td>${msg.subject}</td>
                                    <td>${msg.date_sent}</td>
                                </tr>
                            `;
                        });
                        
                        html += '</tbody></table>';
                    } else {
                        html += '<p>No hay mensajes aún.</p>';
                    }
                    
                    document.getElementById('messages-content').innerHTML = html;
                } catch (error) {
                    console.error('Error cargando mensajes:', error);
                }
            }
        </script>
    </body>
    </html>
    '''
    return admin_html

# Manejo de errores
@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Página no encontrada'}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Error interno del servidor'}), 500

if __name__ == '__main__':
    # Inicializar la base de datos
    init_database()
    
    print("🚀 Iniciando servidor Flask...")
    print("📱 Página principal: http://localhost:5000")
    print("⚙️  Panel admin: http://localhost:5000/admin")
    print("🛑 Para detener el servidor: Ctrl+C")
    
    # Ejecutar la aplicación
    app.run(
        host='0.0.0.0',
        port=5000,
        debug=True
    )
