export default (ngModule) => {
    ngModule
        .controller('VideosCtrl', ['$scope', 'LoopBackAuth', '$location', 'Noder', '$http', '$stateParams',
            function($scope, LoopBackAuth, $location, Noder, $http, $stateParams) {
                $scope.isLoggedIn = function() {
                    if (LoopBackAuth.currentUserId) {
                        return true;
                    } else {
                        return false;
                    }
                };
                console.log(LoopBackAuth.roles)


                if (LoopBackAuth.currentUserId) {
                    Noder.findById({
                        'id': LoopBackAuth.currentUserId
                    }, function(data) {
                        LoopBackAuth.currentUserData = data;
                    });
                }




                $scope.auth = LoopBackAuth;
                //* auth.currentUserId **/
                $scope.error = {};

                $scope.getLatestVideos = function() {
                    var id = "UU7tUsO3S7424TMcgSCUOCow";
                    $http.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12&playlistId=" + id + "&key=" + "AIzaSyBo23LhSupwDkusUkKPcq0HOUvwxMgTNb8")
                        .success(function(data, err) {
                            $scope.videos = data.items;
                            console.log($scope.videos)
                        }).error(function(data, err) {
                            console.log(data)
                        })
                }

                $scope.getOne = function() {
                    $scope.video = {};
                    $scope.video.id = $stateParams.id;
                    $scope.video.videoName = $stateParams.videoName;
                    $scope.theBestVideo = $scope.video.id;


                    $scope.$on('youtube.player.ready', function($event, player) {
                        // play it again
                        player.playVideo();
                    });

                    $http.get("https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&maxResults=12&id=" + $scope.video.id + "&key=" + "AIzaSyBo23LhSupwDkusUkKPcq0HOUvwxMgTNb8")
                        .success(function(data, err) {
                            $scope.video.data = data.items[0];
                            console.log($scope.video)
                        }).error(function(data, err) {
                            console.log(data)
                        })
                }
            }
        ]);

};
