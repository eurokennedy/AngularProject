"use strict";

(function () {

    
    function AccountService (accountDal, $log) {

        this.getAccounts = function()
        {
        	$log.log("AccountService getAccounts");
        	return accountDal.getAccounts();
        };
        
        this.deleteAccount = function(account)
        {
        	$log.log("AccountService deleteAccount");
        	return accountDal.deleteAccount(account);
        
    	};
    	this.addAccount = function(account)
    	{
    		$log.log("added JSON:" + account)  
    		return accountDal.saveAccount(account);
    	};
    	this.editAccount = function(account)
    	{
    		$log.log("Updated JSON:" + account)  
    		return accountDal.updateAccount(account);
    	};
    }    
    angular.module("accountApp").service("accountService", ['accountDal', "$log", AccountService]);

}());