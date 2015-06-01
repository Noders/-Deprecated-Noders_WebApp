export default (ngModule) => {
    ngModule.config(['$mdThemingProvider', ($mdThemingProvider) => {

        $mdThemingProvider
            .theme('default')
            .primaryPalette('green')
            .accentPalette('orange')
            .warnPalette('red')
            .backgroundPalette('grey')
            .dark();

        
        $mdThemingProvider.theme('greenish')
            .primaryPalette('grey')
            .accentPalette('green')
            .dark();
    }])
}
