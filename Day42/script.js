alert("Day 42")
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'Pass@123') {
        // Successful login, you can redirect or perform other actions here
        alert('Login successful');
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
