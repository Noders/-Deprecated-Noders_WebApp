export default (angular,ngModule) => {
  	require('./ui-router')(ngModule);
	require('./config')(ngModule);
}