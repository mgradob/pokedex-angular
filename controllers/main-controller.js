(function () {
    
    "use strict";
    
    var app = angular.module("pokedexApp", []);

    var MainController = function ($scope, pokedex) {

        var loadInitialData = function () {
           pokedex.getAllPokemon.then(onLoadInitialData,onError);
        };

        var onLoadInitialData = function (data) {
            $scope.datas = data;
        };
        
        var onError = function (cause) {
            $scope.message = "Error";    
        };
        
        var getOnePokemon = function (num) {
          pokedex.getSpecificPokemon(num).then(onLoadInitialData,onError);  
        };
        
        $scope.miVariable = "yolo";
    };

    app.controller("MainController", MainController);
}());
