export default (ngModule) => {
    ngModule
        .controller('HeaderCtrl', ['$scope', '$location', 'Noder', 'LoopBackAuth', '$timeout', '$mdSidenav', '$mdUtil', 'Sidebar',
            function($scope, $location, Noder, LoopBackAuth, $timeout, $mdSidenav, $mdUtil, Sidebar) {

                $scope.isLoggedIn = function() {
                    if (LoopBackAuth.currentUserId) {
                        return true;
                    } else {
                        return false;
                    }
                };
                
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
                    Noder.login({
                        username: $scope.username,
                        password: $scope.password
                    }, function(data) {
                        $location.path('/');
                    }, function(data) {
                        if (data.data.error.code == "LOGIN_FAILED") {
                            $scope.error.notfound = true;
                        }
                    });
                };
                var buildToggler = function(navId) {
                    var debounceFn = $mdUtil.debounce(function() {
                        $mdSidenav(navId)
                            .toggle()
                            .then(function() {});
                    }, 300);
                    return debounceFn;
                };
                $scope.toggleSideBar = buildToggler('left');
            }
        ]);
};
