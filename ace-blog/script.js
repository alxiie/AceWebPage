/* =========================================
   ANONYMOUS MESSAGE
========================================= */

function sendAnonymousMessage() {

    const message =
        document.getElementById("anonymousMessage").value.trim();

    if (message === "") {

        alert("Write something first! 🌸");

        return;
    }

    alert(
        "Your anonymous message has been sent! 💌\n\n" +
        "Message:\n" +
        message
    );

    document.getElementById("anonymousMessage").value = "";
}


/* =========================================
   UNDO
========================================= */

function undoMessage() {

    const textarea =
        document.getElementById("anonymousMessage");

    textarea.value = "";

    textarea.focus();
}


/* =========================================
   TEXT COLOR
========================================= */

function changeColor() {

    const textarea =
        document.getElementById("anonymousMessage");

    const colors = [
        "#705849",
        "#9b5d73",
        "#805b4b",
        "#6b6b8d",
        "#806050"
    ];

    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    textarea.style.color = randomColor;
}


/* =========================================
   TEXT SIZE
========================================= */

const slider =
    document.getElementById("sizeSlider");

slider.addEventListener("input", function () {

    const size =
        12 + (this.value / 100) * 10;

    document.getElementById(
        "anonymousMessage"
    ).style.fontSize = size + "px";

});


/* =========================================
   MUSIC PLAYER
========================================= */

let playing = false;


function toggleMusic() {

    playing = !playing;

    const button =
        document.getElementById("playButton");

    if (playing) {

        button.textContent = "❚❚";

    } else {

        button.textContent = "▶";

    }
}


function previousSong(event) {

    event.stopPropagation();

    alert("Previous song 🎵");
}


function nextSong(event) {

    event.stopPropagation();

    alert("Next song 🎵");
}


/* =========================================
   SMALL MESSAGE
========================================= */

function showMessage(message) {

    alert(message);

}