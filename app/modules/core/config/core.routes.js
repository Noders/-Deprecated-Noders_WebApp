export default (ngModule) => {
    ngModule.config(['$stateProvider', '$urlRouterProvider',($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('home', {
                url: '/',
                template: require('../views/index.html')
            })
            .state('login', {
                url: '/login',
                template: require('../views/users/login.html')
            });
    }])
}
