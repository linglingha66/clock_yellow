function drawClock(){
	var now = new Date();
	var hour = now.getHours() % 12;//表可没有13点
	var minute = now.getMinutes();
	var second = now.getSeconds();
	var hourLine = document.getElementsByClassName("hour")[0];
	hourLine.style.transform = "rotate(" + (hour*30 + minute/2 -90) + "deg)";//css布局时默认的是3点，偏转了90deg
	var minuteLine = document.getElementsByClassName("minute")[0];
	minuteLine.style.transform = "rotate(" + (minute*6-90) + "deg)";
	var secondLine = document.getElementsByClassName("second")[0];
	secondLine.style.transform = "rotate(" + (second*6-90) + "deg)";
}
	drawClock();
	window.setInterval(drawClock, 1000);//间隔1s执行一次drawClock()函数
