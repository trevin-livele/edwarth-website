        $(document).ready(function() {
            // Mobile Menu Toggle
            $('.mobile-menu-btn').click(function() {
                $('.nav-links').toggleClass('active');
                $(this).find('i').toggleClass('fa-bars fa-times');
            });
            
            // Sticky Header
            $(window).scroll(function() {
                if ($(this).scrollTop() > 50) {
                    $('header').addClass('scrolled');
                    $('.scroll-top').addClass('active');
                } else {
                    $('header').removeClass('scrolled');
                    $('.scroll-top').removeClass('active');
                }
                
                // Animate elements on scroll
                $('.animated').each(function() {
                    if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
                        $(this).addClass('show');
                    }
                });
            });
            
            // Scroll to Top
            $('.scroll-top').click(function() {
                $('html, body').animate({scrollTop: 0}, 800);
                return false;
            });
            
            // Counter Animation
            $('.stat-number').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).attr('data-target')
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            
            // Smooth Scrolling for Anchor Links
            $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e) {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        e.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top - 70
                        }, 800);
                        return false;
                    }
                }
            });
            
            // Add active class to current page in navigation
            var path = window.location.pathname;
            var page = path.split("/").pop();
            
            if (page === "" || page === "index.html") {
                $('.nav-links a[href="index.html"]').addClass('active');
            } else {
                $('.nav-links a[href="' + page + '"]').addClass('active');
            }
        });
