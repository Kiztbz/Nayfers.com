
function closeNav() {
    closeSettings();
    closeProfile();
    drop();
    closeDrop();
    closeMenu();
}
function openSettings() {
    document.getElementById("settings").style.right = "0%";
    document.getElementById("settings").style.opacity = "100%";
}
function openProfile(){
    document.getElementById("profile").style.right = "1%";
    document.getElementById("profile").style.opacity = "100%";
}
function openMenu() {
    document.getElementById("menu").style.left = "0%";
    document.getElementById("menu").style.opacity = "100%";
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
function closeMenu() {

    {
        document.getElementById("menu").style.left = "-100%";
        document.getElementById("menu").style.opacity = "10%";
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
    var tog = document.getElementsByClassName("togglet").innerHTML;
    var t1 = document.getElementById("t1").innerHTML;
    var t2 = document.getElementById("t2").innerHTML;


    if (t2 === "toggle_on" || t1 === "toggle_on") {
        document.getElementById("t1").innerHTML = "toggle_off";
        document.getElementById("t2").innerHTML = "toggle_off";
        document.querySelector(':root').style.setProperty('--font', '#F4EBD0');
        document.querySelector(':root').style.setProperty('--bg', '#122620');

    }
    else {
        document.getElementById("t1").innerHTML = "toggle_on";
        document.getElementById("t2").innerHTML = "toggle_on";
        document.querySelector(':root').style.setProperty('--font', 'white');
        document.querySelector(':root').style.setProperty('--bg', 'black');
    }


} 
