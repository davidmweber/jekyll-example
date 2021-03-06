/**
    * @package Stability Responsive HTML5 Template
    * 
    * Template Scripts
    * Created by Dan Fisher

    Init JS
    
    1. Main Navigation
    2. Isotope
    3. Magnific Popup
    4. Flickr
    5. Carousel (based on owl carousel plugin)
    6. Content Slider (based on owl carousel plugin)
    7. FitVid (responsive video)
    8. Sticky Header
    9. Shape Boxes
*/

jQuery(function($){


	function checkWindowSize() {
	   var pageWidth = $(window).width();  
	   if ( pageWidth <= 480 ) {
			$('.block-row .block-col').css('padding-top','none !important');
			$('.block-row .block-col').css('margin-top','none !important');
		}
	}
	
	$(document).ready(function() {
		checkWindowSize();
		$(window).resize(checkWindowSize);  
	});
	
	$(".block-content span.close-par").click( function (e) {
		$('.icon-box-body').fadeOut();
        $('.icon').removeClass('active-block');
        var e = $('.block-row > div').slice(-3);
        $(e).css({
            'margin-top':'0',
            'padding-top':'0'            
        });
		$('.site-wrapper').css({
			'padding-bottom': 'none'});
	});


    /* ----------------------------------------------------------- */
    /*  1. Main Navigation
    /* ----------------------------------------------------------- */


    $(".flexnav").flexNav({
        'animationSpeed':     200,            // default for drop down animation speed
        'transitionOpacity':  true,           // default for opacity animation
        'buttonSelector':     '.navbar-toggle', // default menu button class name
        'hoverIntent':        true,          // Change to true for use with hoverIntent plugin
        'hoverIntentTimeout': 50,            // hoverIntent default timeout
        'calcItemWidths':     false,          // dynamically calcs top level nav item widths
        'hover':              true            // would you like hover support?      
    });


    /* ----------------------------------------------------------- */
    /*  2. Isotope
    /* ----------------------------------------------------------- */

    (function() {


        // Portfolio settings
        var $container          = $('.project-feed');
        var $filter             = $('.project-feed-filter');

        $(window).smartresize(function(){
            $container.isotope({
                filter              : '*',
                resizable           : true,
                layoutMode: 'sloppyMasonry',
                itemSelector: '.project-item'
            });
        });

        $container.imagesLoaded( function(){
            $(window).smartresize();
        });

        // Filter items when filter link is clicked
        $filter.find('a').click(function() {
            var selector = $(this).attr('data-filter');
            $filter.find('a').removeClass('btn-primary');
            $(this).addClass('btn-primary');
            $container.isotope({ 
                filter             : selector,
                animationOptions   : {
                animationDuration  : 750,
                easing             : 'linear',
                queue              : false
                }
            });
            return false;
        });
       
    })();


    /* ----------------------------------------------------------- */
    /*  3. Magnific Popup
    /* ----------------------------------------------------------- */
    $('.popup-link').magnificPopup({
        type:'image',
        // Delay in milliseconds before popup is removed
        removalDelay: 300,

        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-fade'
    });



    /* ----------------------------------------------------------- */
    /*  4. Flickr
    /* ----------------------------------------------------------- */
    
    $('.flickr-feed').jflickrfeed({
        limit: 9,
        qstrings: {
            id: '52617155@N08'
        },
        itemTemplate: '<li><a href="{{link}}" target="_blank"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
    }, 
    function(data) {
        $(".flickr-feed li:nth-child(3n)").addClass("nomargin");
    });



    /* ----------------------------------------------------------- */
    /*  5. Carousel (based on owl carousel plugin)
    /* ----------------------------------------------------------- */
    var owl = $("#owl-carousel");

    owl.owlCarousel({
        items : 4, //4 items above 1000px browser width
        itemsDesktop : [1000,4], //4 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // 4 items betweem 900px and 601px
        itemsTablet: [600,2], //2 items between 600 and 0;
        itemsMobile : [480,1], // itemsMobile disabled - inherit from itemsTablet option
        pagination : false
    });

    // Custom Navigation Events
    $("#carousel-next").click(function(){
        owl.trigger('owl.next');
    });
    $("#carousel-prev").click(function(){
        owl.trigger('owl.prev');
    });



    /* ----------------------------------------------------------- */
    /*  6. Content Slider (based on owl carousel plugin)
    /* ----------------------------------------------------------- */
    $(".owl-slider").owlCarousel({

        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        navigationText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        pagination: true

    });



    /* ----------------------------------------------------------- */
    /*  7. FitVid (responsive video)
    /* ----------------------------------------------------------- */
    $(".video-holder, .audio-holder").fitVids();


    /* ----------------------------------------------------------- */
    /*  -- Misc
    /* ----------------------------------------------------------- */

    $('.title-accent > h3').each(function(){
        var me = $(this);
        me.html(me.html().replace(/^(\w+)/, '<span>$1</span>'));
    });

    // Back to Top
    $("#back-top").hide();
    
    if($(window).width() > 991) {
        $('body').append('<div id="back-top"><a href="#top"><i class="fa fa-chevron-up"></i></a></div>')
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function(e) {
            e.preventDefault();
            $('body,html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });
    };

    // Animation on scroll
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile == false) {
        
        $("[data-animation]").each(function() {

        var $this = $(this);

        $this.addClass("animation");

        if(!$("html").hasClass("no-csstransitions") && $(window).width() > 767) {

            $this.appear(function() {

                var delay = ($this.attr("data-animation-delay") ? $this.attr("data-animation-delay") : 1);

                if(delay > 1) $this.css("animation-delay", delay + "ms");
                $this.addClass($this.attr("data-animation"));

                setTimeout(function() {
                    $this.addClass("animation-visible");
                }, delay);

            }, {accX: 0, accY: -170});

        } else {

            $this.addClass("animation-visible");

        }

    });  
    }


    /* ----------------------------------------------------------- */
    /*  8. Sticky Header
    /* ----------------------------------------------------------- */
    if($("body").hasClass("boxed"))
        return false;

    var header = $("header.header"),
        headH = header.height(),
        logoHolder = header.find(".logo"),
        logo = header.find(".logo img"),
        logoW = logo.attr("width"),
        logoH = logo.attr("height"),
        logoSmH = 28,
        $this = this;

    logo.css("height", logoSmH);

    var logoSmW = logo.width();
    logo.css("height", "auto").css("width", "auto");

    $this.stickyHeader = function() {

        if(header.hasClass("header-menu-fullw"))
            return false;

        if($(window).scrollTop() > (headH) && $(window).width() > 991) {

            if($("body").hasClass("sticky-header"))
                return false;

            logo.stop(true, true);

            $("body").addClass("sticky-header").css("padding-top", headH);

            logoHolder.addClass("logo-sticky");

            logo.animate({
                width: logoSmW,
                height: logoSmH
            }, 300, function() {});

        } else {

            if($("body").hasClass("sticky-header")) {

                $("body").removeClass("sticky-header").css("padding-top", 0);

                logoHolder.removeClass("logo-sticky");

                logo.animate({
                    width: logoW,
                    height: logoH,
                }, 300, function() {

                    logo.css({
                        width: "auto",
                        height: "auto"
                    });

                });
            }
        }
    }

    $(window).on("scroll", function() {
        $this.stickyHeader();
    });
    $this.stickyHeader();

    if ($('.flexnav-show').length > 0) { 
    $('.codeX body').css("background","#2F2F2F")
    }


    /* ----------------------------------------------------------- */
    /*  9. Shape Boxes
    /* ----------------------------------------------------------- */
    function init() {
        var speed = 250,
            easing = mina.easeinout;

        [].slice.call ( document.querySelectorAll( '.shape-item' ) ).forEach( function( el ) {
            var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
                pathConfig = {
                    from : path.attr( 'd' ),
                    to : el.getAttribute( 'data-path-hover' )
                };

            el.addEventListener( 'mouseenter', function() {
                path.animate( { 'path' : pathConfig.to }, speed, easing );
            } );

            el.addEventListener( 'mouseleave', function() {
                path.animate( { 'path' : pathConfig.from }, speed, easing );
            } );
        } );
    }
    init();



    /* ----------------------------------------------------------- */
    /*  9. SelfHosted Audio & Video
    /* ----------------------------------------------------------- */
    $('audio,video').mediaelementplayer({
        videoWidth: '100%',
        videoHeight: '100%',
        audioWidth: '100%',
        features: ['playpause','progress','tracks','volume'],
        videoVolume: 'horizontal'
    });


    /* ----------------------------------------------------------- */
    /*  2. Masonry Blog
    /* ----------------------------------------------------------- */

    (function() {


        // Portfolio settings
        var $container          = $('.masonry-feed');

        $(window).smartresize(function(){
            $container.isotope({
                resizable           : true,
                layoutMode: 'sloppyMasonry',
                itemSelector: '.masonry-item'
            });
        });

        $container.imagesLoaded( function(){
            $(window).smartresize();
        });
        
       
    })();
});



$(window).load(function () {

    /* ----------------------------------------------------------- */
    /*  8. Parallax Background
    /* ----------------------------------------------------------- */
    if($(".parallax-bg").get(0) && $(window).width() > 991) {
        if(!Modernizr.touch) {
            $(window).stellar({
                responsive:true,
                scrollProperty: 'scroll',
                parallaxElements: false,
                horizontalScrolling: false,
                horizontalOffset: 0,
                verticalOffset: 0
            });
        } else {
            $(".parallax-bg").addClass("disabled");
        }
    }
});

    /* ----------------------------------------------------------- */
    /*  10. About page blocks
    /* ----------------------------------------------------------- */

function showBlock(num){
    //google.maps.event.trigger(map, 'resize');
    //map.setCenter(new google.maps.LatLng(-20.154631, 28.582206));
    $('.icon-box-body').fadeOut(300);
    $('.icon').removeClass('active-block');
	$('#icon-'+num).toggleClass('active-block');
    if(  $('#cont-'+num).css('display')=='none' )
    {
    $('#cont-'+num).fadeIn();
	if($(window).innerWidth() <= 768) {
	   var e = $('.block-row > div').slice(-3);
		$(e).css('margin-top','none !important');
		$(e).css('padding-top','none !important');
	} else {
		var blockheight = $('#cont-'+num).height();
        $('.site-wrapper').css({
        'padding-bottom': blockheight});
};
    
    
  var myLatlng = new google.maps.LatLng(-33.9269,18.44582);
  var mapOptions = {
    zoom: 14,
    center: myLatlng,
    scrollwheel: false,
    styles: [{"featureType":"water","elementType":"all","stylers":[{"color":"#818c72"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"all","stylers":[{"hue":"#8bc53f"},{"saturation":-22}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"},{"color":"#cee6af"},{"saturation":10},{"lightness":76}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"color":"#cee6af"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"color":"#666"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"simplified"},{"color":"#446bb8"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#666"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"invert_lightness":false},{"color":"#ffffff"},{"weight":0.43}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#cee6af"}]},{"featureType":"administrative","elementType":"labels.icon","stylers":[{"visibility":"on"},{"color":"#3b5998"}]}]
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var image = '../images/codeX-marker.png';
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Project codeX',
      icon: image
  });

  var infowindow = new google.maps.InfoWindow({
    content: '<h4 style="text-transform:none">Project codeX</h4><p>Woodstock Exchange, Block A, 4th Floor, 66 Albert Road, Woodstock 7925, Cape Town, South Africa</p><a href="https://www.google.co.za/maps/dir//-33.9317787,18.4171049/@--33.9269,18.44582,19z/data=!4m3!4m2!1m0!1m0" target="_blank"><h6><i class="fa fa-share"></i> Open in google maps</h6></a>'
    });
    // End of infowindow code

    // Adding a click event to the marker
    google.maps.event.addListener(marker, 'click', function() {
    // Calling the open method of the infoWindow
    infowindow.open(map, marker);
    });
    // 

google.maps.event.addDomListener(window, 'load', initialize);
    }
    else
    {
        $('#cont-'+num).fadeOut();
    	var blockheight = $('#cont-'+num).height();
		var e = $('.block-row > div').slice(-3);
    	$(e).css('margin-top','none');
		$(e).css('padding-top','none');
        $('.icon').removeClass('active-block');
			$('.site-wrapper').css({
			'padding-bottom': 'none'});
    } 
};

$('.block-content .block-hd').append("<i class='fa fa-angle-down'></i>");
$('.block-content .block-hd').click(function(){
    $(this).toggleClass('active-header'); 
    $(this).next('p').toggle(300); 
    $(this).children('i').toggleClass('fa-angle-down').toggleClass('fa-angle-right')    
});

    /* ----------------------------------------------------------- */
    /*  9. Google maps
    /* ----------------------------------------------------------- */

