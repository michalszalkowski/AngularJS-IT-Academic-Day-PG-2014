var app = angular.module('szalekApp', []);

app.controller('TestController', function ($scope) {

    $scope.currentDate = new Date().getTime();

    $scope.testStr = "ala ma kota";

    $scope.companies = [
        {name:"Google", vote: 99},
        {name:"Microsoft", vote: 66},
        {name:"Apple", vote: 33}
    ];
});

app.filter('addExclamationMark', function () {
    return function(input, prefix){
        if(prefix ==undefined) {
            return input + " !";
        }
        return prefix +' '+ input + " !";
    }
});

app.filter('revertWord', function () {
    return function(input){
        var arr = input.split(" ");
        var newS = "";
        arr.reverse().forEach(function(item){
            newS +=" " + item;
        });
        return newS;
    }
});

;