// Debounce function to delay execution of the resize event
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

export const particleNetwork = (backgroundColor, dotColor, canvas) => {
  // Get the 2D context of the canvas
  const ctx = canvas.getContext("2d");

  // Enabling anti-aliasing by default in canvas
  ctx.imageSmoothingEnabled = true;

  // Function to set the canvas dimensions and reinitialize particles
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.5;
    init(); // Reinitialize particles with new canvas dimensions
  }

  // Debounced resize handler for particles only
  const debouncedResize = debounce(resizeCanvas, 15); // 15ms debounce

  // Create an array to store the particles
  let particlesArray = [];
  let maxParticles = 100;

  // Create a class for the particles
  class Particle {
    constructor(x, y, directionX, directionY, size, color) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
    }

    // Method to draw the particle
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    // Method to update the particle's position and draw it
    update() {
      // Bounce the particles off the walls
      if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.directionX = -this.directionX;
      }
      if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.directionY = -this.directionY;
      }

      // Move the particles
      this.x += this.directionX;
      this.y += this.directionY;

      // Draw the particles
      this.draw();
    }
  }

  // Function to create particles
  function init() {
    particlesArray.length = 0;

    // Adjust the number of particles based on the canvas size
    const widthFactor = Math.max(canvas.width / 200, 1); // Minimum 1 particle
    const heightFactor = Math.max(canvas.height / 200, 1); // Minimum 1 particle
    maxParticles = Math.floor(widthFactor * heightFactor * 3);

    for (let i = 0; i < maxParticles; i++) {
      const size = Math.random() * 2 + 1;
      const x = Math.random() * (canvas.width - size * 2) + size;
      const y = Math.random() * (canvas.height - size * 2) + size;
      const directionX = Math.random() * 0.4 - 0.2;
      const directionY = Math.random() * 0.4 - 0.2;
      const color = dotColor;

      particlesArray.push(
        new Particle(x, y, directionX, directionY, size, color)
      );
    }
  }

  // Connect the particles with lines
  function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {
        const distance =
          (particlesArray[a].x - particlesArray[b].x) ** 2 +
          (particlesArray[a].y - particlesArray[b].y) ** 2;

        if (distance < (canvas.width / 7) * (canvas.height / 7)) {
          opacityValue = 1 - distance / 20000;
          ctx.strokeStyle = "rgba(255,255,255," + opacityValue + ")";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }
    }
  }

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = backgroundColor; // Set the background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
    }
    connect();
  }

  // Initial setup
  resizeCanvas(); // Ensure canvas is correctly sized initially
  animate();

  // Handle window resize with debouncing only for particles
  window.addEventListener("resize", debouncedResize);

  // Cleanup event listener
  return () => {
    window.removeEventListener("resize", debouncedResize);
  };
};
