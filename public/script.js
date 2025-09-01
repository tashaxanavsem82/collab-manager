const socket = io();

const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const messagesDiv = document.getElementById('messages');

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    socket.emit('chat message', message);
    messageInput.value = '';
});

socket.on('chat message', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    messagesDiv.appendChild(messageElement);
});