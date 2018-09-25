let width = document.documentElement.clientWidth;
if (width>640){
	width=640;
}
document.documentElement.style.fontSize=width/750*100+"px";