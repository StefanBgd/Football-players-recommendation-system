/**
 * Created by stefan on 28.8.16..
 */
sw.controller('PlayersCtrl', function ($scope, players, $state) {
    // window.scope = $scope;
    $scope.players = players.data;

    $scope.details = function (id) {
        $state.go('player', {id: id});
    }
});