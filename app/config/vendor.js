export default () => {
    global.$ = global.jQuery = require('jquery'); // for LumX
    global.moment = require('moment'); // for LumX
    require("bootstrap-webpack");
}
