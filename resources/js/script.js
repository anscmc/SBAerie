$(document).ready(function(){
  jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 3000;
    document.body.style.webkitTransform =  'scale(1)';
document.body.style.msTransform =   'scale(100)';
document.body.style.transform = 'scale(1)';
document.body.style.zoom = screen.logicalXDPI / screen.deviceXDPI;
});
function toggleMenu(){
    $('#mobileMenu').fadeToggle(200);
}

//$(document).ready(function(){
//        $(".carousel-control").click(function(){            
//            $(".carousel").attr("data-interval", "false");
//        });
//    });

$(".whoweare").hover(
  function () {
    $('#whoweare').toggleClass('showme');
  }, 
);
$(".accountingservices").hover(
  function () {
    $('#accountingservices').toggleClass('showme');
  }, 
);
$(".newsupdates").hover(
  function () {
    $('#newsupdates').toggleClass('showme');
  }, 
);
$("#whoweare").hover(
  function () {
    $('#whoweare').toggleClass('showme');
  }, 
);
$("#accountingservices").hover(
  function () {
    $('#accountingservices').toggleClass('showme');
  }, 
);
$("#newsupdates").hover(
  function () {
    $('#newsupdates').toggleClass('showme');
  }, 
);

$(".carousel-control").click(function(){           
    $(".carousel").attr("data-interval", "false");
});