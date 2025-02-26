document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function() {
        navLinks.style.display = 'block';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', function() {
        navLinks.style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
            navLinks.style.justifyContent = 'space-between';
            navLinks.style.alignItems = 'center';
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'none';
        } else {
            navLinks.style.display = 'none';
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });
});

function applyNow() {
    window.location.href = 'https://peak-apply.paperform.co';
}

function learnMore() {
    window.location.href = '#about';
}

function viewCriteria() {
    window.location.href = '#join';
}