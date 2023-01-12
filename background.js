browser.contextMenus.create({
    id: "WaniKaniKanjiSearch",
    title: "Search Kanji on WaniKani",
    contexts: ["selection"],
    "icons": {
        "16": "icons/kanji16.png",
        "32": "icons/kanji32.png"
      }
});

browser.contextMenus.create({
    id: "WaniKaniVocabularySearch",
    title: "Search Vocabulary on WaniKani",
    contexts: ["selection"],
    "icons": {
        "16": "icons/vocab16.png",
        "32": "icons/vocab32.png"
      }
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "WaniKaniKanjiSearch") {
        const url = "https://www.wanikani.com/kanji/"+ info.selectionText;
        browser.tabs.create({url:url});
    } else if (info.menuItemId === "WaniKaniVocabularySearch") {
        const url = "https://www.wanikani.com/vocabulary/"+ info.selectionText;
        browser.tabs.create({url:url});
    }
})
