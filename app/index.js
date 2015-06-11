require('./vendor')();
const angular = require('angular');
require('./bower_components/lumx/dist/lumx.min.js');
require('./bower_components/angular-formly-templates-lumx/dist/formlyLumx.js');
require('./bower_components/angular-formly-templates-lumx/dist/formlyLumx.css');

const ngModule = angular.module('app', [
    require('angular-ui-router'),
    require('angular-resource'),
    require('angular-material'),
    require('angular-messages'),
    require('angular-aria'),
    require('angular-formly'),
    'lbServices',
    'lumx',
	'formlyLumx',
    'youtube-embed'
]);


require('./config')(angular, ngModule);
require('./modules')(angular, ngModule);
