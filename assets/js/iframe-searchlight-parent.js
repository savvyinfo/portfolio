

$(document).ready(function(){
    $("#about-blink-container").click(function(e) {
        console.log('blink clicked!');
        $('iframe').contents().find(".spotlight")
            .css("left",e.clientX-100).css("top", e.clientY-100)
            .css("opacity", 0.97);

        $('.blink-click').css("opacity", 0);
    });

    // $('iframe').contents().find("#blink-text-about").css({});

    // $("#portfolio-blink").click(function(e) {
    //     console.log('blink clicked!');
    //     $('iframe').contents().find(".spotlight").css("left",e.clientX-100).css("top", e.clientY-100);
    // });
});