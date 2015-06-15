export default (angular, ngModule) => {
    require('./config/core.routes')(ngModule);
    require('./controllers/header.controller')(ngModule);
    require('./controllers/core.controller')(ngModule);
    require('./controllers/user.controller')(ngModule);
    require('./controllers/sidebar.controller')(ngModule);
    require('./directives/core.directives')(ngModule);
    require('./services/core.header.services')(ngModule);
    require('./services/core.roles.services')(ngModule);
    require('./services/NodersAPI.services')(angular, ngModule);
    require('./css')(angular, ngModule);
}
