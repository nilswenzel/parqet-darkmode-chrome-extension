# Parqet Darkmode
![myImage](../docs/gifs/readme_images.gif)

<br/>

Darkmode für parqet.com in Form einer Chrome Web Extension. <br/>
Funktioniert auch mit [Safari](#safari) und [Firefox](#firefox) unter Zuhilfenahme eines Script-Runners.

<br/>

## Informationen:
Da parqet leider noch keinen Darkmode hat, habe ich einfach einen erstellt. Für Beispiele siehe die Bilder. Sollte ein Bug o.ä. auftreten, dann mir gerne melden.

Der Darkmode kann auch jederzeit im Popup deaktiviert/aktiviert werden.

- getestet auf Mac/Windows (Chrome Version 100.0.4896.75)
- (inoffiziell)

## Was ist parqet?
Mit [Parqet](https://www.parqet.com) lassen sich Depots visualisieren und analysieren. Dadurch hat man sein Vermögen immer jederzeit im Blick.

## Installation

### Chromium basierte Browser (Chrome, Opera, ...)
- die [Erweiterung](https://chrome.google.com/webstore/detail/parqet-darkmode/jfhpcliegfecjhjehclnhnngbjndodoj?hl) herunterladen und parqet.com neuladen. Der Darkmode ist automatisch aktiviert.

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

    @import url("https://cdn.statically.io/gh/nilswenzel/parqet-darkmode-chrome-extension/main/darkmode.min.css");
    ```
    und einfügen
7. die Datei speichern (CMD + s)
8. parqet.com neuladen (wenn es nach dem ersten Neuladen noch nicht richtig funktioniert, dann einfach nochmal die Seite neuladen)

### Firefox
1. das Addon [CustomCSS Injector](https://addons.mozilla.org/de/firefox/addon/customcss-injector/) downloaden
2. auf das neue erschienene CustomCSS Injector icon klicken
3. folgendes CSS einfügen:
    ```
    @import url("https://cdn.statically.io/gh/nilswenzel/parqet-darkmode-chrome-extension/main/darkmode.min.css");
    ```
4. `app.parqet.com` als whitelist domain eingeben
5. save klicken und parqet.com neuladen

## Support
Falls ihr mich unterstützen wollt könnt ihr dies [hier](https://www.paypal.com/paypalme/nilswenzel01) tun.
