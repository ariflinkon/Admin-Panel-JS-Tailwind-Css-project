document.addEventListener('DOMContentLoaded', function () {
    const profileButton = document.getElementById('profile-button');
    const profileDropdown = document.getElementById('profile-dropdown');
    const notificationButton = document.getElementById('notification-button');
    const notificationDropdown = document.getElementById('notification-dropdown');

    profileButton.addEventListener('click', function (event) {
        event.stopPropagation();
        profileDropdown.classList.toggle('hidden');
        if (!notificationDropdown.classList.contains('hidden')) {
            notificationDropdown.classList.add('hidden');
        }
    });

    document.addEventListener('click', function () {
        if (!profileDropdown.classList.contains('hidden')) {
            profileDropdown.classList.add('hidden');
        }
    });

    notificationButton.addEventListener('click', function (event) {
        event.stopPropagation();
        notificationDropdown.classList.toggle('hidden');
        if (!profileDropdown.classList.contains('hidden')) {
            profileDropdown.classList.add('hidden');
        }
    });
    
    document.addEventListener('click', function () {
        if (!notificationDropdown.classList.contains('hidden')) {
            notificationDropdown.classList.add('hidden');
        }
    });
});