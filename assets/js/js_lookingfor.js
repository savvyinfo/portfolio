$(function(){
    $(document).bind('mousemove', function(e){
        $('#lookingfor').css({
            left:  e.pageX -80,
            top:   e.pageY - 80
        });
    });
});
