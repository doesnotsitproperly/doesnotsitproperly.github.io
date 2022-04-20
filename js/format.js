const isMobile = navigator.userAgent.includes("Mobi");

const resizeBody = () => {
    const body = document.getElementsByTagName("body")[0];
    body.style.width = `${window.innerWidth * isMobile ? 0.9 : 0.6}px`;
}

const platformFormat = (pathToCss) => {
    const stylesheet = document.getElementById("platformStylesheet");
    stylesheet.setAttribute("href", `${pathToCss}/${isMobile ? "mobile" : "default"}.css`);
}

resizeBody();
window.onresize = resizeBody();
