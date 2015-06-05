export default (ngModule) => {
    ngModule
        .controller('SidebarCtrl', ['$scope', 'Sidebar', 'LoopBackAuth',
            function($scope, Sidebar, LoopBackAuth) {
                $scope.Sidebar = Sidebar;
                $scope.isLoggedIn = function() {
                    if (LoopBackAuth.currentUserId) {
                        return true;
                    } else {
                        return false;
                    }
                };

            }
        ]);
};
