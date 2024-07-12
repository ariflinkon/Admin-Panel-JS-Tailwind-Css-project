document.addEventListener('DOMContentLoaded', function() {
    const hideLeftbarButton = document.getElementById('hide-leftbar');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const registerLink = document.getElementById('register-link');
    const loginLink = document.getElementById('login-link');

    if (hideLeftbarButton) {
        hideLeftbarButton.addEventListener('click', function() {
            sidebar.classList.toggle('hidden');
            content.classList.toggle('flex-1');
        });
    }

    if (registerLink) {
        registerLink.addEventListener('click', function(event) {
            event.preventDefault();
            loadRegisterForm();
        });
    }

    if (loginLink) {
        loginLink.addEventListener('click', function(event) {
            event.preventDefault();
            loadLoginForm();
        });
    }
});