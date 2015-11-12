/*globals define*/

define([
	"require",
	"ramda",
	"./dependencies/rvc/config"
], function (
	require,
	R,
	rvc_config
) {

	return R.merge(rvc_config, {
		paths: {
		}
	});
});
