function openNav() {
    document.getElementById("settings").style.width = "40%";
}

function closeNav() {
    if(document.getElementById("settings").style.width=="40%")
    {
        document.getElementById("settings").style.width = "0";
    }
}

document.addEventListener('keydown', function (event) {
    const ENTERKEY = 27;
    if (event.keyCode === ENTERKEY) {
        closeNav()
    }
});


/*THEME*/
function themeswitch()
{
    var tog = document.getElementById("toggle").innerHTML;

    if (tog.localeCompare("toggle_on") == 0) {
        document.getElementById('toggle').innerHTML = "toggle_off";
        document.querySelector(':root').style.setProperty('--font', 'black');
        document.querySelector(':root').style.setProperty('--bg', 'white');
        document.getElementById('logo').src ="logo_highres.png";

    }
    else {
        document.getElementById('toggle').innerHTML = "toggle_on";
        document.querySelector(':root').style.setProperty('--font', 'white');
        document.querySelector(':root').style.setProperty('--bg', 'black');
        document.getElementById('logo').src ="logo_highresw.png";
    }


} 