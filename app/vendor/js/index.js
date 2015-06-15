export default () => {
    global.$ = global.jQuery = require('jquery');
    require('../../bower_components/velocity/velocity.min.js');
    global.moment = require('moment'); // for LumX
    global._ = require('lodash'); // for LumX
};
