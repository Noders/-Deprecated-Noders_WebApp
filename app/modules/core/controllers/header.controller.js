export default (ngModule) => {
    ngModule
        .controller('HeaderCtrl', ['$scope', '$location', 'Noder', 'LoopBackAuth', '$timeout', '$mdSidenav', '$mdUtil', 'Sidebar',
            function($scope, $location, Noder, LoopBackAuth, $timeout, $mdSidenav, $mdUtil, Sidebar) {

                $scope.Sidebar = Sidebar;
                $scope.auth = LoopBackAuth;
                //* auth.currentUserId **/
                $scope.error = {};

                $scope.isLoggedIn = function() {
                    if (LoopBackAuth.currentUserId) {
                        return true;
                    } else {
                        return false;
                    }
                };

                $scope.logout = function() {
                    Noder.logout().$promise.then(function(data) {
                        $location.path('/');
                    });
                };

            }
        ]);
};
