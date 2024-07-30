function sendMessage() {
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;

    if (username && message) {
        const chatWindow = document.getElementById('chat-window');
        const newMessage = document.createElement('div');
        newMessage.classList.add('chat-message');
        newMessage.innerHTML = `<strong>${username}:</strong> ${message}`;
        chatWindow.appendChild(newMessage);
        document.getElementById('message').value = '';
        chatWindow.scrollTop = chatWindow.scrollHeight;
    } else {
        alert('Please enter your name and message.');
    }
}

document.getElementById('message').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});


