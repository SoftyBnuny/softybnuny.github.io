// ==UserScript==
// @name         FurAffinity[dot]net +
// @version      v1.001
// @description  Maximising the best out of FurAffinity[dot]net, by removing advertisements and features that bottleneck the experience.
// @author       SoftyBnuny
// @match        *://*.furaffinity.net/*
// @run-at       document-start
// @icon         https://softybnuny.github.io/tweaks/fa-plus/faplus-icon.ico
// @grant        GM_addStyle
// ==/UserScript==

(function() {
'use strict';

// So the script can remove (most) advertisements from all pages

GM_addStyle(`
#pageid-submission #submission-main-content > div:nth-child(1) {
justify-content: unset!important;
}

section > figure:has(> b > u > a > img.blocked-content) {
    display: none;
    pointer-events: none;
}
`);

const mainAds = '.leaderboardAd, .footerAds__column, .submission-ads, .sidebarAds, .comment-input-ads, .rectangleAd, .tallRectangleAd';

function mainBlockAds(root = document) {
    root.querySelectorAll(mainAds).forEach(element => {
        element.remove();
    });
}

const observer = new MutationObserver(() => mainBlockAds());
observer.observe(document.documentElement, { childList: true, subtree: true });

main();

function main(root = document) {
mainBlockAds(root);
}

})();
