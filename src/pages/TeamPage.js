import React from 'react';
import { FadeInSection, Section, SectionHeading, CTASection } from '../components/shared';
import {
  Users, Pencil, Phone, Mail, BarChart3, Shield,
  Heart, Target, Coffee, Lightbulb, UserCheck
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────

const leaders = [
  {
    name: 'Daniel Morrison',
    role: 'Founder & Managing Director',
    bio: "Daniel founded North Star Solutions after spending a decade in financial services marketing. Having worked with some of the UK's largest advice firms, he saw first-hand how independent advisors were being left behind in the digital marketing revolution. His mission: level the playing field. Daniel oversees strategy and client relationships, ensuring every advisor gets the attention and results they deserve.",
  },
  {
    name: 'Rachel Thornton',
    role: 'Head of Campaign Operations',
    bio: 'Rachel brings 8 years of performance marketing experience to North Star, having previously managed seven-figure ad budgets for B2B SaaS companies. She pivoted to financial services after recognising the massive opportunity for data-driven client acquisition in the FA market. Rachel leads our media buying team and is obsessed with driving down cost per lead whilst maintaining lead quality.',
  },
  {
    name: 'Marcus Webb',
    role: 'Head of Client Success',
    bio: "Marcus is the voice our clients hear most often. With a background in financial planning himself — he held his Level 4 Diploma before moving into marketing — Marcus understands the advisor's world like few marketers can. He manages the onboarding process, monthly strategy calls, and ensures every client hits their growth targets.",
  },
];

const podRoles = [
  {
    icon: UserCheck,
    title: 'Campaign Manager',
    description:
      "Your single point of contact. They coordinate your pod, manage timelines, and ensure everything runs like clockwork. If you have a question, they have the answer.",
  },
  {
    icon: Target,
    title: 'Media Buyer',
    description:
      "The Meta Ads specialist who manages and optimises your campaigns daily. They're watching your CPL, testing new audiences, and squeezing every pound of value from your ad budget.",
  },
  {
    icon: Pencil,
    title: 'Copywriter',
    description:
      'Creates compliant ad copy, landing page content, and nurture messages that resonate with your ideal clients. They understand financial services language and FCA considerations.',
  },
  {
    icon: Phone,
    title: 'Appointment Setter',
    description:
      'Contacts and qualifies every lead within 60 seconds. Trained specifically in financial services conversations, they book only the meetings that meet your criteria.',
  },
  {
    icon: Mail,
    title: 'Nurture Specialist',
    description:
      'Manages your email and SMS sequences to maximise show rates. They craft the pre-meeting journey that turns a cold lead into a warm, educated prospect.',
  },
  {
    icon: Shield,
    title: 'Compliance Reviewer',
    description:
      'Reviews every campaign element — ads, landing pages, emails — for FCA compliance alignment. Your reputation is always protected.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Lead',
    description:
      'Tracks every metric, builds your dashboards, and provides the data-driven insights that inform strategy decisions. No vanity metrics — only numbers that matter.',
  },
];

const cultureValues = [
  {
    icon: Coffee,
    title: 'Remote-First',
    description:
      'We hire the best talent, wherever they are in the UK. Our team works remotely with weekly sync-ups and quarterly in-person meetups.',
  },
  {
    icon: Target,
    title: 'Performance-Driven',
    description:
      "We're measured on outcomes, not hours. Our team is motivated by results because our compensation reflects client success.",
  },
  {
    icon: Lightbulb,
    title: 'Always Learning',
    description:
      'Financial services marketing evolves constantly. We invest in continuous training, certifications, and knowledge sharing across the team.',
  },
  {
    icon: Heart,
    title: 'Client-Obsessed',
    description:
      "Our clients' success is our success. Every team member understands that behind every metric is a real advisor trying to grow their practice.",
  },
];

// ─── Component ───────────────────────────────────────────────────────

function TeamPage({ onNavigate }) {
  return (
    <div>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ns-accent/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInSection>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-ns-accent/10 border border-ns-accent/20 rounded-full px-4 py-1.5 mb-6">
                <Users size={16} className="text-ns-accent" />
                <span className="text-ns-accent text-sm font-medium">Our Team</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-ns-heading">
                The Team Behind Your Growth
              </h1>
              <p className="text-lg md:text-xl text-ns-body max-w-3xl mx-auto leading-relaxed">
                We're not a faceless agency. Behind every campaign, every lead, and every booked
                appointment is a dedicated team of specialists who live and breathe financial
                services marketing.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ─── Leadership ────────────────────────────────────────────────── */}
      <Section id="leadership">
        <FadeInSection>
          <SectionHeading
            title="Leadership"
            subtitle="Meet the people who set the direction and hold us accountable to your results."
          />
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {leaders.map((leader, index) => (
            <FadeInSection key={leader.name} delay={index * 150}>
              <div className="glass-card p-6 md:p-8 rounded-2xl h-full hover:border-ns-accent/30 transition-all duration-300 text-center">
                <h3 className="text-xl font-heading font-bold text-ns-heading mb-1">
                  {leader.name}
                </h3>
                <p className="text-ns-accent text-sm font-semibold mb-4">{leader.role}</p>
                <p className="text-ns-body leading-relaxed text-sm">{leader.bio}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </Section>

      {/* ─── The Pod Model ─────────────────────────────────────────────── */}
      <Section id="pod-model" className="bg-ns-card/30">
        <FadeInSection>
          <SectionHeading title="Your Dedicated Team — The Pod Model" />
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="text-lg text-ns-body leading-relaxed">
              Every advisor who works with North Star gets a dedicated team — what we call a
              &lsquo;pod.&rsquo; Your pod knows your practice, your ideal clients, and your goals.
              They're not juggling 50 accounts — they're focused on yours.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {podRoles.map((role, index) => {
            const Icon = role.icon;
            return (
              <FadeInSection key={role.title} delay={index * 100}>
                <div className="glass-card p-6 md:p-8 rounded-2xl h-full hover:border-ns-accent/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-ns-accent/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-ns-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-ns-heading mb-3">
                    {role.title}
                  </h3>
                  <p className="text-ns-body leading-relaxed text-sm">{role.description}</p>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </Section>

      {/* ─── Culture & Values ──────────────────────────────────────────── */}
      <Section id="culture">
        <FadeInSection>
          <SectionHeading
            title="Our Culture & Values"
            subtitle="We've built a team culture that directly translates into better results for our clients."
          />
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {cultureValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <FadeInSection key={value.title} delay={index * 100}>
                <div className="glass-card p-6 md:p-8 rounded-2xl h-full hover:border-ns-accent/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-ns-accent/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-ns-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-ns-heading mb-3">
                    {value.title}
                  </h3>
                  <p className="text-ns-body leading-relaxed">{value.description}</p>
                </div>
              </FadeInSection>
            );
          })}
        </div>

      </Section>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <CTASection
        headline="Meet Your Growth Team"
        subtext="Book a discovery call and we'll introduce you to the pod that would manage your campaigns. No obligation, no pressure — just a conversation about your growth."
        onNavigate={onNavigate}
      />
    </div>
  );
}

export default TeamPage;
