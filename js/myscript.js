var min = 0;
var sec = 0;
var ms = 0;
var clock = 0;

window.onload = function() {
	document.getElementById("startBtn").addEventListener("click", startWatch);
	document.getElementById("stopBtn").addEventListener("click", stopWatch);
	document.getElementById("resetBtn").addEventListener("click", resetWatch);
};

function startWatch() {
	clock = setInterval(incrementWatch, 10);
}

function stopWatch() {
	clearInterval(clock);
}

function resetWatch() {
	min = 0;
	sec = 0;
	ms = 0;
	displayWatch();
}

function incrementWatch() {
	ms++;
	if (ms > 99) {
		sec++;
		ms = 0;
	}
	if (sec > 59) {
		min++;
		sec = 0;
	}
	displayWatch();
}

function displayWatch() {
	var tmpMin = (min < 10) ? "0" + min : min;
	var tmpSec = (sec < 10) ? "0" + sec : sec;
	var tmpMs = (ms < 10) ? "0" + ms : ms;
	document.getElementById("min").innerHTML = tmpMin;
	document.getElementById("sec").innerHTML = tmpSec;
	document.getElementById("ms").innerHTML = tmpMs;
}