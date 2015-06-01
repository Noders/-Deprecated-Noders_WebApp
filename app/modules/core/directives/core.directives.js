export default (ngModule) => {
    ngModule.directive('headerBar', function() {
        return {
            restrict: 'E',
            template: require('./templates/header.html')
        }
    });

    ngModule.directive('navigationBar', function() {
        return {
            restrict: 'E',
            template: require('./templates/navigation.html')
        }
    });

    ngModule.directive('footerBar', function() {
        return {
            restrict: 'E',
            template: require('./templates/footer.html')
        }
    });


}
