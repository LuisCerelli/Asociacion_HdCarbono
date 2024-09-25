// Archivo: script.js

document.getElementById('chat-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const userInput = document.getElementById('user-input').value;
    const outputDiv = document.getElementById('output');
  
    // Aquí puedes agregar la lógica para conectar con tus PDFs y XMLs
    // Por ahora, simulamos la respuesta del GPT
  
    let simulatedResponse = '';
  
    // Simular respuestas basadas en preguntas comunes
    if (userInput.toLowerCase().includes('horario')) {
      simulatedResponse = 'Los horarios de atención son de 9 AM a 5 PM de lunes a viernes.';
    } else if (userInput.toLowerCase().includes('contacto')) {
      simulatedResponse = 'Puedes contactarnos en soporte@fundacion.com o al +1 234 567 890.';
    } else {
      simulatedResponse = 'Lo siento, no tengo información sobre esa pregunta en los documentos cargados.';
    }
  
    // Mostrar la respuesta en la página
    const responseElement = document.createElement('div');
    responseElement.classList.add('response');
    responseElement.textContent = simulatedResponse;
    outputDiv.appendChild(responseElement);
  
    // Limpiar el input del usuario
    document.getElementById('user-input').value = '';
  });
  