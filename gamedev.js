$( document ).ready(function() {

	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/spot2.jpg')");
		$("#goRight1").hide();
		$("#goLeft1").hide();
		$("#goRight2").show();
		$("#goForward1").show();
		$("#goLeft7").show();
	});

	$("#goRight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/spot3.gif')");
		$("#goRight2").hide();
		$("#goForward1").hide();
		$("#goLeft7").hide();
		$("#goRight3").show();
		$("#goLeft6").show();
	});

	$("#goRight3").click(function() {
		$("#exploreBody").css("background-image", "url('img/spot4.jpg')");
		$("#goRight3").hide();
		$("#goLeft6").hide();
		$("#goRight4").show();
		$("#goLeft5").show();

	});

	$("#goRight4").click(function() {
		$("#exploreBody").css("background-image", "url('img/spot5.jpg')");
		$("#goRight4").hide();
		$("#goLeft3").hide();
		$("#goRight5").show();
		$("#goLeft4").show();
	});

	
	$("#goRight5").click(function() {
		$("#exploreBody").css("background-image", "url('img/spot6.png')");
		$("#goRight5").hide();
		$("#goLeft2").hide();
		$("#goRight6").show();
		$("#goLeft3").show();
	});

	$("#goRight6").click(function() {
		$("#exploreBody").css("background-image", "url('img/spot7.gif')");
		$("#goRight6").hide();
		$("#goLeft1").hide();
		$("#goRight7").show();
		$("#goLeft2").show();
	});

	$("#goRight7").click(function() {
		$("#exploreBody").css("background-image", "url('img/spot1.jpg')");
		$("#goRight7").hide();
		$("#goLeft2").hide();
		$("#goRight1").show();
		$("#goLeft1").show();
	});


















	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('img/spot2.jpg')");
		$("#goRight1").hide();
		$("#goLeft1").hide();
		$("#goRight7").show();
		$("#goLeft2").show();
	});

	$("#goLeft2").click(function() {
		$("#exploreBody").css("background-image", "url('img/spot3.gif')");
		$("#goRight7").hide();
		$("#goLeft2").hide();
		$("#goRight6").show();
		$("#goLeft3").show();
	});

	$("#goLeft3").click(function() {
		$("#exploreBody").css("background-image", "url('img/spot4.jpg')");
		$("#goRight6").hide();
		$("#goLeft3").hide();
		$("#goRight5").show();
		$("#goLeft4").show();

	});

	$("#goLeft4").click(function() {
		$("#exploreBody").css("background-image", "url('img/spot5.jpg')");
		$("#goRight5").hide();
		$("#goLeft4").hide();
		$("#goRight4").show();
		$("#goLeft5").show();
	});

	
	$("#goLeft5").click(function() {
		$("#exploreBody").css("background-image", "url('img/spot6.png')");
		$("#goRight4").hide();
		$("#goLeft5").hide();
		$("#goRight3").show();
		$("#goLeft6").show();
	});

	$("#goLeft6").click(function() {
		$("#exploreBody").css("background-image", "url('img/spot7.gif')");
		$("#goRight3").hide();
		$("#goLeft6").hide();
		$("#goRight2").show();
		$("#goLeft7").show();
	});

	$("#goLeft7").click(function() {
		$("#exploreBody").css("background-image", "url('img/spot1.jpg')");
		$("#goRight2").hide();
		$("#goLeft7").hide();
		$("#goRight1").show();
		$("#goLeft8").show();
	});

	

});