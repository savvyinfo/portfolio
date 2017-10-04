
// simplifying work later

// var iDo_arr = ["uiux", "app", "navi", "branding", "printed", "display"];
// var iDo_text = ["UI & UX Design", "App & Web Development", "Navigation Architecture",
//                 "Branding & Logo Design", "Corporate Literature", "Trade Show Display"];
//
// for (i=0, j=0; i < iDo_arr.length, j < iDo_text.length; i++, j++) {
//     // debugger;
//     $('#iDo_arr[i]')
//         .hover(function () {
//             console.log('hover works!');
//             $('.work-word-frame-title').empty().text('iDo_text[j]');
//             $('#work-word-lets').css('opacity', '0');
//             $('.work-word-frame-inner').css('background-color', '#00f2f4').addClass('work-word-pic-"iDo_arr[i]"');
//         }, function () {
//             $('.work-word-frame-title').empty();
//             $('#work-word-lets').css('opacity', '1');
//             $('.work-word-frame-inner').css('background-color', '#00f2f4').removeClass('work-word-pic-"iDo_arr[i]"');
//         });
// }



/*  */

$('#uiux')
    .hover(function(){
        $('.work-word-frame-title').empty().text('UI & UX Design');
        $('#work-word-lets').css('opacity','0');
        $('.work-word-frame-inner').addClass('work-word-pic-uiux');
    }, function(){
        $('.work-word-frame-title').empty();
        $('#work-word-lets').css('opacity','1');
        $('.work-word-frame-inner').css('background-color', '#00f2f4').removeClass('work-word-pic-uiux');
    });


$('#app')
    .hover(function(){
        $('.work-word-frame-title').empty().text('App & Web Development');
        $('#work-word-lets').css('opacity','0');
        $('.work-word-frame-inner').addClass('work-word-pic-app');
    }, function(){
        $('.work-word-frame-title').empty();
        $('#work-word-lets').css('opacity','1');
        $('.work-word-frame-inner').css('background-color', '#00f2f4').removeClass('work-word-pic-app');
    });

$('#navi')
    .hover(function(){
        $('.work-word-frame-title').empty().text('Navigation Architecture');
        $('#work-word-lets').css('opacity','0');
        $('.work-word-frame-inner').addClass('work-word-pic-navi');
    }, function(){
        $('.work-word-frame-title').empty();
        $('#work-word-lets').css('opacity','1');
        $('.work-word-frame-inner').css('background-color', '#00f2f4').removeClass('work-word-pic-navi');
    });

$('#branding')
    .hover(function(){
        $('.work-word-frame-title').empty().text('Branding & Logo Design');
        $('#work-word-lets').css('opacity','0');
        $('.work-word-frame-inner').addClass('work-word-pic-branding');
    }, function(){
        $('.work-word-frame-title').empty();
        $('#work-word-lets').css('opacity','1');
        $('.work-word-frame-inner').css('background-color', '#00f2f4').removeClass('work-word-pic-branding');
    });

$('#printed')
    .hover(function(){
        $('.work-word-frame-title').empty().text('Corporate Literature');
        $('#work-word-lets').css('opacity','0');
        $('.work-word-frame-inner').addClass('work-word-pic-printed');
    }, function(){
        $('.work-word-frame-title').empty();
        $('#work-word-lets').css('opacity','1');
        $('.work-word-frame-inner').css('background-color', '#00f2f4').removeClass('work-word-pic-printed');
    });

$('#display')
    .hover(function(){
        $('.work-word-frame-title').empty().text('Trade Show Display');
        $('#work-word-lets').css('opacity','0');
        $('.work-word-frame-inner').addClass('work-word-pic-display');
    }, function(){
        $('.work-word-frame-title').empty();
        $('#work-word-lets').css('opacity','1');
        $('.work-word-frame-inner').css('background-color', '#00f2f4').removeClass('work-word-pic-display');
    });


