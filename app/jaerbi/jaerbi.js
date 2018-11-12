'use strict';

var jaerbiApp = angular.module('myApp.jaerbi', ['ngRoute'])

jaerbiApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/jaerbi1', {
        templateUrl: 'jaerbi/jaerbi.html',
        controller: 'JaerbiCtrl'
    });
}]);

jaerbiApp.component('jaerbiBoxQ', {
    bindings: {
        model: '='
    },
    templateUrl: 'jaerbi/boxQ.html',
    controller: function ($interval) {
        this.colorB = '#f3f3f3';
        this.sixColor = ['#F30700', '#39DC00', '#DC8400', '#0337DC', '#DCDC00', '#4A006C'];
        this.changeColorBox = function () {
            this.colorB = this.sixColor[Math.floor((Math.random() * 5))];
        };
        this.$onInit = function () {
            this.changeColorBox();
        };
        $interval(() => {
            this.changeColorBox();
        }, 1000);
    }
});

jaerbiApp.controller('JaerbiCtrl', ['$scope', function ($scope) {
    $scope.arrName = [
        {
            name: 'Jaerbi',
            id: 1,
            pos: 'Dev'
        },
        {
            name: 'Just',
            id: 1,
            pos: 'Pwer'
        },
        {
            name: 'Calamity',
            id: 1,
            pos: 'Orte'
        },
        {
            name: 'Ottonic',
            id: 1,
            pos: 'Port'
        },
        {
            name: 'Lolipop',
            id: 1,
            pos: 'Ger'
        },
    ];
    $scope.name = 'Jaerbi...';
    $scope.name2 = 'Elis...';
    $scope.colorT = '#333333';
    $scope.colorT2 = '#123000';
    $scope.model = {
        value: '',
        colors: [
            {color: '#F30700'},
            {color: '#39DC00'},
            {color: '#DC8400'},
            {color: '#0337DC'},
            {color: '#DCDC00'},
            {color: '#4A006C'}
        ]

    };
    $scope.number = 1802;
    $scope.getNumber = function (num) {
        return new Array(num);
    };

    $scope.changeColor = function () {
        $scope.colorT = '#' + Math.ceil(Math.random() * Math.pow(4, 10));
        $scope.colorT2 = '#' + Math.random().toString().slice(2, 8);
    };

    $scope.startBox = function () {
        console.log('just tray to kodding this');
    };
}]);
