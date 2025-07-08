import React, { useEffect, useRef } from 'react';

export const CursorEffect: React.FC = () => {
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animateDots = () => {
      let x = mouseRef.current.x;
      let y = mouseRef.current.y;

      dotsRef.current.forEach((dot, index) => {
        const nextDot = dotsRef.current[index + 1] || dotsRef.current[0];
        
        if (dot) {
          dot.style.left = x + 'px';
          dot.style.top = y + 'px';
          dot.style.transform = `scale(${(dotsRef.current.length - index) / dotsRef.current.length})`;
        }

        if (nextDot) {
          x += (nextDot.offsetLeft - x) * 0.3;
          y += (nextDot.offsetTop - y) * 0.3;
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    const animationId = setInterval(animateDots, 16);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) dotsRef.current[i] = el;
          }}
          className="cursor-trail fixed w-2 h-2 bg-gradient-to-r from-pink-400 to-violet-400 rounded-full"
          style={{
            left: '-10px',
            top: '-10px',
            opacity: 1 - i * 0.15,
          }}
        />
      ))}
    </div>
  );
};