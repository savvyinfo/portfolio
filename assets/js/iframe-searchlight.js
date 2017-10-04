
$(document).ready(function(){
    $('.ha').on("mousemove", function(e){

        $(".spotlight").css("left",e.clientX-100).css("top", e.clientY-100);
        // $('#lookingfor').css("left",e.clientX-80).css("top", e.clientY-80);

    })
        .on("click", function(e){
            console.log('ha clicked!');
            $(".spotlight").css("left",e.clientX-100).css("top", e.clientY-100);
            // $('#lookingfor').css("left",e.clientX-80).css("top", e.clientY-80);

        });

    $('.back_container').on("click", function(e){
        console.log('back container clicked!');
        $(".spotlight").css("left",e.clientX-100).css("top", e.clientY-100);
        // $('#lookingfor').css("left",e.clientX-80).css("top", e.clientY-80);
    });

});

