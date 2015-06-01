export default (ngModule) => {
    ngModule
        .controller('CoreCtrl', ['$scope', 'LoopBackAuth', '$location', 'Noder', function($scope, LoopBackAuth, $location, Noder) {
            /* Re-generar la informacion del usuario cuando reinicio el server */
            $scope.checkUserState = function() {
                if (LoopBackAuth.currentUserId) {
                    return "logged"
                } else {
                    return "not-logged"
                }
            }
            if (LoopBackAuth.currentUserId) {
                Noder.findById({
                    'id': LoopBackAuth.currentUserId
                }, function(data) {
                    LoopBackAuth.currentUserData = data
                })
            }
            if ($location.$$path != '/') {
                if (!LoopBackAuth.currentUserId) {
                    $location.path('/login');
                } else {
                    //$location.path('/')
                }
            }



            $scope.auth = LoopBackAuth;
            //* auth.currentUserId **/
            $scope.error = {}
            $scope.logout = function() {
                Noder.logout().$promise.then(function(data) {
                    $location.path('/')
                })
            }
            $scope.login = function() {
                Noder.login({
                    username: $scope.username,
                    password: $scope.password
                }, function(data) {
                    $location.path('/')
                }, function(data) {
                    if (data.data.error.code == "LOGIN_FAILED") {
                        $scope.error.notfound = true;
                    }
                })
            }
        }]);

}
