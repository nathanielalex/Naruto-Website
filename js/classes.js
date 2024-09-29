class Sprite {
    constructor( {
        position,
        imageSrc,
        frameCount,
        scale = 1,
    }) {
        this.position = position;
        this.imageSrc = imageSrc;
        this.scale = scale;
        this.frameCount = frameCount;
        this.frameIndex = 0;
        this.frameElapsed = 0;
        this.frameHold = 5; //
        this.image = new Image();
        this.image.src = imageSrc;
    }
    draw() {
        ctx.drawImage (
            this.image,
            this.frameIndex * (this.image.width / this.frameCount),
            0,
            this.image.width / this.frameCount,
            this.image.height,
            this.position.x,
            this.position.y,
            (this.image.width / this.frameCount) * this.scale,
            (this.image.height) * this.scale
        )
    }

    animate() {
        // this.frameIndex = (this.frameIndex + 1) % this.frameCount;
        this.frameIndex = (this.frameIndex + 1) % this.frameCount;

    }

    update() {
        this.draw();
        this.frameElapsed++;
        if(this.frameElapsed % this.frameHold == 0) {
            this.animate();
        }
    }
}

class Player extends Sprite {
    constructor({
        position,
        imageSrc,
        frameCount,
        scale,
        sprites,
    }) {
        super({position: position, imageSrc: imageSrc, frameCount: frameCount, scale: scale});
        this.velocity = {
            x: 0,
            y: 0 //gravity
        }
        this.sprites = sprites;
        this.isOnGround = false;
        this.height = 103.2;
        for(let sprite in this.sprites) {
            sprites[sprite].image = new Image();
            sprites[sprite].image.src = sprites[sprite].imageSrc
        }
    }
    update() {
        super.update();

        if(this.position.y + (this.height) + this.velocity.y >= canvas.height) {
            // console.log(this.image.height*this.scale);
            this.velocity.y = 0;
            player.isOnGround = true;
            // this.position.y = canvas.height - this.image.height * this.scale;
        } else {
            this.velocity.y += 0.2; //gravity
        }

        
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
    }

    jump(){
        this.velocity.y = -4;
    }

    swithSprite(sprite) {
        if(this.image == this.sprites[sprite].image) return;

        this.image = this.sprites[sprite].image
        this.frameCount = this.sprites[sprite].frameCount
        this.frameIndex = 0;
        // this.frameElapsed = 0;
    }
    animate() {
        super.animate();
        if(this.velocity.x > 0) {
            this.swithSprite('right')
        } else if(this.velocity.x < 0) {
            this.swithSprite('left')
        } 
        else if(this.velocity.y < 0) {
            this.swithSprite('jump')
        } 
        else if(this.velocity.y > 0) {
            this.swithSprite('fall')
        } 
        
        else {
            this.swithSprite('idle')
        }
    }
}   