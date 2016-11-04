
/*
include parts like: //= part.js
*/




var app = angular.module("eco-app", ["ngRoute"]);

    app.controller('dataCtrl', function ($scope, $http) {

        $scope.siteNameF = "ENERGY";
        $scope.siteNameB = "GREEN";
        $scope.siteSlogan = "You Live More Sustainably";


        $http.get('../data/news.json').success(function(data) {
            $scope.posts = data;

        });



       $scope._Index = 0;
       $scope.showIndex = function(index){
           $scope._Index  =  index ;
       };

    });

    app.controller('mainData', function ($scope) {


    });

//routing
    app.config(function($routeProvider) {
        $routeProvider

            .when("/", {
                templateUrl : "html-parts/main.html"
            })

            .when("/aboutUs", {
                templateUrl : "html-parts/about_us.html"

            })
            .when("/contactUs", {
                templateUrl : "html-parts/contact_us.html"

            })
            .when("/news", {
                templateUrl : "html-parts/services.html"
            })
            .when("/postPage", {
                templateUrl : "html-parts/post-page.html"
                //controller  : 'dataCtrl'
            })



    });
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