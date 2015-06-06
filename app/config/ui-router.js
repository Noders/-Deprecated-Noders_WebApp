export default (ngModule) => {
    ngModule
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
            $urlRouterProvider.otherwise("/");
          
        }])
}
