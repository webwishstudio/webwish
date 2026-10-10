/* ================= ENTER WEDDING ================= */

function enterWedding() {

    var hero =
        document.querySelector(".hero");

    hero.scrollIntoView({
        behavior: "smooth"
    });

}


/* ================= MUSIC ================= */

function toggleMusic() {

    var music =
        document.getElementById("music");

    var button =
        document.querySelector(".music-btn");


    if (music.paused) {

        music.play();

        button.innerHTML = "🔊";

    } else {

        music.pause();

        button.innerHTML = "♫";

    }

}


/* ================= COUNTDOWN ================= */

/* Change this date for every client */

var weddingDate =
    new Date(
        "December 24, 2026 09:00:00"
    ).getTime();


function updateCountdown() {

    var now =
        new Date().getTime();

    var difference =
        weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days").innerHTML = "00";

        document.getElementById("hours").innerHTML = "00";

        document.getElementById("minutes").innerHTML = "00";

        document.getElementById("seconds").innerHTML = "00";

        return;

    }


    var days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    var hours =
        Math.floor(
            (difference %
            (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    var minutes =
        Math.floor(
            (difference %
            (1000 * 60 * 60)) /
            (1000 * 60)
        );


    var seconds =
        Math.floor(
            (difference %
            (1000 * 60)) /
            1000
        );


    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");


    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");

}


setInterval(
    updateCountdown,
    1000
);

updateCountdown();


/* ================= INVITATION ================= */

function openInvitation() {

    var message =
        document.getElementById(
            "invitationMessage"
        );


    message.classList.add("show");


    setTimeout(
        function() {

            message.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        },
        300
    );

}


/* ================= LOCATION ================= */

function showLocation() {

    var location =
        document.getElementById("location");

    location.scrollIntoView({
        behavior: "smooth"
    });

}


/* ================= SCROLL REVEAL ================= */

var sections =
    document.querySelectorAll(
        ".story-container, .timeline-item, .event-card, .person-card, .gallery-item"
    );


function revealOnScroll() {

    for (
        var i = 0;
        i < sections.length;
        i++
    ) {

        var position =
            sections[i].getBoundingClientRect().top;


        if (
            position <
            window.innerHeight - 80
        ) {

            sections[i].style.opacity = "1";

            sections[i].style.transform =
                "translateY(0)";

        }

    }

}


for (
    var i = 0;
    i < sections.length;
    i++
) {

    sections[i].style.opacity = "0";

    sections[i].style.transform =
        "translateY(40px)";

    sections[i].style.transition =
        "all 0.9s ease";

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();
