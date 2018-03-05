"use strict";

(function() {

    var AccountController =  function(accountService, $log, $state) {
        
        var vm = this;
        
        vm.isHidden = false;
        vm.firstName = ""
		vm.lastName = ""
		vm.accountNumber = ""
		vm.id = ""
        
        vm.hideTable = function()
        {
            vm.isHidden = !vm.isHidden
        };
        
        vm.deleteAccount = function(account) {
        	$log.log("account-controller: vm.deleteAccount")
            accountService.deleteAccount(account).then(function (results) {
            $log.log(results);
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;        	
        	});        
        }
        
        vm.goToUpdate = function(firstName,lastName,accountNumber,id) {
        	$log.log("go to update")
        	var jsonAccount = {firstName:firstName, secondName:lastName, accountNumber:accountNumber, id:id}; 
            $log.log("go to update, jsonaccount:" + jsonAccount)     
            $state.go('edit_account',jsonAccount);
        }
        
        function init() {
            accountService.getAccounts().then(function (results) {
            vm.accounts = results;
            $log.log("In the account controller the value of the result promise is ");
            $log.log(JSON.stringify(vm.accounts));
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
       }
       
       init();
            
    };

    angular.module('accountApp').controller('accountController', ['accountService','$log', '$state', AccountController]);
}());