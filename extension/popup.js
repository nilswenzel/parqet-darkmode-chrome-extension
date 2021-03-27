/*
 * Filename: popup.js
 * Author: Nils Wenzel
 * Last update: 2021-03-25
*/

window.onload = function() {

    // button
    try {
        var myButton = document.getElementById("darkmode");
    } catch(e) {
        // is okay, works nonetheless :D
    }

    // initialize button
    chrome.storage.sync.get("isActive", ({ isActive }) => {
        if(isActive) {
            console.log("aktiviere darkmode");
            setDarkmode();
            console.log("isActive1" + isActive);
            try {
                myButton.innerHTML = "<label class='switch'> <input type='checkbox' checked> <span class='slider round'></span> </label>";
            } catch(e) {
                // is okay, works nonetheless :D
            }
        } else {
            try {
                myButton.innerHTML = "<label class='switch'> <input type='checkbox'> <span class='slider round'></span> </label>";
            } catch(e) {
                // is okay, works nonetheless :D
            }
        }

    });

    
    try {
        myButton.addEventListener("change", async () => {                                   // when the button is clicked
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: toggle,
        });
        });
    } catch(e) {
        // is okay, works nonetheless :D
    }


}

function toggle() {
    console.log("toggle");
    chrome.storage.sync.get("isActive", ({ isActive }) => {
        console.log("isActive3" + isActive);
        if(isActive) {
            isActive = false;
            chrome.storage.sync.set({ isActive });
        } else {
            isActive = true;
            chrome.storage.sync.set({ isActive });
        }
        console.log("isActive4" + isActive);
    });

    if(window.location.href.match(/app.tresor.one/).length >= 0)                            // if currently on tresor.one
        location.reload();                                                                  // reload
}

function setDarkmode() {
    initClasses();
    addClassesToElements();
    listenAndRepeat();
}

numberOfElementsNew = 0;
numberOfElementsOld = 1;

function listenAndRepeat() {
    setInterval(function() {
        if(document.body.getElementsByTagName("*").length != numberOfElementsOld) {
          numberOfElementsOld = document.body.getElementsByTagName("*").length;
          addClassesToElements();
        }
    },100);
    setInterval(function() {addClassesToElements();},500);
}


