export default (ngModule) => {
    ngModule.config(['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            //    key: 'your api key',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    }]);
};
