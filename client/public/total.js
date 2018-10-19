
//actual return to top jquery
$('#return-to-top').click(function() {      // button click
    $('body,html').animate({
        scrollTop : 0                       // Scroll to albums
    }, 500);
});

$(function() {
    $('body').scrollTop(0);
 });


//floating scroll to top botton 
//this automatically hides on document load
 $(document).ready(function() {
    $('.fixed-action-btn').hide();
    $('.fixed-action-btn-down').hide();
 });

 //once you've scrolled 600px, the div will fade in, if you scroll less than 600px it will fade again
 $(window).scroll(function() {
     if ($(this).scrollTop() < 600)
        {
            $('.fixed-action-btn').fadeOut();
        } else {
            $('.fixed-action-btn').fadeIn();
        }
 });

