// var header1 = document.getElementById('header1');
// var header2 = document.getElementById('header2');
// var header3 = document.getElementById('header3');
// var header4 = document.getElementById('header4');
// var header5 = document.getElementById('header5');
// var header6 = document.getElementById('header6');
// var header7 = document.getElementById('header7');
// var header8 = document.getElementById('header8');
// var header9 = document.getElementById('header9');
// var header10 = document.getElementById('header10');
// var header11 = document.getElementById('header11');
// var header12 = document.getElementById('header12');
// var header13 = document.getElementById('header13');
// var header14 = document.getElementById('header14');
// var header15 = document.getElementById('header15');
// var header16 = document.getElementById('header16');
// var header17 = document.getElementById('header17');
// var header18 = document.getElementById('header18');

var headers = [];
var headerString = [];
var contents = [];
var contentString = [];

//index 0 = 1
for (let i = 1; i <= 18; i++) {
    headers[i - 1] = document.getElementById('header' + i);
    contents[i - 1] = document.getElementById('content' + i);
    headerString[i - 1] = "#header" + i;
    contentString[i - 1] = "#content" + i;
    
}

// var content1 = document.getElementById('content1');
// var content2 = document.getElementById('content2');
// var content3 = document.getElementById('content3');
// var content4 = document.getElementById('content4');
// var content5 = document.getElementById('content5');
// var content6 = document.getElementById('content6');
// var content7 = document.getElementById('content7');
// var content8 = document.getElementById('content8');
// var content9 = document.getElementById('content9');
// var content10 = document.getElementById('content10');
// var content11 = document.getElementById('content11');
// var content12 = document.getElementById('content12');
// var content13 = document.getElementById('content13');
// var content14 = document.getElementById('content14');
// var content15 = document.getElementById('content15');
// var content16 = document.getElementById('content16');
// var content17 = document.getElementById('content17');
// var content18 = document.getElementById('content18');

// function hideAll() {
//     content1.style.display = "none";
// }

// hideAll();

// $("#content1").hide()

for (let i = 0; i < 18; i++) {
    // headers[i - 1] = document.getElementById('header' + i);
    // contents[i - 1] = document.getElementById('content' + i);
    // let header = "#" + headers[i]
    // let content = "#" + contents[i]
    // console.log(headers[i])
    $(headerString[i]).on('click', function() {
        $(contentString[i]).slideToggle("slow");
    });
  
}

// $("#header1").on('click', function() {
//     $("#content1").slideToggle("slow");
// });
// $("#header2").on('click', function() {
//     $("#content2").slideToggle("slow");
// });
// $("#header1").on('click', function() {
//     $("#content1").slideToggle("slow");
// });
// $("#header2").on('click', function() {
//     $("#content2").slideToggle("slow");
// });

// header1.addEventListener("click", () => {
//     content1.style.display = "flex"
// })