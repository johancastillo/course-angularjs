let app = angular.module("MyApp", ["ngResource"])


app.controller("FirstController", ($scope) => {
    $scope.name = "Jc Johan";
    $scope.comments = [
        {
            description: "All fine all right",
            username: "Jc Johan"
        },
        {
            description: "Buenas tardes",
            username: "Jc Johan"
        }
    ]

})
    

