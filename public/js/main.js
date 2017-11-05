window.utils = {};
window.ParsleyConfig = {
    errorsWrapper: '<div></div>',
    errorTemplate: '<span></span>'
};

// Check window size and call sticky mobile header function
function checkWindowSize(container) {
    if ($(window).width() <= 767) {
        container.find('header').addClass('header-mob');
        container.find('header .navbar').addClass('navbar-mob');

        toggleHeader(container);
    } else {
        container.find('header').removeClass('header-mob');
        container.find('header .navbar').removeClass('navbar-mob');
    }

    window.onresize = function() {
        if ($(window).width() <= 767) {
            container.find('header').addClass('header-mob');
            container.find('header .navbar').addClass('navbar-mob');

            toggleHeader(container);
        } else {
            container.find('header').removeClass('header-mob');
            container.find('header .navbar').removeClass('navbar-mob');
        }
    };
}

// Sticky Mobile Header
function toggleHeader(container) {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = container.find('.navbar-mob').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        } else {
            hasScrolled();
        }
    }, 100);

    function hasScrolled() {
        var thisScroll = $(this).scrollTop();

        if (Math.abs(lastScrollTop - thisScroll) <= delta) {
            return;
        }

        if (thisScroll > 25){
            container.find('.navbar-mob').removeClass('nav-down').addClass('nav-up');
            container.find('.navbar-mob .logo:not(.logo-mob)').addClass('hidden-xs');
            container.find('.navbar-mob .mob-starter').removeAttr('hidden');

            container.find('.navbar-mob .mob-starter').css({
                visibility: 'visible',
                display: 'inline-block'
            });

            container.find('.navbar-mob').find('.mob-starter').css({
                visibility: 'visible',
                display: 'inline-block'
            });

            if (container.find('.navbar-mob .logo-mob').length) {
                container.find('.navbar-mob .logo-mob').css({
                    display: 'inline-block'
                });
            }

            container.find('.promo-block').css({
                paddingTop: '72px'
            });
        } else {
            if (thisScroll + $(window).height() < $(document).height()) {
                container.find('.navbar-mob').removeClass('nav-up');
                container.find('.navbar-mob .logo:not(.logo-mob)').removeClass('hidden-xs');
                container.find('.navbar-mob .mob-starter').attr('hidden', true);

                container.find('.navbar-mob .mob-starter').css({
                    visibility: 'hidden',
                    display: 'none'
                });

                if (container.find('.navbar-mob .logo-mob').length) {
                    container.find('.navbar-mob .logo-mob').css({
                        display: 'none'
                    });
                }

                container.find('.promo-block').css({
                    paddingTop: 0
                });
            } else {
                container.find('.navbar-mob').addClass('nav-down');
            }
        }

        lastScrollTop = thisScroll;
    }
}

function toggleDropdown(container) {
    container.find('.m-choise-dropdown button').on('click', function() {
        $(this).toggleClass('open');
        $(this).parent('.m-choise-dropdown').toggleClass('drop-overlay');
        $(this).siblings('ul').toggleClass('open');
    });

    container.find('.m-choise-dropdown ul li').on('click', function() {
        var href = $(this).data('link');

        $(this).siblings('li').removeClass('clicked');
        $(this).addClass('clicked');

        if (!$(this).parent().siblings('a').hasClass('active')) {
            $(this).parent().siblings('a').addClass('active');
        }

        $(this).parent().siblings('button').find('span.text').text($(this).text());

        $(this).parent().siblings('a').attr('href', href);
        $(this).parent().removeClass('open');
        $(this).parent().siblings('button').removeClass('open');
        $(this).parent().parent('.m-choise-dropdown').removeClass('drop-overlay');
    });
}


$(function() {

    // mobile choise dropdown
    toggleDropdown($(document));

    // Start to check window size
    checkWindowSize($(document));

    /* image pop up in editors */

    $(function () {
        $('.resourceCenter a[href*=\\#]').on('click', function (e) {
            $('.imagepreview').attr('src', $(this).find('img').attr('src'));
            $('#imagemodal').modal('show');
            e.preventDefault();
        });
    });

    // Page Scroll
    $('.rate-list a, .lp-scroll-down').mPageScroll2id();

    // toggle fixed on scroll
    if ($("#sidebar").length) {
    var a = document.querySelector('#sidebar'), b = null, P = 0;
    window.addEventListener('scroll', Ascroll, false);
    document.body.addEventListener('scroll', Ascroll, false);
    function Ascroll() {
      if (b == null) {
        var Sa = getComputedStyle(a, ''), s = '';
        for (var i = 0; i < Sa.length; i++) {
          if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
            s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
        }
    }
    b = document.createElement('div');
    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
    a.insertBefore(b, a.firstChild);
    var l = a.childNodes.length;
    for (var i = 1; i < l; i++) {
      b.appendChild(a.childNodes[1]);
      }
      a.style.height = b.getBoundingClientRect().height + 'px';
      a.style.padding = '0';
      a.style.border = '0';
    }
    var Ra = a.getBoundingClientRect(),
    R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('#payment-info').getBoundingClientRect().bottom);
    if ((Ra.top - P) <= 0) {
        if ((Ra.top - P) <= R) {
          b.className = 'stop';
          b.style.top = - R +'px';
      } else {
          b.className = 'sticky';
          b.style.top = P + 'px';
      }
    } else {
        b.className = '';
        b.style.top = '';
    }
    window.addEventListener('resize', function() {
        a.children[0].style.width = getComputedStyle(a, '').width
    }, false);
    } // End toggle fixed on scroll

    }

    var officesOwl = $('.offices-carousel');
    officesOwl.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200:{
                items: 4,
            }
        }
    });

    var partnersOwl = $('.partners-carousel');
    partnersOwl.owlCarousel({
        loop: true,
        margin: 10,
        smartSpeed: 750,
        responsive: {
            0: {
                items: 1,
                dots: true,
                autoplay: true,
            },
            480: {
                items: 3,
                dots: true,
                autoplay: true,
            },
            768: {
                items: 4,
                dots: true,
                autoplay: true,
            },
            992: {
                items: 5,
            },
            1200:{
                items: 6,
            }
        }
    });


    if(jQuery().placeholder) {
        $('input, textarea').placeholder();
    }


    $('.j-select').selectpicker({
        liveSearchStyle: 'startsWith'
    });

    if (jQuery().matchHeight) {
        $('.equal').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });
    }


    $("#search-select").change(function(e) {
        location.href = $(this).val();
    })

    $("#search-select").find('option[value="' + location.href + '"]').prop('selected', true);

    if (typeof(Spinner) == "function") {
        var target = document.getElementById('ajax-spinner');
        var spinner = new Spinner().spin(target);
    }

    var topBar = $('.top-bar'),
        promoBlock = $('.promo-block');

    var floatMenu = function() {
        if (topBar.length) {
            var scrollTop = $(window).scrollTop();

            if (scrollTop >= promoBlock.innerHeight()) {
                topBar.parent().addClass('fixed-bar');
            } else {
                topBar.parent().removeClass('fixed-bar');
            }

        }
    }

    $(window).on('scroll', function() {
        floatMenu();
    });

    floatMenu();

    if (jQuery().bxSlider) {
        $('.partners-gallery').bxSlider({
            slideWidth: 160,
            minSlides: 2,
            maxSlides: 6,
            slideMargin: 40,
            controls: false
        });
    }

    $('[data-toggle="tooltip"]').tooltip();

    if ($(".promo-block").hasClass("promo-block-medium")) {

        $(".navbar-header").on("click", ".menu-btn", function() {
            $("header").toggleClass("active");
        });

    }

    $(".navbar-header").on("click", ".menu-btn", function() {
        $(".home-header").toggleClass("active");
    });


    /* Info popup */
    var setPosition = function() {
        $('.info-boxes li').each(function() {
            var $this = $(this),
                popup = $this.find('.j-info-popup');
            w_r = $(window).width() - $this.offset().left - $this.width() - popup.width() - 20;
            w_l = $this.offset().left - popup.width() - 20;
            $this.removeClass('info-popup-right').removeClass('info-popup-left').removeClass('info-popup-center-bottom').removeClass('info-popup-left-bottom').removeClass('info-popup-right-bottom');
            if (w_r > 0) {
                $this.addClass('info-popup-right');
            } else if (w_l > 0) {
                $this.addClass('info-popup-left');
            } else if (w_r == w_l) {
                $this.addClass('info-popup-center-bottom');
            } else if (w_r > w_l) {
                $this.addClass('info-popup-left-bottom');
            } else {
                $this.addClass('info-popup-right-bottom');
            }

            popup.css({
                'margin-top': -popup.height() / 2
            });

        });
    }

    setPosition();

    if ($("#dit_business_form_processing_single_checkout_form").length > 0) {
        $("#dit_business_form_processing_single_checkout_form").parsley();
    }


    $('.info-boxes li a.firstonly').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        $this.closest('li').siblings().find('.j-info-popup').hide();
        $this.closest('li').find('.j-info-popup').show();
    });

    $('.j-info-popup .btn-close').on('click', function(e) {
        e.preventDefault();
        $(this).closest('.j-info-popup').hide();
    });

    $(window).on('resize', function() {
        setPosition();
    });
