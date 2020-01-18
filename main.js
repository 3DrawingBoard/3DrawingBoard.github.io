$(document).ready(function(){
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    })
    
$('.product').slick({
  dots: false,
  infinite: true,
  speed: 200,
  fade: true,
  cssEase: 'linear'
});

$('.reviews').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: false,
  cssEase: 'linear'
});    
 
now = new Date();
    var perem = (24-now.getHours())*3600;
    $(".el-timer").attr("data-timer", perem);
    $(".el-timer").TimeCircles({
        "animation": "smooth",
        "bg_width": 0.15,
        "fg_width": 0.015,
        "circle_bg_color": "#e2e2e2",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#FFCC66",
                "show": false
            },
            "Hours": {
                "text": "Часов",
                "color": "#ffd900",
                "show": true
            },
            "Minutes": {
                "text": "Минут",
                "color": "#ffd900",
                "show": true
            },
            "Seconds": {
                "text": "Секунд",
                "color": "#ffd900",
                "show": true
            }
        }
    });    
   
});