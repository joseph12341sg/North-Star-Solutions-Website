import React, { useState, useEffect, useRef } from 'react';
import { Camera, Compass, Star, Phone, Mail, MapPin, Linkedin, Facebook, Instagram, Twitter, Menu, X, ArrowUp } from 'lucide-react';

// ─── Logo Image ─────────────────────────────────────────────────────
const LOGO_SRC = process.env.PUBLIC_URL + '/images/North Star Solutions trans (7).png';

export function LogoImage({ height = 36, className = '', rotate = false }) {
  const [imgError, setImgError] = useState(false);

  const style = {
    height,
    width: 'auto',
    ...(rotate ? { animation: 'spin-slow 8s linear infinite' } : {}),
  };

  if (imgError) {
    return (
      <div
        style={{
          width: height,
          height: height,
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #5B7C99, #C9A84C)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          ...(rotate ? { animation: 'spin-slow 8s linear infinite' } : {}),
        }}
        className={className}
      >
        <Compass size={height * 0.6} color="#0E1116" strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <img
      src={LOGO_SRC}
      alt="North Star Solutions"
      style={style}
      className={className}
      onError={() => setImgError(true)}
    />
  );
}

// ─── Loading Screen ─────────────────────────────────────────────────
export function LoadingScreen({ onFinish }) {
  const [logoVisible, setLogoVisible] = useState(false);
  const [lineExpanded, setLineExpanded] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);
  const [barStarted, setBarStarted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 0.0s — Logo begins fade in
    const t0 = setTimeout(() => setLogoVisible(true), 50);
    // 1.8s — Line expands
    const t1 = setTimeout(() => setLineExpanded(true), 1800);
    // 2.2s — Company name fades in
    const t2 = setTimeout(() => setNameVisible(true), 2200);
    // 2.4s — Loading bar starts
    const t3 = setTimeout(() => setBarStarted(true), 2400);
    // 5.0s — Fade out entire screen
    const t4 = setTimeout(() => setFadeOut(true), 5000);
    // 5.5s — Remove from DOM
    const t5 = setTimeout(() => onFinish(), 5500);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onFinish]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: '#0E1116',
        backgroundImage: 'radial-gradient(ellipse at 50% 45%, rgba(91, 124, 153, 0.06) 0%, transparent 60%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.5s ease-out',
      }}
    >
      {/* Element 1: Logo — slowly rotating compass star */}
      <div
        style={{
          opacity: logoVisible ? 1 : 0,
          transition: 'opacity 1.2s ease-out',
        }}
      >
        <LogoImage height={120} rotate={true} />
      </div>

      {/* Element 2: Thin horizontal line */}
      <div
        style={{
          width: lineExpanded ? '80px' : '0px',
          height: '2px',
          background: '#5B7C99',
          margin: '24px auto',
          transition: 'width 0.6s ease-out',
        }}
      />

      {/* Element 3: Company name */}
      <div
        style={{
          opacity: nameVisible ? 1 : 0,
          transition: 'opacity 0.5s ease-out',
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '6px',
          fontSize: '14px',
          color: '#A1A8B3',
        }}
      >
        NORTH STAR SOLUTIONS
      </div>

      {/* Element 4: Subtle loading bar */}
      <div
        style={{
          width: '200px',
          height: '2px',
          background: '#161B22',
          borderRadius: '1px',
          marginTop: '32px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: barStarted ? '100%' : '0%',
            height: '100%',
            background: 'linear-gradient(90deg, #5B7C99, #C9A84C)',
            borderRadius: '1px',
            transition: 'width 2.4s ease-out',
          }}
        />
      </div>
    </div>
  );
}

// ─── Image Placeholder ───────────────────────────────────────────────
export function ImagePlaceholder({ description, className = '', circle = false, height = 'h-48' }) {
  return (
    <div className={`img-placeholder ${circle ? 'img-placeholder-circle' : ''} ${height} ${className}`}>
      <Camera size={32} strokeWidth={1.5} />
      <span className="text-xs text-center px-4 opacity-70">{description}</span>
    </div>
  );
}

// ─── Smart Image (with gradient fallback) ────────────────────────────
export function SmartImage({ src, alt, className = '', style = {} }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    // Generate a deterministic gradient from the alt text
    const hash = (alt || '').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const hue1 = hash % 360;
    const hue2 = (hash * 7 + 40) % 360;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: `linear-gradient(135deg, hsl(${hue1}, 25%, 18%), hsl(${hue2}, 20%, 12%))`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ textAlign: 'center', padding: '1rem', opacity: 0.5 }}>
          <Camera size={28} color="#5B7C99" strokeWidth={1.5} style={{ margin: '0 auto 8px' }} />
          <div style={{ fontSize: '11px', color: '#5B7C99', maxWidth: '140px', margin: '0 auto' }}>{alt}</div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setFailed(true)}
    />
  );
}

// ─── Animated Counter ────────────────────────────────────────────────
export function AnimatedCounter({ end, prefix = '', suffix = '', duration = 2000, decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(eased * end);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className="stat-number text-3xl md:text-4xl text-ns-heading">
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.round(count)}{suffix}
    </span>
  );
}

