sap.ui.define([
"sap/ui/core/mvc/Controller",
], (Controller) => {
//	"use strict";

    return Controller.extend("ui5.skills.controller.RTE", {
		onInit() {
//			var sText = '<p style="text-align: justify; background: white; font-size: 10pt; font-family: Calibri, sans-serif;"><strong><span style="font-size: 10.5pt; font-family: sans-serif; color: black;">Hier könnte ihr Text stehen</span></strong>';
            var sText = 'Hier koennte ihr Text stehen';

            sap.ui.require([
           "sap/ui/richtexteditor/RichTextEditor"
            ], (RichTextEditor) => {

			var RichTextEditorObject = new RichTextEditor({
			width: "100%",
			height: "600px",
            showGroupFont: true,
            showGroupLink: true,
            showGroupInsert: true,
			value: sText,
            ready() {
            this.addButtonGroup("styles").addButtonGroup("table")
            }
			});
			this.getView().byId("richTextEditorId").addContent(RichTextEditorObject);
           })
        }
      });
   });  
