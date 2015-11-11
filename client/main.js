/*globals require*/

require.config({
	"baseUrl": "./",
	"paths": {
		"ractive": "dependencies/ractive/ractive-legacy",
		"text": "dependencies/text/text",
		"rvc": "dependencies/rvc/dist/rvc",
		"testComponent": "html/test-component"
	}
});

require([
	"./dependencies/rvc/config"
], function (config) {

	require.config(config);

	require(["rvc!testComponent"], function (testComponent) {
		new testComponent();
	});

});
