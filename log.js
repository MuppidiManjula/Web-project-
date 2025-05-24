document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const registerButton = document.getElementById('registerButton'); 
    
    
    if (sessionStorage.getItem('loggedIn') === 'true') {
        window.location.href = 'internship.html'; 
    }

    form.addEventListener('submit', (event) => {
        let isValid = true;

        
        usernameError.textContent = '';
        passwordError.textContent = '';

        
        if (username.value.trim() === '') {
            usernameError.textContent = 'Username is required.';
            isValid = false;
        }

        
        if (password.value.trim() === '') {
            passwordError.textContent = 'Password is required.';
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); 
        } else {
           
            sessionStorage.setItem('loggedIn', 'true'); 
            window.location.href = 'internship.html'; 
        }
    });

    
    registerButton.addEventListener('click', (event) => {       
        window.location.href = 'register.html'; 
    });
});
