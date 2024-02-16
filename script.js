let keyOrder = ['KeyU', 'KeyF', 'KeyO']; // The order of keys
let currentIndex = 0; // To keep track of the current index in the order

window.addEventListener('keydown', function(event) {
    if (event.code === keyOrder[currentIndex]) {
        currentIndex++;
        if (currentIndex === keyOrder.length) {
            call(); // Call the function when all keys are pressed in order
            currentIndex = 0; // Reset the index
        }
    } else {
        currentIndex = 0; // Reset the index if the wrong key is pressed
    }
});

function call() {
    console.log('Ufo appeared!');
    document.getElementById("ufo").innerHTML = "<img id='ufo' onclick='explode()' src='https://th.bing.com/th/id/R.87bae0a0608053f83685be73e174d49c?rik=NkcXSKw0noAaKw&riu=http%3a%2f%2fbestanimations.com%2fSci-Fi%2fUFOs%2fufo-flying-saucer-animated-gif-image-11.gif&ehk=qeRswpeRasdsXxDCsMQrzKnXbvF12wJD7TGyaq1OZ14%3d&risl=&pid=ImgRaw&r=0'>";
}
function explode()
{
    document.getElementById("ufo").innerHTML = "";
    console.log('Ufo has been destroyed!');
    setTimeout(function(){ 

        noexplode();
    }, 700);  
    document.getElementById("exp").innerHTML = "<img id='exp' src='https://media.tenor.com/j-ixpElDGOYAAAAi/explode-boom.gif'>";
    
}
function noexplode()
{
    document.getElementById("exp").innerHTML = "";
}

