(function () {
    
    "use strict";
    
    var app = angular.module("pokedexApp", ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'MainController as mainController',
                templateUrl: 'index.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
}());
