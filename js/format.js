const isMobile = navigator.userAgent.includes("Mobi");

const resizeBody = () => {
    const body = document.getElementsByTagName("body")[0];
    body.style.width = isMobile ? `${window.innerWidth * 0.9}px` : `${window.innerWidth * 0.6}px`;
}

const platformFormat = (pathToCss) => {
    const stylesheet = document.getElementById("platformStylesheet");
    stylesheet.setAttribute("href", isMobile ? `${pathToCss}/mobile.css` : `${pathToCss}/default.css`);
}

resizeBody();
window.onresize = resizeBody();
