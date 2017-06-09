window.onload = () => {
    const noAudioFilename = "no.ogg";
    const noAudio = new Howl({
        src: [noAudioFilename]
    });
    noAudio.volume = 0.5;
    const noP = document.getElementById("no-p");
    const noButton = document.getElementById("no-button");

    const originalPText = "No";
    const appendPText = "o";

    let buttonActive = false;

    noButton.addEventListener("mousedown", (e) => {
        buttonActive = true;
    });
    noButton.addEventListener("touchstart", (e) => {
        buttonActive = true;
    });

    noButton.addEventListener("mouseup", (e) => {
        buttonActive = false;
    });
    noButton.addEventListener("touchend", (e) => {
        buttonActive = false;
    });
    noButton.addEventListener("mouseleave", (e) => {
        buttonActive = false;
    });

    const interval = 100;
    setInterval(() => {
        if(buttonActive) {
            activated();
        }
        else {
            deactivated();
        }
    }, interval);

    function activated() {
        console.log("AAA");
        if(!noAudio.playing()) {
            noAudio.play();
        }
        noP.innerHTML += appendPText;
    }
    function deactivated() {
        noAudio.stop();
        if(noP.innerHTML !== originalPText) {
            noP.innerHTML = noP.innerHTML.slice(0, noP.innerHTML.length-1);
        }
    }
};