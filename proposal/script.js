/* =========================
   HEART → PROPOSAL
========================= */

function startProposal() {

    var heart = document.getElementById("heroHeart");

    heart.classList.remove("burst");

    void heart.offsetWidth;

    heart.classList.add("burst");


    setTimeout(function() {

        var story = document.querySelector(".story");

        story.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 850);
}


/* =========================
   MUSIC
========================= */

function toggleMusic() {

    var music = document.getElementById("music");

    var button = document.querySelector(".music-btn");


    if (music.paused) {

        music.play();

        button.innerHTML = "🔊";

    } else {

        music.pause();

        button.innerHTML = "♫";

    }
}


/* =========================
   TYPING EFFECT
========================= */

var text =
    "I don't know when it happened... but somewhere along the way, my heart started choosing you.";

var index = 0;


function typeMessage() {

    if (index < text.length) {

        document.getElementById("typingText").innerHTML +=
            text.charAt(index);

        index++;

        setTimeout(typeMessage, 55);
    }
}


var typingSection =
    document.querySelector(".typing-section");


var typingStarted = false;


window.addEventListener("scroll", function() {

    var position =
        typingSection.getBoundingClientRect().top;

    if (
        position < window.innerHeight - 100 &&
        !typingStarted
    ) {

        typingStarted = true;

        typeMessage();
    }

});


/* =========================
   NO BUTTON
========================= */

var noButton =
    document.getElementById("noBtn");


noButton.addEventListener("mouseover", function() {

    var x =
        Math.random() * 180 - 90;

    var y =
        Math.random() * 100 - 50;

    noButton.style.transform =
        "translate(" + x + "px," + y + "px)";

});


/* =========================
   YES
========================= */

function sayYes() {

    var yesSection =
        document.getElementById("yesSection");


    yesSection.classList.add("show");


    yesSection.scrollIntoView({
        behavior: "smooth"
    });


    createConfetti();
}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    for (var i = 0; i < 80; i++) {

        var heart =
            document.createElement("div");

        heart.innerHTML = "♥";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.top = "-20px";

        heart.style.fontSize =
            Math.random() * 20 + 10 + "px";

        heart.style.color =
            "hsl(" +
            Math.random() * 360 +
            ", 80%, 70%)";

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";


        document.body.appendChild(heart);


        var duration =
            Math.random() * 3 + 2;


        heart.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        "translateY(110vh) rotate(720deg)",
                    opacity: 0
                }
            ],
            {
                duration:
                    duration * 1000,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"
            }
        );


        setTimeout(function() {

            heart.remove();

        }, duration * 1000);

    }
}


/* =========================
   FLOATING HEARTS
========================= */

function createFloatingHeart() {

    var heart =
        document.createElement("div");

    heart.innerHTML = "♥";

    heart.style.position = "fixed";

    heart.style.bottom = "-30px";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 15 + 10 + "px";

    heart.style.color = "#ff6685";

    heart.style.opacity = ".4";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "1";


    document.body.appendChild(heart);


    heart.animate(
        [
            {
                transform: "translateY(0)",
                opacity: 0
            },

            {
                transform:
                    "translateY(-110vh)",
                opacity: .5
            },

            {
                transform:
                    "translateY(-120vh)",
                opacity: 0
            }
        ],
        {
            duration:
                Math.random() * 5000 + 5000
        }
    );


    setTimeout(function() {

        heart.remove();

    }, 10000);

}


setInterval(createFloatingHeart, 800);
