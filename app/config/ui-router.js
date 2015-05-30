export default (ngModule) => {
    ngModule.config(($stateProvider, $urlRouterProvider) => {
         $urlRouterProvider.otherwise("/");

    })
}
