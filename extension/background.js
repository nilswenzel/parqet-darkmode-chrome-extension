/*
 * Filename: background.js
 * Author: Nils Wenzel
 * Last update: 2021-03-24
*/

// persisted variable
let isActive = true;

// when installed, set button
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ isActive });
});