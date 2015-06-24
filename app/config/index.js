export default (angular,ngModule) => {
  	require('./ui-router')(ngModule);
	require('./config')(ngModule);
	require('./run')(ngModule);
	require('./maps')(ngModule);
}