import React, { useState, useEffect, useRef } from 'react';
import { Camera, Compass, Star, Phone, Mail, MapPin, Linkedin, Facebook, Instagram, Twitter, Menu, X, ArrowUp } from 'lucide-react';

// ─── Image Placeholder ───────────────────────────────────────────────
export function ImagePlaceholder({ description, className = '', circle = false, height = 'h-48' }) {
  return (
    <div className={`img-placeholder ${circle ? 'img-placeholder-circle' : ''} ${height} ${className}`}>
      <Camera size={32} strokeWidth={1.5} />
      <span className="text-xs text-center px-4 opacity-70">{description}</span>
    </div>
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
            <Compass size={28} className="text-ns-accent group-hover:text-ns-gold transition-colors" />
            <span className="font-heading text-ns-heading">
              <span className="font-extrabold">NORTH STAR</span>{' '}
              <span className="font-light text-ns-body">SOLUTIONS</span>
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
              <Compass size={24} className="text-ns-accent" />
              <span className="font-heading text-ns-heading">
                <span className="font-extrabold">NORTH STAR</span>{' '}
                <span className="font-light text-ns-body text-sm">SOLUTIONS</span>
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
