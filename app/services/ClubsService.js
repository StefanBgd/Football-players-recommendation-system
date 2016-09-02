/**
 * Created by stefan on 28.8.16..
 */
sw.factory('clubsService', function (restService, urlBuilderService) {

    var getAll = function () {
        return restService.sendGetRequest(urlBuilderService.clubs(), {});
    };

    var getAllPlayers = function (name) {
        return restService.sendGetRequest(urlBuilderService.clubPlayers(name), {});
    };

    var getPlayer = function (id) {
        return restService.sendGetRequest(urlBuilderService.player(id), {});
    };

    var getAllClubs = function () {
        return restService.sendGetRequest(urlBuilderService.clubs(), {});
    };

    var getAllNations = function () {
        return restService.sendGetRequest(urlBuilderService.nations(), {});
    };

    var getAllAttributes = function () {
        return restService.sendGetRequest(urlBuilderService.attr(), {});
    };
    
    var getAllPositions = function () {
        return restService.sendGetRequest(urlBuilderService.positions(), {});
    };

    var savePlayer = function (player) {
        return restService.sendPostRequest(urlBuilderService.players(), player);
    };
    
    return {
        getAll: getAll,
        getAllPlayers: getAllPlayers,
        getPlayer: getPlayer,
        getAllAttributes:getAllAttributes,
        getAllNations:getAllNations,
        getAllClubs:getAllClubs,
        getAllPositions:getAllPositions,
        savePlayer:savePlayer
    }

});