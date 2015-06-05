export default (angular,ngModule) => {
	require('./core')(angular,ngModule);
	require('./events')(angular,ngModule);
	require('./videos')(angular,ngModule);
}