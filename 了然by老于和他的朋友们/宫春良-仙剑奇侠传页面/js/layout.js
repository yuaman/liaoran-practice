var count = 1;
function slide(){
	for (var i = 1; i <= 3; i++) {
		var pic = document.getElementById("s" + i);
		pic.style.display="none";
	}
	document.getElementById("s" + (count%3+1)).style.display="block";
	count++;
}
setInterval("slide()",2000);