/*
 * initialize variables
 * author: Nils Wenzel
 */

// persisted variable
let darkmodeIsActive = true;

// when installed, set button
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ darkmodeIsActive });
});