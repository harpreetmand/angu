/* use strict */
var app = angular.module('MyApp', []);
app.directive('walterwhite', function()
{
	// return {
	// 	restrict: 'E',
	// 	transclude: true,
	// 	template: '<h2>im heinsberg</h2>'
	// }
	return{
		restrict: "E",
		transclude: true,
		link: function(scope, element, attrs){
			
		}
	}
});