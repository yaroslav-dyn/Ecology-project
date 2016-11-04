$(document).ready(function(){


    $(".menu ul li").on("click", function(){

        $(this).parent().find('li').removeClass("current");

        $(this).addClass("current");

    });


    // *function for checking elem. top position
    function sectionPosition(elPos) {
        var sPos = elPos;
        return sPos.offset().top;


    }

    $(window).on('scroll',function(){



        var docStop = $(this).scrollTop(),
            sidePos = sectionPosition($('.header-inner')),
            fixMan = sectionPosition($('.header-inner'));

        console.log(fixMan);

         if(fixMan === 0){
            $('.header-inner').removeClass("fixed");
            $('.logo').css("display","block");

             //console.log('0');
        }
        else if(sidePos >= sidePos  ){
            $('.header-inner').addClass("fixed");
            $('.logo').css("display","none");
        }
        console.log(sidePos);
    });








});//end ready

