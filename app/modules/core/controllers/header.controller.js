export default (ngModule) => {
    ngModule
        .controller('HeaderController', ['$scope', 'Authentication', 'Menus', 'Sidebar',
            function($scope, Authentication, Menus, Sidebar) {
                $scope.Sidebar = Sidebar;
                console.log($scope.Sidebar)
                $scope.authentication = Authentication;
                $scope.isCollapsed = false;
                $scope.menu = Menus.getMenu('topbar');
                $scope.isNotAdmin = false;

                if (!_.intersection($scope.authentication.user.roles, ['admin']).length) {
                    $scope.isNotAdmin = true;
                } else {
                    $scope.isNotAdmin = false;
                }

                $scope.toggleCollapsibleMenu = function() {
                    $scope.isCollapsed = !$scope.isCollapsed;
                };

                // Collapsing the menu after navigation
                $scope.$on('$stateChangeSuccess', function() {
                    $scope.isCollapsed = false;
                });
            }
        ]);
};