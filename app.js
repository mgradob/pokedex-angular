(function () {
    "use strict";

    var app = angular.module("pokedexApp", ['ngRoute']);

    app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/", {
                controller: 'MainController',
                templateUrl: 'views/all-pokemon.html'
            })
            .when("/search", {
                controller: 'SearchController',
                templateUrl: 'views/search-pokemon.html'
            });
        }]);
}());
