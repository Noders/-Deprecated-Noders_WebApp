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
            })
            .state('events_view', {
                url: '/events/:id',
                template: require('../views/view.html')
            })
            .state('events_edit', {
                url: '/events/:id/edit',
                template: require('../views/edit.html')
            });

    }]);
};
