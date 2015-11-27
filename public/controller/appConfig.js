//var myApp = angular.module('profile', ['ngRoute']);


var myApp = angular.module('profile', ['ngRoute']);
//alert('vj');
myApp.config(function($routeProvider) {
      $routeProvider.
          when('/', {
              templateUrl: 'partials/contactlist.html',
              controller: 'AppCtrl'
          }).
          when('/userview', {
              templateUrl: 'partials/userview.html',
							controller: 'AppCtrl'
          }).
          otherwise({
              redirectTo: '/'
          });
});
