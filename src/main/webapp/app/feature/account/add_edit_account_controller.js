"use strict";

(function() {

    var add_edit_AccountController =  function(accountService, $log) {
    
    	$log.log("add_edit_AccountController controller created");
    	var vm = this; 
    	vm.firstName = "";
    	vm.lastName = "";
    	vm.accountNumber = "";   
    	        
        vm.addAccount = function() {
        	$log.log("account-controller:helloooooo vm.addAccount")
        	var jsonAccount = {firstName:vm.firstName, secondName:vm.lastName, accountNumber:vm.accountNumber}; 
        	$log.log("added JSON:" + jsonAccount)       	
            accountService.addAccount(jsonAccount).then(function (results) {
            $log.log(results);
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;        	
        	});        
        }   
            
    };

    angular.module('accountApp').controller('add_edit_accountController', ['accountService','$log', add_edit_AccountController]);
}());