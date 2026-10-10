/* =========================================
   START WEBSITE
========================================= */

function startWebsite() {

    const welcome =
        document.getElementById("welcome");

    welcome.classList.add("hide");

    setTimeout(() => {

        document.body.style.overflowY = "auto";

    }, 700);
}


/* =========================================
   FLOWERS
========================================= */

const flowers =
    document.querySelectorAll(".flower");

const jar =
    document.getElementById("jar");

const insideFlowers =
    document.getElementById("insideFlowers");

const flowerMessage =
    document.getElementById("flowerMessage");

const flowerMessageText =
    document.getElementById("flowerMessageText");


let collectedFlowers = 0;


/* Flower positions inside jar */

const jarPositions = [

    {
        left: 25,
        bottom: 20,
        rotate: -15
    },

    {
        left: 65,
        bottom: 25,
        rotate: 15
    },

    {
        left: 100,
        bottom: 15,
        rotate: -8
    },

    {
        left: 135,
        bottom: 30,
        rotate: 10
    },

    {
        left: 45,
        bottom: 55,
        rotate: -10
    },

    {
        left: 80,
        bottom: 60,
        rotate: 8
    },

    {
        left: 115,
        bottom: 65,
        rotate: -12
    },

    {
        left: 150,
        bottom: 55,
        rotate: 15
    }

];


/* =========================================
   FLOWER CLICK
========================================= */

flowers.forEach((flower, index) => {

    flower.addEventListener("click", function () {

        if (this.classList.contains("collected")) {
            return;
        }


        /* Get message */

        const message =
            this.dataset.message;


        /* Show flower note */

        flowerMessageText.textContent =
            message;

        flowerMessage.classList.add("show");


        /* Mark collected */

        this.classList.add("collected");


        /* Create flower inside jar */

        const insideFlower =
            document.createElement("div");

        insideFlower.classList.add(
            "inside-flower"
        );

        insideFlower.textContent =
            this.textContent.trim();


        /* Position */

        const position =
            jarPositions[collectedFlowers];


        insideFlower.style.left =
            position.left + "px";

        insideFlower.style.bottom =
            position.bottom + "px";

        insideFlower.style.transform =
            `rotate(${position.rotate}deg)`;


        insideFlowers.appendChild(
            insideFlower
        );


        /* Animate original flower */

        this.style.animation =
            "none";

        this.style.transform =
            "translateY(350px) scale(1.5) rotate(360deg)";

        this.style.opacity = "0";

        this.style.pointerEvents =
            "none";


        collectedFlowers++;


        /* Hide message */

        setTimeout(() => {

            flowerMessage.classList.remove(
                "show"
            );

        }, 2800);


        /* All flowers collected */

        if (collectedFlowers === flowers.length) {

            setTimeout(() => {

                showFlowerComplete();

            }, 1000);

        }

    });

});


/* =========================================
   ALL FLOWERS COMPLETE
========================================= */

function showFlowerComplete() {

    flowerMessageText.textContent =
        "You filled the jar with all your wishes and love. Now click the jar for your special surprise! 💕";

    flowerMessage.classList.add("show");


    setTimeout(() => {

        flowerMessage.classList.remove(
            "show"
        );

    }, 4000);
}


/* =========================================
   JAR CLICK
========================================= */

jar.addEventListener("click", function () {

    openNote();

});


/* =========================================
   NOTE
========================================= */

const noteOverlay =
    document.getElementById("noteOverlay");

const closeNote =
    document.getElementById("closeNote");


function openNote() {

    noteOverlay.classList.add("show");

}


closeNote.addEventListener(
    "click",
    function () {

        noteOverlay.classList.remove(
            "show"
        );

    }
);


/* Click outside note */

