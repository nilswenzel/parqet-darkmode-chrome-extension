/*
 * set popup sliders and
 * inject darkmode.css in site
 * author: Nils Wenzel
 * last update: 2021-12-22
 */

window.onload = function() {

    // popup slider
    try {
        var mySlider = document.getElementById("darkmode-button");
        var lightChartsSlider = document.getElementById("light-charts-button");
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

    // set popup slider everytime the page is 
    // reloaded with persisted variable
    chrome.storage.sync.get("lightChartsIsActive", ({ lightChartsIsActive }) => {
        // set slider according to state of lightChartsIsActive
        if(lightChartsIsActive) {
            console.log("[parqet.com darkmode] activate light mode for charts");
            try {
                lightChartsSlider.innerHTML = "<label class='switch'> <input type='checkbox' checked> <span class='slider round'></span> </label>";
            } catch(e) {
                // none
            }
        } else {
            try {
                lightChartsSlider.innerHTML = "<label class='switch'> <input type='checkbox'> <span class='slider round'></span> </label>";
            } catch(e) {
                // none
            }
        }
    });

    // inject CSS according to variables
    chrome.storage.sync.get("darkmodeIsActive", ({ darkmodeIsActive }) => {
        if(darkmodeIsActive) {
            chrome.storage.sync.get("lightChartsIsActive", ({ lightChartsIsActive }) => {
                injectCSS(lightChartsIsActive);
            });
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

    try {
        // when the slider is clicked execute toggleLightCharts()
        lightChartsSlider.addEventListener("change", async () => {                                   
            let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: toggleLightCharts,
            });
        });
    } catch(e) {
        // none
    }


}

function toggleDarkmode() {
    // set darkmodeIsActive
    chrome.storage.sync.get("darkmodeIsActive", ({ darkmodeIsActive }) => {
        if(darkmodeIsActive) {
            darkmodeIsActive = false;
            chrome.storage.sync.set({ darkmodeIsActive });
        } else {
            darkmodeIsActive = true;
            chrome.storage.sync.set({ darkmodeIsActive });
        }
        console.log("[parqet.com darkmode] set darkmode to " + darkmodeIsActive);
    });

    if(window.location.href.match(/app.parqet.com/).length >= 0)                            // if currently on parqet.com
        location.reload();                                                                  // reload
}

function toggleLightCharts() {
    // set lightChartsIsActive
    chrome.storage.sync.get("lightChartsIsActive", ({ lightChartsIsActive }) => {
        if(lightChartsIsActive) {
            lightChartsIsActive = false;
            chrome.storage.sync.set({ lightChartsIsActive });
        } else {
            lightChartsIsActive = true;
            chrome.storage.sync.set({ lightChartsIsActive });
        }
        console.log("[parqet.com darkmode] set light chart to " + lightChartsIsActive);
    });

    if(window.location.href.match(/app.parqet.com/).length >= 0)                            // if currently on parqet.com
        location.reload();                                                                  // reload
}



function addCSStoDOM(path) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = path;
    document.getElementsByTagName('head')[0].appendChild(link);
}



function injectCSS(isLightChartsActive) {

    var pathCSS = chrome.runtime.getURL('darkmode.css');
    addCSStoDOM(pathCSS);
    
    if(isLightChartsActive) {
        pathCSS = chrome.runtime.getURL('darkmodeLightCharts.css');
        addCSStoDOM(pathCSS);
    }
}