/*
 * set variable to remember if darkmode is activated
 * author: Nils Wenzel
 * last update: 2021-03-24
 */

// persisted variable
let darkmodeIsActive = true;
let lightChartsIsActive = true;

// when installed, set button
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ darkmodeIsActive });
});
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ lightChartsIsActive });
});

/*
// when url changes => activate darkmode
chrome.tabs.onActivated.addListener(function (activeInfo) {
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (activeInfo.tabId === tabId && changeInfo.url) {
      console.log("UPDATE");
       chrome.tabs.sendMessage( tabId, {
        message: 'url',
        url: changeInfo.url
      })
    }
  })
})
*/