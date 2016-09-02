/**
 * Created by stefan on 28.8.16..
 */
sw.controller('PlayerCtrl', function ($scope,  player) {
    // window.scope = $scope;
    $scope.player = player.data;

    $scope.attr = function (pl) {
        var skills = [
            {"skill":"Creativity",  "ponder":pl["Creativity"]},
            {"skill":"Finishing", "ponder":pl["Finishing"]},
            {"skill":"Penalties", "ponder":pl["Penalties"]},
            {"skill":"Determination", "ponder":pl["Determination"]},
            {"skill":"Control", "ponder":pl["Control"]},
            {"skill":"Volleying", "ponder":pl["Volleying"]},
            {"skill":"Dribbling", "ponder":pl["Dribbling"]},
            {"skill":"Leadership", "ponder":pl["Leadership"]},
            {"skill":"Saving Penalties", "ponder":pl["Saving Penalties"]},
            {"skill":"Distribution", "ponder":pl["Distribution"]},
            {"skill":"Marking", "ponder":pl["Marking"]},
            {"skill":"Crossing", "ponder":pl["Crossing"]},
            {"skill":"Long Shots", "ponder":pl["Long Shots"]},
            {"skill":"Stamina", "ponder":pl["Stamina"]},
            {"skill":"Command of Area", "ponder":pl["Command of Area"]},
            {"skill":"Composure", "ponder":pl["Composure"]},
            {"skill":"Aerial Ability", "ponder":pl["Aerial Ability"]},
            {"skill":"Long Passing", "ponder":pl["Long Passing"]},
            {"skill":"Free Kicks", "ponder":pl["Free Kicks"]},
            {"skill":"One on Ones", "ponder":pl["One on Ones"]},
            {"skill":"Corners", "ponder":pl["Corners"]},
            {"skill":"Pace", "ponder":pl["Pace"]},
            {"skill":"Tackling", "ponder":pl["Tackling"]},
            {"skill":"Strength", "ponder":pl["Strength"]},
            {"skill":"Handling", "ponder":pl["Handling"]},
            {"skill":"Aggression", "ponder":pl["Aggression"]},
            {"skill":"Positioning", "ponder":pl["Positioning"]},
            {"skill":"Shot Stopping", "ponder":pl["Shot Stopping"]},
            {"skill":"Passing", "ponder":pl["Passing"]},
            {"skill":"Work Rate", "ponder":pl["Work Rate"]},
            {"skill":"Concentration", "ponder":pl["Concentration"]},
            {"skill":"Movement", "ponder":pl["Movement"]},
            {"skill":"Flair", "ponder":pl["Flair"]}
        ];

        skills.sort(function(a, b) {
            return parseFloat(b.ponder) - parseFloat(a.ponder);
        });

        return skills.slice(0, 10);
    }
    
    $scope.skills = $scope.attr($scope.player);

    for(var a in $scope.player.list) {
        $scope.player.list[a].skills = $scope.attr($scope.player.list[a]);
    }

    $scope.pleja = $scope.player.list[0];

    $scope.setPlayer = function (id) {
        for(var a in $scope.player.list) {
            if ($scope.player.list[a].id == id) {
                $scope.pleja = $scope.player.list[a];
            }
        }
    }
});