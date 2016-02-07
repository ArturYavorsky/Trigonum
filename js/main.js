$(function(){
	owlMain();	
})

function owlMain(){
	$('.owl-main').owlCarousel({
	    loop:true,
	  	dots: false,
	   	nav: true,
	    items: 1,
	    autoplayHoverPause: true
	})
}

$(function(){ 
$('a[href^="#"]').click(function(){ 
var target = $(this).attr('href'); 
$('html, body').animate({scrollTop: $(target).offset().top}, 700);
return false; 
}); 
});

function initTabs() 
{ 
var sets = document.getElementsByTagName("div"); 
for (var i = 0; i < sets.length; i++) 
{ 
if (sets[i].className.indexOf("tabset") != -1) 
{ 
var tabs = []; 
var links = sets[i].getElementsByTagName("a"); 
for (var j = 0; j < links.length; j++) 
{ 
if (links[j].className.indexOf("tab") != -1) 
{ 
tabs.push(links[j]); 
links[j].tabs = tabs; 
var c = document.getElementById(links[j].href.substr(links[j].href.indexOf("#") + 1)); 
if (c) if (links[j].className.indexOf("active") != -1) c.style.display = "block"; 
else c.style.display = "none"; 

links[j].onclick = function () 
{ 
var c = document.getElementById(this.href.substr(this.href.indexOf("#") + 1));
if (c) 
{ 
for (var i = 0; i < this.tabs.length; i++) 
{ 
document.getElementById(this.tabs[i].href.substr(this.tabs[i].href.indexOf("#") + 1)).style.display = "none"; 
this.tabs[i].className = this.tabs[i].className.replace("active", ""); 
} 
this.className += " active"; 
c.style.display = "block"; 
return false; 
} 
} 
} 
} 
} 
} 
} 

if (window.addEventListener) 
window.addEventListener("load", initTabs, false); 
else if (window.attachEvent) 
window.attachEvent("onload", initTabs);

function setEqualHeight(columns) { var tallestcolumn = 0; columns.each( function() { currentHeight = $(this).height(); if(currentHeight > tallestcolumn) { tallestcolumn = currentHeight; } } ); columns.height(tallestcolumn); } $(document).ready(function() { setEqualHeight($(".container > div")); });










