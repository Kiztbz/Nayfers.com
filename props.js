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
