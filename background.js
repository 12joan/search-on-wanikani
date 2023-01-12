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
  const type = {
    "WaniKaniKanjiSearch": "kanji",
    "WaniKaniVocabularySearch": "vocabulary"
  }[info.menuItemId];

  const query = encodeURIComponent(info.selectionText.trim());

  const url = `https://www.wanikani.com/${type}/${query}`;

  browser.tabs.create({ url });
});
