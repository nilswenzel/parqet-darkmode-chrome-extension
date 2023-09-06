/*
 * set popup sliders and
 * inject darkmode.css
 * author: Nils Wenzel
 */

window.onload = function() {
    addCSS();
}

function addCSStoDOM(path) {
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = path;
    document.getElementsByTagName('head')[0].appendChild(link);
}

function addCSS() {
    let pathCSS = chrome.runtime.getURL('darkmode.css');
    addCSStoDOM(pathCSS);
}
