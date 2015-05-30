export default (angular,ngModule) => {
  	require('./ui-router')(ngModule);
	require('./vendor')(ngModule);
	require('./NodersAPI')(angular);
}