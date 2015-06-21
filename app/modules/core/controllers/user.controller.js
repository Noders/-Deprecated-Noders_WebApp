export default (ngModule) => {
    ngModule
        .controller('UserCtrl', ['$scope', '$location', 'Noder', 'LoopBackAuth', '$timeout', '$mdSidenav', '$mdUtil', 'Sidebar', 'localStorageService',
            function($scope, $location, Noder, LoopBackAuth, $timeout, $mdSidenav, $mdUtil, Sidebar, localStorageService) {
                $scope.Sidebar = Sidebar;
                $scope.auth = LoopBackAuth;
                //* auth.currentUserId **/
                $scope.error = {};
                $scope.logout = function() {
                    Noder.logout().$promise.then(function(data) {
                        $location.path('/');
                    });
                };
                $scope.login = function() {
                    $scope.processingLoading = true;
                    Noder.login({
                        username: $scope.username,
                        password: $scope.password
                    }, function(data) {
                        Noder.prototype$roles({
                            id: data.userId
                        }, function(data) {
                            $scope.processingLoading = false;

                            localStorageService.set('roles', data.roles);
                            $location.path('/');
                        });
                    }, function(data) {
                        $scope.processingLoading = false;
                        if (data.data.error.code == "LOGIN_FAILED") {
                            $scope.error.notfound = true;
                        }
                    });
                };
            }
        ]);
};
