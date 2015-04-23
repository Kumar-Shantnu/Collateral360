angular.module('collateral360.landingpage',[ 'ui.router']).
config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider){

$stateProvider.state('about',{


url: '/about',
templateUrl: 'modules/login/views/landingPage.html',
controller:'landingPageCtrl'

})


}]).
controller('landingPageCtrl',function($scope){

console.log("Hello world");

});