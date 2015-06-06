export default (ngModule) => {
    ngModule
        .run(['$rootScope','$window',function($rootScope, $window) {
                    $rootScope.$on('$routeChangeSuccess', function() {
                        $window.scrollTo(0, 0);
                    });
                }]);
}
