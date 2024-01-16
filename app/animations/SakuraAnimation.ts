function sakuraAnimation() {
  // Petal class
  class Petal {
    x: number;
    y: number;
    w: number;
    h: number;
    opacity: number;
    flip: number;
    xSpeed: number;
    ySpeed: number;
    flipSpeed: number;

    constructor() {
      // Start each petal from the bottom right corner
      this.x = canvas.width - Math.random() * 50; // Adjust the random value as needed
      this.y = canvas.height - Math.random() * 50; // Adjust the random value as needed

      this.w = 25 + Math.random() * 15;
      this.h = 20 + Math.random() * 10;
      this.opacity = this.w / 40;
      this.flip = Math.random();

      this.xSpeed = 1.5 + Math.random() * 2;
      this.ySpeed = 1 + Math.random() * 1;
      this.flipSpeed = Math.random() * 0.03;
    }

    draw() {
      if (this.y > canvas.height || this.x > canvas.width) {
        this.x = canvas.width - Math.random() * 50;
        this.y = canvas.height - Math.random() * 50;
        this.xSpeed = 1.5 + Math.random() * 2;
        this.ySpeed = 1 + Math.random() * 1;
        this.flip = Math.random();
      }
      ctx.globalAlpha = this.opacity;
      ctx.drawImage(
        petalImg,
        this.x,
        this.y,
        this.w * (0.6 + Math.abs(Math.cos(this.flip)) / 3),
        this.h * (0.8 + Math.abs(Math.sin(this.flip)) / 5),
      );
    }

    animate() {
      this.x -= this.xSpeed + mouseX * 5;
      this.y -= this.ySpeed + mouseX * 2;
      this.flip += this.flipSpeed;
      this.draw();
    }
  }

  // Main script
  const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

  const TOTAL: number = 100;
  const petalArray: Petal[] = [];

  const petalImg: HTMLImageElement = new Image();
  petalImg.src = "./resources/petal.png";
  petalImg.addEventListener("load", () => {
    for (let i = 0; i < TOTAL; i++) {
      petalArray.push(new Petal());
    }
    render();
  });

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petalArray.forEach((petal) => petal.animate());
    window.requestAnimationFrame(render);
  }

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  let mouseX: number = 0;

  function touchHandler(e: MouseEvent | TouchEvent) {
    mouseX =
      (e instanceof MouseEvent ? e.clientX : e.touches[0].clientX) /
      window.innerWidth;
  }

  window.addEventListener("mousemove", touchHandler);
  window.addEventListener("touchmove", touchHandler);
}

export default sakuraAnimation;
