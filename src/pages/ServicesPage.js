import React from 'react';
import { FadeInSection, Section, SectionHeading, CTASection } from '../components/shared';
import {
  Megaphone, Target, Phone, Mail, BarChart3, Shield,
  CheckCircle, X as XIcon, ArrowRight, Calendar, Clock,
  Zap, TrendingUp, Award, FileCheck
} from 'lucide-react';

// ─── Service Data ────────────────────────────────────────────────────
const services = [
  {
    icon: Megaphone,
    title: 'Meta Ads Management',
    description: 'We build, launch, and optimise Facebook & Instagram ad campaigns specifically for financial advisors.',
    bullets: [
      'Compliant ad copy and creative',
      'Targeted to your ideal client demographic and geography',
      'A/B tested continuously for lowest cost per lead',
      'Detailed monthly reporting',
      'Average CPL of £47 across all clients',
    ],
  },
  {
    icon: Target,
    title: 'Lead Generation & Capture',
    description: 'High-converting landing pages and lead capture systems designed specifically for financial services.',
    bullets: [
      'Landing pages built for conversion, not just looks',
      'Lead qualification forms that filter out tyre-kickers',
      'Instant lead notification to our setter team',
      'CRM integration so nothing falls through the cracks',
      'GDPR-compliant data handling',
    ],
  },
  {
    icon: Phone,
    title: 'Appointment Setting',
    description: 'Every lead is contacted by our trained appointment setters within 60 seconds. No lead left behind.',
    bullets: [
      'Dedicated setters trained in financial services',
      'Every lead contacted within 60 seconds',
      'Professional, compliant phone scripts',
      'Qualified against your criteria before booking',
      'Booked directly into your calendar',
      'Average 93% show rate',
    ],
  },
  {
    icon: Mail,
    title: 'Nurture & Show Rate Optimisation',
    description: "We don't just book meetings — we make sure prospects actually show up, educated and ready to talk.",
    bullets: [
      'Automated email sequences pre-meeting',
      'SMS reminders at strategic intervals',
      'Pre-meeting education content',
      'Calendar reminders and confirmation',
      '93% average show rate across all clients',
    ],
  },
  {
    icon: BarChart3,
    title: 'Reporting & Analytics',
    description: 'Complete visibility into every metric that matters. No vanity stats, no hidden data.',
    bullets: [
      'Real-time dashboard showing leads, appointments, show rates, cost per client',
      'Weekly performance reports',
      'Monthly strategy calls to review and optimise',
      'Full transparency on ad spend and results',
      'ROI tracking per campaign',
    ],
  },
  {
    icon: Shield,
    title: 'Compliance Support',
    description: 'Every campaign built with FCA compliance in mind. Your reputation is safe with us.',
    bullets: [
      'All campaigns reviewed for FCA compliance considerations',
      'No misleading claims, no guaranteed returns language',
      'Professional, trustworthy creative',
      'Financial promotions guidance',
      'Peace of mind for regulated professionals',
    ],
  },
];

// ─── Timeline Data ───────────────────────────────────────────────────
const timeline = [
  {
    weeks: 'Week 1–2',
    title: 'Onboarding & Build',
    icon: FileCheck,
    items: [
      'Discovery call',
      'Strategy document',
      'Ad creative',
      'Landing page build',
      'Setter training',
      'Compliance review',
    ],
  },
  {
    weeks: 'Week 3–4',
    title: 'Launch & First Leads',
    icon: Zap,
    items: [
      'Campaigns go live',
      'First leads within 48 hours',
      'Setter team active',
      'Initial data collection',
    ],
  },
  {
    weeks: 'Week 5–8',
    title: 'Optimise & Scale',
    icon: TrendingUp,
    items: [
      'A/B testing',
      'CPL reduction',
      'Show rate improvement',
      'Weekly reporting',
      'Strategy adjustments',
    ],
  },
  {
    weeks: 'Week 9–12',
    title: 'Scale & Deliver',
    icon: Award,
    items: [
      'Budget scaling',
      'Consistent client delivery',
      'Monthly review',
      'Guarantee assessment',
    ],
  },
];

// ─── Who This Is For / Who This Isn't For ────────────────────────────
const thisIsFor = [
  'Financial advisors who want a predictable stream of new clients',
  'IFAs tired of relying solely on referrals',
  'Practices ready to invest in growth and scale',
  'Advisors who want done-for-you marketing — not DIY courses',
  'Firms that can handle 10–20 new clients in 90 days',
  'Professionals who value compliance and reputation',
];

const thisIsntFor = [
  'Advisors looking for a magic bullet with zero effort',
  'Firms not willing to invest in ad spend alongside management fees',
  'Anyone expecting results without attending booked appointments',
  'Practices with no capacity to take on new clients',
  'People looking for social media management or SEO',
  'Those who want to micromanage every ad and landing page',
];

// ─── Service Card Component ──────────────────────────────────────────
function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <FadeInSection delay={index * 100}>
      <div className="glass-card p-6 md:p-8 lg:p-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-ns-accent/10 border border-ns-accent/20 flex items-center justify-center">
            <Icon size={24} className="text-ns-accent" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold font-heading">{service.title}</h3>
        </div>
        <p className="text-ns-body mb-6">{service.description}</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {service.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle size={18} className="text-ns-accent mt-0.5 flex-shrink-0" />
              <span className="text-ns-body text-sm md:text-base">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </FadeInSection>
  );
}

