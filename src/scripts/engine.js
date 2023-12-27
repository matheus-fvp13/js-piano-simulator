const pianoKeys = document.querySelectorAll(".piano-keys__key");
const volumeSlider = document.querySelector(".volume-slider input");
const mapedKey = [];
const audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150)
}

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key))
    mapedKey.push(key.dataset.key);
});


document.addEventListener("keydown", (e) => {
    if(mapedKey.includes(e.key)) playTune(e.key);
});

volumeSlider.addEventListener("input", handleVolume);