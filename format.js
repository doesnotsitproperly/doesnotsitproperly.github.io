const isMobile = navigator.userAgent.includes("Mobi");

if (isMobile) {
    document.getElementsByTagName("body")[0].style.fontSize = 32 + "px";
    document.getElementsByTagName("footer")[0].style.fontSize = 16 + "px";
}

const resizeBody = () => {
    if (isMobile) {
        document.getElementsByTagName("body")[0].style.width = window.innerWidth * 0.9 + "px";
    } else {
        document.getElementsByTagName("body")[0].style.width = window.innerWidth * 0.6 + "px";
    }
}

window.onload = resizeBody;
window.onresize = resizeBody;
