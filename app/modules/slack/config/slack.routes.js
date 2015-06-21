export default (ngModule) => {
    ngModule.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('slack', {
                url: '/slack',
                template: require('../views/form.html')
            })
    }]);
};
