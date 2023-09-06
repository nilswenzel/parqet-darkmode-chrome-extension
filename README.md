<div align="center">

![version](https://img.shields.io/badge/VERSION-1.2.4-success?style=for-the-badge)
![icon](https://img.shields.io/badge/CHROME-grey?style=for-the-badge&logo=google-chrome)

# Darkmode for Parqet (Community Edition)

> This is NOT an official product of Parqet!

</div>

![](./docs/gifs/all_images_as_gif.gif)

<br/>

Darkmode for parqet.com as a Chrome Web Extension. <br/>
Also works with [Safari](#safari) and [Firefox](#firefox) using a script runner.

[German version](./docs/readme_ger.md)

## Usage

### Chromium based browser (Chrome, Opera, ...)
- download the [extension](https://chrome.google.com/webstore/detail/parqet-darkmode/jfhpcliegfecjhjehclnhnngbjndodoj?hl) and reload parqet.com. The darkmode is automatically activated.

### Safari
1. download [Userscripts](https://apps.apple.com/us/app/userscripts/id1463298887) extension from the App Store
2. open Safari
3. activate Userscripts in the settings
4. click on the Userscripts-icon and then on "open extension page"
5. in there click on the "plus"-icon and then "new css"
6. copy the following:
    ```
    /* ==UserStyle==
    @name        Parqet Darkmode
    @description Darkmode for parqet.com
    @match       https://app.parqet.com/*
    ==/UserStyle== */

    @import url("https://cdn.statically.io/gh/nilswenzel/parqet-darkmode-chrome-extension/main/darkmode.min.css");
    ```
    and paste it
7. save the file (CMD + s)
8. reload parqet.com (if it doesn't work properly after the first reload you might have to reload the page again)

### Firefox
1. download the [CustomCSS Injector](https://addons.mozilla.org/de/firefox/addon/customcss-injector/) addon
2. click on the newly appeared CustomCSS Injector icon
3. paste in the following css:
    ```
    @import url("https://cdn.statically.io/gh/nilswenzel/parqet-darkmode-chrome-extension/main/darkmode.min.css");
    ```
4. and use `app.parqet.com` as the whitelist domain
5. save and reload parqet.com


## Support me
If you want to support me you can do this [here](https://www.paypal.com/paypalme/nilswenzel01).
