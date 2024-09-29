// window.addEventListener('scroll', function() {
//     const parallax = document.getElementById('parallax-img');
//     const scrollPosition = window.scrollY;
//     parallax.style.transform = 'translateY(' + (scrollPosition * 0.5) + 'px)';
// });

$(document).ready(function() {
    console.log("in js")
    $(".snap-container").scroll(function() {
        console.log('Scroll event triggered');
        var scrollPos = $(this).scrollTop();
        console.log('test');
        $("#parallax-img").css({
            'transform': 'scale(' + (1 + scrollPos * 0.0005) + ')'
        });
    });
});
