const submitButton = document.getElementById('sendMessageButton');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Función para mostrar mensajes de error
    function showError(field, message) {
        const errorDiv = document.getElementById(`${field.id}-error`);
        errorDiv.textContent = message;
        errorDiv.style.color = 'red'; // Establece el color rojo
    }

    // Función para borrar mensajes de error
    function clearError(field) {
        const errorDiv = document.getElementById(`${field.id}-error`);
        errorDiv.textContent = '';
        errorDiv.style.color = 'initial'; // Restablece el color a su estado inicial
    }

    // Validación de campos vacíos
    if (name === '') {
        showError(document.getElementById('name'), 'Por favor, ingresa tu nombre.');
        return;
    } else {
        clearError(document.getElementById('name'));
    }
    
    if (email === '') {
        showError(document.getElementById('email'), 'Por favor, ingresa tu correo electrónico.');
        return;
    } else {
        clearError(document.getElementById('email'));
    }

    if (subject === '') {
        showError(document.getElementById('subject'), 'Por favor, ingresa el asunto.');
        return;
    } else {
        clearError(document.getElementById('subject'));
    }

    if (message === '') {
        showError(document.getElementById('message'), 'Por favor, ingresa tu mensaje.');
        return;
    } else {
        clearError(document.getElementById('message'));
    }

    // Resto del código de envío del formulario
    const ebody = `
        <h5>Cliente: ${name}</h5>
        <br>
        <h5>Correo: ${email}</h5>
        <br>
        <h5>Teléfono: ${subject}</h5>
        <br>
        <h5>Mensaje: ${message}</h5>
    `;

    Email.send({
        SecureToken: "f6554301-200e-4a14-826d-e429ed8e3c5a", 
        To: 'ventas@jylmetal.cl',
        From: "ventas@jylmetal.cl",
        Subject: "Cotización",
        Body: ebody
    }).then(message => {
        alert('Pronto nos comunicaremos con usted. ¡Gracias!');
        form.reset(); // Resetea el formulario
    });
});
