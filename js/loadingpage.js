

let loadingBar = document.getElementById('loading-bar');
let progress = 0;

//set awal count
// countDownTxt.textContent = count;



//jalanin count down
let interval = setInterval(function() {
    // count--;

    // //update txt
    // countDownTxt.textContent = count;

    //if count over
    if(progress >= 100) {
        clearInterval(interval);
        // timeout adalah jede detik
        setTimeout(function(){
            // alert('Congrats!');
            window.location.href = "index.html";

        }, 1000);
    } else {
        progress++;
        loadingBar.style.width = progress + '%';
    }
}, 100);
