(function($){

    $(document).ready(function(){

        subMenuFix();

        setUnreadNewsCount();

        showAnnouncement();


        //$('.site-content').css('min-height',$(window).height() + 'px');



        // $('.sub-menu li a').click(function() {



        //     var id = this.href.split('/')[this.href.split('/').length - 2];

        //     var offset = 0;

        //     $('#' + id).css('display','block');

        //     if (id != 0) {

        //        offset = $('#' + id).offset().top - 120;

        //     }

        //     $('html,body').animate({

        //     scrollTop: offset

        //     },1000);

        //     return false;



        // });



        // Check if unread news are more than 0 show the unread news counts

        function setUnreadNewsCount() {

            if ($('.announcement-hidden').html() !== '0') {

                $("[title='news']").after("<div class='announcement'>" + $('.announcement-hidden').html() + "</div>");

            }

        }



        function subMenuFix() {

            var $active = $('.current_page_item,.current-menu-ancestor');

            //if( $subMenu.length > 0 ) {

        		$(".menu-item").hover(function () {
                    if ($(this).find(".sub-menu").length > 0) {
                        $('.header-bottom-layer').show();
                        $(this).find(".sub-menu").show();
                    }
        		}, function() {
                    if ($(this).find(".sub-menu").length > 0) {
                        $('.header-bottom-layer').hide("milliseconds");
                        $(this).find('.sub-menu').hide();
                    }
                });

        		// $(".menu-item.menu-item-type-post_type").mouseleave(function(){
        		   	
        		// });

                //var left = $active.offset().left - $('#primary-navbar-collapse').offset().left + 30;

                //$subMenu.css('left', left);

            //}

        }

        $('.isotope-container').isotope({

            itemSelector: '.program',

            layoutMode: 'fitRows'

        });





        if ($(window).width() > 1024) {

            $('.img-holder').imageScroll({

                image: null,

                imageAttribute: 'image',

                container: $('section'),

                coverRatio: 0.3,

            });

        }



        $(window).scroll(function() {

            if ($(window).scrollTop() > 30) {

                $('.header').css('margin-top','0px');

            }

            else {

                $('.header').css('margin-top','0');

            }

        });



        // $(window).resize(function(){

        //     $(window).scrollTop(0);

        // });



        function toggleChevron(e) {

            var panel = $(e.target).prev('.panel-heading');

            panel.toggleClass('selectedHeaderPanel');

            panel.find("div.image-container").toggleClass('image-collapsed',1000);

        }



        $('#accordion').on('hidden.bs.collapse', toggleChevron);

        $('#accordion').on('shown.bs.collapse', toggleChevron);



        $('.panel-collapse.opened').collapse('show');



        $(".owl-demo").owlCarousel({

            autoPlay: 3000, //Set AutoPlay to 3 seconds

            items : 4,

            scrollPerPage : true,

            itemsDesktop : [1199,3],

            itemsDesktopSmall : [979,3]

        });



        function showAnnouncement() {

            if (typeof $('#announcement').html() != 'undefined') {

                $.fancybox({

                    'href' : '#announcement',

                    'autoCenter' : true,

                    beforeShow: function(){

                        preventTouchMove();



                    },

                    afterClose: function(){

                        $(document.body).off('touchmove');

                    }

                });

            }

        }



        function preventTouchMove() {

            $(document.body).on('touchmove', function(e) {

                        e.preventDefault();

                        e.stopPropagation();

                        e.returnValue = false;

                    });

        }



        $( "a.trainer-description" ).fancybox({

            'hideOnContentClick': true,

            beforeShow: function() {

                preventTouchMove();

            },

            afterClose: function() {

                $(document.body).off('touchmove');

            }

        });



        $('.fancybox').fancybox({

            beforeShow: function() {

                $('.fancybox-overlay').css({

                    'width' : $(document).width()

                });

                //$('html').css('overflow','hidden');



                preventTouchMove();

            },

            afterClose: function() {

                //$('html').css('overflow','');

                $(document.body).off('touchmove');

            }

        });



        $('select.styled').customSelect();
        $('.bxslider').bxSlider({
            pagerCustom: '#bx-pager',
            adaptiveHeight: true,
        });

        $('#bx-pager').bxSlider({
            slideWidth: 150,
            minSlides: 2,
            maxSlides: 5,
            slideMargin: 10
        });

        $('.bxslider-home').bxSlider({
            auto: true,
            adaptiveHeight: true,
            nextSelector: '.slider-home',
            prevSelector: '.slider-home',
        });



	$('.more-label').click(function() {

	 $(this).next(".more-description").toggle();

	});

	$('.news-events .ne-item').click(function() {
		$('.news-events .ne-item').removeClass('item-active');
    		$(this).addClass('item-active');
	});
	$('.news-events .ne-item.item-all').click(function() {
		$('.news-events .line > a > div').css('display', 'inline-block');
	});
	$('.news-events .ne-item.item-event').click(function() {
		$('.news-events .line > a > div').css('display', 'none');
		$('.type-event').css('display', 'inline-block');
	});
	$('.news-events .ne-item.item-news').click(function() {
		$('.news-events .line > a > div').css('display', 'none');
		$('.type-news').css('display', 'inline-block');
	});
	$('.news-events .ne-item.item-health').click(function() {
		$('.news-events .line > a > div').css('display', 'none');
		$('.type-health').css('display', 'inline-block');
	});
	$('.news-events .ne-item.item-members').click(function() {
		$('.news-events .line > a > div').css('display', 'none');
		$('.type-members').css('display', 'inline-block');
	});

    $('.vacancy-item').click(function() {
        $(this).find('.chevron').toggleClass("active");
        $(this).find('.chevron').next().toggleClass("active");
    });

    $('.gg-link-item').hover(function() {
        $('.gg-links').find('.gg-link-item').removeClass("active");
        $(this).toggleClass("active");
    });

    $('.gg-link-item').mouseleave(function() {
        $('.gg-links').find('.gg-link-item').removeClass("active");
    });

    $('.gg-collapse').click(function() {
        $('.gg-links').toggleClass("active");
    });

        //$($('#language-select').html()).appendTo('#menu-primary');
    $('.gg-classes').hover(function() {
        $(this).find('.active').removeClass("active");
        $(this).addClass("active");
    });
    $('.gg-classes').mouseleave(function() {
        $(this).removeClass("active");
    });

    });

})(jQuery);

