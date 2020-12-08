browser.contextMenus.create({
    id: "KitsunSearch",
    title: "Search on Kitsun.io",
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab){
    const url = "https://kitsun.io/dictionary/"+ info.selectionText;

    browser.tabs.create({url:url});
}