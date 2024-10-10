const validCredentials = {
    username: 'candice',
    password: 'candice'
};

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('login-message');

    if (username === validCredentials.username && password === validCredentials.password) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('mp3-player').style.display = 'block';
        message.textContent = '';
    } else {
        message.textContent = 'Invalid username or password';
        message.style.color = 'red';
    }
}