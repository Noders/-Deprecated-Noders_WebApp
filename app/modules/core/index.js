export default (angular, ngModule) => {
    require('./config/core.routes')(ngModule);
    require('./controllers/auth.controller')(ngModule);
    require('./controllers/core.controller')(ngModule);
    require('./controllers/header.controller')(ngModule);
    require('./directives/core.directives')(ngModule);
    require('./services/core.header.services')(ngModule);
}
