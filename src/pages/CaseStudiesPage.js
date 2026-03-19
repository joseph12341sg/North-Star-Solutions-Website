import React from 'react';
import { ImagePlaceholder, AnimatedCounter, FadeInSection, Section, SectionHeading, CTASection } from '../components/shared';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';

const caseStudies = [
  {
    id: 'case-study-1',
    company: 'Hartley Wealth Management',
    type: 'IFA — Retirement & Pension',
    location: 'Manchester',
    headline: '14 New Clients in 87 Days',
    summary: "From referral-only to a predictable client acquisition system that transformed James's practice.",
    stat: '14',
    statLabel: 'New Clients',
    image: 'Professional headshot of James Hartley — male, 40s, suit, friendly expression',
  },
  {
    id: 'case-study-2',
    company: 'Meridian Financial Planning',
    type: 'Multi-advisor IFA',
    location: 'Leeds',
    headline: '22 New Clients in 90 Days',
    summary: 'How solving the pipeline problem allowed Sarah and David to scale from 2 to 6 advisors.',
    stat: '22',
    statLabel: 'New Clients',
    image: 'Sarah and David Chen — husband-wife advisory team, modern office setting',
  },
  {
    id: 'case-study-3',
    company: 'Greenwood Mortgages & Protection',
    type: 'Mortgage Broker',
    location: 'Birmingham',
    headline: '19 New Clients in 90 Days',
    summary: 'After losing 60% of referral sources overnight, Tom built something better.',
    stat: '19',
    statLabel: 'New Clients',
    image: 'Tom Greenwood — male, 30s, casual-professional, approachable',
  },
  {
    id: 'case-study-4',
    company: 'Pemberton & Associates',
    type: 'Chartered Financial Planner',
    location: 'Bristol',
    headline: '17 Clients in 12 Weeks',
    summary: 'How Eleanor overcame compliance fears to build a marketing system that actually works.',
    stat: '17',
    statLabel: 'New Clients',
    image: 'Eleanor Pemberton — female, 50s, authoritative, elegant office backdrop',
  },
];

function CaseStudiesPage({ onNavigate }) {
  return (
    <div>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ns-accent/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInSection>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-ns-heading">
                Don't Take Our Word For It.{' '}
                <span className="text-ns-accent">Take Theirs.</span>
              </h1>
              <p className="text-lg md:text-xl text-ns-body max-w-3xl mx-auto leading-relaxed">
                Real results from real financial advisors and mortgage brokers across the UK.
                Every number verified. Every story genuine. See exactly how our clients are
                growing their practices with a predictable, compliant client acquisition system.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ─── Stats Bar ─────────────────────────────────────────────────── */}
      <Section className="bg-ns-card/30 !py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <FadeInSection>
            <div className="glass-card p-6 rounded-2xl text-center">
              <AnimatedCounter end={72} suffix="+" />
              <p className="text-ns-body text-sm mt-2">Total Clients Delivered</p>
            </div>
          </FadeInSection>
          <FadeInSection delay={100}>
            <div className="glass-card p-6 rounded-2xl text-center">
              <AnimatedCounter end={93} suffix="%" />
              <p className="text-ns-body text-sm mt-2">Average Show Rate</p>
            </div>
          </FadeInSection>
          <FadeInSection delay={200}>
            <div className="glass-card p-6 rounded-2xl text-center">
              <AnimatedCounter end={23} suffix="%" />
              <p className="text-ns-body text-sm mt-2">Average Close Rate</p>
            </div>
          </FadeInSection>
        </div>
      </Section>

      {/* ─── Case Study Preview Cards ──────────────────────────────────── */}
      <Section id="case-study-cards">
        <SectionHeading
          title="Our Case Studies"
          subtitle="Four practices. Four different challenges. One system that delivered results for all of them."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <FadeInSection key={study.id} delay={index * 100}>
              <div className="glass-card rounded-2xl overflow-hidden hover:border-ns-accent/30 transition-all duration-300 h-full flex flex-col">
                <ImagePlaceholder
                  description={study.image}
                  className="w-full"
                  height="h-48 md:h-56"
                />
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-ns-body">
                    <span className="flex items-center gap-1">
                      <Briefcase size={12} className="text-ns-accent" />
                      {study.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-ns-accent" />
                      {study.location}
                    </span>
                  </div>

                  {/* Company name */}
                  <h3 className="text-lg font-heading font-bold text-ns-heading mb-2">
                    {study.company}
                  </h3>

                  {/* Key stat */}
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="text-2xl md:text-3xl font-bold font-heading text-[#C9A84C]">
                      {study.stat}
                    </span>
                    <span className="text-sm text-ns-body">{study.statLabel}</span>
                  </div>

                  {/* Headline */}
                  <p className="text-ns-accent font-semibold text-sm mb-2">{study.headline}</p>

                  {/* Summary */}
                  <p className="text-ns-body text-sm leading-relaxed mb-6 flex-1">
                    {study.summary}
                  </p>

                  {/* CTA */}
                  <button
                    onClick={() => onNavigate(study.id)}
                    className="flex items-center gap-2 text-ns-accent font-semibold text-sm hover:gap-3 transition-all duration-300 group"
                  >
                    Read Full Case Study
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </Section>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <CTASection
        headline="Ready to Be Our Next Success Story?"
        subtext="Book a free discovery call and let us show you how we'd deliver 10–20 new clients to your practice in 90 days."
        onNavigate={onNavigate}
      />
    </div>
  );
}

export default CaseStudiesPage;