var locations = [
    ['Komitas', '40/1 Komitas Avenue, Yerevan 0051, Armenia', 'https://www.google.com/maps/place/Golds+Gym/@40.2055323,44.5060765,17z/data=!3m1!4b1!4m5!3m4!1s0x406abd480a75a42b:0x62f7e5f76d9e3f03!8m2!3d40.2055323!4d44.5082652'],
    ['Amiryan', '27/1 Amiryan St, Yerevan 0002, Armenia', 'https://www.google.com/maps/place/Golds+Gym/@40.1821741,44.5030202,17z/data=!4m5!3m4!1s0x406abcfdf5937e07:0xd27f88ec2ebcdda9!8m2!3d40.1821741!4d44.5052089']
];

var geocoder;
var map;
var bounds = new google.maps.LatLngBounds();

function initialize() {
    map = new google.maps.Map(
    document.getElementById("map_canvas"), {
        center: new google.maps.LatLng(37.4419, -122.1419),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    geocoder = new google.maps.Geocoder();

    for (i = 0; i < locations.length; i++) {


        geocodeAddress(locations, i);
    }
}
google.maps.event.addDomListener(window, "load", initialize);

function geocodeAddress(locations, i) {
    var title = locations[i][0];
    var address = locations[i][1];
    var url = locations[i][2];
    geocoder.geocode({
        'address': locations[i][1]
    },

    function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var marker = new google.maps.Marker({
                icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png',
                map: map,
                position: results[0].geometry.location,
                title: title,
                animation: google.maps.Animation.DROP,
                address: address,
                url: url
            })
            infoWindow(marker, map, title, address, url);
            bounds.extend(marker.getPosition());
            map.fitBounds(bounds);
        } else {
            alert("geocode of " + address + " failed:" + status);
        }
    });
}

function infoWindow(marker, map, title, address, url) {
    google.maps.event.addListener(marker, 'click', function () {
        var html = "<div><h3>" + title + "</h3><p>" + address + "<br></div><a href='" + url + "'>View location</a></p></div>";
        iw = new google.maps.InfoWindow({
            content: html,
            maxWidth: 350
        });
        iw.open(map, marker);
    });
}

function createMarker(results) {
    var marker = new google.maps.Marker({
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png',
        map: map,
        position: results[0].geometry.location,
        title: title,
        animation: google.maps.Animation.DROP,
        address: address,
        url: url
    })
    bounds.extend(marker.getPosition());
    map.fitBounds(bounds);
    infoWindow(marker, map, title, address, url);
    return marker;
}