function initClasses() {

    // searchbar
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.dm-searchbar {background-color:#282828 !important; color:#d1d1d1 !important; border-radius: 0px !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.dm-searchbar::placeholder {color:#d1d1d1 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.dm-border-transparent {border-color: transparent !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);

    // searchbar "Aktie" etc. rechts am Rand
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ' .dm-darkbg-lightft {color: #d1d1d1 !important; background-color: #181818 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    
    // %-value left of Portfolio-Wert: red
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.dm-darkbg-redft {background-color:#181818 !important; color:#e02424 !important; font-size:17px !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    // %-value left of Portfolio-Wert: green
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.dm-darkbg-greenft {background-color:#181818 !important; color:#0e9f6e !important; font-size:17px !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    
    // feed list
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.dm-dark-bg {background-color:#181818 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ' .dm-dark-bg small {color:#d1d1d1 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ' .dm-greenft {color:#0e9f6e !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.dm-redft {color:#e02424 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.dm-redft span {color:#e02424 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.dm-button-green {background-color:#505050 !important; color:#2cbf68 !important; font-weight: bold;}';
    document.getElementsByTagName('head')[0].appendChild(style);

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.dm-hover-tb:hover {background-color:#383838 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.dm-light-gray-ft {color:#d1d1d1 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);

    // dashboard main
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.dm-light-dark-bg-light-ft {background-color:#282828 !important; color:#d1d1d1 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);

    // normal elements
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = 'a {color:#d1d1d1 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = 'a:hover {background-color:#383838 !important; color:#d1d1d1 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.button {background-color:#484848 !important; color:#d1d1d1 !important; border-radius:50px !important; border-color:transparent !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.table {background-color:#181818 !important; color:#d1d1d1 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = 'hr {background-color:#d1d1d1 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = 'label {color:#d1d1d1 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = 'small span {color:#8c8c8c !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = 'p span {color:#d1d1d1; !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = 'p {color:#d1d1d1 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = 'small {color:#8c8c8c !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = 'th {color:#d1d1d1 !important;}';                                 // Pfeil nach unten in select-box
    document.getElementsByTagName('head')[0].appendChild(style);

    // navbar
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ' .dm-light-dark-bg {background-color:#282828 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ' .dm-nv-active-site {background-color:#444444 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ' .dm-nv-hover:hover {background-color:#646464 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ' .dm-not-visible {visibility: hidden !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    
    // dashboard table
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ' .dm-main-table tr {background-color:#181818 !important; color:#d1d1d1 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);

    // dashboard: main table
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ' .dm-main-table tr small {color:#d1d1d1 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    //var style = document.createElement('style');
    //style.type = 'text/css';
    //style.innerHTML = ' .dm-main-table tr strong{color:#d1d1d1 !important;}';
    //document.getElementsByTagName('head')[0].appendChild(style);

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ' .dm-main-table tr:hover {background-color:#252525 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ' .dm-main-table thead {background-color:#181818}';
    document.getElementsByTagName('head')[0].appendChild(style);

    // Aktivität bearbeiten (auf Aktivität klicken)
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ' .dm-edit-activity header {background-color:#282828 !important; color:#d1d1d1 !important}';
    document.getElementsByTagName('head')[0].appendChild(style);
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ' .dm-edit-activity-title {color:#d1d1d1 !important}';
    document.getElementsByTagName('head')[0].appendChild(style);
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ' .dm-edit-activity section {background-color:#181818 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ' .dm-edit-activity section select {background-color:#282828 !important; color:#d1d1d1 !important}';
    document.getElementsByTagName('head')[0].appendChild(style);
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ' .dm-edit-activity footer {background-color:#282828 !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ' .dm-edit-activity-button {background-color:#282828 !important; border-radius: 0px !important; border-color:#ffffff !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ' .dm-edit-activity-delete-button {background-color:#d93a2e !important; color:#181818 !important; border-color:transparent !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ' .dm-edit-activity-save-button {background-color:#484848 !important; color:#e8e8e8 !important; border-radius: 50px !important; border-color:transparent !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    
    // Aktivitaten Seite:
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.dm-select select {background-color:#282828 !important; color:#d1d1d1 !important; border-radius: 0px !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.dm-select:after {border-color:#d1d1d1 !important;}';      // Pfeil nach unten in select-box
    document.getElementsByTagName('head')[0].appendChild(style);
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.dm-import-button {background-color:#484848 !important; color:#d1d1d1 !important; border-radius:50px !important; border-color:#484848 !important;}';      // Pfeil nach unten in select-box
    document.getElementsByTagName('head')[0].appendChild(style);

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = 'strong {color:#d1d1d1 !important;}';      // Pfeil nach unten in select-box
    document.getElementsByTagName('head')[0].appendChild(style);

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.dm-button {color:#d1d1d1 !important; background-color:#505050 !important; font-weight: bold;}';      
    document.getElementsByTagName('head')[0].appendChild(style);

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.dm-buy-button {color:#2cbf68 !important; background-color:#505050 !important; font-weight: bold;}';      
    document.getElementsByTagName('head')[0].appendChild(style);

    // Märkte Seite:
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ' .dm-dark-gray-ft {color:#bfbfbf !important;}';
    document.getElementsByTagName('head')[0].appendChild(style);

}



function addClassesToElements() {
    // dashboard-Seite:

    // dashboard main
    var main = document.getElementsByClassName("bg-white");
    for(var i = 0; i < main.length; i++) {
        main[i].classList.add("dm-dark-bg");
    }
    // dashboard %-value left of Portfolio-Wert
    elements = document.getElementsByClassName("pill is-red");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-darkbg-redft");
    }
    elements = document.getElementsByClassName("pill is-green");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-darkbg-greenft");
    }

    // dashboard: Zeitraeume Buttons
    var buttonsNotActive = document.getElementsByClassName("button is-light is-rounded");                               // not active
        for(var i = 0; i < buttonsNotActive.length; i++) {  
        buttonsNotActive[i].style.cssText += ';background-color:#282828 !important; border-radius:0px !important;';
        buttonsNotActive[i].style.cssText += ';color:#f1f5f9 !important; border-radius:0px !important;';
    }
    var buttonActive = document.getElementsByClassName("button is-light is-rounded is-dark");                           // active
    for(var i = 0; i < buttonActive.length; i++) {
    buttonActive[i].style.cssText += ';background-color:#646464 !important; border-radius:0px !important;';
    }

    // dashboard price of Vermoegen/ gesamtes Vermoegen
    elements = document.getElementsByClassName("price");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-gray-ft");
    }

    // dashboard "Rendite" top row of table
    elements = document.getElementsByClassName("font-normal");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-gray-ft");
    }


    // dashboard feed list
    elements = document.getElementsByClassName("feed-list");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-dark-bg");
    }
    elements = document.getElementsByClassName("text-green-500");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-greenft");
    }
    elements = document.getElementsByClassName("has-text-danger");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-redft");
    }
    elements = document.getElementsByClassName("tag is-light is-capitalized is-success");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-button-green");
    }


    // dashboard table of stocks
    elements = document.getElementsByTagName("table");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-main-table");
    }

    // navbar
    elements = document.getElementsByClassName("bg-cool-gray-700");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-dark-bg");
    }

    // dashboard "Wertpapiere (Anzahl)" above table of stocks
    elements = document.getElementsByClassName("level-item");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-gray-ft");
    }

    // dashboard 3 Points above table of stocks
    elements = document.getElementsByClassName("px-4 py-2 rounded");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-gray-ft");
    }
    // dashboard "Anteile" above table of stocks
    elements = document.getElementsByClassName("has-text-right");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-gray-ft");
    }

    // dashboard "Wertpapier" in stock-table
    elements = document.getElementsByClassName("sorting-link");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-gray-ft");
    }

    // Profile Seite:
    elements = document.getElementsByClassName("profile-page");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-darkbg-lightft");
    }

    elements = document.getElementsByClassName("has-text-grey");
    for(var i = 0; i < elements.length; i++) {
        elements[i].style.cssText += 'color:#bfbfbf !important;';
    }

    // h1
    elements = document.getElementsByTagName("h1");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-gray-ft");
    }
    // h2
    elements = document.getElementsByTagName("h2");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-gray-ft");
    }
    // h3
    elements = document.getElementsByTagName("h3");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-gray-ft");
    }

    
    // dashboard: "Portfolio-Wert", "investiert", "Dividenden" ...
    elements = document.getElementsByTagName("dd");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-gray-ft");
    }
    elements = document.getElementsByTagName("dt");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-gray-ft");
    }

    //searchbar
    elements = document.getElementsByTagName("input");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-searchbar");
    }
    elements = document.getElementsByClassName("text-gray-500");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-gray-ft");
    }
    elements = document.getElementsByClassName("border-gray-200");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-gray-ft");
    }
    elements = document.getElementsByClassName("text-gray-900");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-gray-ft");
    }
    elements = document.getElementsByClassName("lg:border-cool-gray-200");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-border-transparent");
    }
    elements = document.getElementsByClassName("border-gray-200");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-border-transparent");
    }
    elements = document.getElementsByTagName("li");
    for(var i = 0; i < elements.length; i++) {
        var childs = elements[i].getElementsByClassName("hover:bg-gray-100")
        for(var j = 0; j < childs.length; j++) { 
          childs[j].classList.remove("hover:bg-gray-100");
        }
        elements[j].classList.remove("focus:bg-cool-gray-100");
        elements[i].classList.add("dm-hover-tb")
    }

    elements = document.getElementsByClassName("text-gray-800");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-darkbg-lightft")
    }


    // navbar
    elements = document.getElementsByClassName("nuxt-link-exact-active");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-nv-active-site")
    }
    elements = document.getElementsByClassName("hover:text-white");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-nv-hover")
    }
    elements = document.getElementsByClassName("color-picker");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-not-visible")
    }
    var buttonLeftNavBar = document.getElementsByClassName("py-4");             // Border um "Märkte Neu"
    for(var i = 0; i < buttonLeftNavBar.length; i++) {
        buttonLeftNavBar[i].style.cssText += ';border-color:#282828 !important;';
    }


    elements = document.getElementsByClassName("bg-white border-b border-gray-200 rounded-b-lg");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-dark-bg-light-ft")
    }

    // lupe links von Searchbar
    elements = document.getElementsByClassName("fa-search");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-gray-ft")
    }
    // Zahnrad neben "Mein Portfolio"
    elements = document.getElementsByClassName("fa-cog");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-gray-ft")
    }
    

    // wenn man auf ein Wertpapier klickt
    elements = document.getElementsByClassName("column is-one-third");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-gray-ft")
    }

    elements = document.getElementsByClassName("card");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-dark-bg-light-ft")
    }

    // wenn man auf einem Stocks ist (auf dessen Seite)
    elements = document.getElementsByClassName("bg-cool-gray-100");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-dark-bg");
    }
    elements = document.getElementsByClassName("bg-cool-gray-50");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-dark-bg-light-ft");
    }
    elements = document.getElementsByClassName("text-cool-gray-600");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-gray-ft");
    }

    // "Aktivitaeten Seite"

    elements = document.getElementsByClassName("select is-small");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-select");
    }

    elements = document.getElementsByClassName("file-cta");            // import Button
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-import-button");
    }

    elements = document.getElementsByClassName("tag");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-button");
    }
                                                                        // Buy Button
    elements = document.getElementsByClassName("tag is-light is-success");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-buy-button");
    }

    // Aktivität bearbeiten (auf Aktivität klicken)
    elements = document.getElementsByClassName("modal-card");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-edit-activity");
    }
    elements = document.getElementsByClassName("modal-card-title");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-edit-activity-title");
    }
    elements = document.getElementsByClassName("button is-static");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-edit-activity-button");
    }
    elements = document.getElementsByClassName("button is-danger");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-edit-activity-delete-button");
    }
    elements = document.getElementsByClassName("button is-primary");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-edit-activity-save-button");
    }

    // vorherige hover-Methoden entfernen:
    elements = document.getElementsByClassName("hover:text-gray-900");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("hover:text-gray-900");
    }

    elements = document.getElementsByClassName("group-hover:text-cool-gray-900");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("group-hover:text-cool-gray-900");
    }

    // Märkte Seite:
    elements = document.getElementsByClassName("text-cool-gray-500");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-light-gray-ft");
    }

    elements = document.getElementsByClassName("text-cool-gray-900");
    for(var i = 0; i < elements.length; i++) {
        elements[i].classList.add("dm-dark-gray-ft");
    }
}


    













