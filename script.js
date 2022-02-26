var imgCvs = document.getElementById('img');
var cvs = document.getElementById('img').getContext("2d");

var canvas = document.getElementById("Txt");
var context = canvas.getContext("2d");

var sub = document.getElementById("subTxt").getContext("2d");
var final = document.getElementById("canvasSubmit");

var font;

window.onload = function () {
    isMobile();

    cvs.fillStyle = "#" + Math.floor(Math.random() * 16777215).toString(16);
    cvs.globalAlpha = "1.0";
    cvs.fillRect(0, 0, 960, 540);

    var input = document.getElementById("Title");
    input.value = null;
    document.getElementById("subTitle").value = null;
}

function isMobile() {
    var temp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (temp === true) {
        alert("😥 이 사이트는 모바일 접속을 지원하지 않습니다.\n\n확인 버튼을 누르면 관련 안내로 이동합니다.");
        location.href = "https://eggjini.tistory.com/9"
    }
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
    if (g===g2) { 
        const grd = cvs.createLinearGradient(0, 0, 960, 540);

        grd.addColorStop(0, "#fbc2eb")
        grd.addColorStop(1, '#a6c1ee');
  
        cvs.fillStyle = grd;
        cvs.globalAlpha = "1.0";
        cvs.fillRect(0, 0, 960, 540);
        //to top, #fbc2eb 0%, #a6c1ee 100%)
    }
    if (g===g3) {
        const grd = cvs.createLinearGradient(0, 0, 960, 540);

        grd.addColorStop(0, "#a1c4fd")
        grd.addColorStop(1, '#c2e9fb');
  
        cvs.fillStyle = grd;
        cvs.globalAlpha = "1.0";
        cvs.fillRect(0, 0, 960, 540);
        //120deg, #a1c4fd 0%, #c2e9fb 100%)
    }
    if (g===g4) {
        const grd = cvs.createLinearGradient(0, 0, 960, 540);

        grd.addColorStop(0, "#84fab0")
        grd.addColorStop(1, '#8fd3f4');
  
        cvs.fillStyle = grd;
        cvs.globalAlpha = "1.0";
        cvs.fillRect(0, 0, 960, 540);
        //(120deg, #84fab0 0%, #8fd3f4 100%
    }
    if (g===g5) {
        const grd = cvs.createLinearGradient(0, 0, 960, 540);

        grd.addColorStop(0, "#d4fc79")
        grd.addColorStop(1, '#96e6a1');
  
        cvs.fillStyle = grd;
        cvs.globalAlpha = "1.0";
        cvs.fillRect(0, 0, 960, 540);
        //120deg, #d4fc79 0%, #96e6a1 100%
    }
    if (g===g6) {
        const grd = cvs.createLinearGradient(0, 0, 960, 540);

        grd.addColorStop(0, "#f093fb")
        grd.addColorStop(1, '#f5576c');
  
        cvs.fillStyle = grd;
        cvs.globalAlpha = "1.0";
        cvs.fillRect(0, 0, 960, 540);
        //120deg, #f093fb 0%, #f5576c 100%
    }
    if (g===g7) {
        const grd = cvs.createLinearGradient(0, 0, 960, 540);

        grd.addColorStop(0, "#30cfd0")
        grd.addColorStop(1, '#330867');
  
        cvs.fillStyle = grd;
        cvs.globalAlpha = "1.0";
        cvs.fillRect(0, 0, 960, 540);
        //to top, #30cfd0 0%, #330867 100%
    }
    if (g===g8) {
        const grd = cvs.createLinearGradient(0, 0, 960, 540);

        grd.addColorStop(0, "#667eea")
        grd.addColorStop(1, '#764ba2');
  
        cvs.fillStyle = grd;
        cvs.globalAlpha = "1.0";
        cvs.fillRect(0, 0, 960, 540);
        //135deg, #667eea 0%, #764ba2 100%
    }
    if (g===g9) {
        const grd = cvs.createLinearGradient(0, 0, 960, 540);

        grd.addColorStop(0, "#6a11cb")
        grd.addColorStop(1, '#2575fc');
  
        cvs.fillStyle = grd;
        cvs.globalAlpha = "1.0";
        cvs.fillRect(0, 0, 960, 540);
        //to right, #6a11cb 0%, #2575fc 100%
    }
    if (g===g10) {
        const grd = cvs.createLinearGradient(0, 0, 960, 540);

        grd.addColorStop(0, "#eea2a2")
        grd.addColorStop(0.19, '#bbc1bf');
        grd.addColorStop(0.42, '#57c6e1');
        grd.addColorStop(0.79, '#b49fda');
        grd.addColorStop(1, '#7ac5d8');
  
        cvs.fillStyle = grd;
        cvs.globalAlpha = "1.0";
        cvs.fillRect(0, 0, 960, 540);
        //to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)
    }
    if (g===g11) {
        const grd = cvs.createLinearGradient(0, 0, 960, 540);

        grd.addColorStop(0, "#29323c")
        grd.addColorStop(1, '#485563');
  
        cvs.fillStyle = grd;
        cvs.globalAlpha = "1.0";
        cvs.fillRect(0, 0, 960, 540);
        //60deg, #29323c 0%, #485563 100%
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