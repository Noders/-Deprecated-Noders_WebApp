const angular = require('angular');
const ngModule = angular.module('app', [
        require('angular-ui-router'),
        require('angular-resource'),
        'lbServices'
    ]);
require('./config')(angular,ngModule)
require('./modules')(ngModule)
