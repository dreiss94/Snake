var tileSize: number;

class Snake {
    moveX: number;
    x: number;
    y: number;


    constructor() {
        this.x = 5;
        this.y = 5;
    }
}

class Game {
    ctx: CanvasRenderingContext2D;
    snake: Snake;

    constructor() {
        this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        tileSize = canvas.offsetHeight / 8;
        this.snake = new Snake();
    }

    render(){
        console.log("Render");        
        this.showGrid();
        this.renderSnake();
    }

    renderSnake() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(this.snake.x * tileSize, this.snake.y * tileSize, tileSize, tileSize);
    }

    showGrid() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "black";
        for (let i = 0; i < 8; i++) {
            for (let ii = 0; ii < 8; ii++) {
                if ((i + ii) % 2 == 0) {
                    this.ctx.rect(i * tileSize, ii * tileSize, tileSize, tileSize);
                } else {
                    this.ctx.fillRect(i * tileSize, ii * tileSize, tileSize, tileSize);
                }
            }
        }
    }
}

class App {
    game: Game;

    constructor() {
        this.game = new Game();
    }

    gameloop(){
        requestAnimationFrame(this.gameloop.bind(this));
        this.game.render();
    }
}

let canvas: HTMLCanvasElement;
canvas = document.getElementById("my-canvas") as HTMLCanvasElement;

var app: App;
app = new App();

app.gameloop();