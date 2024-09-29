// $(document).ready(function() {
//     $('.cover').on('click', function() {
//         $('.cover').removeClass('selected');
//         $(this).addClass('selected');
//         var selectedIndex = $(this).data('index');
//         if(selectedIndex == 0) {
//             $('#background').attr('src', './asset/manga/naruto-bg.jpg');
            
//         }
//         else if(selectedIndex == 1) {
//             $('#background').attr('src', './asset/manga/naruto-shippuden-bg.jpg');
            
//         }
//         else if(selectedIndex == 2) {
//             $('#background').attr('src', './asset/manga/boruto-bg.avif');
            
//         }
//         updateCoverFlow(selectedIndex);
//     });

  

//     function updateCoverFlow(selectedIndex) {
//         $('.cover').each(function() {
//             var index = $(this).data('index');
//             var offset = index - selectedIndex;
//             var transformValue = 'translateX(' + (offset * 50) + 'px)';
//             $(this).css('transform', transformValue);
//         });
//     }

    
//     $('.cover').first().click();
// });

$('.cover').on('click', function() {
    $('.cover').removeClass('selected');
    $(this).addClass('selected');
    var selectedIndex = $(this).data('index');
    if(selectedIndex == 0) {
        $('#background').attr('src', './asset/manga/naruto-bg.jpg');
        
    }
    else if(selectedIndex == 1) {
        $('#background').attr('src', './asset/manga/naruto-shippuden-bg.jpg');
        
    }
    else if(selectedIndex == 2) {
        $('#background').attr('src', './asset/manga/boruto-bg.avif');
        
    }
    updateCoverFlow(selectedIndex);
});



function updateCoverFlow(selectedIndex) {
    $('.cover').each(function() {
        var index = $(this).data('index');
        var offset = index - selectedIndex;
        var transformValue = 'translateX(' + (offset * 50) + 'px)';
        $(this).css('transform', transformValue);
    });
}


$('.cover').first().click();


var modal = document.getElementById('modal');
var modalImg = document.getElementById("modal-bg");
var moreBtn = document.getElementById('moreBtn');

moreBtn.onclick = function(){

  modal.style.display = "block";
//   modalImg.src = this.src;
  
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}