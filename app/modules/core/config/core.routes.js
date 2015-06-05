export default (ngModule) => {
    ngModule.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                template: require('../views/index.html')
            })
            .state('auth', {
                url: '/auth',
                template: require('../views/users/login.html')
            })
            .state('auth.login', {
                url: '/login',
                template: require('../views/users/login.html')
            })
            .state('auth.register', {
                url: '/register',
                template: require('../views/users/register.html')
            })
            .state('auth.recover', {
                url: '/recover',
                template: require('../views/users/recover.html')
            })

    }])
}
