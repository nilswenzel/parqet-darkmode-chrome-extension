/*
 * initialize variables
 * author: Nils Wenzel
 * last update: 2022-04-10
 */

// persisted variable
let darkmodeIsActive = true;

// when installed, set button
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ darkmodeIsActive });
});