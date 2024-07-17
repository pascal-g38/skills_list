sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], (UIComponent, JSONModel) => {
	"use strict";

	return UIComponent.extend("ui5.skills.Component", {
		metadata: {
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
			manifest: "json"
		},

		init() {
			UIComponent.prototype.init.apply(this, arguments);

			const oData = {
				recipient: {
					name: "list"
				}
			};
			const oModel = new JSONModel(oData);
			this.setModel(oModel);
		}
	});
});
