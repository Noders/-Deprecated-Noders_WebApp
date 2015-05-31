export default (ngModule) => {
	require('./config/core.routes')(ngModule);
	require('./controllers/auth.controller')(ngModule);
	require('./controllers/core.controller')(ngModule);
	require('./controllers/header.controller')(ngModule);
	require('./directives/core.directives')(ngModule);
	require('./css/core.css');
	require('./css/style.css');
	require('font-awesome-webpack');
    require('metismenu')
}