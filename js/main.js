document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = 'Toggle to Light Mode';
    } else {
        themeToggle.textContent = 'Toggle to Dark Mode';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Save theme preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = 'Toggle to Light Mode';
        } else {
            localStorage.removeItem('theme');
            themeToggle.textContent = 'Toggle to Dark Mode';
        }
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        const subject = `Message from ${name} via your website`;
        const body = `${message}\n\nFrom: ${name} <${email}>`;
        
        window.location.href = `mailto:aanmol.connect@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });

    const nameContainer = document.querySelector('.name-container');
    const profilePic = document.getElementById('profile-pic-container');

    nameContainer.addEventListener('mousemove', (e) => {
        profilePic.style.left = e.pageX + 'px';
        profilePic.style.top = e.pageY + 'px';
    });

    nameContainer.addEventListener('mouseenter', () => {
        document.body.classList.add('torch-effect');
        nameContainer.classList.add('torch-active');
    });

    nameContainer.addEventListener('mouseleave', () => {
        document.body.classList.remove('torch-effect');
        nameContainer.classList.remove('torch-active');
    });

    document.addEventListener('mousemove', (e) => {
        if (document.body.classList.contains('torch-effect')) {
            document.documentElement.style.setProperty('--x', e.clientX + 'px');
            document.documentElement.style.setProperty('--y', e.clientY + 'px');
        }
    });

    const quickNav = document.getElementById('quick-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) { // Show after scrolling 200px
            quickNav.style.display = 'flex';
        } else {
            quickNav.style.display = 'none';
        }
    });
});
