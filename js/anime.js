var anime1 = document.getElementById('anime1');
var anime2 = document.getElementById('anime2');
var anime3 = document.getElementById('anime3');

var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');



var carousel = document.getElementById('carousel');

function revertPosition() {
    anime1.style.transform = "translate(0px, 0px)";
    anime2.style.transform = "translate(0px, 0px)";
    anime3.style.transform = "translate(0px, 0px)";
}

anime1Active();

function anime1Active() {
    carousel.style.backgroundImage = "url('./asset/anime/naruto.jpg')";

    revertPosition();
    anime1.style.transform = "translate(0px, 10px)";
    document.getElementById('author').innerText = "MASASHI KISHIMOTO"
    document.getElementById('director').innerText = "HAYATO DATE"
    document.getElementById('studio').innerText = "PIERROT"
    document.getElementById('synopsis-content').innerText = "Naruto is a Japanese anime series based on Masashi Kishimoto's manga of the same name. It follows the journey of Naruto Uzumaki, a young ninja with a dream of becoming the strongest ninja and the leader of his village, known as the Hokage. Naruto is an orphan, and he harbors the powerful Nine-Tails Fox, a fearsome creature sealed within him at birth."
    img1.src = './asset/anime/naruto/naruto.jpg';
    img2.src = './asset/anime/naruto/naruto-2.jpg';
    img3.src = './asset/anime/naruto/naruto-3.jpg';
    img4.src = './asset/anime/naruto/naruto-4.jpg';
}

function anime2Active() {
    carousel.style.backgroundImage = "url('./asset/anime/naruto-shippuden.jpg')";
    revertPosition();
    anime2.style.transform = "translate(0px, 10px)";
    document.getElementById('author').innerText = "MASASHI KISHIMOTO"
    document.getElementById('director').innerText = "HAYATO DATE"
    document.getElementById('studio').innerText = "PIERROT"
    document.getElementById('synopsis-content').innerText = "Naruto Shippuden continues the story of Naruto Uzumaki, now older and facing even greater challenges as he strives to protect his village and achieve his dream of becoming Hokage."
    img1.src = './asset/anime/naruto-shippuden/naruto-shippuden-1.png';
    img2.src = './asset/anime/naruto-shippuden/naruto-shippuden-2.png';
    img3.src = './asset/anime/naruto-shippuden/naruto-shippuden-3.jpg';
    img4.src = './asset/anime/naruto-shippuden/naruto-shippuden-4.jpg';
}

function anime3Active() {
    carousel.style.backgroundImage = "url('./asset/anime/boruto.jpg')";
    revertPosition();
    anime3.style.transform = "translate(0px, 10px)";
    document.getElementById('author').innerText = "UKYO KODACHI"
    document.getElementById('director').innerText = "NORIYUKI ABE"
    document.getElementById('studio').innerText = "PIERROT"
    document.getElementById('synopsis-content').innerText = "Boruto: Naruto Next Generations follows the adventures of Naruto Uzumaki's son, Boruto, as he navigates the challenges of being a young ninja in a time of peace, while dealing with the legacy of his famous father."
    img1.src = './asset/anime/boruto/boruto-1.avif';
    img2.src = './asset/anime/boruto/boruto-2.webp';
    img3.src = './asset/anime/boruto/boruto-3.jpg';
    img4.src = './asset/anime/boruto/boruto-4.jpg';
}

anime1.addEventListener("click", function() {
    anime1Active();
});
anime2.addEventListener("click", function() {
    anime2Active();
});
anime3.addEventListener("click", function() {
    anime3Active();
});

var modal = document.getElementById('myModal');
// var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");

img1.onclick = function(){

  modal.style.display = "block";
  modalImg.src = this.src;
  
}
img2.onclick = function(){

  modal.style.display = "block";
  modalImg.src = this.src;
  
}
img3.onclick = function(){

  modal.style.display = "block";
  modalImg.src = this.src;
  
}
img4.onclick = function(){

  modal.style.display = "block";
  modalImg.src = this.src;
  
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}
