/**
 * Created with JetBrains WebStorm.
 * User: zzdjk6
 * Date: 13-6-14
 * Time: 下午2:31
 * To change this template use File | Settings | File Templates.
 */
var APP = {
    window: null
};

chrome.browserAction.onClicked.addListener(function () {
    if (APP.window) {
        chrome.windows.update(APP.window.id, {focused: true});
    }
    else {
        chrome.windows.create(
            {url: "index.html", type: "popup", width: 800, height: 600}, function (window) {
                APP.window = window;
            });
    }
});

chrome.windows.onRemoved.addListener(function (windowId) {
    if (windowId == APP.window.id) {
        APP.window = null;
    }
});