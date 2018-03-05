"use strict";

(function () {

    angular.module('accountApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/feature/dashboard/dashboard.html"
        }).state("account", {
                url: "/account",
                templateUrl: "app/feature/account/account.html"
        }).state("add_edit_account", {
                url: "/add_edit_account",
                templateUrl: "app/feature/account/add_edit_account.html"
        }).state("edit_account", {
	            url: "/edit_account",
	            params: {firstName:null, secondName:null, accountNumber:null, id:null},
	            templateUrl: "app/feature/account/edit_account.html"
        })
    });
}());