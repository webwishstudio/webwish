/* ================= BEGIN ================= */

function beginCeremony() {

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


/* ================= NAME REVEAL ================= */

function revealName() {

    var cover =
        document.getElementById("nameCover");

    var name =
        document.getElementById("babyName");


    cover.style.display = "none";

    name.classList.add("show");

}


/* ================= TYPING ================= */

var message =
    "You are the tiniest little person who has made the biggest place in our hearts. We cannot wait to celebrate your beautiful beginning with everyone we love.";

var index = 0;

var typingStarted = false;

var messageSection =
    document.querySelector(".message");


function typeMessage() {

    if (index < message.length) {

        document.getElementById(
            "typingText"
        ).innerHTML +=
            message.charAt(index);

        index++;

        setTimeout(
            typeMessage,
            45
        );

    }

}


window.addEventListener(
    "scroll",
    function() {

        var position =
            messageSection.getBoundingClientRect().top;


        if (
            position <
            window.innerHeight - 100 &&
            !typingStarted
        ) {

            typingStarted = true;

            typeMessage();

        }

    }
);


/* ================= COUNTDOWN ================= */

var ceremonyDate =
    new Date(
        "November 15, 2026 10:00:00"
    ).getTime();


function updateCountdown() {

    var now =
        new Date().getTime();

    var difference =
        ceremonyDate - now;


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
            "inviteMessage"
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


/* ================= VENUE ================= */

function showVenue() {

    var venue =
        document.getElementById("venue");

    venue.scrollIntoView({
        behavior: "smooth"
    });

}
