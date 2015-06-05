export default (ngModule) => {
    ngModule
        .controller('EventsCtrl', ['$scope', 'LoopBackAuth', '$location', 'Noder', 'Evento', 'LxProgressService',
            function($scope, LoopBackAuth, $location, Noder, Evento, LxProgressService) {
                LxProgressService.circular.show('#5fa2db', '#progress');
                Evento.find({filter:{"include":"comunidad"}})
                    .$promise
                    .then(function(eventos) {
                        LxProgressService.circular.hide();
                        $scope.eventos = eventos;
                        console.log($scope.eventos);
                    });
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



                $scope.auth = LoopBackAuth;
                $scope.error = {};
            }
        ]);

};