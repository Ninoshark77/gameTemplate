$( document ).ready(function() {

	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/start.jpg')");
		$("#goRight1").hide();
		$("#goLeft1").hide();
		$("#goRight2").show();
		$("#goForward1").show();
		$("#goLeft7").show();
	});

	$("#goRight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/spot1.jpg')");
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

	$("#goRight-Straight3").click(function() {
		$("#exploreBody").css("background-image", "url('img/spot5.jpg')");
		$("#goRight-Straight3").hide();
		$("#goRight-Right2").show();
	});

	$("#goRight-Right2").click(function() {
		$("#exploreBody").css("background-image", "url('img/spot6.png')");
		$("#goRight-Right2").hide();
		$("#goBack").show();
	});


	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('img/spot6.jpg')");
		$("#goLeft1").hide();
		$("#goLeft2").show();
	});

	$("#goLeft-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/spot7.jpg')");
		$("#goLeft2").hide();
		$("#goLeft3").show();
	});

	$("#goLeft-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/spot8.jpg')");
		$("#goLeft3").hide();
		$("#goBack").show();
	});


	$("#goBack").click(function() {
		$("#exploreBody").css("background-image", "url('img/spot9.jpg')");
		$("#goBack").hide();
		$("#goRight1").show();
		$("#goLeft1").show();
	});



});