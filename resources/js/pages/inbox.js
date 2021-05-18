/*
Template Name: Vadmin - Responsive Bootstrap 4 Admin Dashboard
Author: DDV
Website: https://ddv.com/
Contact: support@ddv.com
File: Inbox init js
*/

$('input:checkbox').change(function(){
    if($(this).is(":checked")) {
        $(this).parent().parent().parent().addClass("mail-selected");
    } else {
        $(this).parent().parent().parent().removeClass("mail-selected");
    }
});
