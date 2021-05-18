/*
Template Name: Vadmin - Responsive Bootstrap 4 Admin Dashboard
Author: DDV
Website: https://ddv.com/
Contact: support@ddv.com
File: Tickets init js
*/

$(document).ready(function () {
    $('#tickets-table').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='mdi mdi-chevron-left'>",
                "next": "<i class='mdi mdi-chevron-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });
});
