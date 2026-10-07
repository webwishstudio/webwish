/* ================= MOBILE MENU ================= */

function toggleMenu() {

    var nav = document.getElementById("navMenu");

    nav.classList.toggle("show");

}


/* Close mobile menu after clicking a link */

var navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navMenu")
            .classList.remove("show");

    });

});



/* ================= FAQ ================= */

function toggleFAQ(number) {

    var items = document.querySelectorAll(".faq-item");

    items[number].classList.toggle("active");

}