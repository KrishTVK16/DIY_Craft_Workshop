/* Dashboard Logic */

document.addEventListener('DOMContentLoaded', () => {
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const tabContents = document.querySelectorAll('.tab-content');

    if (sidebarItems.length > 0) {
        sidebarItems.forEach(item => {
            item.addEventListener('click', () => {
                // Remove active class from all items
                sidebarItems.forEach(i => i.classList.remove('active'));

                // Add active class to clicked item
                item.classList.add('active');

                // Hide all tab contents
                tabContents.forEach(tab => tab.classList.remove('active'));

                // Show target content
                const targetId = item.getAttribute('data-target');
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }
});
