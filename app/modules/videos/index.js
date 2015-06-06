export default (angular, ngModule) => {


    /* Directiva para videos de youtube responsivos*/
    require('../../vendor/js/youtube_iframe_api');
    require('../../bower_components/angular-youtube-mb/dist/angular-youtube-embed.min.js');
    /* FIN */


    require('./config/videos.routes')(ngModule);
    require('./controllers/videos.controller')(ngModule);
    require('./directives/videos.directives')(ngModule);
    require('./css/videos.css');
};
