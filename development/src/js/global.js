
function yScroll()
{
	var ptop = document.querySelector(".top_toolbar");
	var pbottom = document.querySelector(".bottom_toolbar");
	var vis = document.querySelector(".Vision_module");
	var cl = document.querySelector(".contentl");
	var cr = document.querySelector(".contentr");
	var ypos = window.pageYOffset;
	
	if( ypos > 150 )
	{
		ptop.style.height = "60px";
		ptop.style.paddingTop = "20px";
		pbottom.style.height = "60px";
		vis.style.marginTop = "150px";
		cl.style.position = "fixed";
		cr.style.position = "fixed";
	} 
	else
	{
		ptop.style.height = "200px";
		ptop.style.paddingTop = "50px";
		pbottom.style.height = "60px";
		vis.style.marginTop = "285px";
		cl.style.position = "fixed";
		cr.style.position = "fixed";
		
	}
}

window.addEventListener("scroll", yScroll);