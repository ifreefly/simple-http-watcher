/**
 * Created with JetBrains WebStorm.
 * User: zzdjk6
 * Date: 13-6-16
 * Time: 上午2:53
 * To change this template use File | Settings | File Templates.
 */
define([], function () {
    return {
        writeOnSendHeaders: function (requestLog) {
            var newRow = '';
            newRow += '<tr class="row">';
            newRow += '<td class="hide">' + requestLog.id + '</td>';
            newRow += '<td class="span1">' + requestLog.briefProperty.method + '</td>';
            newRow += '<td class="span1"></td>';
            newRow += '<td class="span1">' + requestLog.briefProperty.type + '</td>';
            newRow += '<td class="span9">' + requestLog.briefProperty.url + '</td>';
            newRow += '</tr>';
            $("#datagrid tbody").append(newRow);
        }
    };
});