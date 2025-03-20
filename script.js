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
            { id: 1, image: 'assets/project1.png', title: 'Project 1', description: 'Description of project 1. This project involves...' },
            { id: 2, image: 'assets/project2.png', title: 'Project 2', description: 'Description of project 2. This project involves...' },
            { id: 3, image: 'assets/project3.png', title: 'Project 3', description: 'Description of project 3. This project involves...' },
            { id: 4, image: 'assets/project4.png', title: 'Project 4', description: 'Description of project 4. This project involves...' },
            { id: 5, image: 'assets/project5.png', title: 'Project 5', description: 'Description of project 5. This project involves...' },
            { id: 6, image: 'assets/project6.png', title: 'Project 6', description: 'Description of project 6. This project involves...' },
            { id: 7, image: 'assets/project7.png', title: 'Project 7', description: 'Description of project 7. This project involves...' }
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
            { id: 1, image: 'assets/certificate1.png', title: 'Certificate 1', organization: 'Organization 1', link: 'https://example.com/certificate1' },
            { id: 2, image: 'assets/certificate2.png', title: 'Certificate 2', organization: 'Organization 2', link: 'https://example.com/certificate2' },
            { id: 3, image: 'assets/certificate3.png', title: 'Certificate 3', organization: 'Organization 3', link: 'https://example.com/certificate3' },
            { id: 4, image: 'assets/certificate4.png', title: 'Certificate 4', organization: 'Organization 4', link: 'https://example.com/certificate4' },
            { id: 5, image: 'assets/certificate5.png', title: 'Certificate 5', organization: 'Organization 5', link: 'https://example.com/certificate5' }
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
        typewriterTexts: ['Adaptable Analytical Thinker', 'Web Developer', 'Project Manager'],
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