// Safe return destination validator (only allow internal project pages)
function getSafeRedirectUrl(param) {
    if (!param) return null;
    const allowedPages = [
        'assessment.html',
        'index.html',
        'careers.html',
        'roadmaps.html',
        'resources.html',
        'scholarships.html'
    ];
    try {
        const clean = param.replace(/^[\.\/]+/, '');
        const pageName = clean.split('?')[0].split('#')[0];
        if (allowedPages.includes(pageName)) {
            return clean;
        }
    } catch (e) {
        return null;
    }
    return null;
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Support logout parameter
    if (urlParams.get('logout') === 'true') {
        localStorage.removeItem('careerGuideLoggedIn');
    }
    
    const redirectParam = getSafeRedirectUrl(urlParams.get('redirect'));
    const isAssessmentRedirect = redirectParam === 'assessment.html' || (redirectParam && redirectParam.startsWith('assessment.html'));
    const isLoggedIn = localStorage.getItem('careerGuideLoggedIn') === 'true';

    // Handle already logged-in visitors
    if (isLoggedIn) {
        if (redirectParam) {
            // Already authenticated, proceed directly to requested destination
            window.location.replace(redirectParam);
            return;
        } else {
            // Logged in without redirect: present account status & actions
            const loggedInPanel = document.getElementById('logged-in-panel');
            const loginForm = document.getElementById('login-form');
            const registerForm = document.getElementById('register-form');
            const authFooter = document.getElementById('auth-footer');
            const userNameEl = document.getElementById('logged-in-user-name');
            
            if (loggedInPanel) {
                if (loginForm) loginForm.style.display = 'none';
                if (registerForm) registerForm.style.display = 'none';
                if (authFooter) authFooter.style.display = 'none';
                
                let displayName = 'User';
                try {
                    const savedUser = JSON.parse(localStorage.getItem('careerGuideAuthUser') || '{}');
                    displayName = savedUser.name || savedUser.email || 'User';
                } catch (e) {}
                
                if (userNameEl) userNameEl.textContent = displayName;
                loggedInPanel.style.display = 'block';
                
                const logoutBtn = document.getElementById('logout-btn');
                if (logoutBtn) {
                    logoutBtn.addEventListener('click', () => {
                        window.logoutCareerGuide();
                    });
                }
            }
        }
    } else {
        // Not logged in: show friendly guidance message if redirected from protected assessment
        const authNotice = document.getElementById('auth-notice');
        if (authNotice && isAssessmentRedirect) {
            const isRegisterPage = window.location.pathname.includes('register.html');
            authNotice.textContent = isRegisterPage
                ? "Please create an account to take your career assessment."
                : "Please log in or create an account to take your career assessment.";
            authNotice.style.display = 'block';
        }

        // Pass redirect destination between login and register links
        const registerLink = document.getElementById('register-link');
        if (registerLink && redirectParam) {
            registerLink.href = `register.html?redirect=${encodeURIComponent(redirectParam)}`;
        }
        const loginLink = document.getElementById('login-link');
        if (loginLink && redirectParam) {
            loginLink.href = `login.html?redirect=${encodeURIComponent(redirectParam)}`;
        }
    }

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
            
            const targetDestination = redirectParam || 'index.html';
            setTimeout(() => {
                window.location.href = targetDestination;
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
                const targetDestination = redirectParam || 'index.html';
                window.location.href = targetDestination;
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
