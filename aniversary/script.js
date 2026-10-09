/* HEART + STORY */

function openStory() {

    var heart = document.getElementById("bigHeart");

    heart.classList.remove("burst");

    void heart.offsetWidth;

    heart.classList.add("burst");

    setTimeout(function() {

        var hero = document.querySelector(".hero");
        var nextSection = hero.nextElementSibling;

        nextSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 800);
}


/* MUSIC */

function toggleMusic() {

    var music = document.getElementById("music");

    if (music.paused) {

        music.play();

    } else {

        music.pause();

    }
}


/* COUNTDOWN */

/*
   Change this date for client's anniversary date
*/

var anniversaryDate = new Date("February 14, 2027 00:00:00").getTime();


function updateCountdown() {

    var now = new Date().getTime();

    var distance = anniversaryDate - now;


    if (distance <= 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;
    }


    var days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    var minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    var seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");
}


setInterval(updateCountdown, 1000);

updateCountdown();
