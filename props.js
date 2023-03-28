var root = document.querySelector(':root');

var width = window.innerWidth;
var height = window.innerHeight;
var introh = height-80;
var h = height.toString(10).concat("px");
var ih = introh.toString(10).concat("px");

root.style.setProperty('--sec1h', h);
root.style.setProperty('--introh', ih);
root.style.setProperty('--sec2h', h);
root.style.setProperty('--sec3h', h);

/*
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

document.addEventListener('keydown', function (event) {
    const left = 37;
    const up = 38;
    const right = 39;
    const down = 40;
    if (event.keyCode === down) {
        closeNav()
        //window.scroll(0,height-50);
        scrollup()
    }
    if (event.keyCode === up) {
        closeNav()
        //window.scroll(0,height-50);
        scrolldelay = setTimeout('pageScroll()',100);
        for (let i = 0; i < height; i++) {
            setTimeout(scrolldown, 100)
          }
    }
    
});

function scrollup()
{
    for (let i = 0; i < height; i++) {
            
        setTimeout(function() {window.scrollBy(0,1)}, 300)
    }
}
function scrolldown()
{
    window.scrollBy(0,-1);
}
*/