// ─── Timeline Step Component ─────────────────────────────────────────
function TimelineStep({ step, index, isLast }) {
  const Icon = step.icon;

  return (
    <FadeInSection delay={index * 150}>
      <div className="relative flex gap-6">
        {/* Vertical line & dot */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-ns-accent/10 border-2 border-ns-accent flex items-center justify-center flex-shrink-0">
            <Icon size={20} className="text-ns-accent" />
          </div>
          {!isLast && (
            <div className="w-px flex-1 bg-gradient-to-b from-ns-accent/50 to-ns-accent/10 mt-2" />
          )}
        </div>

        {/* Content */}
        <div className="pb-10">
          <span className="text-ns-accent font-semibold text-sm uppercase tracking-wider">{step.weeks}</span>
          <h3 className="text-xl font-bold font-heading mt-1 mb-3">{step.title}</h3>
          <div className="glass-card p-4 md:p-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {step.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-ns-body text-sm">
                  <ArrowRight size={14} className="text-ns-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}

// ─── Main Page Component ─────────────────────────────────────────────
function ServicesPage({ onNavigate }) {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-ns-accent/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
              Everything You Need to Fill Your Diary.{' '}
              <span className="text-ns-accent">Nothing You Don't.</span>
            </h1>
            <p className="text-ns-body text-lg md:text-xl max-w-3xl mx-auto">
              Most agencies hand you leads and wish you luck. We handle the entire journey — from the first ad impression to a qualified client sitting in your office. Here's exactly what we do.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── Service Overview Cards ───────────────────────────────── */}
      <Section id="service-cards">
        <SectionHeading
          title="Our Services"
          subtitle="A complete, end-to-end client acquisition system built for financial advisors."
        />
        <div className="space-y-8 md:space-y-12">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </Section>

      {/* ── The Full Process — 90-Day Timeline ──────────────────── */}
      <Section id="process" className="bg-ns-card/30">
        <SectionHeading
          title="The Full Process"
          subtitle="Your 90-day journey from onboarding to a full diary. Here's exactly what happens and when."
        />
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-10 justify-center">
              <Calendar size={20} className="text-ns-accent" />
              <span className="text-ns-accent font-semibold uppercase tracking-wider text-sm">90-Day Timeline</span>
              <Clock size={20} className="text-ns-accent" />
            </div>
          </FadeInSection>
          {timeline.map((step, index) => (
            <TimelineStep
              key={step.weeks}
              step={step}
              index={index}
              isLast={index === timeline.length - 1}
            />
          ))}
        </div>
      </Section>

      {/* ── Who This Is For vs Who This Isn't For ────────────────── */}
      <Section id="who-its-for">
        <SectionHeading
          title="Who This Is For"
          subtitle="We're not for everyone — and that's by design."
        />
        <FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* This Is For */}
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle size={20} className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold font-heading text-green-400">This Is For You If…</h3>
              </div>
              <ul className="space-y-3">
                {thisIsFor.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                    <span className="text-ns-body text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* This Isn't For */}
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                  <XIcon size={20} className="text-red-400" />
                </div>
                <h3 className="text-xl font-bold font-heading text-red-400">This Isn't For You If…</h3>
              </div>
              <ul className="space-y-3">
                {thisIsntFor.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <XIcon size={16} className="text-red-400 flex-shrink-0" />
                    <span className="text-ns-body text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeInSection>
      </Section>

      {/* ── Guarantee Section ────────────────────────────────────── */}
      <Section id="guarantee">
        <FadeInSection>
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 lg:p-16 text-center border-2 border-[#C9A84C]/40 relative overflow-hidden">
            {/* Gold accent glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 via-transparent to-[#C9A84C]/5 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Award size={28} className="text-[#C9A84C]" />
                <span className="text-[#C9A84C] font-semibold uppercase tracking-wider text-sm">Our Guarantee</span>
                <Award size={28} className="text-[#C9A84C]" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
                10–20 New Clients in 90 Days.{' '}
                <span className="text-[#C9A84C]">Guaranteed.</span>
              </h2>

              <p className="text-ns-body text-lg md:text-xl max-w-3xl mx-auto mb-8">
                We don't make this promise lightly. If we don't deliver a minimum of 10 new, qualified clients to your practice within 90 days of campaign launch, we continue working for free until we hit the target. No extra fees, no weasel clauses. We put our money where our mouth is because we know our system works.
              </p>

              <p className="text-ns-body text-sm opacity-60">
                Guarantee subject to agreed campaign budget and client cooperation with the appointment process.
              </p>
            </div>
          </div>
        </FadeInSection>
      </Section>

      {/* ── CTA Section ──────────────────────────────────────────── */}
      <CTASection
        headline="Ready to Fill Your Diary?"
        subtext="Book a free discovery call and we'll map out exactly how we'd deliver 10–20 new clients to your practice in 90 days."
        onNavigate={onNavigate}
      />
    </main>
  );
}

export default ServicesPage;
