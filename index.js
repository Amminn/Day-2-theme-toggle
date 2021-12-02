document.writeln("<script type='text/javascript' src='confetti.js'></script>");
const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")

const start = () => {
    setTimeout(function() {
        confetti.start()
    }, 1000) // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
}

const stop = () => {
    setTimeout(function() {
        confetti.stop()
    }, 5000) // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
}

christmasBtn.addEventListener('click', function() {
    if(christmasBtn.checked) {
        console.log('christmasBtn is on')
        body.classList.remove('snow')
        start();
        stop();
    }
})

snowBtn.addEventListener('click', function() {
    if(snowBtn.checked) {
        console.log('snowBtn is on')
        body.classList.add('snow')
    }
})


// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.