function HelloUser($scope, $http) {
	$http.get('http://localhost:8080/rest-service/greeting?name=Adam123').success(
			function(data) {		
				$scope.person = data;
			});
}
