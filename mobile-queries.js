const mobileQueries = `
/* Media Queries for Mobile Devices */
@media (max-width: 768px) {
    .header {
        padding: 1rem 5%;
    }

    .logo {
        font-size: 2rem;
    }

    .navbar a {
        font-size: 1.6rem;
        margin-left: 2rem;
    }

    #menu-icon {
        display: block;
    }

    .navbar {
        display: none;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: var(--main-color);
        z-index: 1000;
    }

    .navbar.active {
        display: flex;
    }

    .home-content h1 {
        font-size: 4rem; /* Adjusted for mobile */
    }

    .home-content p {
        font-size: 1.8rem; /* Adjusted for mobile */
    }

    .home-content h3 {
        font-size: 1.8rem; /* Adjusted for mobile */
    }

    .home-content a {
        font-size: 1.8rem; /* Adjusted for mobile */
        padding: 0.8rem 1.6rem;
    }

    .home-img img {
        width: 30vw; /* Adjusted for mobile */
    }

    .about {
        flex-direction: column;
        padding: 5rem 5%;
    }

    .about-img img {
        width: 80vw; /* Adjusted for mobile */
        margin-bottom: 2rem;
    }

    .projects .heading,
    .certificates .heading,
    .contact .heading {
        font-size: 3rem; /* Adjusted for mobile */
    }

    .project,
    .certificate {
        width: 80%; /* Adjusted for mobile */
        margin: 0 auto 2rem;
    }

    .contact form {
        width: 100%;
        padding: 0 5%;
    }

    .input-box input,
    .input-box textarea {
        font-size: 1.4rem; /* Adjusted for mobile */
    }

    .input-box label {
        font-size: 1.4rem; /* Adjusted for mobile */
    }

    .info {
        padding: 0 5%;
    }

    .info h3 {
        font-size: 2rem; /* Adjusted for mobile */
    }

    .info p {
        font-size: 1.4rem; /* Adjusted for mobile */
    }

    .social-media a {
        font-size: 2rem; /* Adjusted for mobile */
    }
}
`;

console.log(mobileQueries);