// $('#uiux')
//     .hover(function(){
//         $('.work-mobile-frame-title').empty().text('UI & UX Design');
//         $('#work-mobile-lets').css('opacity','0');
//         $('.work-mobile-frame-inner').css('background-color', '#00f2f4').addClass('work-mobile-pic-uiux');
//     }, function(){
//         $('.work-mobile-frame-title').empty();
//         $('#work-mobile-lets').css('opacity','1');
//         $('.work-mobile-frame-inner').css('background-color', '#c2ed71').removeClass('work-mobile-pic-uiux');
//     });
//
// $('#interact')
//     .hover(function(){
//         $('.work-mobile-frame-title').empty().text('IxD');
//         $('#work-mobile-lets').css('opacity','0');
//         $('.work-mobile-frame-inner').css('background-color', '#00f2f4').addClass('work-mobile-pic-printed');
//     }, function(){
//         $('.work-mobile-frame-title').empty();
//         $('#work-mobile-lets').css('opacity','1');
//         $('.work-mobile-frame-inner').css('background-color', '#c2ed71').removeClass('work-mobile-pic-printed');
//     });

// $('#app')
//     .hover(function(){
//         $('.work-mobile-frame-title').empty().text('App & Web Development');
//         $('#work-mobile-lets').css('opacity','0');
//         $('.work-mobile-frame-inner').css('background-color', '#00f2f4').addClass('work-mobile-pic-app');
//     }, function(){
//         $('.work-mobile-frame-title').empty();
//         $('#work-mobile-lets').css('opacity','1');
//         $('.work-mobile-frame-inner').css('background-color', '#c2ed71').removeClass('work-mobile-pic-app');
//     });
//
// $('#navi')
//     .hover(function(){
//         $('.work-mobile-frame-title').empty().text('Navigation Architecture');
//         $('#work-mobile-lets').css('opacity','0');
//         $('.work-mobile-frame-inner').css('background-color', '#00f2f4').addClass('work-mobile-pic-navi');
//     }, function(){
//         $('.work-mobile-frame-title').empty();
//         $('#work-mobile-lets').css('opacity','1');
//         $('.work-mobile-frame-inner').css('background-color', '#c2ed71').removeClass('work-mobile-pic-navi');
//     });
//
// $('#branding')
//     .hover(function(){
//         $('.work-mobile-frame-title').empty().text('Branding & Logo Design');
//         $('#work-mobile-lets').css('opacity','0');
//         $('.work-mobile-frame-inner').css('background-color', '#00f2f4').addClass('work-mobile-pic-branding');
//     }, function(){
//         $('.work-mobile-frame-title').empty();
//         $('#work-mobile-lets').css('opacity','1');
//         $('.work-mobile-frame-inner').css('background-color', '#c2ed71').removeClass('work-mobile-pic-branding');
//     });
//
// $('#printed')
//     .hover(function(){
//         $('.work-mobile-frame-title').empty().text('Corporate Literature');
//         $('#work-mobile-lets').css('opacity','0');
//         $('.work-mobile-frame-inner').css('background-color', '#00f2f4').addClass('work-mobile-pic-printed');
//     }, function(){
//         $('.work-mobile-frame-title').empty();
//         $('#work-mobile-lets').css('opacity','1');
//         $('.work-mobile-frame-inner').css('background-color', '#c2ed71').removeClass('work-mobile-pic-printed');
//     });
//
// $('#display')
//     .hover(function(){
//         $('.work-mobile-frame-title').empty().text('Trade Show Display');
//         $('#work-mobile-lets').css('opacity','0');
//         $('.work-mobile-frame-inner').css('background-color', '#00f2f4').addClass('work-mobile-pic-display');
//     }, function(){
//         $('.work-mobile-frame-title').empty();
//         $('#work-mobile-lets').css('opacity','1');
//         $('.work-mobile-frame-inner').css('background-color', '#c2ed71').removeClass('work-mobile-pic-display');
//     });

