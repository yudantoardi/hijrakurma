$(document).ready(function(){

    $(".cat-bt").click(function(){
        $(".cat-ct").hide();
        $("." + $(this).attr("data-target")).show();

        $(".cat-bt").removeClass("active");
        $(this).addClass("active");
    });

});