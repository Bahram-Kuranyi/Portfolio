// Toggle mobile menu
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth scrolling for anchor links
const links = document.querySelectorAll('a[href^="#"]');

for (const link of links) {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });

        // Close mobile menu after clicking a link
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
        }
    });
}

// Vue.js instance for Projects
new Vue({
    el: '#app-projects',
    data: {
        projects: [
            { id: 1, image: 'assets/projects/baradaranP.jpg', title: 'Baradaran', description: 'Description of project 1. This project involves...' },
            { id: 2, image: 'assets/projects/hestooranP.jpg', title: 'Hestooran', description: 'Description of project 2. This project involves...' },
            { id: 3, image: 'assets/projects/orkidehresturantP.jpg', title: 'Orkideh Resturant', description: 'Description of project 3. This project involves...' },
            { id: 4, image: 'assets/projects/sharafoleslamiP.jpg', title: 'Sharaf Resturant', description: 'Description of project 4. This project involves...' },
        ]
    },
    mounted() {
        this.addScrollAnimation();
    },
    methods: {
        addScrollAnimation() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            });

            const projectElements = document.querySelectorAll('.project');
            projectElements.forEach(element => {
                observer.observe(element);
            });
        }
    }
});

// Vue.js instance for Certificates
new Vue({
    el: '#app-certificates',
    data: {
        certificates: [
            { id: 1, image: 'assets/certificates/AI-Cert.jpg', title: 'Certificate 1', organization: 'Google', link: 'https://example.com/certificate1' },
            { id: 2, image: 'assets/certificates/PM-Cert.png', title: 'Certificate 2', organization: 'Google', link: 'https://example.com/certificate2' },
            { id: 3, image: 'assets/certificates/PM-Cert2.jpg', title: 'Certificate 3', organization: 'Google', link: 'https://example.com/certificate3' },
            { id: 4, image: 'assets/certificates/Data-Cert.png', title: 'Certificate 4', organization: 'Google', link: 'https://example.com/certificate4' },
            { id: 5, image: 'assets/certificates/Data-Cert2.png', title: 'Certificate 5', organization: 'Google', link: 'https://example.com/certificate5' }
        ]
    },
    mounted() {
        this.addScrollAnimation();
    },
    methods: {
        addScrollAnimation() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            });

            const certificateElements = document.querySelectorAll('.certificate');
            certificateElements.forEach(element => {
                observer.observe(element);
            });
        }
    }
});

// Vue.js instance for Home Typewriter Effect
new Vue({
    el: '.home-content',
    data: {
        typewriterTexts: ['Adaptable Analytical Thinker', 'Web Developer','Front End Engineer', 'Project Manager'],
        currentTextIndex: 0,
        currentCharIndex: 0,
        currentText: ''
    },
    mounted() {
        this.typewriterEffect();
    },
    methods: {
        typewriterEffect() {
            const typewriter = () => {
                if (this.currentCharIndex < this.typewriterTexts[this.currentTextIndex].length) {
                    this.currentText += this.typewriterTexts[this.currentTextIndex].charAt(this.currentCharIndex);
                    this.currentCharIndex++;
                    this.updateTypewriterText();
                    setTimeout(typewriter, 100);
                } else {
                    setTimeout(() => {
                        this.currentText = '';
                        this.currentCharIndex = 0;
                        this.currentTextIndex = (this.currentTextIndex + 1) % this.typewriterTexts.length;
                        typewriter();
                    }, 2000);
                }
            };
            typewriter();
        },
        updateTypewriterText() {
            document.querySelector('.multiple-text').textContent = this.currentText;
        }
    }
});

// Fade effect on scroll
window.addEventListener('scroll', () => {
    const homeSection = document.querySelector('.home');
    const homeImage = document.querySelector('.home-img img');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        homeSection.classList.add('fade-out');
        homeImage.classList.add('fade-out');
    } else {
        homeSection.classList.remove('fade-out');
        homeImage.classList.remove('fade-out');
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Example of sending form data to a server using Fetch API
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/thank-you.html'; // Redirect to Thank You page
        } else {
            alert('Failed to send message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to send message.');
    });
});