// ─── Scroll Fade In ──────────────────────────────────────────────────
export function FadeInSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.6s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Section Wrapper ─────────────────────────────────────────────────
export function Section({ children, className = '', id = '' }) {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 md:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

// ─── Section Heading ─────────────────────────────────────────────────
export function SectionHeading({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">{title}</h2>
      {subtitle && <p className="text-ns-body text-lg md:text-xl max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
}

// ─── Star Rating ─────────────────────────────────────────────────────
export function StarRating({ rating = 5 }) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} size={16} fill="#C9A84C" color="#C9A84C" />
      ))}
    </div>
  );
}

// ─── CTA Section ─────────────────────────────────────────────────────
export function CTASection({ headline, subtext, buttonText = 'Book Your Free Discovery Call', onNavigate }) {
  return (
    <section className="py-20 md:py-28 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-ns-accent/10 via-ns-card to-ns-accent/10" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">{headline}</h2>
          {subtext && <p className="text-ns-body text-lg mb-8 max-w-2xl mx-auto">{subtext}</p>}
          <button onClick={() => onNavigate('contact')} className="cta-button text-lg">
            {buttonText}
          </button>
        </FadeInSection>
      </div>
    </section>
  );
}

// ─── Navigation ──────────────────────────────────────────────────────
export function Navigation({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Who We Are' },
    { id: 'services', label: 'Services' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'team', label: 'Team' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (id) => {
    onNavigate(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-blur border-b border-ns-accent/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => handleNav('home')} className="flex items-center gap-2 group">
            <LogoImage height={36} />
            <span
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '3px',
                fontSize: '13px',
              }}
              className="text-ns-heading"
            >
              <span style={{ fontWeight: 600 }}>NORTH STAR</span>{' '}
              <span className="text-ns-body" style={{ fontWeight: 300 }}>SOLUTIONS</span>
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-sm font-body transition-colors hover:text-ns-accent ${currentPage === link.id ? 'text-ns-accent font-semibold' : 'text-ns-body'}`}
              >
                {link.label}
              </button>
            ))}
            <button onClick={() => handleNav('contact')} className="cta-button text-sm py-2 px-5">
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-ns-heading">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-ns-bg/95 backdrop-blur-lg flex flex-col items-center justify-center gap-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`text-xl font-heading transition-colors hover:text-ns-accent ${currentPage === link.id ? 'text-ns-accent' : 'text-ns-heading'}`}
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => handleNav('contact')} className="cta-button mt-4">
            Book a Call
          </button>
        </div>
      )}
    </>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────
export function Footer({ onNavigate }) {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Who We Are' },
    { id: 'services', label: 'Services' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'team', label: 'Team' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (id) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ns-card border-t border-ns-accent/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <LogoImage height={32} />
              <span
                style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  fontSize: '12px',
                }}
                className="text-ns-heading"
              >
                <span style={{ fontWeight: 600 }}>NORTH STAR</span>{' '}
                <span className="text-ns-body" style={{ fontWeight: 300 }}>SOLUTIONS</span>
              </span>
            </div>
            <p className="text-ns-body text-sm mb-4">Your Growth. Our Mission.</p>
            <div className="flex gap-3">
              <a href="#" className="text-ns-body hover:text-ns-accent transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="text-ns-body hover:text-ns-accent transition-colors"><Facebook size={18} /></a>
              <a href="#" className="text-ns-body hover:text-ns-accent transition-colors"><Instagram size={18} /></a>
              <a href="#" className="text-ns-body hover:text-ns-accent transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-ns-heading font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.id}>
                  <button onClick={() => handleNav(link.id)} className="text-ns-body text-sm hover:text-ns-accent transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-ns-heading font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm text-ns-body">
              <li>Meta Ads Management</li>
              <li>Lead Generation</li>
              <li>Appointment Setting</li>
              <li>Nurture Sequences</li>
              <li>Reporting & Analytics</li>
              <li>Compliance Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-ns-heading font-semibold mb-4 text-sm">Contact</h4>
            <ul className="space-y-3 text-sm text-ns-body">
              <li className="flex items-center gap-2"><Mail size={14} className="text-ns-accent" /> hello@north-star-solutions.com</li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-ns-accent" /> +44 (0) 330 818 0291</li>
              <li className="flex items-center gap-2"><MapPin size={14} className="text-ns-accent" /> Remote-first, UK-based</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ns-body">
          <p>&copy; 2026 North Star Solutions. Registered in England & Wales.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-ns-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ns-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Floating CTA ────────────────────────────────────────────────────
export function FloatingCTA({ onNavigate }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col gap-2 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-10 h-10 rounded-full bg-ns-card border border-ns-accent/30 flex items-center justify-center text-ns-accent hover:bg-ns-accent/20 transition-colors"
      >
        <ArrowUp size={16} />
      </button>
      <button
        onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className="cta-button text-sm py-3 px-5 rounded-full shadow-lg"
      >
        <span className="flex items-center gap-2"><Phone size={14} /> Book a Call</span>
      </button>
    </div>
  );
}
