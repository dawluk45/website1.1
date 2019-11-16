// scroll to Top
let pageHeight = innerHeight / 2;

window.onscroll = function(){
    
    let YOffset= window.pageYOffset;

    if(YOffset > pageHeight){
        document.getElementById('to_top').style.display = "block";    
    } else {
       document.getElementById('to_top').style.display = "inherit";
  }    
};

$(function() { 
    
    var pageHeight = $(window).height() / 2;
    var pageWidth = $(window).width();
    
    if (pageWidth > 660){
    
        $(window).on('scroll', function(){

            var YOffset= $(window).scrollTop();

            if(YOffset > pageHeight){
                $('#rightMenu').fadeIn(1000);
            } else {
                $('#rightMenu').fadeOut(1000);
                $("#rightMenuItems").fadeOut(1000);
            }

        });
    }

    $("#rightMenu").on("click", function(e){
        e.preventDefault();
        $("#rightMenuItems").toggle(1000);
    }); 
        
});

$(function() {
        
    var selektor = '#rightMenuItems ul li a';
    
    var tabSection = Array();
    
    $('section').each(function(){
        
        tabSection.push($(this).offset().top);
    });

    function changeActivMenu(position){
        
        $(selektor).css('fontWeight', 'inherit');
        $(selektor + ':eq('+position+')').css('fontWeight', 'bold');
    
    }
        
    $(window).on('scroll', function(){
        
        var YOffset = $(window).scrollTop();
        
        $(selektor).css('fontWeight', 'inherit');
            
        for(i=0; i < tabSection.length; i++){
            
            if(YOffset >= tabSection[i] - 10){
                changeActivMenu(i);
            }
            
        }

    });
});
$(function(){
    $('.showAll').click(function(e){
         e.preventDefault();
         $(this).next().slideDown('slow');
         $(this).css({'display' : 'none'});
    });
 });
 $(function() { 
	$('a[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
                //-60 aby nie chowały się nagłówki pod główne menu : opcja sticky
				//scrollTop: target.offset().top - 60
				scrollTop: target.offset().top
			}, 1000);
		}
	});

});
//menu
const navElements = document.querySelectorAll('nav ul li a');
const effectElements = document.querySelectorAll('#effects div');
const textElements = document.querySelectorAll('#text div');

const path = window.location.pathname;
const existsBlog = path.indexOf("blog");

if(existsBlog === -1) {
    effectElements[0].style.visibility = "visible";
    textElements[0].style.visibility = "visible";
} else {
    effectElements[4].style.visibility = "visible";
    textElements[4].style.visibility = "visible";
}

for(let i = 0; i < navElements.length; i++){
    navElements[i].addEventListener('mouseover', function(){
        if(effectElements[0].style.visibility == "visible"){
            effectElements[0].style.visibility = "hidden";
            textElements[0].style.visibility = "hidden"; 
        }
        effectElements[i].style.visibility = "visible";
        textElements[i].style.visibility = "visible";
    });
}

for(let i = 0; i < navElements.length; i++){
    navElements[i].addEventListener('mouseout', function(){
        effectElements[i].style.visibility = "hidden";
        textElements[i].style.visibility = "hidden";
    });
}

