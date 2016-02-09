/**
 *
 * @author Rashmi</br>
 * Date Created: Feb 05'2016</br>
 * 
 *
 */


'use strict';

//angular.module('Geppetto_social_mobile', ['ionic']);
var app = angular.module('Geppetto_social_mobile',
    [
        'ionic',
        'openfb'
    ]
);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('home', {
            url: '/home',
            controller: 'HomeController',
            templateUrl: 'app/views/en-US/user/home.html'
        })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');

})

.run(function ($ionicPlatform, OpenFB,$rootScope) {
	$rootScope.env = "PROD";
    OpenFB.init('1008436239221044');
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
});