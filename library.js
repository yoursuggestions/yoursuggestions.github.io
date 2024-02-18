var availablememes = 30;
var count = 1;
function library()
{
    setInterval(function(){
        document.getElementById("counter").innerHTML = count;
    },100)
}
function left()
{
count--;
if(count<1)
{
    count = availablememes;
}
checkif();
}    
function right()
{
count++;
if(count>availablememes)
{
    count = "1";
}
checkif();
}
function checkif() {
    const memes = ['<video src="https://shorturl.at/bkAG6" controls autoplay>', 
    '<video src="https://shorturl.at/fsBDS" controls autoplay>', 
    '<video src="https://shorturl.at/cepD5" controls autoplay>',
    '<video src="https://shorturl.at/kuCDQ" controls autoplay>',
    '<video src="https://shorturl.at/pOTY8" controls autoplay>',
    '<video src="https://shorturl.at/lBFU8" controls autoplay>',
    '<video src="https://shorturl.at/aefnK" controls autoplay>',
    '<video src="https://shorturl.at/nuFM2" controls autoplay>',
    '<video src="https://shorturl.at/ajEGJ" controls autoplay>',
    '<video src="https://shorturl.at/itNQ4" controls autoplay>',
    '<video src="https://shorturl.at/hlmD2" controls autoplay>',
    '<video src="https://shorturl.at/ltBRZ" controls autoplay>',
    '<video src="https://shorturl.at/uHVZ7" controls autoplay>',
    '<video src="https://shorturl.at/duvI4" controls autoplay>',
    '<video src="https://shorturl.at/ruvBL" controls autoplay>',
    '<video src="https://shorturl.at/csDLM" controls autoplay>',
    '<video src="https://shorturl.at/tCGN1" controls autoplay>',
    '<video src="https://shorturl.at/djqV0" controls autoplay>',
    '<video src="https://shorturl.at/oLY16" controls autoplay>',
    '<video src="https://shorturl.at/bFLQS" controls autoplay>',
    '<video src="https://shorturl.at/qIK35" controls autoplay>',
    '<video src="https://shorturl.at/bLOQ2" controls autoplay>',
    '<video src="https://shorturl.at/mEFPS" controls autoplay>',
    '<video src="https://shorturl.at/zLRS3" controls autoplay>',
    '<video src="https://shorturl.at/fszEV" controls autoplay>',
    '<video src="https://shorturl.at/agsF3" controls autoplay>',
    '<video src="https://shorturl.at/cwHV2" controls autoplay>',
    '<video src="https://shorturl.at/ehuNZ" controls autoplay>',
    '<video src="https://shorturl.at/puzHY" controls autoplay>',
    '<video src="https://shorturl.at/aHJPY" controls autoplay>'];
        document.getElementById("meme").innerHTML = memes[count - 1];
}
library();
