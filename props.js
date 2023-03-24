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


//code drop
function detectMouseWheelDirection( e )
{
    var delta = null,
        direction = false
    ;
    if ( !e ) { // if the event is not provided, we get it from the window object
        e = window.event;
    }
    if ( e.wheelDelta ) { // will work in most cases
        delta = e.wheelDelta / 60;
    } else if ( e.detail ) { // fallback for Firefox
        delta = -e.detail / 2;
    }
    if ( delta !== null ) {
        direction = delta > 0 ? 'up' : 'down';
    }

    return direction;
}
function handleMouseWheelDirection( direction )
{
    console.log( direction ); // see the direction in the console
    if ( direction == 'down' ) {
        scrollup();
    } else if ( direction == 'up' ) {
        // do something, like show the previous page
    } else {
        // this means the direction of the mouse wheel could not be determined
    }
}
document.onmousewheel = function( e ) {
    handleMouseWheelDirection( detectMouseWheelDirection( e ) );
};
if ( window.addEventListener ) {
    document.addEventListener( 'DOMMouseScroll', function( e ) {
        handleMouseWheelDirection( detectMouseWheelDirection( e ) );
    });
}