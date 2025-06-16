// main.js
console.log('JS cargado');
const API_BASE = "http://localhost:3001/api";

document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display services on the services page
    if (window.location.pathname.endsWith('servicios.html')) {
        fetchServices();
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
});

function fetchServices() {
    fetch(`${API_BASE}/servicios`)
        .then(response => response.json())
        .then(services => {
            const servicesList = document.getElementById('services-list');
            if (!servicesList) return;
            services.forEach(service => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<p>${service.titulo}</p> ${service.descripcion}`;
                servicesList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching services:', error));
}

function handleContactFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        nombre: formData.get('nombre'),
        email: formData.get('email'),
        mensaje: formData.get('mensaje')
    };

    fetch(`${API_BASE}/contacto`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Mensaje enviado con éxito!');
            event.target.reset();
        } else {
            alert('Error al enviar el mensaje. Inténtalo de nuevo.');
        }
    })
    .catch(error => console.error('Error sending contact message:', error));
}