$(document).ready(function(){

    $(".cat-bt").click(function(){
        $(".cat-ct").hide();
        $("." + $(this).attr("data-target")).show();

        $(".cat-bt").removeClass("active");
        $(this).addClass("active");
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 140) {
            $('.hj-header').addClass('sticky');
        }
        else {
            $('.hj-header').removeClass('sticky');
        }
    });

});