/*
Template Name: Vadmin - Responsive Bootstrap 4 Admin Dashboard
Author: DDV
Website: https://ddv.com/
Contact: support@ddv.com
File: Responsive table init js
*/

!function($) {
    "use strict";

    var ResponsiveTable = function() {};

    ResponsiveTable.prototype.init = function () {
        $('.table-rep-plugin').responsiveTable('update');
    },
    $.ResponsiveTable = new ResponsiveTable, $.ResponsiveTable.Constructor = ResponsiveTable

}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.ResponsiveTable.init()
}(window.jQuery);
