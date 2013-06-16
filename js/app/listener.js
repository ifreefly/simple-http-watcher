/**
 * Created with JetBrains WebStorm.
 * User: zzdjk6
 * Date: 13-6-15
 * Time: 下午10:34
 * To change this template use File | Settings | File Templates.
 */
define(['app/datagrid','app/requestlog'], function (DataGrid,RequestLog) {
    return {
        onSendHeaders: function (details) {
            var requestLog = new RequestLog;
            requestLog.id = details.requestId;
            requestLog.briefProperty.url = details.url;
            requestLog.briefProperty.method = details.method;
            requestLog.briefProperty.type = details.type;
//            var requestLog = {
//                id: details.requestId,
//                briefProperty: {
//                    url: details.url,
//                    method: details.method,
//                    type: details.type
//                }
//            };
            DataGrid.writeOnSendHeaders(requestLog);
            window.sessionStorage.setItem(requestLog.id, JSON.stringify(requestLog));
        }
    };
});