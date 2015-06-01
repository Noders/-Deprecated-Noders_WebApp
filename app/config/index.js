export default (angular,ngModule) => {
  	require('./ui-router')(ngModule);
	require('./NodersAPI')(angular);
	require('./config')(ngModule);
}