class Particle {
  constructor(
    network,
    x = Math.random() * network.canvas.width,
    y = Math.random() * network.canvas.height
  ) {
    this.network = network;
    this.canvas = network.canvas;
    this.ctx = network.ctx;
    this.particleColor = Particle.getRandomArrayItem(
      network.options.particleColors
    );
    this.radius = Particle.getRandomInRange(1.5, 2.5);
    this.opacity = 0;
    this.x = x;
    this.y = y;
    this.velocity = {
      x: (Math.random() - 0.5) * network.options.velocity,
      y: (Math.random() - 0.5) * network.options.velocity,
    };
  }

  static getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  static getRandomArrayItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  update() {
    this.opacity = Math.min(this.opacity + 0.01, 1);

    if (this.x > this.canvas.width + 100 || this.x < -100)
      this.velocity.x = -this.velocity.x;
    if (this.y > this.canvas.height + 100 || this.y < -100)
      this.velocity.y = -this.velocity.y;

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.particleColor;
    this.ctx.globalAlpha = this.opacity;
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
  }
}

class ParticleNetwork {
  constructor(parent) {
    this.options = {
      velocity: 0.25,
      density: 15000,
      netLineDistance: 225,
      netLineColor: "#8F9193",
      particleColors: ["#8F9193"],
    };
    this.canvas = parent.canvas;
    this.ctx = parent.ctx;
    this.particles = [];
    this.animationFrame = null;

    this.init();
  }

  init() {
    this.createParticles(true);
    this.bindUiActions();
    this.update();
  }

  createParticles(isInitial = false) {
    const quantity = Math.floor(
      (this.canvas.width * this.canvas.height) / this.options.density
    );
    if (isInitial) {
      let counter = 0;
      const intervalId = setInterval(() => {
        if (counter < quantity - 1) {
          this.particles.push(new Particle(this));
        } else {
          clearInterval(intervalId);
        }
        counter++;
      }, 250);
    } else {
      for (let i = 0; i < quantity; i++) {
        this.particles.push(new Particle(this));
      }
    }
  }

  createInteractionParticle() {
    const particle = new Particle(this);
    particle.velocity = { x: 0, y: 0 };
    this.particles.push(particle);
    this.interactionParticle = particle;
  }

  removeInteractionParticle() {
    this.particles = this.particles.filter(
      (p) => p !== this.interactionParticle
    );
    this.interactionParticle = null;
  }

  update() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.globalAlpha = 1;

    this.particles.forEach((p1, i) => {
      this.particles.slice(i + 1).forEach((p2) => {
        const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        if (distance < this.options.netLineDistance) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = this.options.netLineColor;
          this.ctx.globalAlpha =
            ((this.options.netLineDistance - distance) /
              this.options.netLineDistance) *
            p1.opacity *
            p2.opacity;
          this.ctx.lineWidth = 0.7;
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      });

      p1.update();
      p1.draw();
    });

    this.animationFrame = requestAnimationFrame(this.update.bind(this));
  }

  bindUiActions() {
    this.canvas.addEventListener("mousemove", (e) => {
      if (!this.interactionParticle) this.createInteractionParticle();
      this.interactionParticle.x = e.offsetX;
      this.interactionParticle.y = e.offsetY;
    });
  }
}

export class ParticleNetworkAnimation {
  constructor() {
    this.container = null;
    this.canvas = null;
    this.ctx = null;
    this.particleNetwork = null;
  }

  init(element) {
    this.container = element;
    this.canvas = document.createElement("canvas");
    this.sizeCanvas();
    this.container.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.particleNetwork = new ParticleNetwork(this);

    window.addEventListener("resize", () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.sizeCanvas();

      // Store the interaction particle if it exists
      const interactionParticle = this.particleNetwork.interactionParticle;

      // Clear all particles but retain the interaction particle
      this.particleNetwork.particles = interactionParticle
        ? [interactionParticle]
        : [];

      // Recreate particles based on the new canvas size
      this.particleNetwork.createParticles();

      // Reassign the interaction particle after the particles are recreated
      if (interactionParticle) {
        this.particleNetwork.interactionParticle = interactionParticle;
      }
    });

    return this;
  }

  sizeCanvas() {
    this.canvas.width = this.container.offsetWidth;
    this.canvas.height = this.container.offsetHeight;
  }
}
