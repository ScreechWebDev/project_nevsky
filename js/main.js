$(document).ready(function () {
    $('.menu-item').click(function(){
        $('.menu-item_active').removeClass('menu-item_active');
        $(this).addClass('menu-item_active');
    });
});