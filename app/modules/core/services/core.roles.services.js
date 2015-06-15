export default (ngModule) => {
    ngModule
        .service('Roles', ['localStorageService', function(localStorageService) {
            function isFounder(){
                return _.includes(localStorageService.get('roles'),'FOUNDER');
            }
            function isAdmin(){
                return _.includes(localStorageService.get('roles'),'ADMIN');
            }
            return {
                isAdmin: isAdmin,
                isFounder: isFounder
            };
        }]);
};
