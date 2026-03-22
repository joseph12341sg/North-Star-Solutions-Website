import React from 'react';
import { AnimatedCounter, FadeInSection, Section, SectionHeading, CTASection } from '../components/shared';
import { Target, Eye, Shield, Handshake, Users, Award, TrendingUp, Clock, Globe, Compass } from 'lucide-react';

function AboutPage({ onNavigate }) {
  const values = [
    {
      icon: Target,
      title: 'Results Over Promises',
      description:
        "We don't sell hope. We sell outcomes. Every decision we make is measured against one question: does this get our clients more qualified meetings?",
    },
    {
      icon: Eye,
      title: 'Transparency Always',
      description:
        "No hidden fees, no vanity metrics, no smoke and mirrors. You see exactly what we spend, what we generate, and what it costs. Every penny accounted for.",
    },
    {
      icon: Shield,
      title: 'Compliance First',
      description:
        "We operate in financial services. That means every campaign, every ad, every message is built with FCA compliance front of mind. We'd rather lose a lead than risk your reputation.",
    },
    {
      icon: Handshake,
      title: 'Partnership, Not Vendor',
      description:
        "We don't work for you — we work with you. Your growth is our growth. We succeed when you succeed, and our model reflects that.",
    },
  ];

  const stats = [
    { end: 4, suffix: '+', label: 'Years in Business' },
    { end: 120, suffix: '+', label: 'Advisors Helped' },
    { end: 320, suffix: '+', label: 'Clients Delivered' },
    { end: 93, suffix: '%', label: 'Average Show Rate' },
    { end: 100, suffix: '%', label: 'UK Focused' },
  ];

  const faTraits = [
    { icon: Shield, text: 'Regulated by the FCA — marketing must be compliant' },
    { icon: Users, text: 'Trust is everything — prospects need nurturing before they commit' },
    { icon: TrendingUp, text: 'High lifetime client value — one client can be worth £10,000+/year' },
    { icon: Award, text: 'Referral-dependent — most practices have no proactive marketing' },
    { icon: Clock, text: 'Time-poor — advisors are busy serving existing clients' },
    { icon: Globe, text: 'Compliance-anxious — fear of doing something wrong stops action' },
  ];

  const timeline = [
    {
      month: 'Month 1',
      title: 'Foundation',
      description: 'Discovery, strategy, campaign build, compliance review',
    },
    {
      month: 'Month 2',
      title: 'Launch & Learn',
      description: 'Campaigns live, first leads, setter team active, data collection',
    },
    {
      month: 'Month 3',
      title: 'Optimise & Scale',
      description: 'Refine targeting, improve show rates, scale budget, deliver guaranteed clients',
    },
    {
      month: 'Month 4+',
      title: 'Sustained Growth',
      description: 'Ongoing optimisation, new campaigns, territory expansion',
    },
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
                We're North Star Solutions. We Help Financial Advisors Grow.
              </h1>
              <p className="text-lg md:text-xl text-ns-body max-w-3xl mx-auto leading-relaxed">
                We exist for one reason: to give independent financial advisors, wealth managers, and mortgage brokers
                the client acquisition system they deserve — predictable, compliant, and built for scale.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ─── Our Story ─────────────────────────────────────────────────── */}
      <Section id="our-story">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div>
              <SectionHeading title="Our Story" />
              <div className="space-y-5 text-ns-body leading-relaxed">
                <p>
                  North Star Solutions was founded by someone who saw a glaring disconnect: financial advisors who were
                  brilliant at their craft — changing lives, protecting families, building legacies — yet struggling to
                  find enough of the right clients to keep their diaries full. They were spending thousands on marketing
                  that didn't work, or worse, doing nothing at all because the options felt overwhelming.
                </p>
                <p>
                  We started by helping accountants grow their practices. It worked well. But we quickly discovered that
                  financial advisors had an even bigger problem — and far fewer good solutions. The agencies promising
                  results didn't understand the nuances. The leads were poor. The compliance was an afterthought.
                  Advisors were burning budget and losing trust.
                </p>
                <p>
                  The financial services market is fundamentally different: longer sales cycles, FCA compliance at every
                  turn, and the need for deep trust before a prospect will ever commit their finances to someone new.
                  Generic marketing agencies don't understand this. They treat financial advisors like any other local
                  business — and the results speak for themselves.
                </p>
                <p>
                  So we pivoted. We went all in. Today, North Star Solutions is a specialist client acquisition agency
                  focused exclusively on helping financial advisors, wealth managers, and mortgage brokers grow. Our team
                  understands the FA market inside and out — the compliance landscape, the client psychology, and the
                  systems needed to deliver real, measurable results.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </Section>

      {/* ─── Our Mission & Values ──────────────────────────────────────── */}
      <Section id="mission-values" className="bg-ns-card/30">
        <FadeInSection>
          <SectionHeading title="Our Mission & Values" />
          <div className="glass-card p-8 md:p-10 rounded-2xl mb-12 md:mb-16 text-center max-w-4xl mx-auto">
            <Compass size={40} className="text-ns-accent mx-auto mb-4" />
            <p className="text-lg md:text-xl text-ns-heading font-heading leading-relaxed">
              "To give every independent financial advisor in the UK the tools, systems, and support to compete with the
              largest firms — without compromising their independence or integrity."
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <FadeInSection key={value.title} delay={index * 100}>
                <div className="glass-card p-6 md:p-8 rounded-2xl h-full hover:border-ns-accent/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-ns-accent/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-ns-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-ns-heading mb-3">{value.title}</h3>
                  <p className="text-ns-body leading-relaxed">{value.description}</p>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </Section>

      {/* ─── By The Numbers ────────────────────────────────────────────── */}
      <Section id="by-the-numbers">
        <FadeInSection>
          <SectionHeading title="By The Numbers" subtitle="The results speak for themselves." />
        </FadeInSection>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <FadeInSection key={stat.label} delay={index * 100}>
              <div className="glass-card p-6 rounded-2xl text-center">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                <p className="text-ns-body text-sm mt-2">{stat.label}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </Section>

      {/* ─── Why Financial Advisors? ───────────────────────────────────── */}
      <Section id="why-fas" className="bg-ns-card/30">
        <FadeInSection>
          <SectionHeading title="Why Financial Advisors?" />
        </FadeInSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <FadeInSection>
            <div>
              <h3 className="text-2xl font-heading font-bold text-ns-heading mb-6">
                Why We Chose Financial Services
              </h3>
              <div className="space-y-4 text-ns-body leading-relaxed">
                <p>
                  We didn't choose financial services at random. We chose it because we realised that no other
                  professional sector has such a stark gap between the quality of the service offered and the quality of
                  the marketing behind it. Financial advisors change lives — but most of them rely on referrals and
                  hope to keep their pipeline full.
                </p>
                <p>
                  The FA market demands a specialist approach. FCA requirements mean that every piece of marketing must
                  be carefully considered. Generic agencies get this wrong constantly — running non-compliant ads,
                  making unsuitable claims, and generating leads that will never convert because they were attracted
                  with the wrong messaging.
                </p>
                <p>
                  We understand the psychology of someone choosing a financial advisor. It's not like picking a
                  restaurant or a plumber. People are entrusting their life savings, their pension, their family's
                  future. That requires a completely different approach to client acquisition — one built on trust,
                  education, and credibility. That's exactly what we deliver.
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div>
              <h3 className="text-2xl font-heading font-bold text-ns-heading mb-6">What Makes FAs Different</h3>
              <div className="space-y-4">
                {faTraits.map((trait, index) => {
                  const Icon = trait.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 glass-card p-4 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-ns-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={18} className="text-ns-accent" />
                      </div>
                      <p className="text-ns-body leading-relaxed">{trait.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeInSection>
        </div>
      </Section>

      {/* ─── Our Approach ──────────────────────────────────────────────── */}
      <Section id="our-approach">
        <FadeInSection>
          <SectionHeading
            title="Our Approach"
            subtitle="A proven, phased methodology designed for financial services."
          />
        </FadeInSection>
        <div className="max-w-3xl mx-auto">
          {timeline.map((step, index) => (
            <FadeInSection key={step.month} delay={index * 150}>
              <div className="relative flex gap-6 md:gap-8 pb-12 last:pb-0">
                {/* Connector line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-5 md:left-6 top-14 bottom-0 w-px bg-gradient-to-b from-ns-accent/40 to-ns-accent/10" />
                )}
                {/* Step number */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-ns-accent/20 border-2 border-ns-accent flex items-center justify-center">
                    <span className="text-ns-accent font-heading font-bold text-sm md:text-base">{index + 1}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="glass-card p-6 rounded-2xl flex-1">
                  <span className="text-ns-accent text-sm font-semibold uppercase tracking-wider">{step.month}</span>
                  <h3 className="text-xl font-heading font-bold text-ns-heading mt-1 mb-2">{step.title}</h3>
                  <p className="text-ns-body leading-relaxed">{step.description}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </Section>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <CTASection
        headline="Ready to See What We Can Do For Your Practice?"
        subtext="Book a free, no-obligation discovery call. We'll show you exactly how we'd fill your diary — and you decide if it's right for you."
        onNavigate={onNavigate}
      />
    </div>
  );
}

export default AboutPage;
