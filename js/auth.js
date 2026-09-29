// js/auth.js

document.addEventListener('DOMContentLoaded', () => {
    
    // Toggle Password Visibility
    const toggleBtns = document.querySelectorAll('.password-toggle');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const input = e.target.parentElement.querySelector('input');
            if (input.type === 'password') {
                input.type = 'text';
                e.target.textContent = 'Hide';
            } else {
                input.type = 'password';
                e.target.textContent = 'Show';
            }
        });
    });

    // Forgot Password Demo Message
    const forgotPwdLink = document.getElementById('forgot-pwd-link');
    const forgotPwdMsg = document.getElementById('forgot-pwd-msg');
    if (forgotPwdLink && forgotPwdMsg) {
        forgotPwdLink.addEventListener('click', (e) => {
            e.preventDefault();
            forgotPwdMsg.style.display = 'block';
        });
    }

    // Register Form Handling
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const fullname = document.getElementById('fullname').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const errorDiv = document.getElementById('register-error');
            const successDiv = document.getElementById('register-success');
            
            errorDiv.style.display = 'none';
            successDiv.style.display = 'none';
            
            if (!fullname || !email || !password || !confirmPassword) {
                errorDiv.textContent = "All fields are required.";
                errorDiv.style.display = 'block';
                return;
            }
            
            if (password.length < 6) {
                errorDiv.textContent = "Password must be at least 6 characters.";
                errorDiv.style.display = 'block';
                return;
            }
            
            if (password !== confirmPassword) {
                errorDiv.textContent = "Passwords do not match.";
                errorDiv.style.display = 'block';
                return;
            }
            
            // Save to localStorage and auto-login
            const user = { name: fullname, email: email, password: password };
            localStorage.setItem('careerGuideAuthUser', JSON.stringify(user));
            localStorage.setItem('careerGuideLoggedIn', 'true');
            
            successDiv.textContent = "Account created successfully! Redirecting...";
            successDiv.style.display = 'block';
            
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        });
    }

    // Login Form Handling
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const errorDiv = document.getElementById('login-error');
            
            errorDiv.style.display = 'none';
            
            const savedUserStr = localStorage.getItem('careerGuideAuthUser');
            if (!savedUserStr) {
                errorDiv.textContent = "No account found. Please register first.";
                errorDiv.style.display = 'block';
                return;
            }
            
            const savedUser = JSON.parse(savedUserStr);
            
            if (email === savedUser.email && password === savedUser.password) {
                localStorage.setItem('careerGuideLoggedIn', 'true');
                window.location.href = 'index.html';
            } else {
                errorDiv.textContent = "Invalid email or password.";
                errorDiv.style.display = 'block';
            }
        });
    }
});

// Logout function (can be called from anywhere if needed)
window.logoutCareerGuide = function() {
    localStorage.removeItem('careerGuideLoggedIn');
    window.location.href = 'login.html';
};
