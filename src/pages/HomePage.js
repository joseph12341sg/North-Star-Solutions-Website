import React, { useState } from 'react';
import {
  ImagePlaceholder,
  AnimatedCounter,
  FadeInSection,
  Section,
  SectionHeading,
  StarRating,
  CTASection,
} from '../components/shared';
import {
  Users,
  Target,
  Clock,
  Shield,
  MapPin,
  Zap,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  Calendar,
  BarChart3,
  Headphones,
  Mail,
  MessageSquare,
  Award,
  Lock,
  Eye,
} from 'lucide-react';

function HomePage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState(0);

  // ─── Pain point tabs data ───────────────────────────────────────────
  const painPoints = [
    {
      label: 'Referral Dependency',
      icon: <Users size={20} />,
      problem:
        "Your entire pipeline depends on who mentions you at the golf club. That's not a strategy \u2014 that's a prayer.",
      solve:
        "We build you a predictable, scalable lead generation system that doesn't depend on anyone else's goodwill.",
    },
    {
      label: 'Feast or Famine',
      icon: <BarChart3 size={20} />,
      problem:
        "One month you're turning clients away, the next you're wondering where everyone went. No consistency, no predictability.",
      solve:
        'Our always-on campaigns deliver a steady stream of qualified prospects every single week.',
    },
    {
      label: 'Wasted Marketing Spend',
      icon: <AlertCircle size={20} />,
      problem:
        "You've tried Google Ads, leaflet drops, maybe even a 'digital marketing agency.' Thousands spent, nothing to show for it.",
      solve:
        'We only run proven, tested campaigns specifically designed for financial advisors. Every pound is tracked and accounted for.',
    },
    {
      label: "Can't Compete with Big Firms",
      icon: <Target size={20} />,
      problem:
        "St. James's Place has a marketing department. Quilter has brand recognition. You have\u2026 a LinkedIn profile you haven't updated since 2019.",
      solve:
        'Our campaigns level the playing field. On Meta, your expertise and local presence beat corporate brand every time.',
    },
    {
      label: 'Compliance Anxiety',
      icon: <Lock size={20} />,
      problem:
        'Every time you think about marketing, you picture the FCA knocking on your door. So you do nothing.',
      solve:
        'Every ad, landing page, and message is built with FCA compliance in mind. We understand financial promotions.',
    },
    {
      label: 'No Time to Market',
      icon: <Clock size={20} />,
      problem:
        "You're brilliant at advising clients. But you're not a marketer, and you don't have 10 hours a week to become one.",
      solve:
        "That's why it's done for you. We handle everything \u2014 you just show up to meetings.",
    },
  ];

  // ─── How-it-works steps ─────────────────────────────────────────────
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description:
        'We learn your ideal client, your specialisms, your capacity. We build a bespoke acquisition strategy around YOUR practice.',
      icon: <Eye size={24} />,
    },
    {
      number: '02',
      title: 'Campaign Build & Launch',
      description:
        'Our team builds your Meta Ads campaigns, landing pages, and lead capture systems. Compliant, professional, and proven to convert.',
      icon: <Zap size={24} />,
    },
    {
      number: '03',
      title: 'Leads & Appointment Setting',
      description:
        'Leads come in. Our trained appointment setters contact every lead within 60 seconds, qualify them, and book them directly into your calendar.',
      icon: <Headphones size={24} />,
    },
    {
      number: '04',
      title: 'Nurture & Show',
      description:
        'Every booked prospect goes through our pre-meeting nurture sequence \u2014 emails, SMS, reminders \u2014 so they show up educated, warmed up, and ready to talk.',
      icon: <MessageSquare size={24} />,
    },
  ];

  // ─── Differentiators ────────────────────────────────────────────────
  const differentiators = [
    {
      icon: <Clock size={28} className="text-ns-accent" />,
      title: '60-Second Lead Response',
      description:
        'Speed wins. Our appointment setters contact every new lead within 60 seconds of enquiry \u2014 before they even close the browser tab. That speed is why our contact rate is 3x the industry average.',
    },
    {
      icon: <CheckCircle size={28} className="text-ns-accent" />,
      title: 'Done-For-You Everything',
      description:
        'Ads, landing pages, lead qualification, appointment setting, nurture sequences, reporting. You focus on advising clients \u2014 we handle every step of the acquisition process.',
    },
    {
      icon: <Shield size={28} className="text-ns-accent" />,
      title: 'FCA-Conscious Campaigns',
      description:
        'Every ad, landing page, and communication is crafted with FCA financial promotion rules in mind. No misleading claims, no compliance nightmares.',
    },
    {
      icon: <Award size={28} className="text-ns-accent" />,
      title: 'Guaranteed Results',
      description:
        'We guarantee 10\u201320 new clients in 90 days or you don\u2019t pay. We put our money where our mouth is because we know our system works.',
    },
    {
      icon: <MapPin size={28} className="text-ns-accent" />,
      title: 'Exclusive Territories',
      description:
        'We only work with one financial advisor per postcode area. Your campaigns will never compete with another North Star client. Your territory is yours alone.',
    },
    {
      icon: <TrendingUp size={28} className="text-ns-accent" />,
      title: 'Performance-Aligned',
      description:
        'Our success is tied to yours. We don\u2019t profit from ad spend \u2014 we profit from results. That means our incentives are permanently aligned with your growth.',
    },
  ];

  // ─── Testimonials ───────────────────────────────────────────────────
  const testimonials = [
    {
      quote:
        "Before North Star, I was getting maybe one or two referrals a month if I was lucky. Now I've got 14 new clients in under 90 days. The quality is outstanding \u2014 these are people actively looking for advice, not tyre-kickers. It's completely transformed my practice.",
      name: 'James Hartley',
      role: 'Director \u2014 Hartley Wealth Management, Manchester',
    },
    {
      quote:
        "We'd wasted nearly \u00a315,000 on a digital marketing agency that delivered nothing but vanity metrics. North Star was different from day one \u2014 real leads, real appointments, real clients. 22 new clients in 90 days speaks for itself.",
      name: 'Sarah Chen',
      role: 'Co-founder \u2014 Meridian Financial Planning, Leeds',
    },
    {
      quote:
        "The appointment setting alone is worth the investment. Every lead is contacted in under a minute, qualified properly, and booked straight into my calendar. I just turn up and do what I do best. Brilliant service.",
      name: 'Tom Greenwood',
      role: 'Managing Director \u2014 Greenwood Mortgages, Birmingham',
    },
    {
      quote:
        "I was terrified about compliance. North Star understood FCA rules better than agencies ten times their size. Every ad, every landing page \u2014 all compliant. And the results? 17 new clients and counting. I wish I'd found them sooner.",
      name: 'Eleanor Pemberton',
      role: 'Principal \u2014 Pemberton & Associates, Bristol',
    },
  ];

  // ─── Case study previews ────────────────────────────────────────────
  const caseStudies = [
    {
      firm: 'Hartley Wealth Management',
      result: '14 New Clients in 87 Days',
      page: 'case-study-1',
    },
    {
      firm: 'Meridian Financial Planning',
      result: '22 New Clients in 90 Days',
      page: 'case-study-2',
    },
    {
      firm: 'Greenwood Mortgages',
      result: '19 New Clients in 90 Days',
      page: 'case-study-3',
    },
  ];

  // ─── Publication names for trust strip ──────────────────────────────
  const publications = [
    'FTAdviser',
    'Money Marketing',
    'Professional Adviser',
    'Citywire',
    'IFA Magazine',
    'New Model Adviser',
    'FT Wealth',
    'Adviser Lounge',
  ];

  return (
    <div>
      {/* ═══════════════════════════════════════════════════════════════
          1. HERO SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder
            description="Hero background — financial advisor in modern office"
            className="w-full h-full object-cover"
            height="h-full"
          />
        </div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-ns-bg via-ns-bg/90 to-ns-bg/60" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-ns-bg via-transparent to-ns-bg/30" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 py-32 md:py-40 w-full">
          <FadeInSection>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight mb-6">
                We Fill Your Diary With{' '}
                <span className="text-ns-accent">Pre-Qualified Clients</span>.{' '}
                <span className="text-ns-gold">Guaranteed.</span>
              </h1>
              <p className="text-ns-body text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl leading-relaxed">
                North Star Solutions helps financial advisors across the UK win 10&ndash;20
                new clients in 90 days using done-for-you Meta Ads, appointment setting, and
                nurture systems &mdash; or you don&rsquo;t pay.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="cta-button text-lg py-4 px-8 flex items-center justify-center gap-2"
                >
                  Book Your Discovery Call <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('how-it-works');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border border-ns-accent/40 text-ns-heading hover:bg-ns-accent/10 transition-colors rounded-lg py-4 px-8 text-lg font-semibold"
                >
                  See How It Works
                </button>
              </div>
            </div>
          </FadeInSection>

          {/* Social proof stats bar */}
          <FadeInSection delay={300}>
            <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '320+', label: 'Clients Delivered' },
                { value: '93%', label: 'Show Rate' },
                { value: '\u00a32.4M+', label: 'Revenue Generated' },
                { value: '4.9\u2605', label: 'Client Satisfaction' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold font-heading text-ns-heading mb-1">
                    {stat.value}
                  </p>
                  <p className="text-ns-body text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. TRUST BAR / LOGO STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-10 md:py-14 border-y border-ns-accent/10 overflow-hidden bg-ns-card/50">
        <p className="text-center text-ns-body text-sm md:text-base mb-8 tracking-wide uppercase">
          Trusted by financial advisors across the UK
        </p>
        <div className="logo-scroll">
          <div className="logo-scroll-track flex gap-8 items-center">
            {[...publications, ...publications].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-white/5 border border-white/10 rounded-lg px-6 py-3 min-w-[160px] text-center"
              >
                <span className="text-ns-body text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. THE PROBLEM SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <Section>
        <SectionHeading
          title="Sound Familiar?"
          subtitle="Financial advisors across the UK face the same challenges. We solve every single one of them."
        />

        <FadeInSection>
          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {painPoints.map((point, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === i
                    ? 'bg-ns-accent text-white shadow-lg shadow-ns-accent/20'
                    : 'bg-ns-card border border-ns-accent/20 text-ns-body hover:border-ns-accent/50'
                }`}
              >
                {point.icon}
                <span className="hidden sm:inline">{point.label}</span>
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4 text-ns-heading">
                  {painPoints[activeTab].label}
                </h3>
                <div className="mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-1" />
                    <p className="text-ns-body text-lg leading-relaxed">
                      {painPoints[activeTab].problem}
                    </p>
                  </div>
                  <div className="flex items-start gap-3 bg-ns-accent/10 border border-ns-accent/20 rounded-lg p-4">
                    <CheckCircle size={20} className="text-ns-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold text-ns-accent mb-1">
                        How we solve this:
                      </p>
                      <p className="text-ns-body leading-relaxed">
                        {painPoints[activeTab].solve}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <ImagePlaceholder
                description={`Illustration — ${painPoints[activeTab].label}`}
                height="h-64 md:h-80"
                className="rounded-xl"
              />
            </div>
          </div>
        </FadeInSection>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          4. HOW IT WORKS
      ═══════════════════════════════════════════════════════════════ */}
      <Section id="how-it-works" className="bg-ns-card/30">
        <SectionHeading
          title="From Zero to a Full Diary in 90 Days"
          subtitle="Our proven four-step process takes you from an empty pipeline to a consistently full calendar."
        />

        <div className="relative">
          {/* Horizontal connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-ns-accent/20 via-ns-accent/60 to-ns-accent/20" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
            {steps.map((step, i) => (
              <FadeInSection key={i} delay={i * 150}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Vertical connector (mobile) */}
                  {i < steps.length - 1 && (
                    <div className="md:hidden absolute top-32 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-ns-accent/30" />
                  )}

                  {/* Numbered circle */}
                  <div className="relative z-10 w-32 h-32 rounded-full bg-ns-bg border-2 border-ns-accent/40 flex flex-col items-center justify-center mb-6">
                    <span className="text-ns-accent text-xs font-bold tracking-widest uppercase mb-1">
                      Step
                    </span>
                    <span className="text-3xl font-bold font-heading text-ns-heading">
                      {step.number}
                    </span>
                    <div className="text-ns-accent mt-1">{step.icon}</div>
                  </div>

                  <h3 className="text-xl font-bold font-heading mb-3 text-ns-heading">
                    {step.title}
                  </h3>
                  <p className="text-ns-body text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          5. RESULTS / STATS SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <Section>
        <SectionHeading
          title="Real Results. Real Advisors. No Fluff."
          subtitle="Every number below is backed by real campaign data from real financial advisor clients."
        />

        {/* Large stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { end: 320, suffix: '+', label: 'New Clients Delivered', prefix: '' },
            { end: 93, suffix: '%', label: 'Average Show Rate', prefix: '' },
            { end: 47, suffix: '', label: 'Average Cost Per Lead', prefix: '\u00a3' },
            { end: 90, suffix: '', label: 'Day Guarantee', prefix: '' },
          ].map((stat, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="glass-card p-8 text-center">
                <AnimatedCounter
                  end={stat.end}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
                <p className="text-ns-body text-sm mt-2">{stat.label}</p>
                {i === 3 && (
                  <p className="text-ns-accent text-xs mt-1 font-semibold">
                    10&ndash;20 Clients Guaranteed
                  </p>
                )}
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Mini case study cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <button
                onClick={() => onNavigate(cs.page)}
                className="glass-card p-6 text-left w-full group hover:border-ns-accent/50 transition-all"
              >
                <ImagePlaceholder
                  description={`${cs.firm} case study preview`}
                  height="h-40"
                  className="rounded-lg mb-4 w-full"
                />
                <p className="text-ns-accent text-sm font-semibold mb-1">{cs.firm}</p>
                <p className="text-xl font-bold font-heading text-ns-heading mb-3">
                  {cs.result}
                </p>
                <span className="text-ns-accent text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Case Study <ArrowRight size={14} />
                </span>
              </button>
            </FadeInSection>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          6. WHAT MAKES US DIFFERENT
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-ns-card/30">
        <SectionHeading
          title="Built Different. On Purpose."
          subtitle="We're not a generic marketing agency. Every part of our service is purpose-built for financial advisors."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="glass-card p-8 h-full">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold font-heading text-ns-heading mb-3">
                  {item.title}
                </h3>
                <p className="text-ns-body text-sm leading-relaxed">{item.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          7. SOCIAL PROOF / TESTIMONIALS
      ═══════════════════════════════════════════════════════════════ */}
      <Section>
        <SectionHeading
          title="What Our Advisors Say"
          subtitle="Don't take our word for it. Here's what real financial advisors say about working with North Star Solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="glass-card p-8 h-full flex flex-col">
                <StarRating rating={5} />
                <blockquote className="text-ns-body leading-relaxed mt-4 mb-6 flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <ImagePlaceholder
                    description={`${t.name} headshot`}
                    circle
                    height="h-14"
                    className="w-14"
                  />
                  <div>
                    <p className="font-bold font-heading text-ns-heading">{t.name}</p>
                    <p className="text-ns-body text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          8. CTA SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <CTASection
        headline="Your Competitors Are Already Marketing. Are You?"
        subtext="We only work with one advisor per postcode area. Once your territory is taken, it's gone. Book your free discovery call today to secure your exclusive patch."
        onNavigate={onNavigate}
      />
    </div>
  );
}

export default HomePage;
