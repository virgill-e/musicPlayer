let sounds =
    new Array(new Audio("../musique/Bryson Tiller Type Beat - I'm too young to be this hurt (PROD. Yusei x Seph).mp3"),
        new Audio("../musique/Lo-fi Type Beat - Blue Moon.mp3"),
        new Audio("../musique/Lo-fi Type Beat - Fall Apart.mp3"),
        new Audio("../musique/Lo-fi Type Beat - Forever Love.mp3"),
        new Audio("../musique/Lo-fi Type Beat - I Need a Girl.mp3"),
        new Audio("../musique/Lo-fi Type Beat - It's You.mp3"),
        new Audio("../musique/Lo-fi type beat - Lighter # lofi hiphop beat.mp3"),
        new Audio("../musique/Lo-fi Type Beat - No Love.mp3"),
        new Audio("../musique/Lo-fi Type Beat - Rain.mp3"),
        new Audio("../musique/Lo-fi Type Beat - Sweet Dreams.mp3"),
        new Audio("../musique/Lo-fi Type Beat - Tonight.mp3"));

let current = random(0);
let paused = true;

console.log(current);

// set event handlers on all audio objects
for (let s of sounds) {
    s.addEventListener('ended', ended);
}

updateVolume()

// handle button click
function playPause() {
    titre.innerText = decodeURI(sounds[current].src.substring(25).replace(".mp3","").replace("%20"," "));
    if (paused) {
        sounds[current].play();
        btn.innerText = 'pause';
        paused = false;

    } else {
        sounds[current].pause();
        btn.innerText = 'play';
        paused = true;
    }
}


// handle button skip
function skip() {
    if(!paused) playPause();
    current = (current + 1) % sounds.length;
    playPause();
    console.log(current);
}

function ended(e) {
    /*i++;
    if (i >= sounds.length) //loop
      i = 0;
    */
    current = random(current); // shuffle

    paused = true;
    playPause();
}


function random(i) {
    let next = i;
    while (next == i)
        next = Math.floor(Math.random() * sounds.length);
    return next;
}

function updateVolume() {
    for (let s of sounds) {
        s.volume = volume.value;
    }
}
