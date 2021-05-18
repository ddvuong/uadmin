/*
Template Name: Vadmin - Responsive Bootstrap 4 Admin Dashboard
Author: DDV
Website: https://ddv.com/
Contact: support@ddv.com
File: Add New Product
*/

jQuery(document).ready(function(){
    // Summernote
    $('#product-description').summernote({
        height: 180,                 // set editor height
        minHeight: null,             // set minimum height of editor
        maxHeight: null,             // set maximum height of editor
        focus: false                 // set focus to editable area after initializing summernote
    });

    // Select2
    $('.select2').select2();
});
