export default () => {
    global.moment = require('moment'); // for LumX
    require('angular-animate');
    require('angular-aria');
    require('font-awesome-webpack');
    //require('angular-material/angular-material.min.css');
    global.$ = global.jQuery = require('jquery');
    require('velocity-animate');
    //import lumx CSS
    require('imports?angular!../bower_components/lumx/dist/lumx.css');
    //import material design
    require('mdi/css/materialdesignicons.min.css');
    //import lumx JS
    require('imports?angular!../bower_components/lumx/dist/lumx.min.js');

};
