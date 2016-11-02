(function(){
    var app = angular.module('pokedexApp', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/index' , {
                templateUrl : 'index.html',
                controller : 'indexController'
        })
        .when('/all' , {
            templateUrl : 'pages/all-pokemon.html',
            controller : 'mainController'
        })
        .when('/search',{
            templateUrl : 'pages/search-pokemon.html',
            controller : 'searchController'
        });
    });
}());