if ( $('.select2-user-ajax').length ) {
    $('.select2-user-ajax').select2({
        ajax: {
          url: "/corporate-account/get-users/",
          dataType: 'json',
          delay: 250,
          data: function (params) {
            return {
              q: params.term, // search term
              page: params.page
            };
          },
          processResults: function (data, params) {
            // parse the results into the format expected by Select2
            // since we are using custom formatting functions we do not need to
            // alter the remote JSON data, except to indicate that infinite
            // scrolling can be used
            params.page = params.page || 1;

            return {
              results: data.items,
              pagination: {
                more: (params.page * 30) < data.total_count
              }
            };
          },
          cache: true
        },
       // escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
        minimumInputLength: 2//,
       // templateResult: formatRepo, // omitted for brevity, see the source of this page
       // templateSelection: formatRepoSelection // omitted for brevity, see the source of this page
    });

    $('.select2-user-ajax').on('select2:select', function (evt) {
        url="/checkout/" + evt.params.data.id
        window.location = url;
    });
}
    /************************************
        Calculate date
    ************************************/

    var holidays = {
        'M': { //Month, Day
            '01/01': "New Year's Day",
            '04/01': "Estern",
            '07/04': "Independence Day",
            '11/11': "Veteran's Day",
            '11/28': "Thanksgiving Day",
            '11/29': "Day after Thanksgiving",
            '12/24': "Christmas Eve",
            '12/25': "Christmas Day",
            '12/31': "New Year's Eve"
        },
        'W': { //Month, Week of Month, Day of Week
            '1/3/1': "Martin Luther King Jr. Day",
            '2/3/1': "Washington's Birthday",
            '5/5/1': "Memorial Day",
            '9/1/1': "Labor Day",
            '10/2/1': "Columbus Day",
            '11/4/4': "Thanksgiving Day"
        }
    };

    if (typeof(moment) == "function") {
        (function() {
            var moment;

            moment = (typeof require !== "undefined" && require !== null) &&
                !require.amd ? require("moment") : this.moment;

            moment.fn.businessAdd = function(days) {

                var remaining = 0;

                var d = this.clone();

                if (d.day() == 0) {
                    d = d.add(1, 'days');
                }

                while (remaining < days) {


                    d = d.add(1, 'days');

                    if (d.day() !== 0 && !holidays['M'].hasOwnProperty(d.format('MM/DD'))) {
                        remaining = remaining + 1;
                    }
                }

                return d;
            };

        }(this));
    }

    $('.j-datepicker-momento').datepicker({
        autoclose: true,
        orientation: 'auto',
        format: 'DD, MM dd',
        startDate: (moment().day() == 0) ? moment().add(1, 'days').format("dddd, MMMM Do") : new Date(),
        daysOfWeekDisabled: [0]
    }).on('changeDate', function(e) {

        calculateEndDate(new Date(e.date));
    });


    var calculateEndDate = function(selectedDate) {
        $('.j-date-calculate').each(function() {
            var $this = $(this),
                days = parseInt($this.data('days')) + parseInt($this.data('rday'));
            $this.text(moment(selectedDate).businessAdd(days).format("dddd, MMM Do"));

        });
    }



    $('.j-datepicker-momento').datepicker("setDate", (moment().day() == 0) ? moment().add(1, 'days').format("dddd, MMM Do") : new Date());

    calculateEndDate(new Date());

    $('.order-link').on('click', function(e) {
        e.preventDefault();
        datepicker = new Date($('.j-datepicker-momento').datepicker("getDate"));

        var params = $.param({
            citizenship: $(this).data('citizenship'),
            days: $(this).data('days'),
            date: moment(datepicker).format("x"),
            product: $(this).data('productid'),
            type: $(this).data('ptype')
        });

        location.href = $(this).attr('href') + '?' + params;

        return false;
    })

    //@TODO
    $('.select-visa, .citizenOf-on-visas-page, .residing-on-visas-page').change(function(e) {

        var form = $(this).parents("form:first");

        if (form.find(".select-visa").val() != "" && form.find(".citizenOf-on-visas-page").val() != "") {
            var residing = ((form.find(".residing-on-visas-page").length && form.find(".residing-on-visas-page").val() != 'Select State') ? form.find(".residing-on-visas-page").val() : '');
            var visa = form.find(".select-visa").val();
//            var citizenOf = (($("#citizenOf-on-visas-page").val() != "united-states") ? "/citizen-" + $("#citizenOf-on-visas-page").val() : '');
            var citizenOf = "/citizen-" + form.find(".citizenOf-on-visas-page").val();

            location_url = '/visas/' + visa + "/" + residing + citizenOf;


            form.attr("action", location_url);
            form.submit();
        }
    });

    $('#local-passport-target').change(function(e) {
        location_url = '/local-passport/' + $("#local-passport-target").val();
        location.href = location_url;
    });

    $('#local-embassy-target').change(function(e) {
        location_url = '/embassy-consulate/' + $("#local-embassy-target").val();
        location.href = location_url;
    });

    $('#local-visa-target').change(function(e) {
        location_url = '/local-visa/' + $("#local-visa-target").val();
        location.href = location_url;
    });

    $("#order-visa-now").click(function(e) {
        e.preventDefault();
        if ($("#select-visa").val() == "" || $("#citizenOf-on-visas-page").val() == "") {
            $("p.select-error").fadeIn("slow");
            return false;
        }
        var citizenOf = (($("#citizenOf-on-visas-page").val() != "united-states") ? ((typeof user_geo.state !== "undefined") ? user_geo.state : 'NY') + "/citizen-" + $("#citizenOf-on-visas-page").val() : "");
        location.href = '/visas/' + $("#select-visa").val() + "/" + citizenOf;
    });

    $('#residing-on-visas-page').on('change', function() {

        var target = document.getElementById('visas-compare');
        var spinner = new Spinner().spin(target);
        var url = "/visas/ajax/" + $("#select-visa").val() + "/" + $("#residing-on-visas-page").val() + (($("#citizenOf-on-visas-page").val() != "united-states") ? "/citizen-" + $("#citizenOf-on-visas-page").val() : '');

        $.ajax({
            'url': url,
            success: function(data) {
                $("#avalible_visas").html(data);
                $('.spinner').remove();
                calculateEndDate(new Date());
            }
        })
    })

    $('#social_login_modal a').click(function() {
        $('#social_login_modal input[name=provider]').val($(this).attr('rel'));
        $('#social_login_modal').submit();
    });

    /**
     *
     *
     *
     *
     *
     *
     *
     */



    cart = {
        mini_cart_tmpl: '/order/sidebar-cart',
        mini_cart_id: '#order-sidebar-cart', //$('#order-sidebar-cart')
        ajax_uri: '/order/cart-ajax',

        init: function(form_type) {

            if(typeof(form_type)==='undefined') form_type = 'old';

            if(form_type == 'new') {
                cart.mini_cart_tmpl = '/order/sidebar-cart-new';
            };

            if(jQuery().mask) {
                $('.phone_us').mask('(000) 000-0000');
                $('.zip_code').mask('00000-0000');
                console.log('msg');
            }

            if (jQuery().editable) {

                $.fn.editable.defaults.mode = 'inline';

                $('a.editable').editable();

                $('a.state_inline').editable({
                    source: cart.select_inline($_lang.state_select, $states)
                });
                $('a.country_inline').editable({
                    source: cart.select_inline($_lang.country_select, $country)
                });
                $('a.gender_inline').editable({
                    source: cart.select_inline($_lang.gender_select, $gender)
                });

                $('a.date_inline').editable({
                    combodate: {
                        minYear: 1910,
                        maxYear: 2020
                   }
                });
            }

            $('#accordion-contaner').on('change', '.j-passport-select', function(e) {
                var $_selected = $(this).find('option:selected');
                var $_obj_parent = $(this).parents('.j-passport-select-holder:first');
                var $_service_selector = $_obj_parent.find('.j-service-select:first');


                $_obj_parent.addClass('dashed-box-selected');

                $_obj_parent.find('.j-passport-selected-service').html($_selected.text());

                $_service_selector.load('/order/load/passport/' + $_selected.val(), function() {
                    $_service_selector.find('option:first').attr('selected', 'selected');

                    var $_original_price;
                    $.each($_service_selector.find('option'), function(i, val) {
                        var $_opt = $(this);

                        if (i == 0) {
                            $_original_price = $_opt.data('price');
                        }

                        $_obj_parent.find('.passport-selected .price').html('<div class="price"><sup>$</sup>' + $_original_price + ' </div>');

                        var $_date = moment().businessAdd($_opt.data('return-days') + $_opt.data('days')).format("ddd, MMM Do");

                        $_opt.text($_date + " (" + ($_opt.data('price') > $_original_price ? "+" : "-") + "$" + ($_opt.data('price') - $_original_price) + ")");
                    });

                    $_service_selector.parents(".passport-selected:first").find('.j-selected-passport-remove').attr('href', '/order/cart-ajax/?remove=' + $_service_selector.find('option:first').val());

                    $_service_selector.attr('name', 'product_id[]');

                    $_service_selector.selectpicker('refresh');

                    var $_block = $(this).parents(".visa-selected-block:first");
                    record_id = $_block.data('id');

                    if ($_service_selector.hasClass('exist')) {

                        $.post("/order/", {
                            RET: "/",
                            date: '',
                            product: $_service_selector.find("option:selected").val(),
                            traveler_in: record_id,
                            type: 'passport',
                            "site_id": "1",
                            complete: function(e, xhr, settings) {

                            }
                        }).done(function(response) {
                            if (response.error == true) {
                                console.log("ERROR");
                                return false;
                            }
                            $popup.before($visa_box);
                            cart.cart_update();
                        });

                    } else {
                        $.ajax({
                            type: "POST",
                            url: '/order/cart-ajax',
                            data: {
                                'update': 'yes',
                                'type': 'passport',
                                'product': $_service_selector.find("option:selected").val()
                            },
                            complete: function(e, xhr, settings) {
                                //history.pushState('', document.title, window.location.pathname);
                                //    window.location.reload(false);
                                cart.cart_update();
                            }
                        });

                    }
                    cart.cart_update();
                    profile_update($(this));
                });


            });

            $('.select-service').each(function(e) {
                var $_service_selector = $(this);
                var $_original_price = $_service_selector.find("option:selected").data('price');
                var $_original_value = $_service_selector.find("option:selected").val();

                $.each($_service_selector.find('option'), function(i, val) {
                    var $_opt = $(this);

                    var $_date = moment().businessAdd($_opt.data('return-days') + $_opt.data('days')).format("ddd, MMM Do");

                    $_opt.text($_date + " (" + ($_opt.data('price') > $_original_price ? "+" : "-") + "$" + Math.abs($_opt.data('price') - $_original_price) + ")");
                });

                $_service_selector.attr('name', 'product_id[]');

                $_service_selector.selectpicker('refresh');
            });
            $('#accordion-contaner').on('change', '.j-service-select', function(e) {
                var $_service_selector = $(this);
                var $_original_price = $_service_selector.find("option:selected").data('price');
                var $_original_value = $_service_selector.find("option:selected").val();
                $(this).parents('.j-passport-select-holder:first').find('.passport-selected .price').html('<div class="price"><sup>$</sup>' + $_original_price + ' </div>');

                $.each($_service_selector.find('option'), function(i, val) {
                    var $_opt = $(this);

                    var $_date = moment().businessAdd($_opt.data('return-days') + $_opt.data('days')).format("ddd, MMM Do");

                    $_opt.text($_date + " (" + ($_opt.data('price') > $_original_price ? "+" : "-") + "$" + Math.abs($_opt.data('price') - $_original_price) + ")");
                });

                $_service_selector.parents(".passport-selected:first").find('.j-selected-passport-remove').attr('href', '/order/cart-ajax/?remove=' + $_service_selector.find('option:selected').val());

                $_service_selector.find('option:first').attr('selected', 'selected');

                $_service_selector.selectpicker('refresh');

                $_service_selector.selectpicker('val', $_original_value);

                var $_block = $(this).parents(".visa-selected-block:first");
                record_id = $_block.data('id');

                if ($_service_selector.hasClass('exist')) {

                    $.post("/order/", {
                        RET: "/",
                        date: '',
                        product: $_original_value,
                        traveler_in: record_id,
                        type: 'passport',
                        "site_id": "1",
                        complete: function(e, xhr, settings) {

                        }
                    }).done(function(response) {
                        if (response.error == true) {
                            console.log("ERROR");
                            return false;
                        }
                        cart.cart_update();
                    });

                } else {
                    $.ajax({
                        type: "POST",
                        url: '/order/cart-ajax',
                        data: {
                            'update': 'yes',
                            'type': 'passport',
                            'product': $_original_value
                        },
                        complete: function(e, xhr, settings) {
                            //history.pushState('', document.title, window.location.pathname);
                            //    window.location.reload(false);
                            cart.cart_update();
                        }
                    });
                }

                profile_update($(this));
                cart.cart_update();
            });

            $('body').on('click', '.j-visa-popup-show', function(e) {
                e.preventDefault();
                var $_popup = $(this).next('.visa-popup');
                var $_TravelCountry = $_popup.find('select.v-travelto');
                var $_StateObj = $_popup.find('select.v-state');
                var $_OriginCounty = $_popup.find('select.v-citizens');
                var $_VisaType = $_popup.find('select.v-type');
                var $_Purpose = $_popup.find('select.v-purpose');
                $_popup.show();
            });

            $('body').on('click', '.j-visa-popup-hide', function(e) {
                e.preventDefault();
                $(this).closest('.visa-popup-holder').find('.j-visa-popup').fadeOut();
            });


            $('body').on('change', '.v-purpose', function(e) {
                var $popup = $(this).parents('.visa-selected:first');
                var $_TravelCountry = $popup.find('select.v-travelto');
                var $_StateObj = $popup.find('select.v-state');
                var $_OriginCounty = $popup.find('select.v-citizens');
                var $_Purpose = $popup.find('select.v-purpose');
                var $_VisaType = $popup.find('select.v-type');

                if ($_Purpose.find('option:selected').data('required') == "N") {
                    $popup.find(".btn-add").fadeOut(500, function() {
                        $popup.find(".not-req").fadeIn(500, function() {});
                    });
                    $_VisaType.attr('disabled', "");
                    $_VisaType.html("");
                    $_VisaType.selectpicker('refresh');
                    return;
                } else {

                    if (!$popup.find(".btn-add").is(':visible')) {
                        $popup.find(".not-req").fadeOut(500, function() {
                            $popup.find(".btn-add").fadeIn(500, function() {});
                        });
                    }
                };

                if ($_Purpose.find('option:selected').data('required') == "E") {
                    $(".more_info").fadeIn();
                }

                url = "/order/load/visa/" + $_OriginCounty.find('option:selected').val() + '/' + $_StateObj.find('option:selected').val() + '/' + $_TravelCountry.find('option:selected').val() + '/' + $_Purpose.find('option:selected').val();

                $_VisaType.selectpicker('hide');
                $_VisaType.load(url, function() {
                    $_VisaType.selectpicker('show');
                    $_VisaType.selectpicker('refresh');
                })

            });

            $('body').on('click', '.j-add-visa-btn', function(e) {
                e.preventDefault();
                var $popup = $(this).parents('.j-visa-select-holder:first');
                var $_VisaType = $popup.find('select.v-type option:selected');
                var $_block = $(this).parents(".visa-selected-block:first");

                if ($_VisaType.val()) {
                    var $visa_box = '<div class="j-visa-selected-box dashed-box dashed-box-selected dashed-box-x2" style="" id="v-item_' + $_VisaType.val() + '-c" data-id="' + $_VisaType.val() + '"> \
                        <div class="passport-selected"> \
                            <input type="hidden" class="product_id" value="' + $_VisaType.val() + '" name="product_id[]">\
                            <strong class="title">\
                                <a href="/order/cart-ajax/?remove=' + $_VisaType.val() + '" class="j-selected-visa-remove btn-close glyphicon glyphicon-remove"></a>\
                                <span class="j-passport-selected-service">' + $_VisaType.data("title") + '</span>\
                            </strong>\
                            <div class="price"><sup>$</sup>' + $_VisaType.data("sfee") + '<span class="add">+</span> <span class="visa-gf">$' + $_VisaType.data("gfee") + '</span></div>\
                            <div class="info">' + $_VisaType.data("service-type") + ': <strong>' + $_VisaType.data("days") + ' days</strong></div>\
                        </div>\
                    </div>';


                    $(this).parents('.collapse-holder:first').addClass('not-empty');
                    $(this).closest('.visa-popup-holder').find('.j-visa-popup').fadeOut();

                    if ($(this).hasClass('exist')) {

                        order_id = $_block.data('order');
                        profile_id = $_block.data('profile');
                        member_id = $_block.data('mid');
                        record_id = $_block.data('id');

                        $.post("/order/", {
                            RET: "/",
                            date: '',
                            product: $_VisaType.val(),
                            traveler_in: record_id,
                            type: 'visa',
                            "site_id": "1",
                            complete: function(e, xhr, settings) {

                            }
                        }).done(function(response) {
                            if (response.error == true) {
                                console.log("ERROR");
                                return false;
                            }
                            $popup.before($visa_box);
                            cart.cart_update();
                        });

                    } else {

                        $.ajax({
                            type: "POST",
                            url: '/order/cart-ajax',
                            data: {
                                'update': 'yes',
                                'type': 'visa',
                                'product': $_VisaType.val()
                            },
                            // dataType: 'json',
                            complete: function(e, xhr, settings) {


                            }
                        }).done(function(response) {
                            if (response == 'error') {
                                console.log('dublicate')
                                return false;
                            }
                            $popup.before($visa_box);
                            cart.cart_update();
                        });
                    }
                    profile_update($(this));
                } else {
                    $(this).closest('.visa-popup-holder').find('.j-visa-popup').fadeOut();

                }
            });

            $('body').on('click', '.j-selected-visa-remove', function(e) {
                e.preventDefault();
                $(this).parents('.j-visa-selected-box:first').remove();
                var link = $(this).attr('href');
                var obj = $(this);
                $.get(link, function(e) {
                    cart.cart_update();
                });
                profile_update($(this));
            });



            function profile_update($_obj) {

                var $_profile_zone = $_obj.parents('.collapse-holder:first');
                if ($_profile_zone.find('[name*="product_id"]').length > 0) {
                    $_profile_zone.addClass('not-empty');
                } else {
                    $_profile_zone.removeClass('not-empty');
                }
            }


            $('body').on('change', 'select.v-travelto, select.v-state, select.v-citizens', function(e) {
                var $popup = $(this).parents('.visa-selected:first');
                var $_TravelCountry = $popup.find('select.v-travelto');
                var $_StateObj = $popup.find('select.v-state');
                var $_OriginCounty = $popup.find('select.v-citizens');
                var $_VisaType = $popup.find('select.v-type');
                var $_Purpose = $popup.find('select.v-purpose');

                $_Purpose.html("");
                $_VisaType.html("");

                if ($popup.find("select.v-travelto option:selected").val() &&
                    $popup.find("select.v-state option:selected").val() &&
                    $popup.find("select.v-citizens option:selected").val()) {

                    url = "/order/load/visa-types/" + $_OriginCounty.find('option:selected').val() + '/' + $_StateObj.find('option:selected').val() + '/' + $_TravelCountry.find('option:selected').val();
                    $_Purpose.selectpicker('hide');
                    $_Purpose.load(url, function() {
                        $_Purpose.removeAttr('disabled');
                        $_Purpose.selectpicker('show');
                        $_Purpose.selectpicker('refresh');
                        $_Purpose.trigger('change');
                        $_VisaType.removeAttr('disabled');
                    });

                } else {
                    $_Purpose.attr('disabled', "");
                    $_VisaType.attr('disabled', "");
                }
            });


            $('#accordion-contaner').on('keypress, change', 'input:not(.ignore_save)', function() {
                var attr = $(this).attr('name');

                // For some browsers, `attr` is undefined; for others,
                // `attr` is false.  Check for both.
                if (typeof attr === typeof undefined || attr === false) {
                    return;
                }

                var $_form = $('#order-form');
                clearTimeout($.data(this, 'timer'));

                var wait = setTimeout(function() {
                    console.log('save data...');
                    $data = $('#order-form :input[name!="ACT"]').serialize();


                    $.ajax({
                        type: "POST",
                        url: '/order/cart-ajax',
                        data: $data + "&session=yes",
                        complete: function(e, xhr, settings) {

                        }
                    });
                }, 500);

                $(this).data('timer', wait);
            });


            $('#dit_business_form_processing_single_checkout_form').on('keypress, change', 'input:not(.ignore_save)', function() {
                var attr = $(this).attr('name');
                console.log('change');
                // For some browsers, `attr` is undefined; for others,
                // `attr` is false.  Check for both.
                if (typeof attr === typeof undefined || attr === false) {
                    return;
                }

                var $_form = $('#dit_business_form_processing_single_checkout_form');
                console.log('change');
                clearTimeout($.data(this, 'timer'));

                var wait = setTimeout(function() {
                    console.log('save data...');
                    $data = $('#dit_business_form_processing_single_checkout_form :input[name!="ACT"]:input:not(.ignore_save)').serialize();


                    $.ajax({
                        type: "POST",
                        url: '/order/cart-ajax',
                        data: $data + "&session=yes",
                        complete: function(e, xhr, settings) {

                        }
                    });
                }, 500);

                $(this).data('timer', wait);
            });

            $('body').on('keypress, change', '[name="first_name"], [name="last_name"]', function() {
                var select_obj = $(this).parents('.visa-selected-block:first');
                var profile_id = select_obj.data('profile');

                clearTimeout($.data(this, 'timer'));
                var wait = setTimeout(function() {
                    var first_name = select_obj.find('[name="first_name"]').val();
                    var last_name = select_obj.find('[name="last_name"]').val();
                    $('#traveler_' + profile_id).html(first_name + ' ' + last_name);
                    $('#traveler_m' + profile_id).html(first_name + ' ' + last_name);
                }, 500);
                $(this).data('timer', wait);
            });


            $('body').on('click', '.j-selected-passport-remove', function(e) {
                e.preventDefault();
                var $_obj_parent = $(this).parents('.j-passport-select-holder:first');
                var $_passport_selector = $_obj_parent.find('.j-passport-select:first');
                var $_service_selector = $_obj_parent.find('.j-service-select:first');

                $_obj_parent.removeClass('dashed-box-selected');
                $_passport_selector.selectpicker('val', '');
                $_service_selector.attr('name', '');
                $_service_selector.html("");
                $_service_selector.selectpicker('refresh');

                var link = $(this).attr('href');
                var obj = $(this);
                $.get(link, function(e) {
                    cart.cart_update();
                });


                //  cart.cart_update();
                profile_update($(this));
            });



            $('[name="dob_year"], [name="dob_date"], [name="dob_month"]').change(function(e){

            });



            window.Parsley.addValidator('eda_validation', {
              validateString: function(value) {
                return eda_validation();
              },
              messages: {
                en: 'Your travel date is sooner than the selected service and delivery speed. Please choose a faster service or call us.'
              }
            });

            window.Parsley.addValidator('age_validation', {
              validateString: function(value) {
                return age_validation();
              },
              messages: {
               en: ' '
              }
            });

            function age_validation () {
                var dob = $('[name="dob_date"]').val() + "-" + $('[name="dob_month"]').val() + "-" + $('[name="dob_year"]').val();
                var age = moment().diff(moment(dob, "DD-MM-YYYY"), 'years');
                var error = 0;

                if (typeof age_limit == 'undefined'){
                    return true;
                }

                if (age_limit > 15 && age < 16) {
                    var msg = "If the applicant is under 16 years old, please select Child Passport."
                    $("#dob-error").html('<span class="parsley-required">' + msg + '</span>');

                    return false;

                }

                if (age_limit < 16 && age > 15) {
                    var msg = "Applicant must be under 16 years old for Child Passport Service. Please select the 'new passport' or 'renewal passport' service or double check applicants birthdate to make sure applicant is under 16."
                    $("#dob-error").html('<span class="parsley-required">' + msg + '</span>');

                    return false;
                }

                $("#dob-error").html("");
                return true;
            };


         //   eda_validation ()
            function eda_validation () {

                if (typeof eda == 'undefined'){
                    return true;
                }

                var travel_date = moment( $('[name="travel_date_start"]').val());
                var travel_diff = moment().diff(travel_date, 'days');
                var error_div = $('[name="travel_date_start"]').parents('fieldset:first').find('.custom-error');
                var $eda = moment().businessAdd(eda + 2);

                  if (moment($eda).isAfter(travel_date)) {
                    return false;
                  };

                  return true;
            };

            $('body').on('click', '#order-add-next-step-button', function(e) {
                e.preventDefault();

                if ($('#order-form input[name=order_id]').length) {
                    //if there are orders already, we might need to simply redirect
                    if ($('#order-form input[name=first_name]').val() == '') {
                        location.href = '/order/step_two';
                        return false;
                    }
                }

                if ($('#order-form').find(".dashed-box-selected:visible").length == 0) {
                    alert("You must choose at least one product");
                    return false;
                }

                if (false === $('#order-form').parsley().validate()) {
                    $('html, body').animate({
                        scrollTop: $('.parsley-error:first').offset().top
                    }, 1000);
                    return;
                }

                var $this = $(this);
                $this.attr('disabled', 'disabled')
                $('#error-message').hide();
                var form = $('#order-form');

                var target = document.getElementById('error-message');
                var spinner = new Spinner().spin(target);
                // form.append('<input type="hidden" >')
                //
                $("#order-add-next-step-button").append('<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate">');

                $.ajax({
                    type: "POST",
                    url: form.attr('action'),
                    data: form.serialize() + "&submit=next_step",
                    complete: function(e, xhr, settings) {
                        $(".glyphicon-refresh-animate").remove();

                        if (e.status === 200) {
                            location.href = '/order/step_two';
                        } else if (e.status === 403) {
                            $this.removeAttr('disabled');
                            var obj = $(e.responseText);
                            if (obj.find("li").html() == 'The email you chose is not available') {
                                var specificField = $('[name="email"]').parsley();
                                window.ParsleyUI.addError(specificField, 'required', 'This login email already exists. Please try a different email address to register, or login to your existing account.');

                                $('html, body').animate({
                                    scrollTop: $('[name="email"]').offset().top
                                }, 1000);
                            } else {
                                alert(obj.find("li").html());
                            }
                        } else {
                            $this.removeAttr('disabled');
                        }
                    }
                });

                return false;
            });

            $('body').on('click', '#order-add-next-step-button-ajax', function(e) {
                e.preventDefault();
                location.href = '/order/step_two';
            });


            if ($('input[name=destination_address_id]:radio').length) {
                $('.prefill').each(function(e) {
                    if ($(this).is("input")) {
                        $(this).prop('value', $(this).data('default'));
                    }
                    if ($(this).is("select")) {
                        $(this).find('option[value="' + $(this).data('default') + '"]').attr('selected', 'selected');
                    }
                });

                $('input[name=destination_address_id]:radio').click(function(e) {
                    $btn = $("#dest_new");
                    if ($btn.is(':checked')) {
                        $('.prefill').each(function(e) {
                            if ($(this).is("input")) {
                                $(this).val("");
                            }
                            if ($(this).is("select")) {
                                $(this).prop('selectedIndex', 0);
                            }
                        });
                    } else {
                        $('.prefill').each(function(e) {
                            if ($(this).is("input")) {
                                $(this).prop('value', $(this).data('default'));
                            }
                            if ($(this).is("select")) {
                                $(this).find('option[value="' + $(this).data('default') + '"]').attr('selected', 'selected');
                            }
                        });
                    }
                });
            }

            $('body').on('click', '#order-add-more-btn', function(e) {
                e.preventDefault();

                if (false === $('#order-form').parsley().validate()) {
                    $('html, body').animate({
                        scrollTop: $('.parsley-error:first').offset().top
                    }, 1000);

                    return;
                }



                if ($('#order-form').find(".dashed-box-selected:visible").length == 0) {
                    alert("You must choose at least one product");
                    return false;
                }

                var $this = $(this);
                $this.attr('disabled', 'disabled')
                $('#error-message').hide();
                var form = $('#order-form');

                var target = document.getElementById('error-message');
                var spinner = new Spinner().spin(target);

                $("#order-add-more-btn").append('<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate">');
                $.ajax({
                    type: "POST",
                    url: form.attr('action'),
                    data: form.serialize() + '&submit=new',
                    complete: function(e, xhr, settings) {
                        $(".glyphicon-refresh-animate").remove();
                        if (e.status === 200) {
                            location.href = '/order'
                            return false;
                        } else if (e.status === 403) {
                            $this.removeAttr('disabled');
                            var obj = $(e.responseText);
                            if (obj.find("li").html() == 'The email you chose is not available') {
                                var specificField = $('[name="email"]').parsley();
                                window.ParsleyUI.addError(specificField, 'required', 'This login email already exists. Please try a different email address to register, or login to your existing account.');

                                $('html, body').animate({
                                    scrollTop: $('[name="email"]').offset().top
                                }, 1000);
                            } else {
                                alert(obj.find("li").html());
                            }
                        } else {
                            $this.removeAttr('disabled');
                        }
                    }

                });

                return false;
            });
/*
            $('[name=agreement_confirm]').change(function(e) {
               if ($(this).prop('checked')) {
                    $(this).parents('form:first').find("button[type='submit']").removeAttr("disabled");
                } else {
                    $(this).parents('form:first').find("button[type='submit']").attr("disabled", "disable");
                }
            });
*/
        if ($('#dit_business_form_processing_single_checkout_form').length > 0) {

            $('[name=gateway]').change(function(e) {
                console.log($(this).val());
                if ($(this).is(":checked")) {
                    $('#payment-info').hide();
                    $('#payment-info').find('input').removeAttr('required');

                } else {
                    $('#payment-info').show();
                    $('#payment-info').find('input').attr('required', "");
                }

            });

            $('#order-sidebar-cart').on('click', '.remove-coupon', function(e){
                e.preventDefault();
                $('[name=discount_code]').val('');
                $('[name=company_id]').val('');
                $.get(/cc/, function(e) {
                        cart.cart_update('checkout');
                });
            });

            $('#order-sidebar-cart').on('click', '.active-coupon', function(e){
                e.preventDefault();
                $('#discount-coupon').slideToggle();
            });

            $('#order-sidebar-cart').on('click', '#apply_discount', function(e){
                e.preventDefault();
                var $_discount_code = $('[name=discount_code_box]').val();

                $('[name=discount_code]').val('');
                $('[name=company_id]').val('');

                $.ajax({
                        type: "GET",
                        url: "/checkout/add_discount/" + $_discount_code,
                        complete: function(e, xhr, settings) {
                            $('[name=discount_code]').val($_discount_code);
                            $('[name=company_id]').val(e.responseText);
                            cart.cart_update('checkout');
                        }
                });
            });

            $('[name=outbound_shipping_method_id]').change(function(e){
                    $.ajax({
                        type: "GET",
                        url: "/checkout/add_shipping/" + "outbound/" + $(this).val(),
                        complete: function(e, xhr, settings) {
                            cart.cart_update('checkout');
                        }
                    });
            });

            $('[name=inbound_shipping_method_id]').change(function(e){
                    $.ajax({
                        type: "GET",
                        url: "/checkout/add_shipping/" + "inbound/" + $(this).val(),
                        complete: function(e, xhr, settings) {
                            cart.cart_update('checkout');
                        }
                    });
            });



        }


            $('body').on('click', '#checkout-btn', function(e) {
                e.preventDefault();

                var $_form = $(this).parents("form:first");


                if ($('#gateway').prop('checked')) {
                    $_form.submit();
                    return;
                }

                if (false === $_form.parsley().validate()) {
                    $('html, body').animate({
                        scrollTop: $('.parsley-error:first').offset().top
                    }, 1000);

                    return;
                }

                $_form.submit();
            });

            $('#myCarousel').carousel({
                interval: 8000,
                cycle: true
            });


            $('.j-datepicker').datepicker({
                format: "MM dd, yyyy"
            });



            if ($("#add-shipping-form").length > 0) {
                $("[name='outbound_shipping_method_id'], [name='inbound_shipping_method_id']").change(function(e) {

                    var $_form = $(this).parents('form:first');

                    $.ajax({
                        type: "POST",
                        url: $_form.attr('action'),
                        data: $_form.serialize() + "",
                        complete: function(e, xhr, settings) {

                        }
                    });

                    cart.cart_update();
                });



            };

            if ($("#cc_number").length > 0) {
                $("#cc_number").mask('0000 0000 0000 0000');

                $("#dit_business_form_process_checkout_form").submit(function(e) {
                    if ($(this).prop('checked')) {
                        console.log($(this).prop('checked'));
                        var cc_month = $("#expiryMonth").val();
                        var cc_year = $("#expiryYear").val();
                        var cc_number = $('#cc_number').val()
                        var now = new Date();
                        var cc_expiry = new Date();

                        cc_expiry.setFullYear(cc_year, cc_month, 1);

                        if ($("#firstName").val() == "" || $("#lastName").val() == "") {
                            alert("You need entered Credit card owner First and Last name.");
                            return false;
                        }

                        if (cc_number.length < 16 || cc_number.length > 19) {
                            alert("The credit card number was incorrectly entered");
                            return false;
                        }

                        if (cc_expiry < now) {
                            alert("You Credit Card is expired. Please select a valid expiry date or another Credit card.");
                            return false;
                        }

                        if ($("#cvv").val().length < 3) {
                            alert("You need entered ccv code.");
                            return false;
                        }

                        return true;
                    }
                });
            }
            var $_get = cart.getParams();

            if ($('#morethenone').length > 0) {


                if (1) {
                    $_modal_body = $('#morethenone').find('.modal-body');


                    $('#morethenone').modal('show');


                    $('#morethenone').on('hidden.bs.modal', function(e) {
                        $("#traveler_choose").submit();
                    })

                } else {

                }

            };
            $('body').on('click', '.j-saved-passport-remove, .j-cart-product-remove, .j-remove-traveller', function(e) {
                e.preventDefault();

                var link = $(this).attr('href');
                var obj = $(this);
                $('#accordion-contaner').css('opacity', '0.4');
                $.get(link, function(e) {
                    $("#accordion-contaner").load("/order/load/full-cart", function() {
                        $('#accordion-contaner').css('opacity', '1');
                        $(".j-select").selectpicker('refresh');
                        $('.j-datepicker').datepicker({
                            format: "MM dd, yyyy"
                        });

                        $('.select-service').each(function(e) {
                            var $_service_selector = $(this);
                            var $_original_price = $_service_selector.find("option:selected").data('price');
                            var $_original_value = $_service_selector.find("option:selected").val();

                            $.each($_service_selector.find('option'), function(i, val) {
                                var $_opt = $(this);

                                var $_date = moment().businessAdd($_opt.data('return-days') + $_opt.data('days')).format("ddd, MMM Do");

                                $_opt.text($_date + " (" + ($_opt.data('price') > $_original_price ? "+" : "-") + "$" + Math.abs($_opt.data('price') - $_original_price) + ")");
                            });

                            $_service_selector.attr('name', 'product_id[]');

                            $_service_selector.selectpicker('refresh');
                        });



                    });

                    cart.cart_update();
                });
            });

            function set_required_address_fields(state) {
                /*   $('#add-shipping-form').parsley().destroy();
                     $('#new_shipping_address input[name=first_name]').attr('data-parsley-required', state);
                     $('#new_shipping_address input[name=last_name]').attr('data-parsley-required', state);
                     $('#new_shipping_address input[name=shipping_address_1]').attr('data-parsley-required', state);
                     $('#new_shipping_address input[name=shipping_city]').attr('data-parsley-required', state);
                     $('#new_shipping_address select[name=shipping_state]').attr('data-parsley-required', state);
                     $('#new_shipping_address input[name=shipping_zip]').attr('data-parsley-required', state);
                     $('#add-shipping-form').parsley();
                     */
            }

        //    $('#add-shipping-form').parsley();

            function set_required_address_fields_ck(state) {
                     $('#new_shipping_address input[name=first_name]').attr('data-parsley-required', state);
                     $('#new_shipping_address input[name=last_name]').attr('data-parsley-required', state);
                     $('#new_shipping_address input[name=shipping_address_1]').attr('data-parsley-required', state);
                     $('#new_shipping_address input[name=shipping_city]').attr('data-parsley-required', state);
                     $('#new_shipping_address select[name=shipping_state]').attr('data-parsley-required', state);
                     $('#new_shipping_address input[name=shipping_zip]').attr('data-parsley-required', state);
            }


            $('input[name=destination_address_id]').change(function() {
                $('#new_shipping_address').hide();
                if ($('#dest_new').is(':checked')) {
                   // $("#new_shipping_address").find('input,select').attr('data-parsley-required', 'true');
                    $('#new_shipping_address').show();
                     set_required_address_fields_ck('true');
                } else {
                    $('#new_shipping_address').hide();
                   // $("#new_shipping_address").find('input,select').attr('data-parsley-required', 'false');
                    set_required_address_fields_ck('false');
                }
            });


            $('body').on('click', '#order-add-more-btn-ajax', function(e) {
                e.preventDefault();
                $.ajax({
                    type: "POST",
                    url: '/order/cart-ajax',
                    data: {
                        'update': 'yes',
                        'add-new': 'yes'
                    },
                    complete: function(e, xhr, settings) {
                        history.pushState('', document.title, window.location.pathname);
                        window.location.reload(false);
                    }
                });
            });

            if($("form.visas-states") > 0) {

            }

            if ($('#gateway').length > 0) {
                $('body').on('change', '#gateway', function() {
                    if ($(this).prop('checked')) {
                        $('.cc-data').hide();
                        $('.application-form').find('input,select').prop('required', false);
                        $('#gateway').prop('required', false);
                        $('#toc-container').hide();
                        $('.manual-gw-only').removeClass('hidden');
                    } else {
                        $('.cc-data').show();
                        $('.application-form').find('input,select').prop('required', true);
                        $('#gateway').prop('required', false);
                        $('#toc-container').show();
                        $('.manual-gw-only').addClass('hidden');
                    }
                });

            }
/*
Parsly hidden
required
*/
            $.listen('field:validate', function(fieldInstance) {
                if (fieldInstance.$element.is(":hidden") && !fieldInstance.$element.hasClass('required')) {
                    // hide the message wrapper
                    fieldInstance._ui.$errorsWrapper.css('display', 'none');
                    // set validation result to true
                    fieldInstance.validationResult = true;
                    return true;
                }
            });
        },

        getParams: function(options) {
            var query = location.hash.split('#')[1];
            var map = {};

            if (typeof query == "undefined") {
                return false;
            }

            query.replace(/([^&=]+)=?([^&]*)(?:&+|$)/g, function(match, key, value) {
                (map[key] = map[key] || []).push(value);
            });

            var loc = location.href,
                index = loc.indexOf('#');

            if (index > 0) {
                //history.pushState('', document.title, window.location.pathname);
            }

            return map;
        },

        cart_update: function(options) {
            if (options === undefined) {
                options = "";
            } else {
                options = '/checkout';
            }

            $('#order-sidebar-cart').css('opacity', '0.4');
            $('#order-sidebar-cart').load(cart.mini_cart_tmpl + options, function() {
                $('#order-sidebar-cart').css('opacity', '1');

                var $_price = $('.cart-subtotal').find('.price').text();
                $("#order_total").html($_price);
            });

        },
        /*
        $select_title
        $_lang.state_select, $states
        $_lang.country_select, $country
         */
        select_inline: function($select_title, $options) {
            var select_options = [];
            select_options.push({
                value: "",
                text: $select_title
            });

            for (var st in $options) {
                select_options.push({
                    value: st,
                    text: $options[st]
                });
            }

            return select_options;
        },

        initURIparser: function(options) {
            var $_get = cart.getParams();

            if (typeof $_get['type'] != "undefined") {
                $.ajax({
                    type: "POST",
                    url: ajax_uri,
                    data: {
                        'update': 'yes',
                        'type': $_get['type'][0],
                        'service': $_get['service'][0],
                        'days': $_get['days'][0],
                        'date': $_get['date'][0],
                        'product': ($_get['type'][0] == 'visa' ? $_get['product'][0] : $_get['service'][0])
                    },
                    complete: function(e, xhr, settings) {
                        history.pushState('', document.title, window.location.pathname);
                        window.location.reload(false);
                    }
                });

            };
        }

    }





});




