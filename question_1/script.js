window.onload = function() {
	var widthBox = document.getElementById("width-box");
	var heightBox = document.getElementById("height-box");
	widthBox.innerHTML = window.innerWidth;
	heightBox.innerHTML = window.innerHeight;
	window.addEventListener("resize", function() {
		widthBox.innerHTML = window.innerWidth;
		heightBox.innerHTML = window.innerHeight;
	});

	widthBox.addEventListener("contextmenu", function(e) {
		e.preventDefault();
		alert("Right-click is disabled!");
	});

	heightBox.addEventListener("mousedown", function(e) {
		if (e.button === 0) {
			alert("Left-click is disabled!");
			e.preventDefault();
		}
	});
}
