// useRef allows for the creation of a reference to a DOM element
import {useRef, useEffect} from "react";

export const userParticleNetwork = () => {
    // Create a reference to the canvas element
    const canvasRef = useRef(null);

    useEffect(() => {
        // Get the canvas element from the reference
        const canvas = canvasRef.current;
        // Get the 2D context of the canvas
        const ctx = canvas.getContext("2d");

        // Set the canvas width and height to the window width and height
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Create an array to store the particles and set max particles
        const particlesArray = [];
        const maxParticles = 100;

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
            for (let i = 0; i < maxParticles; i++) {
                const size = Math.random() * 2 + 1;
                const x = Math.random() * (innerWidth - size * 2) + size;
                const y = Math.random() * (innerHeight - size * 2) + size;
                const directionX = (Math.random() * 0.4) - 0.2;
                const directionY = (Math.random() * 0.4) - 0.2;
                const color = "#ffffff";

                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        // Connect the particles with lines
        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    const distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));

                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
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
            ctx.fillStyle = "black";  // Set the background color to black
            ctx.fillRect(0, 0, innerWidth, innerHeight);

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            connect();
        }

        window.addEventListener("resize", function () {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            init();
        });

        init();
        animate();
    }, []);

    return canvasRef;
};