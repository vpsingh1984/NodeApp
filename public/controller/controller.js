

var myApp = angular.module('profile', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
		console.log('hello vijay');

		var refresh = function(){
			$http.get('/contactlist').success(function(response){
				console.log('I got the response');
				$scope.contactlist = response;
			});
		};
		refresh();

		$scope.addContact = function(){
			console.log($scope.contact);
			$http.post('/contactlist', $scope.contact).success(function(response){
				console.log(response);
				refresh();
				$scope.contact = " ";
			});
		};

		$scope.remove = function(id) {
			console.log(id);
			$http.delete('/contactlist/' + id).success(function(response){
				refresh();
			})
		};

		$scope.edit = function(id) {
			console.log(id);
			$http.get('/contactlist/' + id).success(function(response){
				$scope.contact = response;
			});
		};

		$scope.update = function(){
			console.log($scope.contact._id);
			$http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
				refresh();
			});
		};

		$scope.clear =  function() {
			$scope.contact = " ";
		};

}]);