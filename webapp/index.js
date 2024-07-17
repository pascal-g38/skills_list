sap.ui.define([
	"sap/ui/core/mvc/XMLView",
	"sap/ui/core/ComponentContainer"
], (XMLView, ComponentContainer) => {
	"use strict";

	new ComponentContainer({
		name: "ui5.skills",
		async: true
	}).placeAt("list")

});