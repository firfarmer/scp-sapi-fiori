sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"

], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.concurit.sapi.sapi.controller.Accounts", {
	    onInit: function(){
			var oMessages = new JSONModel();
			this.getView().setModel(oMessages, "accounts");
			this._loadChannelMessages();
		},
		_loadChannelMessages: function() {
			var oView = this.getView();
			oView.setBusy(true);
			
			var self = this;
			
			$.ajax({
			    type: 'GET',
			    url: "/sapi",
			    async: false
			}).done(function(results) {
			    console.log(results);
			    self.getView().getModel("accounts").setProperty("/data", results.accounts);
			    oView.setBusy(false);
			})
			.fail(function(err) {
			    oView.setBusy(false);
			    if (err !== undefined) {
			      var oErrorResponse = $.parseJSON(err.responseText);
			      sap.m.MessageToast.show(oErrorResponse.message, {
			        duration: 10000
			      });
			    } else {
			      sap.m.MessageToast.show("Unknown error!");
			    }
			});
		}
	});
});