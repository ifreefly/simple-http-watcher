/**
 * Created with JetBrains WebStorm.
 * User: zzdjk6
 * Date: 13-6-15
 * Time: 下午10:34
 * To change this template use File | Settings | File Templates.
 */
define(['app/datagrid'], function (datagrid) {
    return {
        onSendHeaders: function (details) {
            var requestLog = {
                id: details.requestId,
                briefProperty: {
                    url: details.url,
                    method: details.method,
                    type: details.type
                }
            };
            datagrid.writeOnSendHeaders(requestLog);
            window.sessionStorage.setItem(requestLog.id, JSON.stringify(requestLog));
        }
    };
});