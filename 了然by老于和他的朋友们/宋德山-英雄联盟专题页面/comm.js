/********************轮播换图*****************/
var count=1;
function slide(){
	/**
	var pic1=document.getElementById("s "+i);
	var pic2=document.getElementById("s "+i);
	var pic3=document.getElementById("s "+i);
*/
	for (var i = 1; i<=3;   i++) {
		 var pic=document.getElementById("s"+i);
		 pic.style.display="none";

	} 
	
	document.getElementById("s"+(count%3+1)).style.display="block";
	count++;
}
setInterval("slide()",2000);
/********************时间取值******************/
function  TIME(){

	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth();
	var day = now.getDate();
	var h=now.getHours();
	if (h<10) {
		h="0"+h;
	}else{
		h=h;
	};
	/**
	h=(h<10)?("0"+h):h;
	*/
	var M=now.getMinutes();
	M=(M<10)?("0"+M):M;
	var s=now.getSeconds(); 
	var str = year+"/"+ (month+1)+"/"+day+" "+h+":"+M+":"+s;
	document.getElementById("g").innerHTML=str;

}
setInterval("TIME()",1000);
/********************************/