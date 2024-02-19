function generate()
{
    var div = "";

    for(i=1;i<=400;i++)
    {
        div += '<div class="tile">'+[i]+'</div>';
        if((i+0) % 24 == 0) div += '<div style="clear: both;"></div>'
    }
    document.getElementById("place").innerHTML = div;
    PatternGenerate();
}
function generate2()
{
    var div = "";

    for(i=1;i<=400;i++)
    {
        div += '<div class="tile">'+[i]+'</div>';
        if((i+0) % 24 == 0) div += '<div style="clear: both;"></div>'
    }
    document.getElementById("place").innerHTML = div;
    PatternGenerate2();
}
function PatternGenerate()
{
        var div = "";
        var random = getRandomInt(12);
        var random2 = getRandomInt(8);
        for(i=1;i<401;i++)
        {
             if((i + Math.floor(i/random)) % random2 === 0)
             {
                div += '<div class="tile2">'+ [i] + '</div>';
             }
             else
             {
                div += '<div class="tile">'+ [i] + '</div>';
             }
        }
        document.getElementById("place").innerHTML = div;

}
function PatternGenerate2()
{
    setInterval(function()
    {
        var div = "";
        var random = getRandomInt(12);
        var random2 = getRandomInt(5);
        for(i=1;i<401;i++)
        {
             if((i + Math.floor(i/random)) % random2 === 0)
             {
                div += '<div class="tile2">'+ [i] + '</div>';
             }
             else
             {
                div += '<div class="tile">'+ [i] + '</div>';
             }
        }
        document.getElementById("place").innerHTML = div;
    },100)

}
function getRandomInt(max) {
    const random = Math.random() * max + 2;
    return Math.round(random);
 }
 function nogenerate()
 {
    window.location.replace("")
 }