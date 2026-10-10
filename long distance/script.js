/* BEGIN JOURNEY */

function beginJourney() {

    var distance =
        document.querySelector(".distance");

    distance.scrollIntoView({
        behavior: "smooth"
    });

}


/* MUSIC */

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


/* TWO CLOCKS */

function updateClocks() {

    var now =
        new Date();


    var chennai =
        now.toLocaleTimeString(
            "en-IN",
            {
                timeZone: "Asia/Kolkata",
                hour12: true
            }
        );


    var dubai =
        now.toLocaleTimeString(
            "en-IN",
            {
                timeZone: "Asia/Dubai",
                hour12: true
            }
        );


    document.getElementById("timeOne").innerHTML =
        chennai;


    document.getElementById("timeTwo").innerHTML =
        dubai;

}


setInterval(updateClocks, 1000);

updateClocks();


/* TYPING MESSAGE */

var message =
    "No matter how many miles stand between us, you are still the closest person to my heart.";

var index = 0;

var typingStarted = false;

var messageSection =
    document.querySelector(".message-section");


function typeMessage() {

    if (index < message.length) {

        document.getElementById("typingText").innerHTML +=
            message.charAt(index);

        index++;

        setTimeout(
            typeMessage,
            55
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


/* VIRTUAL HUG */

function sendHug() {

    var button =
        document.querySelector(".hug button");

    button.innerHTML =
        "Hug sent across the miles ❤️";

    button.style.transform =
        "scale(1.08)";


    for (var i = 0; i < 25; i++) {

        createHeart();

    }

}


function createHeart() {

    var heart =
        document.createElement("div");

    heart.innerHTML = "♥";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.bottom =
        "0px";

    heart.style.color =
        "#70c8e8";

    heart.style.fontSize =
        Math.random() * 20 + 10 + "px";

    heart.style.zIndex =
        "9999";

    heart.style.pointerEvents =
        "none";


    document.body.appendChild(heart);


    heart.animate(
        [
            {
                transform:
                    "translateY(0)",
                opacity: 1
            },

            {
                transform:
                    "translateY(-100vh)",
                opacity: 0
            }
        ],
        {
            duration:
                Math.random() * 3000 + 2500
        }
    );


    setTimeout(
        function() {
            heart.remove();
        },
        5500
    );

}


/* COUNTDOWN */

var meetingDate =
    new Date(
        "December 25, 2026 18:00:00"
    ).getTime();


function updateCountdown() {

    var now =
        new Date().getTime();


    var difference =
        meetingDate - now;


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
        days;

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
