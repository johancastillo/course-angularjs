let app = angular.module("MyApp", [])


app.controller("FirstController", ($scope) => {
    $scope.name = "Jc Johan";
    $scope.newComment = {};
    $scope.comments = [
        {
            description: "All fine all right",
            username: "Jc Johan"
        },
        {
            description: "Buenas tardes",
            username: "Jc Johan"
        }
    ];

    $scope.addComment = () => {
        $scope.comments.push($scope.newComment)
        $scope.newComment = {}
    }

})
    

