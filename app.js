$(document).ready(function(){
    $('.close-nav').removeClass('active');

    $('.burger-nav').click(function () {
        $('.list1').fadeIn('200');
        $('.close-nav').addClass('active');
        $('.burger-nav').addClass('active');
    });

    $('.close-nav').click(function () {
        $('.list1').fadeOut('200');
        $(this).removeClass('active');
        $('.burger-nav').removeClass('active')
    });
});