sw.factory('urlBuilderService', function (configService) {

    var clubs = function () {
        return configService.restUrl() + "/clubs";
    };

    var clubPlayers = function (name) {
        return configService.restUrl() + "/clubs/"+name+"/players";
    };

    var player = function (id) {
        return configService.restUrl() + "/players/"+id;
    };
    var clubs = function () {
        return configService.restUrl() + "/clubs";
    };
    var nations = function () {
        return configService.restUrl() + "/nations";
    };
    var attr = function () {
        return configService.restUrl() + "/attributes";
    };
    var positions = function () {
        return configService.restUrl() + "/positions";
    };
    var players = function () {
        return configService.restUrl() + "/players";
    };
    return {
        clubs: clubs,
        clubPlayers: clubPlayers,
        player: player,
        clubs:clubs,
        nations:nations,
        attr:attr,
        positions:positions,
        players:players
    }

});