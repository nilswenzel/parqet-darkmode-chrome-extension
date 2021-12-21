/*
 * set variable to remember if darkmode is activated
 * author: Nils Wenzel
 * last update: 2021-12-21
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