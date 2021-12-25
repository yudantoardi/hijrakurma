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

    $(".pop-link").click(function(pl){
        pl.preventDefault();

        $(".overlay").addClass("show");

        $(".popup-ct img").remove();
        $(".popup-ct figure").append("<img src='" + $(this).attr("href") + "'>");

        $(".popup-ct .caption p").remove();
        $(".popup-ct .caption").append("<p>" + $(this).attr("data-caption") + "</p>");
    });
    $(".popup .bt-close").click(function(){
        $(".overlay").removeClass("show");
    });

    $(".burger").click(function(){
        $(".hj-nav").toggleClass("show");
        $($(this).children()).toggleClass("fa-times fa-bars");
    });

});