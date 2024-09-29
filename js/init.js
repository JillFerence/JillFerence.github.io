document.addEventListener("DOMContentLoaded", function() {

    /* ============================================= */
    /* PROJECTS MODALS */
    /* ============================================= */

    // Event listener for image to trigger the modal
    document.querySelectorAll(".project-modal-trigger1, .project-modal-trigger2, .project-modal-trigger3, .project-modal-trigger4, .project-modal-trigger5, .project-modal-trigger6").forEach(function(img) {
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
});