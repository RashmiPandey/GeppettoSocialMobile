/**
 * @author Rashmi
 * @date Jan'04 2016
 *
 */

angular.module('Geppetto_social_mobile')
  .controller('HomeController', ['$scope', '$rootScope', '$location', '$state', '$window', '$q', '$http', '$ionicPopup', 'RestURL', 'OpenFB',
    function ($scope, $rootScope, $location, $state, $window, $q, $http, $ionicPopup, RestURL, OpenFB) {
         var self = $scope;

        self.GPlusLogin = function () {
            try {
                if ($rootScope.env == 'DEV') {
                    $scope.showAlert('Not allowed in Development Environment!');
                } else {
                    $window.plugins.googleplus.login(
                        {},
                        function (obj) {
                            $scope.showAlert("SUCCESS LOGIN: " + obj.email);
                            $state.go('home');
                        },
                        function (msg) {
                            $scope.showAlert("ERROR: " + msg);
                            $state.go('home');
                        }
                    );
                }
            } catch (d) {
                console.log("ERRROR......." + d);
            }
        };

        $scope.facebookLogin = function () {
            if ($rootScope.env == 'DEV') {
                $scope.showAlert('Not allowed in Development Environment!');
            } else {
                OpenFB.login('email').then(
                    function () {
                        OpenFB.get('/me').success(function (user) {
                            $scope.showAlert("FB login succeeded" + user.id);
                            $state.go('home');
                        });
                    },
                    function (msg) {
                        $scope.showAlert("OpenFB login failed" + msg);
                        $state.go('home');
                    });
            }
        };

        self.go = function (url) {
            $state.go(url);
        };

        self.showAlert = function (msg) {
            var alertPopup = $ionicPopup.alert({
                title: 'Result: ',
                template: msg
            });
            alertPopup.then(function (res) {
                console.log('Thanks');
            });
        };
    }]);
