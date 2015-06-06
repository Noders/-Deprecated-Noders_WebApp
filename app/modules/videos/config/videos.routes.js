export default (ngModule) => {
    ngModule.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('videos', {
                url: '/videos',
                template: require('../views/list.html')
            })

            .state('videoList', {
                url: '/videos/:id/:videoName',
                template: require('../views/view.html')
            });
    }]);
};
