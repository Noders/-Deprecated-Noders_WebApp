export default (ngModule) => {
    ngModule
        .controller('CoreCtrl', ['$scope', 'LoopBackAuth', '$location', 'Noder', '$rootScope', 'Sidebar',
            function($scope, LoopBackAuth, $location, Noder, $rootScope, Sidebar) {
                $scope.Sidebar = Sidebar;
                $scope.isLoggedIn = function() {
                    if (LoopBackAuth.currentUserId) {
                        return true;
                    } else {
                        return false;
                    }
                };

                if (LoopBackAuth.currentUserId) {
                    Noder.findById({
                        'id': LoopBackAuth.currentUserId
                    }, function(data) {
                        LoopBackAuth.currentUserData = data;
                    });
                }


                $rootScope.$on('$stateChangeSuccess',
                    function(event, toState, toParams, fromState, fromParams) {
                        $scope.Sidebar.hideSideBar();
                    });


                $scope.auth = LoopBackAuth;
                //* auth.currentUserId **/
                $scope.error = {};
            }
        ]);

};
