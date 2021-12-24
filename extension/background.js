/*
 * initialize variables
 * author: Nils Wenzel
 * last update: 2021-12-22
 */

// persisted variables
let darkmodeIsActive = true;
let lightChartsIsActive = true;

// when installed, set button
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ darkmodeIsActive });
  chrome.storage.sync.set({ lightChartsIsActive });
});