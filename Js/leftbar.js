document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle submenus
    function toggleSubmenu(event) {
        const submenu = event.currentTarget.nextElementSibling;
        if (submenu && submenu.classList.contains('submenu')) {
            submenu.classList.toggle('hidden');
        }
    }

    // Add event listeners to menu items that have submenus
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        const submenu = item.nextElementSibling;
        if (submenu && submenu.classList.contains('submenu')) {
            item.addEventListener('click', toggleSubmenu);
        }
    });
});