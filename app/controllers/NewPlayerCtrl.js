/**
 * Created by stefan on 29.8.16..
 */
sw.controller('NewPlayerCtrl', function ($scope, attr, positions, clubs, nations, clubsService) {
    $scope.attr = attr.data;
    $scope.positions = positions.data;
    $scope.clubs = clubs.data;
    $scope.nations = nations.data;

    // window.scope = $scope;
    $scope.player = {
        "clubs": "Manchester City",
        "clubs-href": "",
        "players": "",
        "players-href": "",
        "full name": "",
        "position desc": "General Forward",
        "date of birth": "02-Jun-88",
        "nation": "Portugal",
        "image-src": "",
        "weight": 0,
        "height": 0,
        "rating": 0,
        "age": 0,
        "Aerial Ability": 0,
        "Aggression": 0,
        "Command of Area": 0,
        "Composure": 0,
        "Concentration": 0,
        "Control": 0,
        "Corners": 0,
        "Creativity": 0,
        "Crossing": 0,
        "Determination": 0,
        "Distribution": 0,
        "Dribbling": 0,
        "Finishing": 0,
        "Flair": 0,
        "Free Kicks": 0,
        "Handling": 0,
        "Leadership": 0,
        "Long Passing": 0,
        "Long Shots": 0,
        "Marking": 0,
        "Movement": 0,
        "One on Ones": 0,
        "Pace": 0,
        "Passing": 0,
        "Penalties": 0,
        "Positioning": 0,
        "Saving Penalties": 0,
        "Shot Stopping": 0,
        "Stamina": 0,
        "Strength": 0,
        "Tackling": 0,
        "Volleying": 0,
        "Work Rate": 0,
        "D(R)": 0,
        "D(L)": 0,
        "D(C)": 0,
        "GK": 0,
        "DM(R)": 0,
        "DM(L)": 0,
        "DM(C)": 0,
        "M(R)": 0,
        "M(L)": 0,
        "M(C)": 0,
        "AM(R)": 0,
        "AM(L)": 0,
        "AM(C)": 0,
        "F(R)": 0,
        "F(L)": 0,
        "F(C)": 0,
        "right": 0,
        "left": 0
    };

    $scope.skills = [
        {"skill":"Creativity",  "ponder":$scope.player["Creativity"]},
        {"skill":"Finishing", "ponder":$scope.player["Finishing"]},
        {"skill":"Penalties", "ponder":$scope.player["Penalties"]},
        {"skill":"Determination", "ponder":$scope.player["Determination"]},
        {"skill":"Control", "ponder":$scope.player["Control"]},
        {"skill":"Volleying", "ponder":$scope.player["Volleying"]},
        {"skill":"Dribbling", "ponder":$scope.player["Dribbling"]},
        {"skill":"Leadership", "ponder":$scope.player["Leadership"]},
        {"skill":"Saving Penalties", "ponder":$scope.player["Saving Penalties"]},
        {"skill":"Distribution", "ponder":$scope.player["Distribution"]},
        {"skill":"Marking", "ponder":$scope.player["Marking"]},
        {"skill":"Crossing", "ponder":$scope.player["Crossing"]},
        {"skill":"Long Shots", "ponder":$scope.player["Long Shots"]},
        {"skill":"Stamina", "ponder":$scope.player["Stamina"]},
        {"skill":"Command of Area", "ponder":$scope.player["Command of Area"]},
        {"skill":"Composure", "ponder":$scope.player["Composure"]},
        {"skill":"Aerial Ability", "ponder":$scope.player["Aerial Ability"]},
        {"skill":"Long Passing", "ponder":$scope.player["Long Passing"]},
        {"skill":"Free Kicks", "ponder":$scope.player["Free Kicks"]},
        {"skill":"One on Ones", "ponder":$scope.player["One on Ones"]},
        {"skill":"Corners", "ponder":$scope.player["Corners"]},
        {"skill":"Pace", "ponder":$scope.player["Pace"]},
        {"skill":"Tackling", "ponder":$scope.player["Tackling"]},
        {"skill":"Strength", "ponder":$scope.player["Strength"]},
        {"skill":"Handling", "ponder":$scope.player["Handling"]},
        {"skill":"Aggression", "ponder":$scope.player["Aggression"]},
        {"skill":"Positioning", "ponder":$scope.player["Positioning"]},
        {"skill":"Shot Stopping", "ponder":$scope.player["Shot Stopping"]},
        {"skill":"Passing", "ponder":$scope.player["Passing"]},
        {"skill":"Work Rate", "ponder":$scope.player["Work Rate"]},
        {"skill":"Concentration", "ponder":$scope.player["Concentration"]},
        {"skill":"Movement", "ponder":$scope.player["Movement"]},
        {"skill":"Flair", "ponder":$scope.player["Flair"]}
    ];
    
    $scope.selectedSkills = [];
    var ponder = 10;
    $scope.addSkill = function (s) {

        if (ponder > 0) {
            $scope.player[s.skill] = ponder;
            s.ponder = ponder;
            ponder-=1;
        }
    };
    $scope.save = function () {
        clubsService.savePlayer($scope.player)
    }
});