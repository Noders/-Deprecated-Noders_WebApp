export default (ngModule) => {
    ngModule.config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('home', {
                url: '/',
                template: require('../views/index.html')
            });
    })
}
