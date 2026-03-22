import React from 'react';
import {
  AnimatedCounter,
  FadeInSection,
  Section,
  SectionHeading,
  StarRating,
  CTASection,
} from '../components/shared';
import {
  ArrowLeft,
  CheckCircle,
  MapPin,
  Briefcase,
  Users,
  Target,
  TrendingUp,
  MessageSquare,
  BarChart3,
  UserPlus,
  Layers,
} from 'lucide-react';

function CaseStudy2({ onNavigate }) {
  const heroStats = [
    { value: 22, suffix: '', label: 'New Clients' },
    { value: 90, suffix: '', label: 'Days' },
    { value: 34, prefix: '£', suffix: '', label: 'Cost Per Lead' },
    { value: 94, suffix: '%', label: 'Show Rate' },
    { value: 6, suffix: '', label: 'Advisors (from 2)' },
  ];

  const monthlyData = [
    { month: 'Month 1', leads: 34, appointments: 12, clients: 5 },
    { month: 'Month 2', leads: 52, appointments: 21, clients: 9 },
    { month: 'Month 3', leads: 48, appointments: 19, clients: 8 },
    { month: 'Total', leads: 134, appointments: 52, clients: 22 },
  ];

  const takeaways = [
    {
      icon: <Layers size={24} className="text-ns-accent" />,
      title: 'Dual Funnels Double Opportunity',
      description: 'Running separate campaigns for different demographics — pension reviews for over-55s and protection for young families — allowed Meridian to serve two distinct markets simultaneously without diluting either message.',
    },
    {
      icon: <UserPlus size={24} className="text-ns-accent" />,
      title: 'New Hires Need a Pipeline',
      description: 'Hiring advisors without a client acquisition system is a costly mistake. North Star provided the pipeline that allowed Meridian to confidently onboard new team members knowing they would have clients from day one.',
    },
    {
      icon: <BarChart3 size={24} className="text-ns-accent" />,
      title: 'Capacity Planning Through Data',
      description: 'With predictable lead flow, Sarah and David could forecast exactly when each advisor would reach capacity and plan their next hire months in advance — eliminating guesswork from growth decisions.',
    },
    {
      icon: <TrendingUp size={24} className="text-ns-accent" />,
      title: 'Revenue Compounds Quickly',
      description: 'The combination of recurring revenue from financial planning clients and one-off protection commissions meant that each new client added both immediate income and long-term value to the practice.',
    },
  ];

  return (
    <div>
      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ns-accent/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back link */}
          <FadeInSection>
            <button
              onClick={() => onNavigate('case-studies')}
              className="flex items-center gap-2 text-ns-accent text-sm font-semibold mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft size={16} /> Back to Case Studies
            </button>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeInSection>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-ns-body">
                  <span className="flex items-center gap-1">
                    <Briefcase size={14} className="text-ns-accent" />
                    Multi-advisor IFA
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-ns-accent" />
                    Leeds
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={14} className="text-ns-accent" />
                    2 advisors + 3 support (grew to 6 advisors)
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-ns-heading leading-tight">
                  Scaling from 2 to 6 Advisors After Solving the{' '}
                  <span className="text-ns-accent">Pipeline Problem</span>
                </h1>
                <p className="text-lg text-ns-body leading-relaxed">
                  How Sarah and David Chen transformed Meridian Financial Planning from a
                  capacity-constrained two-person practice into a thriving six-advisor firm —
                  by building a predictable client acquisition system that fuelled their growth.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <img
                src="/images/11-meridian-office.jpg"
                alt="Meridian Financial Planning office"
                className="w-full rounded-2xl h-72 md:h-96 object-cover"
              />
            </FadeInSection>
          </div>

          {/* Stats banner */}
          <FadeInSection delay={300}>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {heroStats.map((stat, i) => (
                <div key={i} className="glass-card p-5 rounded-2xl text-center">
                  <AnimatedCounter end={stat.value} prefix={stat.prefix || ''} suffix={stat.suffix} />
                  <p className="text-ns-body text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE CHALLENGE
      ═══════════════════════════════════════════════════════════════ */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeInSection>
            <div>
              <SectionHeading title="The Challenge" centered={false} />
              <div className="space-y-4 text-ns-body leading-relaxed">
                <p>
                  Sarah and David Chen had built Meridian Financial Planning into a respected
                  practice in Leeds. With two advisors and three support staff, they were
                  delivering excellent outcomes for their clients. The problem wasn't the quality
                  of their advice — it was the lack of new clients coming through the door.
                </p>
                <p>
                  Both Sarah and David were at capacity, each managing approximately 120 clients.
                  They knew they needed to grow — the overhead was there, the ambition was there,
                  and the market opportunity was clear. So they hired a junior advisor six months
                  earlier to begin taking on new clients.
                </p>
                <p>
                  The problem? That junior advisor was sitting idle. With no marketing system and
                  a dried-up referral pipeline, there were simply no new clients to allocate. The
                  practice was haemorrhaging money on salary costs with nothing to show for it.
                </p>
                <p>
                  Sarah had tried LinkedIn content marketing for over a year — posting consistently,
                  sharing insights, building connections. The result? Plenty of likes and comments
                  from other advisors, but not a single paying client. It was a vanity exercise
                  that consumed hours every week with zero commercial return.
                </p>
              </div>

              <div className="mt-8 glass-card p-6 rounded-2xl border-l-4 border-ns-accent">
                <p className="text-ns-heading italic leading-relaxed">
                  "We had the capacity to help so many more people, but we couldn't find them.
                  Our junior advisor was brilliant — she just didn't have anyone to advise. It
                  was heartbreaking watching her sit there with an empty diary."
                </p>
                <p className="text-ns-accent text-sm font-semibold mt-3">— Sarah Chen</p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="space-y-4">
              {[
                'Successful practice but stuck at 2 advisors — couldn\'t grow further',
                'Both founders at capacity with 120 clients each',
                'Junior advisor hired 6 months ago — sitting idle with no pipeline',
                'LinkedIn content for 12 months — likes but zero clients',
                'Losing money on idle salary costs every month',
                'Referral pipeline had completely dried up',
              ].map((item, i) => (
                <div key={i} className="glass-card p-4 rounded-xl flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 text-sm font-bold">{i + 1}</span>
                  </div>
                  <p className="text-ns-body leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          THE STRATEGY
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-ns-card/30">
        <SectionHeading
          title="The Strategy"
          subtitle="A dual-funnel approach designed to serve multiple demographics and distribute clients across a growing team."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeInSection>
            <div className="space-y-6">
              {[
                {
                  icon: <Layers size={20} className="text-ns-accent" />,
                  title: 'Dual Campaign Architecture',
                  detail: 'Two distinct campaigns running simultaneously: pension reviews for the over-55 market and protection/mortgage reviews for young families aged 28–42. Each with its own messaging, creative, and conversion path.',
                },
                {
                  icon: <Target size={20} className="text-ns-accent" />,
                  title: 'Separate Funnels per Audience',
                  detail: 'Tailored landing pages for each demographic — the pension funnel emphasised retirement readiness and long-term planning, while the protection funnel focused on family security and mortgage reviews.',
                },
                {
                  icon: <Users size={20} className="text-ns-accent" />,
                  title: 'Smart Appointment Distribution',
                  detail: 'Appointments were distributed across the advisory team by specialism and capacity. The junior advisor received the protection leads first, building her book with lower-complexity cases before progressing to pension clients.',
                },
                {
                  icon: <BarChart3 size={20} className="text-ns-accent" />,
                  title: 'Team CRM Dashboard',
                  detail: 'A centralised dashboard giving Sarah and David full visibility over lead flow, appointment status, conversion rates, and individual advisor performance — enabling data-driven management decisions.',
                },
                {
                  icon: <MessageSquare size={20} className="text-ns-accent" />,
                  title: 'Advisor-Specific Nurture',
                  detail: 'Each prospect received pre-meeting content featuring their specific advisor — personalised videos, qualification details, and preparation materials to build rapport before the first meeting.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ns-accent/10 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-ns-heading mb-1">{item.title}</h4>
                    <p className="text-ns-body text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          THE EXECUTION — WEEK BY WEEK
      ═══════════════════════════════════════════════════════════════ */}
      <Section>
        <SectionHeading
          title="The Execution"
          subtitle="How we built momentum week by week to transform Meridian's growth trajectory."
        />

        <div className="max-w-4xl mx-auto">
          {[
            {
              weeks: 'Weeks 1–2',
              title: 'Discovery & Dual Funnel Build',
              description: 'In-depth sessions with Sarah and David to understand their team dynamics, specialisms, and growth targets. Built two complete campaign funnels — separate ad creative, landing pages, and setter scripts for each demographic. Configured team CRM with appointment routing rules.',
              highlight: 'Two complete funnels built in 10 days',
            },
            {
              weeks: 'Weeks 3–4',
              title: 'Launch & First Wins',
              description: 'Both campaigns launched simultaneously. The pension funnel produced 18 leads in the first fortnight; the protection funnel delivered 16. Our setter team booked 12 qualified appointments across the advisory team. The junior advisor had her first 3 client meetings — and converted all 3.',
              highlight: '34 leads, 12 appointments — junior\'s first wins',
            },
            {
              weeks: 'Weeks 5–8',
              title: 'Optimisation & Team Integration',
              description: 'Refined targeting based on early data — the pension campaign responded well to 57–65 age targeting, while the protection funnel performed best with 30–38 year olds. Show rate climbed to 94% after introducing advisor-specific video introductions. The junior advisor was now fully booked.',
              highlight: 'CPL dropped to £34 — 94% show rate achieved',
            },
            {
              weeks: 'Weeks 9–12',
              title: 'Scaling for Growth',
              description: 'With all three advisors at near-capacity, we helped Sarah and David model the economics for a fourth hire. Increased ad budget by 40% and expanded the geographic radius. By week 12, they had 22 new clients across the team and a clear business case for further expansion.',
              highlight: '22 clients — business case for 4th advisor approved',
            },
          ].map((phase, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="relative flex gap-6 md:gap-8 pb-12 last:pb-0">
                {i < 3 && (
                  <div className="absolute left-5 md:left-6 top-14 bottom-0 w-px bg-gradient-to-b from-ns-accent/40 to-ns-accent/10" />
                )}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-ns-accent/20 border-2 border-ns-accent flex items-center justify-center">
                    <span className="text-ns-accent font-heading font-bold text-sm">{i + 1}</span>
                  </div>
                </div>
                <div className="glass-card p-6 md:p-8 rounded-2xl flex-1">
                  <span className="text-ns-accent text-sm font-semibold uppercase tracking-wider">{phase.weeks}</span>
                  <h3 className="text-xl font-heading font-bold text-ns-heading mt-1 mb-3">{phase.title}</h3>
                  <p className="text-ns-body leading-relaxed mb-4">{phase.description}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#C9A84C]">
                    <CheckCircle size={16} />
                    {phase.highlight}
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          THE RESULTS
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-ns-card/30">
        <SectionHeading
          title="The Results"
          subtitle="From a stalled two-advisor practice to a thriving, growing firm."
        />

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {[
            { end: 22, suffix: '', label: 'New Clients in 90 Days', prefix: '' },
            { end: 34, suffix: '', label: 'Cost Per Lead', prefix: '£' },
            { end: 94, suffix: '%', label: 'Show Rate', prefix: '' },
            { end: 6, suffix: '', label: 'Advisors (from 2)', prefix: '' },
          ].map((stat, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="glass-card p-6 md:p-8 rounded-2xl text-center">
                <AnimatedCounter end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
                <p className="text-ns-body text-sm mt-2">{stat.label}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Growth story */}
        <FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6 md:p-8 rounded-2xl text-center">
              <p className="text-ns-body text-sm mb-2">Junior Advisor Progress</p>
              <p className="text-3xl md:text-4xl font-bold font-heading text-[#C9A84C]">0 → 34</p>
              <p className="text-ns-body text-sm mt-2">Clients in 6 months</p>
            </div>
            <div className="glass-card p-6 md:p-8 rounded-2xl text-center">
              <p className="text-ns-body text-sm mb-2">Team Growth</p>
              <p className="text-3xl md:text-4xl font-bold font-heading text-[#C9A84C]">+4</p>
              <p className="text-ns-body text-sm mt-2">Additional advisors hired over 8 months</p>
            </div>
            <div className="glass-card p-6 md:p-8 rounded-2xl text-center">
              <p className="text-ns-body text-sm mb-2">Revenue Growth</p>
              <p className="text-3xl md:text-4xl font-bold font-heading text-[#C9A84C]">£480K → £1.1M</p>
              <p className="text-ns-body text-sm mt-2">Annual revenue transformation</p>
            </div>
          </div>
        </FadeInSection>

        {/* Month-by-month table */}
        <FadeInSection>
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-heading font-bold text-ns-heading mb-6">Month-by-Month Breakdown</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-ns-accent/20">
                      <th className="text-left py-3 px-4 text-ns-body font-semibold">Period</th>
                      <th className="text-center py-3 px-4 text-ns-body font-semibold">Leads</th>
                      <th className="text-center py-3 px-4 text-ns-body font-semibold">Appointments</th>
                      <th className="text-center py-3 px-4 text-ns-body font-semibold">Clients Won</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyData.map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-ns-accent/10 ${i === monthlyData.length - 1 ? 'bg-ns-accent/5 font-bold' : ''}`}
                      >
                        <td className="py-3 px-4 text-ns-heading font-heading">{row.month}</td>
                        <td className="py-3 px-4 text-center text-ns-body">{row.leads}</td>
                        <td className="py-3 px-4 text-center text-ns-body">{row.appointments}</td>
                        <td className="py-3 px-4 text-center text-[#C9A84C] font-semibold">{row.clients}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </FadeInSection>

      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          CLIENT TESTIMONIAL
      ═══════════════════════════════════════════════════════════════ */}
      <Section>
        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 rounded-2xl text-center">
              <StarRating rating={5} />
              <blockquote className="text-lg md:text-xl text-ns-heading leading-relaxed mt-6 mb-8 italic">
                &ldquo;North Star didn't just get us clients — they gave us the confidence to
                grow. Before we started, we had a junior advisor sitting idle and a pipeline
                that was completely empty. Within 90 days, she had a full diary. Within 6 months,
                she had 34 clients of her own. That gave us the data and the courage to hire
                again — and again. We've now got 6 advisors, our revenue has more than doubled,
                and every single one of them has a pipeline. That's what North Star did for us.
                They didn't just solve a marketing problem — they unlocked our entire growth
                strategy.&rdquo;
              </blockquote>

              <div className="flex flex-col items-center gap-4">
                <img
                  src="/images/testimonials/sarah-chen.jpg"
                  alt="Sarah Chen"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold font-heading text-ns-heading text-lg">Sarah Chen</p>
                  <p className="text-ns-body text-sm">Co-founder — Meridian Financial Planning, Leeds</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          KEY TAKEAWAYS
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-ns-card/30">
        <SectionHeading
          title="Key Takeaways"
          subtitle="What Meridian's transformation teaches us about scaling a multi-advisor practice."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {takeaways.map((item, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="glass-card p-6 md:p-8 rounded-2xl h-full">
                <div className="w-12 h-12 rounded-xl bg-ns-accent/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-ns-heading mb-2">{item.title}</h3>
                <p className="text-ns-body text-sm leading-relaxed">{item.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════════ */}
      <CTASection
        headline="Ready to Scale Your Practice Like Sarah and David?"
        subtext="Book a free discovery call and let us show you how a predictable pipeline can fuel your growth — whether you have 1 advisor or 10."
        onNavigate={onNavigate}
      />
    </div>
  );
}

export default CaseStudy2;
