/**
 * Created by stefan on 23.6.16..
 */
sw.factory('localStorageService', function (constantsService) {

    /**
     * Set access token.
     */
    var setAccessToken = function (accessToken) {
        localStorage.setItem(constantsService.getAccessTokenKey(), accessToken);
    };

    /**
     * Get access token.
     */
    var getAccessToken = function () {
        return localStorage.getItem(constantsService.getAccessTokenKey());
    };

    /**
     * Remove access token.
     */
    var removeAccessToken = function () {
        localStorage.removeItem(constantsService.getAccessTokenKey());
    };

    /**
     * Set logged user.
     */
    var setLoggedUser = function (user) {
        localStorage.setItem(constantsService.getLoggedUserKey(), JSON.stringify(user));
    };

    /**
     * Get logged user.
     */
    var getLoggedUser = function () {
        return JSON.parse(localStorage.getItem(constantsService.getLoggedUserKey()));
    };

    /**
     * Remove logged user.
     */
    var removeLoggedUser = function () {
        localStorage.removeItem(constantsService.getLoggedUserKey());
    };

    /**
     * Set object for delete.
     */
    var setObjectForDelete = function (object) {
        localStorage.setItem(constantsService.getObjectForDeleteKey(), JSON.stringify(object));
    };

    /**
     * Get object for delete.
     */
    var getObjectForDelete = function () {
        return JSON.parse(localStorage.getItem(constantsService.getObjectForDeleteKey()));
    };

    /**
     * Remove object for delete.
     */
    var removeObjectForDelete = function () {
        localStorage.removeItem(constantsService.getObjectForDeleteKey());
    };

    /**
     * Empty local storage.
     */
    var empty = function () {
        removeAccessToken();
        removeLoggedUser();
        removeObjectForDelete();
    };

    return {
        setAccessToken: setAccessToken,
        getAccessToken: getAccessToken,
        removeAccessToken: removeAccessToken,
        setLoggedUser: setLoggedUser,
        getLoggedUser: getLoggedUser,
        removeLoggedUser: removeLoggedUser,
        setObjectForDelete: setObjectForDelete,
        getObjectForDelete: getObjectForDelete,
        removeObjectForDelete: removeObjectForDelete,
        empty: empty
    }

});