"use strict";

(function() {

    var edit_AccountController =  function(accountService, $log, $stateParams) {
    
    	$log.log("edit_AccountController controller created");
    	var vm = this; 
    	vm.firstName = $stateParams.firstName;
    	vm.lastName = $stateParams.secondName;
    	vm.accountNumber = $stateParams.accountNumber;
    	vm.id = $stateParams.id;
    	$log.log("This is firstname "+vm.firstName)
    	$log.log("This is secondname "+vm.lastName)
    	$log.log("This is Accno "+vm.accountNumber)
    	$log.log("This is id "+vm.id)

	vm.editAccount = function() {
        	$log.log("account-controller:time to edit")
        	var jsonAccount = {firstName:vm.firstName, secondName:vm.lastName, accountNumber:vm.accountNumber, id:vm.id};  
        	$log.log("editAccount: Json String = " + jsonAccount)
        	accountService.editAccount(jsonAccount);
        }
     };

    angular.module('accountApp').controller('edit_accountController', ['accountService','$log', '$stateParams', edit_AccountController]);
}());