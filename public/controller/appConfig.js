//var myApp = angular.module('profile', ['ngRoute']);


var myApp = angular.module('profile', ['ngRoute']);

myApp.config(['$routeProvider',
  function($routeProvider) {
      $routeProvider.
          when('/', {
              templateUrl: 'partials/userlist.html',
              controller: 'AppCtrl'
          }).
          when('/register', {
              templateUrl: 'partials/register.html',
							controller: 'AppCtrl'
          }).
          otherwise({
              redirectTo: '/'
          });
}]);
