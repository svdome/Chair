
$(document).ready(function(){
    $('.avatar-slide').slick({
        infinite: true,
        slidesToScroll: 3 
    });
});

$(document).ready(function(){
    $('.last-chance-slide').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000,    
    });
});