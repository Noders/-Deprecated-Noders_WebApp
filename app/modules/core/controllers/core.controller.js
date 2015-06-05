export default (ngModule) => {
    ngModule
        .controller('CoreCtrl', ['$scope', 'LoopBackAuth', '$location', 'Noder',
            function($scope, LoopBackAuth, $location, Noder) {
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

                console.log($location)



                $scope.auth = LoopBackAuth;
                //* auth.currentUserId **/
                $scope.error = {};
            }
        ]);

};
