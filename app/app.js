'use strict';

// Declare app level module which depends on views, and core components
var app = angular.module('myApp', [
    'ngRoute',
    'myApp.jaerbi',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/jaerbi'});
}]);





app.controller('mainCtrl', function () {
   this.hello = 'world';
   this.number = 0;

   this.changeW = function () {
       this.number += 1;
       var res = this.hello = 'Hi Jaerbi ' + this.number + ' You cliking times';
       return res;
   };

   this.fruits = [
       {
           name: 'apple',
           number: 5,
           id: 1,
           ripe: false
       },
       {
           name: 'perry',
           number: 12,
           id: 2,
           ripe: false
       },
       {
           name: 'cherry',
           number: 24,
           id: 3,
           ripe: false
       },
       {
           name: 'plum',
           number: 8,
           id: 4,
           ripe: false
       },
       {
           name: 'clerki',
           number: 24,
           id: 5,
           ripe: false
       },
       {
           name: 'plumbum',
           number: 8,
           id: 6,
           ripe: false
       },
       {
           name: 'cheprt',
           number: 21,
           id: 7,
           ripe: false
       },
       {
           name: 'plumpi',
           number: 12,
           id: 8,
           ripe: false
       }
   ];
   this.changeRipe = function (id) {
        if (this.fruits[id-1].ripe === false) {
           this.fruits[id-1].ripe = true;
        } else {
            this.fruits[id-1].ripe = false;
        }
   };
   this.destpoyX = function (fruit) {
       this.fruits = this.fruits.filter(function(i) {
        return i != fruit;
       });
       return this.fruits;
   };
});
