
function yScroll()
{
	var ptop = document.querySelector(".top_toolbar");
	var pbottom = document.querySelector(".bottom_toolbar");
	
	var ypos = window.pageYOffset;
	
	if( ypos > 150 )
	{
		ptop.style.height = "60px";
		ptop.style.paddingTop = "20px";
		pbottom.style.height = "60px";
		
	} 
	else
	{
		ptop.style.height = "200px";
		ptop.style.paddingTop = "50px";
		pbottom.style.height = "60px";
		
		

		
	}
}

window.addEventListener("scroll", yScroll);

var panel = document.querySelector('.overlay');
var inner = document.querySelector('.side-panel');
var right = document.querySelector('.right-side-panel');


document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
  if ( this.classList.toggle( "active" ) )
  {
  panel.style.width = "100%";
    inner.style.width = "60%";
    right.style.width = "43%";
  inner.style.transition = "width .5s ease-in-out 0s";
  right.style.transition = "width .5s ease-in-out 0s";
   panel.style.transition = "width .5s linear 0s";


}else
{
	 panel.style.width = "0%";
	 inner.style.width = "0%";
	 right.style.width = "0%";

}
});

function pboo()
{
	var elem = document.querySelector(".goup");

	if( ( window.pageYOffset + window.innerHeight ) >= document.body.offsetHeight )
	{
		
		elem.style.transition = "left .4s ease-in-out 0s";
		elem.style.left = "140px";
		
	}else
	{
		elem.style.transition = "left .4 ease-in-out 0s";
		elem.style.left = "-140px";
	}
}

window.onscroll = pboo;

