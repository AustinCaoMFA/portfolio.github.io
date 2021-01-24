/* Please ❤ this if you like it! */


(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

	
	//About page
	
	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
	});

	
	//Contact page
	
	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
	});

	
	//Travel portfolio page
	
	$(".travel").on('click', function () {
		$("body").addClass("travel-on");
	});
	$(".travel-close").on('click', function () {
		$("body").removeClass("travel-on");
	});

	
	//Wildlife portfolio page
	
	$(".wildlife").on('click', function () {
		$("body").addClass("wildlife-on");
	});
	$(".wildlife-close").on('click', function () {
		$("body").removeClass("wildlife-on");
	});

	
	//Nature portfolio page
	
	$(".nature").on('click', function () {
		$("body").addClass("nature-on");
	});
	$(".nature-close").on('click', function () {
		$("body").removeClass("nature-on");
	});

	//project1
	
	$(".image1").on('click', function () {
		$("body").addClass("project1-on");
	});
	$(".project1-close").on('click', function () {
		$("body").removeClass("project1-on");
	});

	//project2
	
	$(".image2").on('click', function () {
			$("body").addClass("project2-on");
		});
		$(".project2-close").on('click', function () {
			$("body").removeClass("project2-on");
		});

	//project3
	
	$(".image3").on('click', function () {
		$("body").addClass("project3-on");
	});
	$(".project3-close").on('click', function () {
		$("body").removeClass("project3-on");
	});

	//project4
	
	$(".image4").on('click', function () {
		$("body").addClass("project4-on");
	});
	$(".project4-close").on('click', function () {
		$("body").removeClass("project4-on");
	});

	//project5
	
	$(".image5").on('click', function () {
		$("body").addClass("project5-on");
	});
	$(".project5-close").on('click', function () {
		$("body").removeClass("project5-on");
	});

	//project6
	
	$(".image6").on('click', function () {
		$("body").addClass("project6-on");
	});
	$(".project6-close").on('click', function () {
		$("body").removeClass("project6-on");
	});

	//project7
	
	$(".image7").on('click', function () {
		$("body").addClass("project7-on");
	});
	$(".project7-close").on('click', function () {
		$("body").removeClass("project7-on");
	});

	//project8
	
	$(".image8").on('click', function () {
		$("body").addClass("project8-on");
	});
	$(".project8-close").on('click', function () {
		$("body").removeClass("project8-on");
	});

	//project9
	
	$(".image9").on('click', function () {
		$("body").addClass("project9-on");
	});
	$(".project9-close").on('click', function () {
		$("body").removeClass("project9-on");
	});

	//project10
	
	$(".image10").on('click', function () {
		$("body").addClass("project10-on");
	});
	$(".project10-close").on('click', function () {
		$("body").removeClass("project10-on");
	});

	//project11
	
	$(".image11").on('click', function () {
		$("body").addClass("project11-on");
	});
	$(".project11-close").on('click', function () {
		$("body").removeClass("project11-on");
	});
	
})(jQuery);