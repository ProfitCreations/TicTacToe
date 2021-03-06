$(document).ready(function() {
	var userLetter, compLetter, timeCompTurn;
	var userWin = 0;
	var compWin = 0;
	var player = "user";
	var win = true;
	var gameOver = false;
	var gamePads = [
		"#one",
		"#two",
		"#three",
		"#four",
		"#five",
		"#six",
		"#seven",
		"#eight",
		"#nine"
	];

	// Choose user's letter
	$("#btn-x").click(function() {
		userLetter = "X";
		compLetter = "O";
		$("#choose").prop("hidden", true);
		$(".spel").prop("hidden", false);
		$("#userLetter").text("X");
		$("#compLetter").text("O");
	});
	$("#btn-o").click(function() {
		userLetter = "O";
		compLetter = "X";
		$("#choose").prop("hidden", true);
		$(".spel").prop("hidden", false);
		$("#userLetter").text("O");
		$("#compLetter").text("X");
	});

	// Helper function
	$(".game-pad").click(function() {
		if (gameOver === false) {
			if (player === "user") {
				if ($(this).text() === "") {
					$(this).text(userLetter);
					var userPad = "#" + $(this).prop("id");
					var indexUserPad = gamePads.indexOf(userPad);
					gamePads.splice(indexUserPad, 1);
					checkCombis();
					if (gameOver === false) {
						player = "comp";
						runCompTurn();
					}
				}
			}
		}
	});

	// Computer turn timer
	function runCompTurn() {
		timeCompTurn = setTimeout(compTurn, 1000);
	}
	function compTurn() {
		if (gameOver === false) {
			if (player === "comp") {
				var randomPad =
					gamePads[Math.floor(Math.random() * gamePads.length)];
				$(randomPad).text(compLetter);
				var indexCompsPad = gamePads.indexOf(randomPad);
				gamePads.splice(indexCompsPad, 1);
				checkCombis();
				player = "user";
			}
		}
	}

	// Check for combinations
	function checkCombis() {
		switch (true) {
			case $("#one").text() === userLetter &&
				$("#two").text() === userLetter &&
				$("#three").text() === userLetter:
				$("#one, #two, #three").addClass("winner animated flash");
				gameOver = true;
				showResult("win");
				player = "user";
				break;
			case $("#four").text() === userLetter &&
				$("#five").text() === userLetter &&
				$("#six").text() === userLetter:
				$("#four, #five, #six").addClass("winner animated flash");
				gameOver = true;
				showResult("win");
				player = "user";
				break;
			case $("#seven").text() === userLetter &&
				$("#eight").text() === userLetter &&
				$("#nine").text() === userLetter:
				$("#seven, #eight, #nine").addClass("winner animated flash");
				gameOver = true;
				showResult("win");
				player = "user";
				break;
			case $("#one").text() === userLetter &&
				$("#four").text() === userLetter &&
				$("#seven").text() === userLetter:
				$("#one, #four, #seven").addClass("winner animated flash");
				gameOver = true;
				showResult("win");
				player = "user";
				break;
			case $("#two").text() === userLetter &&
				$("#five").text() === userLetter &&
				$("#eight").text() === userLetter:
				$("#two, #five, #eight").addClass("winner animated flash");
				gameOver = true;
				showResult("win");
				player = "user";
				break;
			case $("#three").text() === userLetter &&
				$("#six").text() === userLetter &&
				$("#nine").text() === userLetter:
				$("#three, #six, #nine").addClass("winner animated flash");
				gameOver = true;
				showResult("win");
				player = "user";
				break;
			case $("#one").text() === userLetter &&
				$("#five").text() === userLetter &&
				$("#nine").text() === userLetter:
				$("#one, #five, #nine").addClass("winner animated flash");
				gameOver = true;
				showResult("win");
				player = "user";
				break;
			case $("#three").text() === userLetter &&
				$("#five").text() === userLetter &&
				$("#seven").text() === userLetter:
				$("#three, #five, #seven").addClass("winner animated flash");
				gameOver = true;
				showResult("win");
				player = "user";
				break;
			case $("#one").text() === compLetter &&
				$("#two").text() === compLetter &&
				$("#three").text() === compLetter:
				$("#one, #two, #three").addClass("winner-comp animated flash");
				gameOver = true;
				showResult("loose");
				player = "comp";
				break;
			case $("#four").text() === compLetter &&
				$("#five").text() === compLetter &&
				$("#six").text() === compLetter:
				$("#four, #five, #six").addClass("winner-comp animated flash");
				gameOver = true;
				showResult("loose");
				player = "comp";
				break;
			case $("#seven").text() === compLetter &&
				$("#eight").text() === compLetter &&
				$("#nine").text() === compLetter:
				$("#seven, #eight, #nine").addClass(
					"winner-comp animated flash"
				);
				gameOver = true;
				showResult("loose");
				player = "comp";
				break;
			case $("#one").text() === compLetter &&
				$("#four").text() === compLetter &&
				$("#seven").text() === compLetter:
				$("#one, #four, #seven").addClass("winner-comp animated flash");
				gameOver = true;
				showResult("loose");
				player = "comp";
				break;
			case $("#two").text() === compLetter &&
				$("#five").text() === compLetter &&
				$("#eight").text() === compLetter:
				$("#two, #five, #eight").addClass("winner-comp animated flash");
				gameOver = true;
				showResult("loose");
				player = "comp";
				break;
			case $("#three").text() === compLetter &&
				$("#six").text() === compLetter &&
				$("#nine").text() === compLetter:
				$("#three, #six, #nine").addClass("winner-comp animated flash");
				gameOver = true;
				showResult("loose");
				player = "comp";
				break;
			case $("#one").text() === compLetter &&
				$("#five").text() === compLetter &&
				$("#nine").text() === compLetter:
				$("#one, #five, #nine").addClass("winner-comp animated flash");
				gameOver = true;
				showResult("loose");
				player = "comp";
				break;
			case $("#three").text() === compLetter &&
				$("#five").text() === compLetter &&
				$("#seven").text() === compLetter:
				$("#three, #five, #seven").addClass(
					"winner-comp animated flash"
				);
				gameOver = true;
				showResult("loose");
				player = "comp";
				break;
			case $("#one").text() != "" &&
				$("#two").text() != "" &&
				$("#three").text() != "" &&
				$("#four").text() != "" &&
				$("#five").text() != "" &&
				$("#six").text() != "" &&
				$("#seven").text() != "" &&
				$("#eight").text() != "" &&
				$("#nine").text() != "":
				gameOver = true;
				showResult("draw");
				break;
		}
	}

	// Results
	function showResult(state) {
		switch (state) {
			case "win":
				userWin++;
				$("#result")
					.removeClass("bounceOut")
					.addClass("bounceIn alert-success")
					.text("You Won!");
				$("#userBadge").text(userWin);
				player = "user";
				win = true;
				restart();
				break;
			case "loose":
				compWin++;
				$("#result").addClass("alert-danger").text("You Lose!");
				$("#compBadge").text(compWin);
				player = "comp";
				win = false;
				restart();
				break;
			case "draw":
				$("#result")
					.removeClass("bounceOut")
					.addClass("bounceIn alert-info")
					.prop("hidden", false)
					.text("Draw!");
				restart();
				break;
		}
	}

	// Restart function
	function restart() {
		setTimeout(runRestart, 1000);
		function runRestart() {
			$("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine")
				.text("")
				.removeClass(
					"winner animated flash winner-comp bounceOut bounceIn"
				);

			gamePads = [
				"#one",
				"#two",
				"#three",
				"#four",
				"#five",
				"#six",
				"#seven",
				"#eight",
				"#nine"
			];
			$("#result")
				.removeClass("bounceIn")
				.addClass("bounceOut")
				.removeClass("alert-success alert-info alert-danger bounceOut")
				.text("");
			if (win === false) {
				player = "comp";
				runCompTurn();
			} else {
				player = "user";
			}
			gameOver = false;
			$("#resetBtn").prop("hidden", false).addClass("animated flipInX");
		}
	}

	// Reset
	$("#resetBtn").click(function() {
		userWin = 0;
		compWin = 0;
		$(this).prop("hidden", true);
		$(".spel").prop("hidden", true);
		$("#choose").prop("hidden", false);
		$("#userBadge, #compBadge").text(0);
		$(".game-pad").text("");
	});
});
