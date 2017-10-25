var mainApp = angular.module("mainApp");
mainApp.directive("myMenu", function($timeout) {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: "directives/myMenu.html",
        link: function() {
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
        }
    }
})

mainApp.directive("myIntro", function($timeout) {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: "directives/intro.html",
        link: function($scope) {
            $timeout(function() {
                sr.reveal('#about h1', {
                    duration: 1000,
                    origin: 'top',
                    scale: .50
                });
                sr.reveal('#about .introLeft', {
                    duration: 1000,
                    origin: 'left',
                    scale: .50
                });
                sr.reveal('#about .introRight', {
                    duration: 1000,
                    origin: 'right',
                    scale: .50
                });
                sr.reveal('#about .myIntro', {
                    duration: 2000,
                    origin: 'bottom',

                }, 500);
            })
        }
    }
})
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

mainApp.directive("myProfile", function($timeout) {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: "directives/myProfile.html",
        link: function($scope) {
            $timeout(function() {
                sr.reveal('#bio .myProfile', {
                    duration: 2000,
                    origin: 'bottom',

                }, 300);
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