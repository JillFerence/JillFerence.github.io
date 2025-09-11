document.addEventListener("DOMContentLoaded", function() {

    /* ============================================= */
    /* NAVIGATION BAR */
    /* ============================================= */

    // Hide navigation bar when scrolling through the home page 
    const navigationBar = document.querySelector('#navigation');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navigationBar.classList.add('navigation-home');
        }
        else {
            navigationBar.classList.remove('navigation-home'); 
        }
    });

    // Show the new navigation bar when scrolling past the home page 
    const aboutSection = document.querySelector('#about');
    const aboutSectionTop = aboutSection.offsetTop;
    const navHeight = navigationBar.offsetHeight;
    window.addEventListener('scroll', () => {
        if (window.scrollY >= aboutSectionTop - navHeight) {
            navigationBar.classList.remove('navigation-home'); 
            navigationBar.classList.add('navigation-scrolled');
        }
        else {
            navigationBar.classList.remove('navigation-scrolled'); 
        }
    });

    // Navigation bar menu for smaller devices
    const hamburger = document.getElementById('nav-menu');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('close-sidebar');

    hamburger.addEventListener('click', () => {
        sidebar.style.right = '0'; // Open sidebar from the right
    });

    closeSidebar.addEventListener('click', () => {
        sidebar.style.right = '-250px'; // Close sidebar to the right
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', (event) => {
        if (sidebar.style.right == '0' && !sidebar.contains(event.target) && event.target !== hamburger) {
            sidebar.style.right = '-250px'; // Slide out if clicking outside
        }
    });

    /* ============================================= */
    /* ABOUT TYPEWRITER */
    /* ============================================= */

    var texts = [
        "Software Engineer...",
        "Innovating in Machine Learning and Computer Vision...",
        "Former Chemist..."
    ];

    var i = 0; // Char index
    var j = 0; // Text index 
    var speed = 75; // Typing speed (ms)

    function typeWriter() {
        if (j < texts.length) {
            if (i < texts[j].length) {
                document.getElementById("typewriter").innerHTML += texts[j].charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } 
            else {
                // Add a break after each line and move on to the next
                document.getElementById("typewriter").innerHTML += "<br><br>";
                i = 0;
                j++;
                setTimeout(typeWriter, 600); // Pause
            }
        } 
    }

    // Begins typewriting only when you are in the about section
    var started = false;
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                started = true;
                typeWriter();
                observer.disconnect(); 
            }
        });
    }, { threshold: 0.3 }); 

    var aboutSectionTypeWriter = document.getElementById("about");

    if (aboutSectionTypeWriter) {
        observer.observe(aboutSectionTypeWriter);
    }

    /* ============================================= */
    /* PROJECTS MODALS */
    /* ============================================= */

    // Event listener for image to trigger the modal
    document.querySelectorAll(".project-modal-trigger1, .project-modal-trigger2, .project-modal-trigger3, .project-modal-trigger4, .project-modal-trigger5, .project-modal-trigger6, .project-modal-trigger7").forEach(function(img) {
        img.addEventListener("click", function() {
            const triggerClass = img.classList[0];
            let modalID;

            // Assigns modal ID based on which trigger is clicked
            switch (triggerClass) {
                case "project-modal-trigger1":
                    modalID = "project-modal1";
                    break;
                case "project-modal-trigger2":
                    modalID = "project-modal2";
                    break;
                case "project-modal-trigger3":
                    modalID = "project-modal3";
                    break;
                case "project-modal-trigger4":
                    modalID = "project-modal4";
                    break;
                case "project-modal-trigger5":
                    modalID = "project-modal5";
                    break;
                case "project-modal-trigger6":
                    modalID = "project-modal6";
                    break;
                case "project-modal-trigger7":
                    modalID = "project-modal7";
                    break;
            }
        
            // Get the corresponding model
            var modal = document.getElementById(modalID);
            modal.style.display = "block";

            // Get the close button that closes the modal
            var closeButton = modal.querySelector(".close");

            // Close the modal when click on the close button
            closeButton.onclick = function() {
                modal.style.display = "none";
            }

            // Close the modal when clicking anywhere outside of the modal
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        });
    });

    /* ============================================= */
    /* PARTICLES */
    /* ============================================= */

    /// Create particle effect at mouse
    const particlesContainer = document.getElementById('particles-container');

    document.addEventListener('mousemove', (e) => {
        // Mouse position as %
        const mouseX = (e.clientX / window.innerWidth) * 100;
        const mouseY = (e.clientY / window.innerHeight) * 100;

        // Create a particle
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random small size
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Place at mouse
        particle.style.left = `${mouseX}%`;
        particle.style.top = `${mouseY}%`;
        particle.style.opacity = '0.6';

        particlesContainer.appendChild(particle);

        // Animate outward + fade
        setTimeout(() => {
            particle.style.transition = 'all 2s ease-out';
            particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
            particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
            particle.style.opacity = '0';

            // Remove after animation
            setTimeout(() => {
                particle.remove();
            }, 2000);
        }, 10);
    });


});