export default (ngModule) => {
    ngModule.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('events', {
                url: '/events',
                template: require('../views/list.html')
            })
            .state('events_create', {
                url: '/events/create',
                template: require('../views/create.html')
            });
    }]);
};
