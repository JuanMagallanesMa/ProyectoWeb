function mostrarMensaje(mensaje, event) {
    const mensajeEmergente = event.target.nextElementSibling;
    mensajeEmergente.textContent = mensaje;
    mensajeEmergente.style.display = 'block';
    mensajeEmergente.style.top = event.target.offsetTop + 'px'; // Alinea con el campo
    mensajeEmergente.style.left = (event.target.offsetLeft + event.target.offsetWidth + 10) + 'px'; // Justo al lado
}

function ocultarMensaje() {
    const mensajes = document.querySelectorAll('#mensajeEmergente');
    mensajes.forEach(mensaje => {
    mensaje.style.display = 'none';
            });
}

function validarFormulario() {
    // Obtener los valores de los campos
    const nombre = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('message').value.trim();
    const asunto = document.getElementById('subject').value;

    // Validar que los campos no estén vacíos
    if (nombre === '') {
        alert('Por favor, ingresa tu nombre.');
        return false;
    }
    if (email === '') {
        alert('Por favor, ingresa tu correo electrónico.');
        return false;
    }
    if (!validarEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
    }
    if (mensaje === '') {
        alert('Por favor, escribe un mensaje.');
        return false;
    }
    if (asunto === '') {
        alert('Por favor, selecciona un asunto.');
        return false;
    }

    // Si todas las validaciones son correctas, enviar el formulario
    alert('Formulario enviado exitosamente.');
    document.getElementById('miFormulario').submit();
}

function validarEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
