export default (ngModule) => {
    ngModule.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                template: require('../views/index.html')
            })
            .state('profile', {
                url: '/profile',
                template: require('../views/users/profile.html')
            })
            .state('login', {
                url: '/login',
                template: require('../views/users/login.html')
            })
            .state('register', {
                url: '/register',
                template: require('../views/users/register.html')
            })
            .state('recover', {
                url: '/recover',
                template: require('../views/users/recover.html')
            });

    }]);
};