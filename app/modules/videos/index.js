export default (angular, ngModule) => {
    require('./config/videos.routes')(ngModule);
    require('./controllers/videos.controller')(ngModule);
    require('./directives/videos.directives')(ngModule);
};
