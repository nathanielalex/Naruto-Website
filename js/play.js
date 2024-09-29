const canvas = document.querySelector('canvas');


const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = 500;



var keys = {
    'KeyA': false,
    'KeyD': false,
    'KeyW': false
    
}



var player = new Player ({
    position: {
        x:30,
        y: 100
    },
    imageSrc: "./asset/anime_sprite/naruto_idle.png",
    frameCount: 1,
    scale: 0.2,
    sprites: {
        idle: {
            imageSrc: "./asset/anime_sprite/naruto_idle.png",
            frameCount: 6,
        }, right: {
            imageSrc: "./asset/anime_sprite/naruto_right.png",
            frameCount: 6,
        }, left: {
            imageSrc: "./asset/anime_sprite/naruto_left.png",
            frameCount: 6,
        },
        jump: {
            imageSrc: "./asset/anime_sprite/naruto_jump.png",
            frameCount: 2,
        },
        fall: {
            imageSrc: "./asset/anime_sprite/naruto_fall.png",
            frameCount: 2,
        },
    }
})

animate();

function animate() {
    window.requestAnimationFrame(animate);
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    player.update();
    
    player.velocity.x = 0;
    
    // console.log(keys);

    if(keys.KeyA == true) {
        player.velocity.x = -3;
        
    } 
    else if(keys.KeyD == true) {
        player.velocity.x = 3;
    } 
    
    if(keys.KeyW == true && player.isOnGround) {
        
        player.jump();
        // keys.KeyW = false;
        player.isOnGround = false;
        // player.velocity.y = -3;
    } 
    if(keys.KeyW == false && keys.KeyA == false && keys.KeyD == false) {
        player.velocity.x = 0;
        // player.velocity.y = 0;
    }
}

window.addEventListener("keydown", (event) => {
    keys[event.code] = true;
    
});

window.addEventListener("keyup", (event) => {
    keys[event.code] = false;
    
});


