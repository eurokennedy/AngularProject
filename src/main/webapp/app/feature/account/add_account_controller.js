"use strict";

(function() {

    var add_AccountController =  function(accountService, $log, $state) {
    
    	$log.log("add_AccountController controller created");
    	var vm = this; 
    	vm.firstName = "";
    	vm.lastName = "";
    	vm.accountNumber = "";   
    	        
        vm.addAccount = function() {
        	$log.log("account-controller:helloooooo vm.addAccount")
        	var jsonAccount = {firstName:vm.firstName, secondName:vm.lastName, accountNumber:vm.accountNumber}; 
        	$log.log("added JSON:" + jsonAccount)       	
            accountService.addAccount(jsonAccount);  
        	$state.go('account');
        }   
            
    };

    angular.module('accountApp').controller('add_accountController', ['accountService','$log', '$state', add_AccountController]);
}());