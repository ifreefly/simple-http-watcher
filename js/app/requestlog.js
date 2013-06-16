/**
 * Created with JetBrains WebStorm.
 * User: zzdjk6
 * Date: 13-6-16
 * Time: 下午3:49
 * To change this template use File | Settings | File Templates.
 */
define([], function () {
    return function(){
        return {
            id: null,
            briefProperty: {
                url: null,
                method: null,
                type: null,
                code: null
            },
            headers: {},
            cookies: {},
            queryString: {},
            postData: {},
            content: {},
            redirects: []
        }

    }
});