export default (ngModule) => {
    ngModule
        .controller('SlackCtrl', ['$scope', 'LoopBackAuth', '$location', 'Noder', '$http', '$stateParams',
            function($scope, LoopBackAuth, $location, Noder, $http, $stateParams) {
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
