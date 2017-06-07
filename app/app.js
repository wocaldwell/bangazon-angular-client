"use strict";

// defining app (remember to assign '"app": true' in your Gruntfile.js in grunt.initConfig under 'Globals"')
let app = angular.module("BangazonClient", ["ngRoute"]);

// displaying different routing available with which partial and controller assigned to them
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "partials/home.html",
        controller: "HomeCtrl"
    });
});