chrome.runtime.onInstalled.addListener(function() {
    /* Add context menu and listener */
    //console.log(1);
    cmdId = "ee728993-537a-4c5b-bab8-221c576d5bab";
    heliumPrefix = "helium://";
    chrome.contextMenus.create({
        id: cmdId,
        title: "Open in Helium",
        contexts:["link"],
    });

    chrome.contextMenus.onClicked.addListener(function(info, tab) {
        //console.log('onClicked', info, tab);
        if (info.menuItemId == cmdId) {
            var url = heliumPrefix + info.linkUrl;
            //console.log('url', url);
            //chrome.tabs.create({url: url});
            chrome.tabs.update(tab.id, {url: url});
        }
    });
});
