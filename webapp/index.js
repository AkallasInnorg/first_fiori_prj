// sap.ui.define([
// 	"sap/m/Text"
// ], function (Text) {
// 	"use strict";


// 	// alert("UI5 is ready");
// 	new Text({
// 		text: "Hello World"
// 	}).placeAt("content");
// });

// sap.ui.define([
// 	"sap/ui/core/mvc/XMLView"
// 	// "webapp/views/app.view.xml"
// ], function (XMLView) {
// 	"use strict";
// 	XMLView.create({
// 		viewName: "sap.ui.demo.walkthrough.view.App"
// 	}).then(function (oView) {
// 		oView.placeAt("content");
// 	});
// });

sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "sap.ui.demo.walkthrough",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
});

// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
//  ], function (Controller) {
//     "use strict";
//     return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
//         onShowHello : function () {
//            // show a native JavaScript alert
//            alert("Hello World");
//         }
//      });
//  });
