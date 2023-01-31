class Pacman {
    constructor(initialPos = { x: 250, y: 250 }, size = 75, mouthOpen = 30, color = '#fbe000', maxSpeed = 5) {
        // Posición inicial del Pacman
        this.origin = { x: initialPos.x, y: initialPos.y };
        // Dimensiones del Pacman
        this.size = size;
        this.mouthOpen = mouthOpen;
        this.color = color;
        this.speed = { x: maxSpeed, y: 0 };
        this.maxSpeed = maxSpeed;
    }

    draw(ctx, delta) {
        const converAngletoRad = (angle) => (angle * Math.PI) / 180;
        let open = 20 * Math.sin(20 * this.mouthOpen) + 20;
        let direction = 0;
        if (this.speed.x != 0 && this.speed.x < 0) {
            direction = 180;
        }
        ctx.strokeStyle = '#000';
        ctx.fillStyle = this.color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(this.origin.x, this.origin.y);
        ctx.arc(this.origin.x, this.origin.y, this.size, converAngletoRad(-open + direction), converAngletoRad(open + direction), true);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }

    update(delta) {
        this.mouthOpen += 0.8 * delta;
        let newPosX = this.origin.x + this.speed.x * (delta + 0.3);
        if (newPosX < 500 - this.size && newPosX >= this.size) {
            this.origin.x = newPosX;
        }
    }

    keyboardEvent(key) {
        switch (key) {
            case 'ArrowRight':
                console.log('right');
                this.speed.x = this.maxSpeed;
                break;
            case 'ArrowLeft':
                console.log('left');
                this.speed.x = -this.maxSpeed;
                break;
            case 'ArrowUp':
                console.log('up');
                break;
            case 'ArrowDown':
                console.log('down');
                break;
            default:
                console.log('unvalid key');
        }
    }
}
