export default (angular, ngModule) => {


    /* Directiva para videos de youtube responsivos*/
    require('./config/slack.routes')(ngModule);
    require('./controllers/slack.controller')(ngModule);
    require('./css/slack.css');
};
