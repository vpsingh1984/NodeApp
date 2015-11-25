

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
				$scope.contactlist.push({
		            name: $scope.name,
		            email: $scope.email,
		            number: $scope.fullName
		        });
				$scope.contact = '';
			});
			refresh();
			
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


// myApp.controller('employeeCtrl', function($scope, $http) {

//     $http.get('app/services/employeeDetails.json').success(function(response) {  
//         $scope.listEmployee = []         ;
//         $scope.listEmployee = response;
//     });

//     function getSelectedIndex(id){
//         for (var i=0; i<$scope.listEmployee.length; i++){
//             if($scope.listEmployee[i].id==id)
//                 return i;
//         }
//     }

//     $scope.selectEdit = function(id){
//         var index = getSelectedIndex(id);
//         var employee = $scope.listEmployee[index];
//         $scope.id = employee.id;
//         $scope.empid = employee.empid;
//         $scope.fullName = employee.fullName;
//         $scope.designation = employee.designation;
//         $scope.email = employee.email;

//         $('#uid').attr('readonly', true);
//     }

//     $scope.add = function(){
//         $scope.listEmployee.push({
//             id: $scope.id,
//             empid: $scope.empid,
//             fullName: $scope.fullName,
//             designation: $scope.designation,
//             email: $scope.email
//         });
//             $scope.id = '';
//             $scope.empid = '';
//             $scope.fullName = '';
//             $scope.designation = '';
//             $scope.email = '';
//     }

//     $scope.edit = function(){
//         // alert('daf');
//         var index = getSelectedIndex($scope.id);
//         $scope.listEmployee[index].empid = $scope.empid;
//         $scope.listEmployee[index].fullName = $scope.fullName;
//         $scope.listEmployee[index].designation = $scope.designation;
//         $scope.listEmployee[index].email = $scope.email;

//         $scope.id = '';
//         $scope.empid = '';
//         $scope.fullName = '';
//         $scope.designation = '';
//         $scope.email = '';

//         $('#uid').attr('readonly', false);
//     }

//     $scope.deleteRecord = function(id){
//         var result = confirm("Are You Sure!");
//         if (result===true){
//             var index = getSelectedIndex(id);
//             $scope.listEmployee.splice(index, 1);
//         } 
//     }
    
//  });