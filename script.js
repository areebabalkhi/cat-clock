var isPartyTime = false;
var partyButton = document.getElementById("partyTimeButton");
var updateClock = function () {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var partyButton = document.getElementById("partyTimeButton");
	var morningtime = document.getElementById("wakeUpTimeSelector").value;
	var lunchTime = document.getElementById("lunchTimeSelector").value;
	var napTime = document.getElementById("napTimeSelector").value;
	var nighttime = document.getElementById("bedtimeSelector").value;
	if (minutes < 10) {
		var timeString = hours + ":0" + minutes;
	} else {
		var timeString = hours + ":" + minutes;
	}
	if (seconds < 10) {
		timeString += ":0" + seconds;
	} else {
		timeString += ":" + seconds;
	}
	var message = document.getElementById("timeEvent");
	var img = document.getElementById("lolcat");
	var clock = document.getElementById("clock");
	clock.innerText = timeString;
	if (isPartyTime == false) {
		if (hours == lunchTime) {
			message.innerText = "Lunch time!";
			img.src = './caffiene bird.jpeg';
		} else if (hours == napTime) {
			message.innerText = "Naptime!";
			img.src = './sleepyBirds.jpg';
		} else if (hours >= morningtime && hours <= lunchTime) {
			message.innerText = "is morning i screm";
			img.src = './bird screm.jpeg';
		} else if (hours >= lunchTime && hours <= nighttime) {
			message.innerText = "i am awake now and i has fren";
			img.src = './bird with orange.jpg';
		} else if (hours >= nighttime || hours <= morningtime) {
			message.innerText = "go to sleep you stupid human";
			img.src = './crows sleeping.jpg';
		}
	}
}
var partyTime = function () {
	var message = document.getElementById("timeEvent");
	if (isPartyTime == false) {
		isPartyTime = true;
		document.getElementById("lolcat").src = './happy bird.jpg';
		partyButton.innerText = "End Party Time :(";
		message.innerText = "money money money";
	} else {
		isPartyTime = false;
		partyButton.innerText = "Party Time!";
		message.innerText = "loading...";
		document.getElementById("lolcat").src = './loading.gif';
	}
}
var clockInterval = setInterval(updateClock, 1000);
partyButton.addEventListener("click", partyTime);
