(function () {
    'use strict';

    angular.module('pokedexApp', [])
        .controller('SearchController', function ($scope, pokedex) {
            $scope.loadInitialData = function () {
                pokedex.getAllPokemon()
                    .then(onLoadInitialData, onError);
            };

            var onLoadInitialData = function (data) {
                $scope.message = "yolo";
                $scope.datas = data;
            };

            var onError = function (cause) {
                $scope.message = "Error";
            };

            $scope.getOnePokemon = function (num) {
                pokedex.getSpecificPokemon(num)
                    .then(onLoadInitialData, onError);
            };
        });
}());
