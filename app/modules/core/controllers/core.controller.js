export default (ngModule) => {
    ngModule
        .controller('CoreCtrl', ['$scope', 'LoopBackAuth', '$location', 'Noder', '$rootScope', 'Sidebar', '$http', 'uiGmapGoogleMapApi',
            function($scope, LoopBackAuth, $location, Noder, $rootScope, Sidebar, $http, uiGmapGoogleMapApi) {
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


                $scope.map = {};
                $scope.map.center = {
                    latitude: -16.0,
                    longitude: -70.0
                };

                $scope.map.zoom = 2;
                $http.get('http://api.noders.com/api/partners')
                    .success(function(partners) {
                        $scope.partners = partners;
                    });

                $http.get('http://api.noders.com/api/noders')
                    .success(function(noders) {
                        $scope.noders = noders;
                    });
                $http.get('http://api.noders.com/api/eventos')
                    .success(function(eventos) {
                        $scope.eventos = eventos;
                    });

                uiGmapGoogleMapApi.then(function(maps) {
                    $http.get('http://api.noders.com/api/comunidades')
                        .success(function(hosts) {
                            console.log(hosts)
                            var comunidades = [];
                            _.each(hosts, function(noder, i) {
                                var ob = {};
                                ob.id = noder.id;
                                ob.latitude = noder.geo.lat;
                                ob.longitude = noder.geo.lng;
                                ob.title = noder.name;
                                comunidades.push(ob);
                            });
                            $scope.map.comunidades = comunidades;
                        });

                });
            }
        ]);

};
