import React from 'react';
import { ImagePlaceholder, FadeInSection, Section, SectionHeading } from '../components/shared';
import {
  TrendingUp, Globe, Target, Heart, Briefcase, MapPin,
  PoundSterling, Gift, Monitor, Users, BookOpen, Coffee, Mail, ArrowRight
} from 'lucide-react';

function CareersPage({ onNavigate }) {
  const perks = [
    { icon: TrendingUp, title: 'Growth Opportunity', description: "We're scaling rapidly. That means new roles, new responsibilities, and fast career progression for people who deliver." },
    { icon: Globe, title: 'Remote-First', description: 'Work from anywhere in the UK. We trust our team to manage their time and deliver results. No commute, no office politics.' },
    { icon: Target, title: 'Performance Culture', description: 'We reward results, not hours. Top performers earn significant bonuses tied directly to client success metrics.' },
    { icon: Heart, title: 'Make Real Impact', description: "You won't be a cog in a machine. Every team member directly impacts real advisors' businesses. Your work matters." },
  ];

  const roles = [
    {
      title: 'Senior Media Buyer',
      type: 'Full-time',
      location: 'Remote (UK)',
      salary: '£35,000 – £50,000 + performance bonus',
      description: "We're looking for an experienced Meta Ads specialist to manage campaigns for our growing client base. You'll own the full campaign lifecycle — strategy, build, launch, optimise — for financial advisor clients across the UK.",
      requirements: [
        '3+ years Meta Ads experience',
        'Proven track record of sub-£50 CPL campaigns',
        'Experience with lead gen (not e-commerce)',
        'Understanding of financial services a plus',
      ],
    },
    {
      title: 'Appointment Setter',
      type: 'Full-time',
      location: 'Remote (UK)',
      salary: '£24,000 – £30,000 + commission',
      description: "Join our setter team and be the first point of contact for potential financial advisory clients. You'll call leads within 60 seconds of them enquiring, qualify them against strict criteria, and book appointments directly into advisor calendars.",
      requirements: [
        'Excellent phone manner',
        'Experience in appointment setting or telesales',
        'Ability to handle objections professionally',
        'Financial services experience a bonus',
      ],
    },
    {
      title: 'Financial Services Copywriter',
      type: 'Part-time / Freelance',
      location: 'Remote',
      salary: '£25 – £40/hour',
      description: "Create compelling, compliant ad copy, landing pages, and nurture sequences for our financial advisor clients. You understand how to write for a regulated industry without making it boring.",
      requirements: [
        'Portfolio of B2B or financial services copy',
        'Understanding of FCA financial promotions rules',
        'Ability to write for different FA specialisms',
      ],
    },
    {
      title: 'Client Success Manager',
      type: 'Full-time',
      location: 'Remote (UK)',
      salary: '£30,000 – £42,000 + bonus',
      description: "Be the main point of contact for a portfolio of financial advisor clients. You'll run onboarding, manage monthly strategy calls, and ensure every client hits their growth targets.",
      requirements: [
        '2+ years in client success or account management',
        'Experience in marketing or financial services',
        'Strong analytical and communication skills',
      ],
    },
  ];

  const benefits = [
    { icon: PoundSterling, text: 'Competitive base salary' },
    { icon: TrendingUp, text: 'Performance bonuses tied to results' },
    { icon: Globe, text: 'Fully remote working' },
    { icon: Coffee, text: '25 days annual leave + bank holidays' },
    { icon: BookOpen, text: 'Professional development budget' },
    { icon: Users, text: 'Quarterly team meetups' },
    { icon: Monitor, text: 'Latest equipment provided' },
    { icon: Gift, text: 'Pension contribution' },
  ];

  return (
    <div>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ns-accent/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInSection>
            <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-ns-heading">
                Build Your Career at North Star
              </h1>
              <p className="text-lg md:text-xl text-ns-body max-w-3xl mx-auto leading-relaxed">
                We're growing fast and looking for talented people who want to make a real impact. If you're passionate
                about performance marketing, financial services, or helping small businesses grow — we want to hear from you.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ─── Why Work With Us ──────────────────────────────────────────── */}
      <Section id="why-work-with-us" className="bg-ns-card/30">
        <FadeInSection>
          <SectionHeading title="Why Work With Us" />
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {perks.map((perk, index) => {
            const Icon = perk.icon;
            return (
              <FadeInSection key={perk.title} delay={index * 100}>
                <div className="glass-card p-6 md:p-8 rounded-2xl h-full hover:border-ns-accent/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-ns-accent/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-ns-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-ns-heading mb-3">{perk.title}</h3>
                  <p className="text-ns-body leading-relaxed">{perk.description}</p>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </Section>

      {/* ─── Open Positions ────────────────────────────────────────────── */}
      <Section id="open-positions">
        <FadeInSection>
          <SectionHeading
            title="Open Positions"
            subtitle="Join our team and help financial advisors across the UK grow their practices."
          />
        </FadeInSection>
        <div className="space-y-6 md:space-y-8">
          {roles.map((role, index) => (
            <FadeInSection key={role.title} delay={index * 100}>
              <div className="glass-card p-6 md:p-8 rounded-2xl hover:border-ns-accent/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-ns-heading mb-2">{role.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-ns-body">
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={14} className="text-ns-accent" />
                        {role.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-ns-accent" />
                        {role.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <PoundSterling size={14} className="text-ns-accent" />
                        {role.salary}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-ns-body leading-relaxed mb-5">{role.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-ns-heading uppercase tracking-wider mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {role.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-ns-body text-sm">
                        <ArrowRight size={14} className="text-ns-accent flex-shrink-0 mt-1" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="cta-button text-sm px-6 py-2.5 rounded-lg">
                  Apply Now
                </button>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={400}>
          <div className="mt-12">
            <ImagePlaceholder
              description="Team working environment photo"
              className="w-full rounded-2xl"
              height="h-56 md:h-80"
            />
          </div>
        </FadeInSection>
      </Section>

      {/* ─── Our Benefits ──────────────────────────────────────────────── */}
      <Section id="benefits" className="bg-ns-card/30">
        <FadeInSection>
          <SectionHeading title="Our Benefits" subtitle="We look after the people who look after our clients." />
        </FadeInSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <FadeInSection key={benefit.text} delay={index * 75}>
                <div className="glass-card p-5 md:p-6 rounded-2xl text-center h-full hover:border-ns-accent/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-ns-accent/10 flex items-center justify-center mx-auto mb-3">
                    <Icon size={20} className="text-ns-accent" />
                  </div>
                  <p className="text-ns-body text-sm leading-relaxed">{benefit.text}</p>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </Section>

      {/* ─── Don't See Your Role? ──────────────────────────────────────── */}
      <Section id="open-application">
        <FadeInSection>
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-2xl text-center">
              <Mail size={40} className="text-ns-accent mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ns-heading mb-4">
                Don't See Your Role?
              </h2>
              <p className="text-lg text-ns-body leading-relaxed mb-6">
                We're always looking for talented people. If you think you'd be a great fit for North Star, send your CV
                and a brief note about why you want to join us.
              </p>
              <a
                href="mailto:careers@north-star-solutions.com"
                className="inline-flex items-center gap-2 text-ns-accent hover:text-ns-accent/80 font-semibold text-lg transition-colors"
              >
                <Mail size={20} />
                careers@north-star-solutions.com
              </a>
            </div>
          </div>
        </FadeInSection>
      </Section>
    </div>
  );
}

export default CareersPage;
