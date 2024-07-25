sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("ui5.skills.controller.SkillList", {
        
		onFilterSkills(oEvent) {
//          oEvent = Parameter des "liveChange"-Events , welches bei jeder Eingabe im Suchfeld "abgefeuert" wird
            const FilterArray = [];
			const SearchQuery = oEvent.getParameter("newValue");
			if (SearchQuery) {
				FilterArray.push(new Filter("Skillname", FilterOperator.Contains, SearchQuery));
			}

			const ItemList = this.byId("skillList");
			const BindingObject = ItemList.getBinding("items");
			BindingObject.filter(FilterArray);
		    },

            onSkillPress(oEvent) {
				const CurrentItem = oEvent.getSource();
				const ObjectRouting = this.getOwnerComponent().getRouter();
				ObjectRouting.navTo("detail", {
			    skillPath: CurrentItem.getBindingContext("skill").getPath().substr(1)
			  });
		    }   
        });
});