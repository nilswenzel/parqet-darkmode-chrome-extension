/*
 * set popup sliders and
 * inject darkmode.css in site
 * author: Nils Wenzel
 */

window.onload = function() {

    // popup slider
    try {
        var mySlider = document.getElementById("darkmode-button");
    } catch(e) {
        // none
    }

    // set popup slider everytime the page is 
    // reloaded with persisted variable
    chrome.storage.sync.get("darkmodeIsActive", ({ darkmodeIsActive }) => {
        // set slider according to state of darkmodeIsActive
        if(darkmodeIsActive) {
            console.log("[parqet.com darkmode] activate darkmode");
            try {
                mySlider.innerHTML = "<label class='switch'> <input type='checkbox' checked> <span class='slider round'></span> </label>";
            } catch(e) {
                // none
            }
        } else {
            try {
                mySlider.innerHTML = "<label class='switch'> <input type='checkbox'> <span class='slider round'></span> </label>";
            } catch(e) {
                // none
            }
        }
    });

    // inject CSS according to darkmodeIsActive 
    chrome.storage.sync.get("darkmodeIsActive", ({ darkmodeIsActive }) => {
        if(darkmodeIsActive) {
            injectCSS();
        }
    });
        
    try {
        // when the slider is clicked execute toggleDarkmode()
        mySlider.addEventListener("change", async () => {                                   
            let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: toggleDarkmode,
            });
        });
    } catch(e) {
        // none
    }
}

function toggleDarkmode() {
    // toggle darkmodeIsActive
    chrome.storage.sync.get("darkmodeIsActive", ({ darkmodeIsActive }) => {
        darkmodeIsActive = !darkmodeIsActive;
        chrome.storage.sync.set({ darkmodeIsActive });
        console.log("[parqet.com darkmode] set darkmode to " + darkmodeIsActive);
    });

    if(window.location.href.match(/app.parqet.com/).length >= 0)                            // if currently on parqet.com
        location.reload();                                                                  // reload page
}

function addCSStoDOM(path) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = path;
    document.getElementsByTagName('head')[0].appendChild(link);
}

function injectCSS() {
    var pathCSS = chrome.runtime.getURL('darkmode.css');
    addCSStoDOM(pathCSS);
}