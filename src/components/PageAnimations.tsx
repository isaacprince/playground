import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { tokens } from './styled/tokens';

const ProgressBar = styled.div<{ $width: number }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: ${({ $width }) => $width}%;
  background: linear-gradient(90deg, ${tokens.accent}, ${tokens.accentDark});
  z-index: 2000;
  transition: width 0.08s linear;
  pointer-events: none;
  transform-origin: left;
`;

const Glow = styled.div<{ $x: number; $y: number; $visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    ${tokens.accentLight}55 0%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 0;
  transform: translate(
    ${({ $x }) => $x - 160}px,
    ${({ $y }) => $y - 160}px
  );
  transition: transform 0.15s ease-out, opacity 0.35s ease;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  @media (max-width: 768px) {
    display: none;
  }
`;

const PageAnimations: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setCursor({ x: e.clientX, y: e.clientY });
        setCursorVisible(true);
      });
    };

    const handleMouseLeave = () => setCursorVisible(false);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <ProgressBar $width={scrollProgress} />
      <Glow $x={cursor.x} $y={cursor.y} $visible={cursorVisible} />
    </>
  );
};

export default PageAnimations;
