/**
 * Created with JetBrains WebStorm.
 * User: zzdjk6
 * Date: 13-6-15
 * Time: 下午9:51
 * To change this template use File | Settings | File Templates.
 */
app = {
    urlFilter: {
        urls: [
            "http://*/*",
            "https://*/*"
        ]
    },
    searchFilter: null
};

require(['app/listener'], function (listener) {
    $(function () {
        $("#button-start").click(function () {
            chrome.webRequest.onSendHeaders.addListener(listener.onSendHeaders, app.urlFilter);
        });
    });
});