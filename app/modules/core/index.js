export default (ngModule) => {
	require('./config/core.routes')(ngModule);
	require('./controllers/auth.controller')(ngModule);
	require('./controllers/core.controller')(ngModule);
}