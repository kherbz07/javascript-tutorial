function newClick() {
	document.getElementById("par1").innerHTML = "Paragraph content is changed.";
}

function alertClick() {
	window.alert("You clicked me!");
}

window.onload = function() {
	window.alert("The page finished loading.");
};