var $_lang = {
    "state_select": "Select State",
    "select_vs": "Select Visa & Service",
    "select_trp": "Select Travel Purpose",
    'country_select': "Select Country",
    'gender_select': "Select Gender"
}

var $country = {
    "AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia",
    "BQ": "Bonaire, Sint Eustatius and Saba",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "CV": "Cabo Verde",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "KY": "Cayman Islands",
    "CF": "Central African Republic",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos Islands",
    "CO": "Colombia",
    "KM": "Comoros",
    "CD": "Congo Democratic Republic",
    "CG": "Congo Republic",
    "CK": "Cook Islands",
    "CR": "Costa Rica",
    "HR": "Croatia",
    "CU": "Cuba",
    "CW": "Curacao",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GB-ENG": "England",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "ET": "Ethiopia",
    "FK": "Falkland Islands",
    "FO": "Faroe Islands",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "FR-GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories",
    "GA": "Gabon",
    "EC-W": "Galapagos Islands",
    "GM": "Gambia",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island and McDonald Islands",
    "VA": "Holy See",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "CI": "Ivory Coast",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Laos",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MK": "Macedonia",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia",
    "MD": "Moldova",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands",
    "NL_ANT": "Netherlands Antilles",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "KP": "North Korea",
    "MP": "Northern Mariana Islands",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestine",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "RE": "Reunion",
    "RO": "Romania",
    "RU": "Russia",
    "RW": "Rwanda",
    "BL": "Saint Barthelemy",
    "SH": "Saint Helena",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin",
    "PM": "Saint Pierre and Miquelon",
    "VC": "Saint Vincent Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome Principe",
    "SA": "Saudi Arabia",
    "GB-SCT": "Scotland",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SX": "Sint Maarten",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia",
    "KR": "South Korea",
    "SS": "South Sudan",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan",
    "SR": "Suriname",
    "SJ": "Svalbard Jan Mayen",
    "SZ": "Swaziland",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syrian Arab Republic",
    "TAI": "Tahiti",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania",
    "TH": "Thailand",
    "TL": "Timor Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TRRC": "Turkish Republic of Northern Cyprus",
    "TM": "Turkmenistan",
    "TC": "Turks and Caicos Islands",
    "TCI": "Turks Caicos Islands",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates",
    "GB": "United Kingdom",
    "US": "United States",
    "UM": "United States Minor Outlying Islands",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela",
    "VN": "Vietnam",
    "VG": "Virgin Islands British",
    "VI": "Virgin Islands U.S.",
    "WF": "Wallis Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "TZ-XX": "Zanzibar",
    "ZW": "Zimbabwe"
};


var $states = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
};

var $gender = {
    "m": "Male",
    "f": "Female"
};
