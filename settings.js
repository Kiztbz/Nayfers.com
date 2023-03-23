
function closeNav() {
    closeSettings();
    closeProfile();
    drop();
    closeDrop();
}
function openSettings() {
    document.getElementById("settings").style.right = "0%";
    document.getElementById("settings").style.opacity = "100%";
}
function openProfile(){
    document.getElementById("profile").style.right = "1%";
    document.getElementById("profile").style.opacity = "100%";
}

function closeSettings() {
    if(document.getElementById("settings").style.right=="0%")
    {
        document.getElementById("settings").style.opacity = "10%";
        document.getElementById("settings").style.right = "-40%";
    }
}
function closeProfile() {
    if(document.getElementById("profile").style.right=="1%")
    {
        document.getElementById("profile").style.right = "-40%";
        document.getElementById("profile").style.opacity = "10%";
    }
}


document.addEventListener('keydown', function (event) {
    const ENTERKEY = 27;
    if (event.keyCode === ENTERKEY) {
        closeNav()
    }
});

/*DROPDOWN*/
function drop(){
    if(document.getElementById("dropdown").style.height != "auto")
    {
        document.getElementById("dropdown").style.height = "auto";
        document.getElementById("dropdown").style.display = "flex";
    }
    else{
        document.getElementById("dropdown").style.height = "0";
        document.getElementById("dropdown").style.display = "none";

    }    
}
function closeDrop()
{
    document.getElementById("dropdown").style.height = "0";
    document.getElementById("dropdown").style.display = "none";
}


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
