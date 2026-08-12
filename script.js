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

/* =========================================
BGM PLAYER
========================================= */

const bgm = document.getElementById("bgm");
const bgmButton = document.getElementById("bgmButton");

// Set BGM volume
bgm.volume = 0.10;

function toggleBGM(event) {

    event.preventDefault();
    event.stopPropagation();

    if (bgm.paused) {

        bgm.play()
            .then(() => {
                bgmButton.textContent = "❚❚";
            })
            .catch((error) => {
                console.error("BGM could not play:", error);
            });

    } else {

        bgm.pause();
        bgmButton.textContent = "▶";

    }
}

// Try to autoplay the BGM
window.addEventListener("load", () => {

    bgm.play()
        .then(() => {
            bgmButton.textContent = "❚❚";
        })
        .catch(() => {
            console.log("Autoplay was blocked. Click the BGM button to start.");
        });

});

/* =========================================
   SMALL MESSAGE
========================================= */

function showMessage(message) {

    alert(message);

}

/*==========================================
   DISCORD LINK MESSAGE
========================================= */

function copyDiscord(event) {
    event.preventDefault();

    navigator.clipboard.writeText("Alxcii_e");

    alert("Discord username copied! ♡");
}