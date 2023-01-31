// Ejemplo Pacman

window.onload = () => {
    // Obtiene el canvas
    const canvas = document.getElementById('canvas');

    // Contexto del canvas 2D
    const ctx = canvas.getContext('2d');

    // Cálculo de la mitad del canvas
    const canvasMid = { x: canvas.width / 2, y: canvas.height / 2 };

    // Actores o elementos que se van a dibujar en pantalla
    const actors = [new Pacman({ x: canvasMid.x, y: canvasMid.y }), new Pacman({ x: 100, y: 400 }, 30, 10, '#ff5622', 10), new FPSViewer()];

    // Inicializar el primer frame
    let lastFrame = 0;

    // Renderizado
    // "time" es el tiempo transcurrido
    const render = (time) => {
        // "delta" es la diferencia de tiempo entre el frame anterior y el actual
        let delta = (time - lastFrame) / 1000;

        // Actualizando "lastFrame"
        lastFrame = time;

        // Actualiza la posición de los actores del canvas
        actors.forEach((actor) => {
            actor.update(delta);
        });

        // Borra lo pintado en el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dibuja o pinta los actores en el canvas
        actors.forEach((actor) => {
            actor.draw(ctx, delta);
        });

        // Recursividad para el renderizado correcto
        window.requestAnimationFrame(render);
    };

    // Primera llamada del renderizado
    window.requestAnimationFrame(render);

    // Escuchar la tecla presionada
    document.body.addEventListener('keydown', (e) => {
        actors.forEach((player) => {
            player.keyboardEvent(e.key);
        });
    });
};
