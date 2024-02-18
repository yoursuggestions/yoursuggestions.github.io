let keyOrder = ['KeyU', 'KeyF', 'KeyO']; // The order of keys
let currentIndex = 0; // To keep track of the current index in the order

window.addEventListener('keydown', function(event) {
    if (event.code === keyOrder[currentIndex]) {
        currentIndex++;
        if (currentIndex === keyOrder.length) {
            call(); // Call the function when all keys are pressed in order
        }
    } else {
        currentIndex = 0; // Reset the index if the wrong key is pressed
    }
});

function call() {
    console.log('Ufo appeared!');
    document.getElementById("ufo").innerHTML = "<img id='ufo' onclick='explode()' src='R.gif'>";
    document.getElementById('mySound').play();
}
function explode()
{
    document.getElementById("ufo").innerHTML = "";
    console.log('Ufo has been destroyed!');
    setTimeout(function(){ 

        noexplode();
    }, 700);  
    document.getElementById("exp").innerHTML = "<img id='exp' src='explode-boom.gif'>";
    document.getElementById('mySound2').play();
}
function noexplode()
{
    document.getElementById("exp").innerHTML = "";
}

