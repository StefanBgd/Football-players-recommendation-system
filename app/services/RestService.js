sw.factory('restService', function($http, $q) {

    /**
     * Send HTTP GET request for access token.
     */
    var sendGetRequestForAccessToken = function(url, user) {
        return $http({
            method : "GET",
            url : url,
            headers : {
                'Content-Type' : "application/json"
            }
        }).success(function(data, status, headers, config) {
            printServerResponse(status, config.url);
        }).error(function(data, status, headers, config) {
            printServerResponse(status, config.url);
        });
    };

    /**
     * Send HTTP GET request.
     */
    var sendGetRequest = function(url, params) {
        console.log(url);
        return $http({
            method : "GET",
            url : url + getQueryParams(params),
            headers : {
                'Content-Type' : "application/json"
            }
        }).success(function(data, status, headers, config) {
            printServerResponse(status, config.url);
        }).error(function(data, status, headers, config) {
            printServerResponse(status, config.url);
        });
    };

    /**
     * Send HTTP GET request.
     */
    var sendGetRequestWithoutContent = function(url, params) {
        return $http({
            method : "GET",
            url : url + getQueryParams(params),
            headers : {
                'Content-type': 'application/json'
            },
            responseType: 'arraybuffer'
        }).success(function(data, status, headers, config) {
            printServerResponse(status, config.url);
        }).error(function(data, status, headers, config) {
            printServerResponse(status, config.url);
        });
    };

    /**
     * Get query parameters.
     */
    function getQueryParams(params) {
        var query = "";
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                if (query.indexOf("?") == -1) {
                    query += "?" + key + "=" + params[key];
                } else {
                    query += "&" + key + "=" + params[key];
                }
            }
        }
        return query;
    }

    /**
     * Send HTTP POST request.
     */
    var sendPostRequest = function(url, requestObject) {
        return $http({
            method : "POST",
            url : url,
            data : parseToJson(requestObject),
            headers : {
                'Content-Type' : "application/json"
            }
        }).success(function(data, status, headers, config) {
            printServerResponse(status, config.url);
        }).error(function(data, status, headers, config) {
            printServerResponse(status, config.url);
        });
    };

    /**
     * Send HTTP POST request with FormData
     */
    var sendPostRequestFormData = function(url, requestObject) {
        var formData = new FormData();
        formData.append('file', requestObject);

        return $http({
            method : "POST",
            url : url,
            data : parseToJson(requestObject),
            headers : {
                'Content-Type' : undefined
            },
            data: formData
        }).success(function(data, status, headers, config) {
            printServerResponse(status, config.url);
        }).error(function(data, status, headers, config) {
            printServerResponse(status, config.url);
        });
    };


    /**
     * Send HTTP PUT request.
     */
    var sendPutRequest = function(url, requestObject) {
        return $http({
            method : "PUT",
            url : url,
            data : parseToJson(requestObject),
            headers : {
                'Content-Type' : "application/json"
            }
        }).success(function(data, status, headers, config) {
            printServerResponse(status, config.url);
        }).error(function(data, status, headers, config) {
            printServerResponse(status, config.url);
        });
    };

    /**
     * Send HTTP DELETE request.
     */
    var sendDeleteRequest = function(url, requestObject) {
        return $http({
            method : "DELETE",
            url : url,
            data : parseToJson(requestObject),
            headers : {
                'Content-Type' : "application/json"
            }
        }).success(function(data, status, headers, config) {
            printServerResponse(status, config.url);
        }).error(function(data, status, headers, config) {
            printServerResponse(status, config.url);
        });
    };

    /**
     * Parse request object to JSON.
     */
    function parseToJson(requestObject) {
        return angular.toJson(requestObject);
    }

    /**
     * Print server response.
     */
    var printServerResponse = function(status, url) {
        console.log("Server response: " + status + " " + url);
    };


    return {
        sendGetRequestForAccessToken : sendGetRequestForAccessToken,
        sendGetRequest : sendGetRequest,
        sendPostRequest : sendPostRequest,
        sendPutRequest : sendPutRequest,
        sendDeleteRequest : sendDeleteRequest,
        printServerResponse : printServerResponse,
        sendPostRequestFormData: sendPostRequestFormData,
        sendGetRequestWithoutContent: sendGetRequestWithoutContent
    }

});