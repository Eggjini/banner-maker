var imgCvs = document.getElementById('img');
var cvs = document.getElementById('img').getContext("2d");

var canvas = document.getElementById("Txt");
var context = canvas.getContext("2d");

var sub = document.getElementById("subTxt").getContext("2d");
var final = document.getElementById("canvasSubmit");

var font;

window.onload = function () {
    cvs.fillStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);
    cvs.globalAlpha = "1.0";
    cvs.fillRect(0, 0, 960, 540);

    var input = document.getElementById("Title");
    input.value = null;
    document.getElementById("subTitle").value = null;
}

function randomColor() {
    cvs.fillStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);
    cvs.globalAlpha = "1.0";
    cvs.fillRect(0, 0, 960, 540);
}

var c0 = "#005bbf",
    c1 = "#3f51b5",
    c2 = "#03A9F4",
    c3 = "#009688",
    c4 = "#21543f",
    c5 = "#8BC34A",
    c6 = "#fFDC00",
    c7 = "#FF9800",
    c8 = "#FF5722",
    c9 = "#E91E63";
    

function change(c) {
    cvs.fillStyle = c;
    cvs.globalAlpha = "1.0";
    cvs.fillRect(0, 0, 960, 540);
}

function changeG(g) {
    if (g===g1) {
        const grd = cvs.createLinearGradient(0, 0, 960, 540);

        grd.addColorStop(0, "#ff9a9e")
        grd.addColorStop(0.99, '#fad0c4');
        grd.addColorStop(1, '#fad0c4');
  
        cvs.fillStyle = grd;
        cvs.globalAlpha = "1.0";
        cvs.fillRect(0, 0, 960, 540);
    }
}

var c;

function changeC() {
    c = document.getElementById("slColor").value;
    change(c);
}

document.getElementById("Title").addEventListener("keyup", titleChange);

document.getElementById("Title").dispatchEvent(new Event("keyup"));

document.getElementById("subTitle").addEventListener("keyup", subSize);

document.getElementById("subTitle").dispatchEvent(new Event("keyup"));

function download() {
    var canva = document.getElementById("canvasSubmit");
    var ctx = canva.getContext("2d");

    ctx.drawImage(document.getElementById('img'), 0, 0);
    ctx.drawImage(document.getElementById("Txt"), 0, 0);
    ctx.drawImage(document.getElementById("subTxt"), 0, 0);

    let link = document.createElement('a');
    link.download = "Banner.png";
    link.href = canva.toDataURL();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function subSize() {
    document.getElementById('subRangeValue').innerHTML=document.getElementById("subInput").value

    let size = document.getElementById("subInput").value;
    font = size + "px " + document.getElementById("subFont").value;

    sub.clearRect(0, 0, document.getElementById("subTxt").width, document.getElementById("subTxt").height);

    let text = document.getElementById("subTitle").value;

    sub.font = font;
    sub.textAlign = "center";
    sub.fillStyle = "white";
    sub.fillText(text, 480, 500);
}

function titleChange() {
    document.getElementById('tRangeValue').innerHTML=document.getElementById("titleSizeInput").value

    let size = document.getElementById("titleSizeInput").value;
    font = size + "px " + document.getElementById("titleFont").value;

    context.clearRect(0, 0, canvas.width, canvas.height);

    let text = document.getElementById("Title").value;

    context.font = font;
    context.textAlign = "center";
    context.fillStyle = "white";
    context.fillText(text, 480, 300);
}