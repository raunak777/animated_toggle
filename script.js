/***********
*******/
var menu = document.getElementById("menu");
var active = document.getElementsByClassName("element");
menu.addEventListener("click", menuClick);
function menuClick() {
	var len = active.length;
  for(var i = 0; i < len; i++){
          active[i].classList.toggle("active");
     }
}