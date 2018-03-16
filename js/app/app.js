  var SECTION = 'view';
    //console.log("SECTION", SECTION);
		//var DoAnalytics = angular.module('DoAnalytics', ["highcharts-ng", "ngRoute", "ngAnimate"]);
		var DoAnalytics = angular.module('DoAnalytics', []);

		DoAnalytics.config(['$interpolateProvider', function($interpolateProvider) {
      $interpolateProvider.startSymbol('{[');
      $interpolateProvider.endSymbol(']}');
    }]);
 

    