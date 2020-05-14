function play(letter, thing){
    speak("Letter " + letter);
    speak(thing)  
}

function speak(text){
    let synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(text);
    utterThis.rate = 0.7;
    synth.speak(utterThis);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});