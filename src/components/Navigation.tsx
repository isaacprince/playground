import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { tokens } from './styled/tokens';

const NavBar = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ $scrolled }) =>
    $scrolled ? 'rgba(238, 244, 252, 0.96)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(12px)' : 'none')};
  -webkit-backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(12px)' : 'none')};
  border-bottom: ${({ $scrolled }) =>
    $scrolled ? `1px solid ${tokens.border}` : '1px solid transparent'};
  transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
  padding: 1.35rem 0;

  @media (max-width: 768px) {
    padding: 1.05rem 0;
  }
`;

const NavInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const LogoLink = styled(Link)`
  font-family: ${tokens.fontSerif};
  font-size: 1.35rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: ${tokens.textPrimary};
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.75rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavAnchor = styled.a<{ $active?: boolean }>`
  color: ${tokens.textSecondary};
  text-decoration: none;
  font-size: 1.0625rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  cursor: pointer;
  position: relative;
  transition: color 0.2s ease;
  padding: 0.4rem 0;

  &:hover {
    color: ${tokens.textPrimary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ $active }) => ($active ? '100%' : '0')};
    height: 2px;
    background: ${tokens.accent};
    transition: width 0.25s ease;
    border-radius: 1px;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${tokens.textPrimary};
  font-size: 1.65rem;
  cursor: pointer;
  line-height: 1;
  padding: 6px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${tokens.bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  z-index: 999;
`;

const MobileNavLink = styled.a`
  color: ${tokens.textPrimary};
  text-decoration: none;
  font-family: ${tokens.fontSerif};
  font-size: 2.35rem;
  font-weight: 400;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${tokens.accent};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: ${tokens.textPrimary};
  font-size: 2rem;
  cursor: pointer;
  line-height: 1;
  padding: 6px;
`;

const SECTION_IDS = [
  'home',
  'about',
  'experience',
  'credentials',
  'portfolio',
  'contact',
] as const;

const NAV_LABELS: Record<(typeof SECTION_IDS)[number], string> = {
  home: 'Home',
  about: 'About',
  experience: 'Experience',
  credentials: 'Expertise',
  portfolio: 'Portfolio',
  contact: 'Contact',
};

const labelFor = (id: (typeof SECTION_IDS)[number]) => NAV_LABELS[id];

const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    ) as HTMLElement[];

    const onScroll = () => {
      let current = 'home';
      const y = window.pageYOffset;
      for (const section of sections) {
        const top = section.offsetTop - 120;
        const h = section.offsetHeight;
        if (y >= top && y < top + h) {
          current = section.id;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
      return;
    }
    navigate({ pathname: '/', hash: `#${id}` });
  };

  return (
    <>
      <NavBar $scrolled={scrolled}>
        <NavInner>
          <LogoLink to="/" onClick={() => setMenuOpen(false)}>
            Prince Isaac
          </LogoLink>
          <NavLinks>
            {SECTION_IDS.map((id) => (
              <NavAnchor
                key={id}
                $active={isHome && activeSection === id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
              >
                {labelFor(id)}
              </NavAnchor>
            ))}
          </NavLinks>
          <MobileMenuButton type="button" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            ☰
          </MobileMenuButton>
        </NavInner>
      </NavBar>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CloseButton type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
              ×
            </CloseButton>
            {SECTION_IDS.map((id) => (
              <MobileNavLink
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
              >
                {labelFor(id)}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
