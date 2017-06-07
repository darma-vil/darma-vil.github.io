$(function() {
    $('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 200,
		mainClass: 'my-mfp-slide-bottom'
	});
        
    $(".top-line .sf-menu").superfish({
        cssArrows: false,
        hoverClass: 'no-class',
        delay: 300
    });
    $("a[href=\\#callback]").click(function(){
        
        $("#callback .formname").val($(this).data("form"));
        
    });
    
    $(window).scroll(function(){
        
        var st = $(this).scrollTop();
        
        $(".slide-bg").css({
            "transform" : "translate(0%, " + st /50 + "%"
        });
    });
    
    $(".sf-menu").after("<div id='my-menu'>");
    $(".sf-menu").clone().appendTo("#my-menu");
    $("#my-menu").find("*").attr("style", "");
    $("#my-menu").find("ul").removeClass("sf-menu");
    $("#my-menu").mmenu({
        extensions: ['widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black'],
        navbar: {
            title: "Меню"
        }
    });
    
      var api = $("#my-menu").data("mmenu");
      api.bind("closed", function (){
          $(".toggle-mnu").removeClass("on");      
      });
    
    
      $(".mobile-mnu").click(function() {
        var mmAPI = $("#my-menu").data( "mmenu" );
        mmAPI.open();
        var thiss = $(this).find(".toggle-mnu");
        thiss.toggleClass("on");
        $(".main-mnu").slideToggle();
        return false;
     })
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
    
    

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
