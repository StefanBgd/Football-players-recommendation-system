'use strict';

sw.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/NotFound");

    $stateProvider
        .state('clubs', {
            url: "/clubs",
            views: {
                nav: {
                    templateUrl: 'views/nav.html'
                },
                content: {
                    templateUrl: 'views/clubs.html',
                    controller: 'ClubsCtrl',
                    resolve: {
                        clubs: function (clubsService) {
                            return clubsService.getAll();
                        }
                    }
                }
            }
        })
        .state('club_players', {
            url: "/clubs/:name",
            views: {
                nav: {
                    templateUrl: 'views/nav.html'
                },
                content: {
                    templateUrl: 'views/players.html',
                    controller: 'PlayersCtrl',
                    resolve: {
                        players: function (clubsService, $stateParams) {
                            return clubsService.getAllPlayers($stateParams.name);
                        }
                    }
                }
            }
        })
        .state('player', {
            url: "/players/:id",
            views: {
                nav: {
                    templateUrl: 'views/nav.html'
                },
                content: {
                    templateUrl: 'views/player.html',
                    controller: 'PlayerCtrl',
                    resolve: {
                        player: function (clubsService, $stateParams) {
                            return clubsService.getPlayer($stateParams.id);
                        }
                    }
                }
            }
        })
        .state('newPlayer', {
            url: "/new/player",
            views: {
                nav: {
                    templateUrl: 'views/nav.html'
                },
                content: {
                    templateUrl: 'views/newplayer.html',
                    controller: 'NewPlayerCtrl',
                    resolve: {
                        clubs: function (clubsService) {
                            return clubsService.getAllClubs();
                        },
                        nations: function (clubsService) {
                            return clubsService.getAllNations();
                        },
                        positions: function (clubsService) {
                            return clubsService.getAllPositions();
                        },
                        attr: function (clubsService) {
                            return clubsService.getAllAttributes();
                        }
                    }
                }
            }
        });

}]);