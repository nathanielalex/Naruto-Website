// var modal = document.getElementById('modal');
// // var modalImg = document.getElementById("modal-bg");
// var hamburger = document.getElementById('hamburger');

// hamburger.onclick = function(){

//     modal.style.display = "block";
  
// }

// $('#hamburger').on('click', function() {
//     // $('modal').show();
//     $('.modal').slideToggle("slow");
//     $('.navigation').slideToggle("slow");
    
// });

$('#hamburger').on('click', function() {
    // console.log('click');
    $('.navbar-bg').toggle();
    $('.navbar').slideToggle("slow");
    // $('.navigation').slideDown("slow");
});
