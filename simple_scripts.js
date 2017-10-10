// script loader for the page

// jQuery Modal Popups by Black
// http://code.jfbs.net/?showtopic=57
$(document).ready(function() {
	var fadeBackground = $(document.createElement("div")).hide().attr("id", "fade-background"),
	modalWindow = $(document.createElement("div")).hide().attr("id", "modal-window");
	$(document.body).append(fadeBackground, modalWindow);
	$(document).on("click", ".modal-link", function(e) {
		$("#fade-background").css({ "opacity": "0.6" }).fadeIn("fast");
                var newContents = $("#" + $(this).data("modal-target")).html();
                $("#modal-window").html(newContents);
		$("#modal-window").fadeIn("slow");
		e.preventDefault();
	});
	$(document).on("click", "#fade-background", function() {
		$("#fade-background").fadeOut("slow");
		$("#modal-window").fadeOut("slow");
	});
	$(document).keypress(function(e) {
		if(e.keyCode == 27) {
			$("#fade-background").fadeOut("slow");
			$("#modal-window").fadeOut("slow");
		}
	});

  $(window).scroll(function() {
  var y = $(this).scrollTop();
       if (y > 450) {
           $(".tsidebar").fadeIn('slow');
       } else {
         $(".tsidebar").fadeOut();
       }
    });

  	$(".opening").click (function () {
		$(".timehello").animate({left:-300px}, 200);
	});

});


