# Parqet Darkmode
![myImage](../docs/gifs/readme_images.gif)

<br/>

Darkmode für parqet.com in Form einer Chrome Web Extension. <br/>
Funktioniert auch, unter Zuhilfenahme eines Script-Runners, mit Safari, siehe [hier](#safari).

<br/>

## Informationen:
Da parqet leider noch keinen Darkmode hat, habe ich einfach einen erstellt. Für Beispiele siehe die Bilder. Sollte ein Bug o.ä. auftreten, dann mir gerne melden.

Der Darkmode kann auch jederzeit im Popup deaktiviert/aktiviert werden. Zudem kann entschieden werden, ob auch die Charts und Grafiken dunkel sein sollen.
Viel Spaß damit!

- getestet auf Mac/Windows
- (inoffiziell)

## Was ist parqet?
Mit [Parqet](https://www.parqet.com) lassen sich Depots visualisieren und analysieren. Dadurch hat man sein Vermögen immer jederzeit im Blick.

## Installation

### Chromium basierte Browser (Chrome, Opera, ...)
- die [Erweiterung](https://chrome.google.com/webstore/detail/parqet-darkmode/jfhpcliegfecjhjehclnhnngbjndodoj?hl) herunterladen und parqet.com neuladen

### Safari
1. [Userscripts](https://apps.apple.com/us/app/userscripts/id1463298887) Erweiterung aus dem App Store herunterladen
2. Safari öffnen
3. Userscripts in den Einstellungen aktivieren
4. auf das Userscripts-Icon und dann auf "open extension page" klicken
5. dort dann auf das "plus"-icon und anschließend auf "new css" klicken
6. Folgendes kopieren:
    ```
    /* ==UserStyle==
    @name        Parqet Darkmode
    @description Darkmode for parqet.com
    @match       https://app.parqet.com/*
    ==/UserStyle== */

    @import url("https://cdn.statically.io/gh/nilswenzel/parqet-darkmode-chrome-extension/main/extension/darkmode.css");
    ```
    ODER wenn die Charts und Grahiken hell sein sollen Folgendes: 

    ```
    /* ==UserStyle==
    @name        Parqet Darkmode
    @description Darkmode for parqet.com
    @match       https://app.parqet.com/*
    ==/UserStyle== */

    @import url("https://cdn.statically.io/gh/nilswenzel/parqet-darkmode-chrome-extension/main/extension/darkmode.css");
    @import url("https://cdn.statically.io/gh/nilswenzel/parqet-darkmode-chrome-extension/main/extension/darkmodeLightCharts.css");
    ```
    und dann einfügen
7. die Datei speichern (CMD + s)
8. parqet.com neuladen

## Support
Falls ihr mich unterstützen wollt könnt ihr dies [hier](https://www.paypal.com/paypalme/nilswenzel01) tun.