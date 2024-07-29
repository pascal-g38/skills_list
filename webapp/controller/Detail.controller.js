sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/history",
//	"sap/ui/richtexteditor/RichTextEditor"
//], (Controller, History, RichTextEditor) => {
//	"use strict";
], (Controller, History) => {
	"use strict";

	return Controller.extend("ui5.skills.controller.Detail", {
		onInit() {
			const ObjectRouting = this.getOwnerComponent().getRouter();
			ObjectRouting.getRoute("detail").attachPatternMatched(this.onObjectMatched, this);
		},

		onObjectMatched(oEvent) {
			this.getView().bindElement({
				path: "/" + oEvent.getParameter("arguments").skillPath,
				model: "skill"
			});
		},

		onBackButtonPress() {
			const ObjectHistory = History.getInstance();
			const PreviousObjectsHash = ObjectHistory.getPreviousHash();

			if (PreviousObjectsHash !== undefined) {
				window.history.go(-1);
			} 
			else {
				const ObjectRouting = this.getOwnerComponent().getRouter();
				ObjectRouting.navTo("overview", {}, true);
			}
		}
    });
});