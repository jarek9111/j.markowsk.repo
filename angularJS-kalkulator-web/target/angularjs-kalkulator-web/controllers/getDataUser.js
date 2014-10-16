function GetDataUser($scope, $http) {

	$http.get('http://localhost:8080/rest-service/getlastUser').success(
			function(data) {

				$scope.user = data;
			});
}
