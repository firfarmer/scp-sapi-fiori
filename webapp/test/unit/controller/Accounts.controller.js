/*global QUnit*/

sap.ui.define([
	"com/concurit/sapi/sapi/controller/Accounts.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Accounts Controller");

	QUnit.test("I should test the Accounts controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});