import { useEffect, useRef } from 'react';

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas to cover window exactly
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters (katakana, digits, uppercase Latin letters)
    const charString = '0101010101ABCDEFGHIJKLMNOPQRSTUVWXYZｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';
    const alphabet = charString.split('');

    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);

    // Track dropping coordinates
    let rainDrops: number[] = [];

    const initRainDrops = () => {
      columns = Math.floor(canvas.width / fontSize);
      rainDrops = [];
      for (let x = 0; x < columns; x++) {
        rainDrops[x] = Math.random() * -100; // Start at randomized offsets above screen
      }
    };

    initRainDrops();

    // Re-initialize columns on resize
    const handleResize = () => {
      resizeCanvas();
      initRainDrops();
    };
    window.removeEventListener('resize', resizeCanvas);
    window.addEventListener('resize', handleResize);

    const draw = () => {
      // Draw semi-transparent black background to create fading trace effect
      ctx.fillStyle = 'rgba(5, 5, 5, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Dark green text color, with occasional bright green highlight
      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        
        // Randomly make some characters glowing white/light green for high-tech look
        if (Math.random() > 0.98) {
          ctx.fillStyle = '#00FF88'; // Bright neon green highlight
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#00FF88';
        } else {
          ctx.fillStyle = 'rgba(0, 194, 110, 0.45)'; // Semi-transparent secondary green
          ctx.shadowBlur = 0;
        }

        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        ctx.fillText(text, x, y);

        // Reset drops to top once they exit boundary with a randomized probability
        if (y > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }

        rainDrops[i] += 0.85; // Speed factor
      }
    };

    const interval = setInterval(draw, 33); // ~30 FPS

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      id="matrix-bg"
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-25"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
