sw.factory('configService', function () {

    var restUrl = function () {
        return "http://localhost:5000";
    };

    return {
        restUrl: restUrl
    }

});