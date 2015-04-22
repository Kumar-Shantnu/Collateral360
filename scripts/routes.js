angular.module('Collateral360', ['ui.router']).
config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('home');
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: './modules/login/views/landingPage.html'
        });
    }
]);