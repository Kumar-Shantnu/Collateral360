
angular.module('collateral360').
config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('/', {
            url: '/',
            templateUrl: 'modules/login/views/landingPage.html',
            controller : 'landingPageCtrl'
        })
    }
]);
