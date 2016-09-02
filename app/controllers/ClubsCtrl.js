/**
 * Created by stefan on 28.8.16..
 */
sw.controller('ClubsCtrl', function ($scope, clubs) {
    // window.scope = $scope;
    $scope.clubs = clubs.data;
});