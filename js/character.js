$(document).ready(function(){
    $("#search-bar").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".character-card").filter(function() {
            $(this).toggle($(this).find(".card-name").text().toLowerCase().indexOf(value) > -1)
        });
    });
});

var modal = document.getElementById('modal');
var modalImg = document.getElementById("modal-bg");
var moreBtn1 = document.getElementById('more-btn1');

moreBtn1.onclick = function(){

  modal.style.display = "block";
//   modalImg.src = this.src;
  
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}