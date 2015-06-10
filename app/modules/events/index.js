export default (angular, ngModule) => {
    require('./config/events.routes')(ngModule);
    require('./controllers/events.controller')(ngModule);
    require('./directives/events.directives')(ngModule);
    require('./css')(ngModule);
};
