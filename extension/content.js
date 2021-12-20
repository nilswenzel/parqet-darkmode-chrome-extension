/*
 * set popup slider and
 * inject darkmode.css in site
 * author: Nils Wenzel
 * last update: 2021-12-05
 */

/*
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      // listen for messages sent from background.js
      if (request.message === 'url') {
        injectCSS(request.url);
      }
});
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
    var darkmodeIsActive2 = false;
    chrome.storage.sync.get("darkmodeIsActive", ({ darkmodeIsActive }) => {
        // set slider according to state of darkmodeIsActive
        darkmodeIsActive2 = darkmodeIsActive;
        if(darkmodeIsActive) {
            console.log("[parquet.com darkmode] activate darkmode");
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
    var lightChartsIsActive2 = false;
    chrome.storage.sync.get("lightChartsIsActive", ({ lightChartsIsActive }) => {
        // set slider according to state of lightChartsIsActive
        lightChartsIsActive2 = lightChartsIsActive;
        if(lightChartsIsActive) {
            console.log("[parquet.com darkmode] activate light mode for charts");
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
        console.log("[parquet.com darkmode] set darkmode to " + darkmodeIsActive);
    });

    if(window.location.href.match(/app.parqet.com/).length >= 0)                            // if currently on parquet.com
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
        console.log("[parquet.com darkmode] set light chart to " + lightChartsIsActive);
    });

    if(window.location.href.match(/app.parqet.com/).length >= 0)                            // if currently on parquet.com
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

    console.log(isLightChartsActive)
    var pathCSS = chrome.runtime.getURL('darkmode.css');
    if(isLightChartsActive) {
        pathCSS = chrome.runtime.getURL('darkmodeLightCharts.css');
    }
    console.log(pathCSS)

    addCSStoDOM(pathCSS);
    /*
    if(currentURL.toString().match(".*\/create")) {
        pathCSS = chrome.runtime.getURL('darkmodeAddActivity.css');
        var head = document.getElementsByTagName('head')[0];
        head.removeChild(head.lastChild);
        addCSSToDOM(pathCSS);
        console.log("create");
    }
    */
}


