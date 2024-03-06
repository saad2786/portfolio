
import  { useEffect, useRef } from 'react';

const Stars = ({ vel = 1, radius = 1, stars = 300 }) => {
    const starsRef = useRef();

    useEffect(() => {
        const canvas = document.createElement("canvas");
        starsRef.current.appendChild(canvas);
        const context = canvas.getContext("2d");
        context.lineCap = "round";

        let _scope = {};
        _scope.stars = [];
        _scope.vel = vel || 1;
        _scope.radius = radius || 1;
        _scope.starsCounter = stars || 300;
        const center = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        };
        let canvasWidth, canvasHeight;

        const start = () => {
            _scope.stars = [];
            for (let i = 0; i < _scope.starsCounter; i++) {
                setTimeout(() => {
                    _scope.stars.push(new Star());
                }, i * 30);
            }
        };

        const resize = () => {
            canvasWidth = window.innerWidth;
            canvasHeight = window.innerHeight;
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            center.x = canvasWidth / 2;
            center.y = canvasHeight / 2;
        };

        const animate = () => {
            window.requestAnimationFrame(animate);
            render();
        };

        const render = () => {
            context.fillStyle = '#dcdcdc';
            context.fillRect(0, 0, canvasWidth, canvasHeight);
            context.strokeStyle = "gray";
            for (let i = 0; i < _scope.stars.length; i++) _scope.stars[i].update();
        };

        const Star = function() {
            this.x = center.x;
            this.y = center.y;
            this.init = function() {
                this.radius = Math.random() * _scope.radius;
                this.x = center.x;
                this.y = center.y;
                this.lineWidth = 0;
                this.vel = {
                    x: Math.random() * 10 - 5,
                    y: Math.random() * 10 - 5
                }
            }
            this.update = function() {
                this.vel.x *= 1.05;
                this.vel.y *= 1.05;
                this.lineWidth += 0.035;
                this.x0 = this.x;
                this.y0 = this.y;
                this.x += this.vel.x;
                this.y += this.vel.y;
                this.draw();
                if (this.isDead()) this.init();
            }
            this.draw = function() {
                context.beginPath();
                context.moveTo(this.x0, this.y0);
                context.lineTo(this.x, this.y);
                context.lineWidth = this.lineWidth;
                context.stroke();
            }
            this.isDead = function() {
                return (this.x < 0 || this.x > canvasWidth || this.y < 0 || this.y > canvasHeight);
            }
            this.init();
            return this;
        }

        const init = () => {
            canvasWidth = window.innerWidth;
            canvasHeight = window.innerHeight;
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            center.x = canvasWidth / 2;
            center.y = canvasHeight / 2;
            start();
            resize();
            window.addEventListener("resize", resize);
            animate();
        };

        init();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, [vel, radius, stars]);

    return (
        <div ref={starsRef} style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: -1 }} />
    );
};

export default Stars;