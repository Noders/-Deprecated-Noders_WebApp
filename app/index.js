require('./vendor')();
const angular = require('angular');
require('./bower_components/lumx/dist/lumx.min.js');

const ngModule = angular.module('app', [
    require('angular-ui-router'),
    require('angular-resource'),
    require('angular-material'),
    'lbServices',
    'lumx'
]);
require('./config')(angular, ngModule);
require('./modules')(angular, ngModule);
