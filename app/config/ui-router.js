export default (ngModule) => {
    ngModule.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise("/");

    }])
}
