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
    const memes = [
    'https://shorturl.at/bkAG6', 
    'https://shorturl.at/fsBDS', 
    'https://shorturl.at/cepD5',
    'https://shorturl.at/kuCDQ',
    'https://shorturl.at/pOTY8',
    'https://shorturl.at/lBFU8',
    'https://shorturl.at/aefnK',
    'https://shorturl.at/nuFM2',
    'https://shorturl.at/ajEGJ',
    'https://shorturl.at/itNQ4',
    'https://shorturl.at/hlmD2',
    'https://shorturl.at/ltBRZ',
    'https://shorturl.at/uHVZ7',
    'https://shorturl.at/duvI4',
    'https://shorturl.at/ruvBL',
    'https://shorturl.at/csDLM',
    'https://shorturl.at/tCGN1',
    'https://shorturl.at/djqV0',
    'https://shorturl.at/oLY16',
    'https://shorturl.at/bFLQS',
    'https://shorturl.at/qIK35',
    'https://shorturl.at/bLOQ2',
    'https://shorturl.at/mEFPS',
    'https://shorturl.at/zLRS3',
    'https://shorturl.at/fszEV',
    'https://shorturl.at/agsF3',
    'https://shorturl.at/cwHV2',
    'https://shorturl.at/ehuNZ',
    'https://shorturl.at/puzHY',
    'https://shorturl.at/aHJPY'
];
        document.getElementById("meme").innerHTML = '<video src='+memes[count - 1]+' controls autoplay>';
}
library();
