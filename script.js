document.addEventListener('DOMContentLoaded', () => {



    // Smooth Scrolling

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            if (target) {

                target.scrollIntoView({

                    behavior: 'smooth',

                    block: 'start'

                });

            }

        });

    });



    // Active Link Highlighting on Scroll

    const sections = document.querySelectorAll('section, div[id]');

    const navLinks = document.querySelectorAll('.nav-link');



    window.addEventListener('scroll', () => {

        let current = '';

        sections.forEach(section => {

            const sectionTop = section.offsetTop;

            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - 200)) {

                current = section.getAttribute('id');

            }

        });



        navLinks.forEach(link => {

            link.classList.remove('active');

            if (link.getAttribute('href').includes(current)) {

                link.classList.add('active');

            }

        });

    });



    // Intersection Observer for Card Animations

    const observerOptions = {

        threshold: 0.1,

        rootMargin: "0px 0px -50px 0px"

    };



    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = '1';

                entry.target.style.transform = 'translateY(0)';

                observer.unobserve(entry.target);

            }

        });

    }, observerOptions);



    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {

        card.style.opacity = '0';

        card.style.transform = 'translateY(30px)';

        card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';

        // Stagger delay based on index

        // card.style.transitionDelay = `${index % 3 * 0.1}s`; 

        observer.observe(card);

    });



    // Hover effect for project cards (Parallax tilt)

    const projectCards = document.querySelectorAll('.project-card');



    projectCards.forEach(card => {

        card.addEventListener('mousemove', (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;



            card.style.setProperty('--x', `${x}px`);

            card.style.setProperty('--y', `${y}px`);

        });

    });

});

