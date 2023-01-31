class FPSViewer {
    constructor(initialPos = { x: 10, y: 28 }) {
        this.initialPos = initialPos;
    }

    draw(ctx, delta) {
        const FPS = (1 / delta).toFixed(0);
        ctx.font = '25px Consolas';
        ctx.fillStyle = '#000';
        ctx.fillText(`FPS: ${FPS}`, this.initialPos.x, this.initialPos.y)
    }

    // Métodos que tienen que existir pero son inútiles
    update() {}
    keyboardEvent() {}
}
