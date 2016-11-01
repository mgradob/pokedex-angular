(function () {
    
    "use strict";
    
    var baseUrl = "http://pokeapi.co/api/v2";

    var pokedex = function ($http) {
        var getAllPokemon = function () {
            return $http.get(baseUrl + "/pokemon")
                .then(function (response) {
                    return response.data;
                });
        };

        var getPokemonByPage = function (offset) {
            return $http.get(baseUrl + "/pokemon?offset=" + offset)
                .then(function (response) {
                    return response.data;
                });
        };

        return {
            getAllPokemon: getAllPokemon,
            getPokemonByPage: getPokemonByPage
        };
    };

    var pokedexModule = angular.module("pokedexApp");
    pokedexModule.factory("pokedex", pokedex);
}());
