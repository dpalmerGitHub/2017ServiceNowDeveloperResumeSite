'use strict';
window.sr = ScrollReveal();
var mainApp = angular.module('mainApp', ['ngSanitize']);
mainApp.controller("mainCtrl", function($scope, $http) {
    $scope.title = `Need A ServiceN<i class="fa fa-power-off" aria-hidden="true"></i>w Developer ?`;
    $http.get("../json/data.json").then(function(response) {
        $scope.data = response.data.model;
    });
});
mainApp.directive("myCircles", function($timeout) {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: "directives/circles.html",
        link: function($scope) {
            $timeout(function() {
                sr.reveal('.circles', {
                    duration: 2000,
                    origin: 'bottom'
                });
            })
        }
    }
})

mainApp.directive("myForm", function($timeout) {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: "directives/form.html",
        link: function($scope) {
            $timeout(function() {
                sr.reveal('.myForm', {
                    duration: 2000,
                    origin: 'top'
                });
            })
        }
    }
})
mainApp.directive("myPanels", function($timeout) {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: "directives/panel.html",
        link: function($scope) {
            $timeout(function() {
                sr.reveal('.myPanel', {
                    duration: 1000,
                    origin: 'top'
                });
                sr.reveal('.myPanel img', {
                    delay: 500,
                    duration: 1000,
                    origin: 'bottom'
                });

                sr.reveal('.myPanel button', {
                    delay: 700,
                    duration: 1000,
                    origin: 'top'
                });
            })
        }
    }

});





$(document).ready(function() {
    /********Heading */
    var name = "Daniel Palmer";
    var heading = 'ServiceN<span style="color:#CC0000"><i class="fa fa-power-off" aria-hidden="true"></i></span>W Developer';
    var headingButtonLeft = "Download Resume";
    var headingButtonRight = "Contact";

    //$("#name").text(name);
    $("#heading").html(heading);
    $("#headingButtonLeft").text(headingButtonLeft);
    $("#headingButtonRight").text(headingButtonRight);

    /*********End heading */

    /**********Experience */
    var heading = "Experience";
    $("#experience .heading").text(heading);
    var panelData = [{
            "title": "Custom Applications",
            "img": "images/customapplication.png",
            "alt": "Custom App Image"
        }, {
            "title": "Instance Administration",
            "img": "images/administration.png",
            "alt": "Admin Image"
        },
        {
            "title": "Platform Development",
            "img": "images/development.png",
            "alt": "Development Image"
        }
    ];

    fillPanel("#panelTitle1", "#panelImage1", panelData[0].title, panelData[0].img, panelData[0].alt);
    fillPanel("#panelTitle2", "#panelImage2", panelData[1].title, panelData[1].img, panelData[1].alt);
    fillPanel("#panelTitle3", "#panelImage3", panelData[2].title, panelData[2].img, panelData[2].alt);

    function fillPanel(panelId, imageId, title, img, alt) {
        $(panelId).text(title);
        $(imageId).attr("src", img);
        $(imageId).attr("alt", alt);
    }

    $(".customApps").on("click", function() {
        growDiv();
    })

    function growDiv() {
        $(".growDiv").toggle("slow");
    }
    /********Experience end */
    /***********About */



    /***********End About */
    //Smooth scroll on navbar link clicks
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
    //end smooth scroll on navbar link clicks

    //Hide drop down that appears when hamburger menu is clicked
    $(document).click(function(event) {
        $('.navbar-collapse').collapse('hide');
    });
    $('.navbar-collapse').mouseleave(function(event) {
        $('.navbar-collapse').collapse('hide');
    });
    //end hide drop down 

    //Scroll reveal settings
    window.sr = ScrollReveal();

    sr.reveal('#about h1', {
        duration: 1000,
        origin: 'top',
        scale: .50
    });
    sr.reveal('#about h2', {
        delay: 500,
        duration: 1000,
        origin: 'bottom'
    });
    sr.reveal('#about h3', {
        delay: 500,
        duration: 1000,
        origin: 'bottom'
    });
    sr.reveal('#about .btnReveal', {
        delay: 500,
        duration: 500,
        origin: 'bottom',
        scale: .50
    });

    sr.reveal('#about img', {
        duration: 2000,
        origin: 'top'
    });

    sr.reveal('.infoLeft', {
        duration: 2000,
        origin: 'left'
    });
    sr.reveal('.infoRight', {
        duration: 2000,
        origin: 'right'
    });
    sr.reveal('#experience .container', {
        duration: 2000,
        origin: 'bottom'
    });

    sr.reveal('#skills .row', {
        duration: 2000,
        origin: 'top'
    });
    sr.reveal('#bio .container', {
        duration: 2000,
        origin: 'right'
    });
    /*sr.reveal('#contact .container', {
        duration: 2000,
        origin: 'bottom'
    });*/
    //end scroll reveal settings
})