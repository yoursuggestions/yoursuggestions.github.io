let keyOrder2 = ['KeyD']; // The order of keys
let currentIndex2 = 0; // To keep track of the current index in the order

window.addEventListener('keydown', function(event) {
    if (event.code === keyOrder2[currentIndex2]) {
        currentIndex2++;
        if (currentIndex2 === keyOrder2.length) {
            call2(); // Call the function when all keys are pressed in order
            currentIndex2 = 0; // Reset the index
        }
    } else {
        currentIndex2 = 0; // Reset the index if the wrong key is pressed
    }
});
function call2()
{
    document.getElementById('donate').innerHTML = "<iframe width='800' height='500' src='https://widgets.tipply.pl/TIPS_GOAL/4650ceba-11f2-4069-991b-8cc8aa358009/GOAL/d40cca04-9311-442d-921e-39fe38041898' title='Donation Goal' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><a href='https://tipply.pl/@usterkowydeveloper' id='nopattern'><div id='tipbutton' class='icon-money'>Donate</div></a>";
}