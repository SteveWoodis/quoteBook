var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope,dataService){
	
	$scope.test = dataService.getData();
	$scope.addData = function(){
		cookie.addData($scope.text, $scope.author)
	};
	$scope.text = ' ';
	$scope.author = ' ';
	$scope.removeData = function(){
		dataService.removeData($scope.ftext)
	}
});