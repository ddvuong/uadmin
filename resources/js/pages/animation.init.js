/*
Template Name: Vadmin - Responsive Bootstrap 4 Admin Dashboard
Author: DDV
Website: https://ddv.com/
Contact: support@ddv.com
File: Animation demo only
*/

function testAnim(x) {
    $('#animationSandbox').removeClass().addClass('animate__animated animate__' + x).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
};

$(document).ready(function(){
    $('.js--triggerAnimation').click(function(e){
        e.preventDefault();
        var anim = $('.js--animations').val();
        testAnim(anim);
    });

    $('.js--animations').change(function(){
        var anim = $(this).val();
        testAnim(anim);
    });
});