noteOverlay.addEventListener(
    "click",
    function (event) {

        if (
            event.target === noteOverlay
        ) {

            noteOverlay.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================
   FINAL GIFT
========================================= */

const giftButton =
    document.getElementById("giftButton");

const finalMessage =
    document.getElementById("finalMessage");


giftButton.addEventListener(
    "click",
    function () {

        finalMessage.classList.add(
            "show"
        );


        createConfetti();


        /* Scroll to final message */

        setTimeout(() => {

            finalMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 300);

    }
);


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const symbols = [
        "🎉",
        "🎊",
        "💕",
        "✨",
        "🌸",
        "💖",
        "⭐"
    ];


    for (let i = 0; i < 60; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add(
            "confetti"
        );


        confetti.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.animationDuration =
            (2 + Math.random() * 3) + "s";


        confetti.style.fontSize =
            (15 + Math.random() * 20) + "px";


        document.body.appendChild(
            confetti
        );

    


        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}



/* =========================================
   ESC KEY - CLOSE NOTE
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            noteOverlay.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================
   GIFT QUESTION
========================================= */

function giftYes() {

    document.getElementById("giftAnswer").innerHTML =
        "🎁✨ Surprise! 💖<br><br>i am your gift!😜😚😍🎉";

}


function giftNo() {

    document.getElementById("giftAnswer").innerHTML =
        "😢💔 Awww... Gift வேண்டாமா? 🥺";

}
/* =========================================
   PHOTO PUZZLE
========================================= */

const puzzleBoard = document.getElementById("puzzleBoard");
const puzzleMessage = document.getElementById("puzzleMessage");
const shufflePuzzle = document.getElementById("shufflePuzzle");
const puzzleSection = document.getElementById("photoPuzzle");

let puzzlePieces = [];
let selectedPiece = null;
let puzzleCompleted = false;


// Create the 9 pieces
function createPuzzle() {

    puzzleBoard.innerHTML = "";
    puzzlePieces = [];
    selectedPiece = null;
    puzzleCompleted = false;

    puzzleSection.classList.remove("completed");

    puzzleMessage.textContent =
        "💖 Complete our photo to unlock your surprise!";

    for (let i = 0; i < 9; i++) {

        const piece = document.createElement("button");

        piece.type = "button";
        piece.className = "puzzle-piece";

        // Store the original position
        piece.dataset.correct = i;

        const row = Math.floor(i / 3);
        const column = i % 3;

        // Display the correct part of the photo
        piece.style.backgroundPosition =
            `${column * 50}% ${row * 50}%`;

        piece.setAttribute("aria-label", `Puzzle piece ${i + 1}`);

        piece.addEventListener("click", function () {
            selectPuzzlePiece(piece);
        });

        puzzlePieces.push(piece);
    }

    // Shuffle the pieces
    shufflePieces();

    // Add shuffled pieces to the board
    puzzlePieces.forEach(piece => {
        puzzleBoard.appendChild(piece);
    });
}


// Shuffle the puzzle pieces
function shufflePieces() {

    // Fisher-Yates shuffle
    for (let i = puzzlePieces.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [puzzlePieces[i], puzzlePieces[j]] =
            [puzzlePieces[j], puzzlePieces[i]];
    }

    // Avoid starting with the solved puzzle
    if (
        puzzlePieces.every(
            (piece, index) =>
                Number(piece.dataset.correct) === index
        )
    ) {
        [puzzlePieces[0], puzzlePieces[1]] =
            [puzzlePieces[1], puzzlePieces[0]];
    }
}


// Select and swap two pieces
function selectPuzzlePiece(piece) {

    if (puzzleCompleted) return;

    if (selectedPiece === null) {

        selectedPiece = piece;
        piece.classList.add("selected");

        puzzleMessage.textContent =
            "💗 Now click another piece to swap!";

        return;
    }

    if (selectedPiece === piece) {

        piece.classList.remove("selected");
        selectedPiece = null;

        puzzleMessage.textContent =
            "Choose a puzzle piece! 🧩";

        return;
    }

    // Swap their original positions
    const firstCorrect = selectedPiece.dataset.correct;
    const secondCorrect = piece.dataset.correct;

    selectedPiece.dataset.correct = secondCorrect;
    piece.dataset.correct = firstCorrect;

    // Swap their photo sections
    const firstPosition = selectedPiece.style.backgroundPosition;

    selectedPiece.style.backgroundPosition =
        piece.style.backgroundPosition;

    piece.style.backgroundPosition = firstPosition;

    selectedPiece.classList.remove("selected");
    selectedPiece = null;

    checkPuzzle();
}


// Check whether the puzzle is complete
function checkPuzzle() {

    const allPieces =
        puzzleBoard.querySelectorAll(".puzzle-piece");

    let correct = true;

    allPieces.forEach((piece, index) => {

        if (Number(piece.dataset.correct) !== index) {
            correct = false;
        }
    });

    if (correct) {

        puzzleCompleted = true;

        puzzleSection.classList.add("completed");

        puzzleMessage.innerHTML =
            "🎉 You did it! ❤️<br>" +
            "Our beautiful memory is complete! 💖✨";

        createConfetti();

    } else {

        puzzleMessage.textContent =
            "Almost there! Keep going! 🧩💕";
    }
}


// Mix Again button
shufflePuzzle.addEventListener("click", function () {

    createPuzzle();

});


// Start the puzzle
createPuzzle();
