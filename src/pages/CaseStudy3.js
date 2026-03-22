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
  Zap,
  MessageSquare,
  Home,
  AlertTriangle,
} from 'lucide-react';

function CaseStudy3({ onNavigate }) {
  const heroStats = [
    { value: 19, suffix: '', label: 'New Clients' },
    { value: 90, suffix: '', label: 'Days' },
    { value: 47, prefix: '£', suffix: '', label: 'Cost Per Lead' },
    { value: 89, suffix: '%', label: 'Show Rate' },
    { value: 2.1, prefix: '£', suffix: 'M', label: 'Mortgage Pipeline', decimals: 1 },
  ];

  const monthlyData = [
    { month: 'Month 1', leads: 28, appointments: 10, clients: 5 },
    { month: 'Month 2', leads: 42, appointments: 17, clients: 8 },
    { month: 'Month 3', leads: 38, appointments: 15, clients: 6 },
    { month: 'Total', leads: 108, appointments: 42, clients: 19 },
  ];

  const takeaways = [
    {
      icon: <AlertTriangle size={24} className="text-ns-accent" />,
      title: 'Never Depend on a Single Source',
      description: 'Tom\'s reliance on estate agent referrals left his business catastrophically vulnerable. A diversified acquisition strategy — combining paid media, organic content, and referral partnerships — creates resilience against market shocks.',
    },
    {
      icon: <Target size={24} className="text-ns-accent" />,
      title: 'Pre-Qualification Saves Time',
      description: 'By pre-qualifying leads for property timeline, deposit status, and income level, our setters ensured Tom\'s team only met with prospects who were genuinely in a position to proceed — eliminating wasted appointments.',
    },
    {
      icon: <Zap size={24} className="text-ns-accent" />,
      title: 'Speed Wins in Mortgages',
      description: 'Mortgage prospects are often shopping around. Contacting leads within 60 seconds — while they were still thinking about their enquiry — gave Greenwood a decisive advantage over slower competitors.',
    },
    {
      icon: <Home size={24} className="text-ns-accent" />,
      title: 'Dual Audience Maximises Volume',
      description: 'Running separate campaigns for first-time buyers and remortgage prospects doubled the addressable market. Each audience required different messaging — aspirational for FTBs and savings-focused for remortgagers.',
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
                    Mortgage Broker
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-ns-accent" />
                    Birmingham
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={14} className="text-ns-accent" />
                    3 brokers + 1 admin
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-ns-heading leading-tight">
                  <span className="text-ns-accent">£47 Per Lead:</span>{' '}
                  How a Mortgage Broker Built a £2M Pipeline in 90 Days
                </h1>
                <p className="text-lg text-ns-body leading-relaxed">
                  After losing 60% of his referral sources overnight, Tom Greenwood could have
                  panicked. Instead, he built a client acquisition system that now generates
                  more leads than estate agents ever did — and he owns every single one of them.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <img
                src="/images/12-greenwood-office.jpg"
                alt="Greenwood Mortgages office"
                className="w-full rounded-2xl h-72 md:h-96 object-cover"
              />
            </FadeInSection>
          </div>

          {/* Stats banner */}
          <FadeInSection delay={300}>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {heroStats.map((stat, i) => (
                <div key={i} className="glass-card p-5 rounded-2xl text-center">
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix || ''}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                  />
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
                  Tom Greenwood had spent seven years building Greenwood Mortgages & Protection
                  into one of Birmingham's most respected independent mortgage brokerages. With
                  three brokers and a steady stream of referrals from estate agents, the practice
                  was thriving. Then, in the space of three months, everything changed.
                </p>
                <p>
                  Three of Tom's key estate agent partners — representing roughly 60% of his
                  referral flow — switched to in-house mortgage brokers. The corporate estate
                  agency chains had decided to keep the mortgage commission in-house rather than
                  referring it out. Overnight, Tom's diary went from fully booked to alarmingly
                  empty.
                </p>
                <p>
                  He tried the aggregator platforms — Zoopla leads, Rightmove referrals, various
                  lead generation services. The costs were high, the quality was abysmal, and the
                  conversion rates were dismal. Most leads were either shopping around with no
                  urgency or had already spoken to three other brokers before Tom's team got to them.
                </p>
                <p>
                  Tom's reputation in Birmingham was excellent — his Google reviews were outstanding,
                  and existing clients loved him. But reputation alone wasn't filling the diary. He
                  was seriously considering making one of his brokers redundant to cut costs.
                </p>
              </div>

              <div className="mt-8 glass-card p-6 rounded-2xl border-l-4 border-ns-accent">
                <p className="text-ns-heading italic leading-relaxed">
                  "I went from a full diary to tumbleweed in the space of three months. Estate
                  agents I'd worked with for years just switched to in-house brokers without
                  warning. I needed a solution fast — or I was going to have to let someone go."
                </p>
                <p className="text-ns-accent text-sm font-semibold mt-3">— Tom Greenwood</p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="space-y-4">
              {[
                '3 key estate agent partners switched to in-house brokers',
                'Lost 60% of referral flow overnight',
                'Zoopla and Rightmove leads — expensive and poor quality',
                'Excellent reputation but no proactive outreach system',
                'Diary went from fully booked to nearly empty in 90 days',
                'Considering making a broker redundant to cut costs',
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
          subtitle="A dual-audience mortgage acquisition system built for speed, volume, and quality."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeInSection>
            <div className="space-y-6">
              {[
                {
                  icon: <Target size={20} className="text-ns-accent" />,
                  title: 'Dual Audience Targeting',
                  detail: 'Two distinct campaigns: first-time buyers aged 25–38 looking to get on the property ladder, and remortgage prospects within 20 miles of Birmingham looking to reduce their monthly payments or release equity.',
                },
                {
                  icon: <Zap size={20} className="text-ns-accent" />,
                  title: 'Compelling Lead Magnets',
                  detail: '"How much can you borrow?" for first-time buyers and "Are you overpaying your mortgage?" for remortgagers — simple, powerful hooks that addressed the core question on each audience\'s mind.',
                },
                {
                  icon: <Home size={20} className="text-ns-accent" />,
                  title: 'Free Mortgage Consultation',
                  detail: 'Both funnels led to a free, no-obligation mortgage consultation — positioned as a helpful review rather than a sales pitch. This framing dramatically improved conversion rates.',
                },
                {
                  icon: <Users size={20} className="text-ns-accent" />,
                  title: 'Pre-Qualification by Setters',
                  detail: 'Every lead was contacted within 60 seconds and pre-qualified for property timeline, deposit status (FTBs) or current mortgage details (remortgagers), and income level — ensuring brokers only met qualified prospects.',
                },
                {
                  icon: <MessageSquare size={20} className="text-ns-accent" />,
                  title: 'Document Prep Sequence',
                  detail: 'Pre-meeting nurture included a "What to bring to your appointment" checklist — payslips, bank statements, ID. Prospects arrived prepared, cutting meeting times by 30% and improving the client experience.',
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

          <FadeInSection delay={200}>
            <img
              src="/images/20-modern-office.jpg"
              alt="Campaign operations centre"
              className="w-full rounded-2xl h-80 md:h-[500px] object-cover"
            />
          </FadeInSection>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          THE EXECUTION — WEEK BY WEEK
      ═══════════════════════════════════════════════════════════════ */}
      <Section>
        <SectionHeading
          title="The Execution"
          subtitle="From crisis to a fully rebuilt pipeline in 12 weeks."
        />

        <div className="max-w-4xl mx-auto">
          {[
            {
              weeks: 'Weeks 1–2',
              title: 'Rapid Build & Launch Prep',
              description: 'Given the urgency of Tom\'s situation, we accelerated the onboarding process. Discovery session, competitor analysis, ad creative production, landing page builds, and setter training all completed in under two weeks. Tom needed leads fast — and we delivered.',
              highlight: 'Accelerated build — ready in 9 days',
            },
            {
              weeks: 'Weeks 3–4',
              title: 'Campaigns Live & Leads Flowing',
              description: 'Both campaigns launched. The first-time buyer campaign resonated immediately — 16 leads in the first week alone. The remortgage campaign took slightly longer to gain traction but was producing consistent leads by week 4. Total: 28 leads, 10 appointments, 5 clients.',
              highlight: '28 leads in fortnight — 5 clients converted',
            },
            {
              weeks: 'Weeks 5–8',
              title: 'Optimisation & Volume Growth',
              description: 'Refined targeting to focus on specific Birmingham postcodes with higher property values. Introduced a "Document preparation" email that dramatically improved appointment quality. Brokers reported that prospects were arriving with all documents ready. 42 leads, 17 appointments, 8 more clients.',
              highlight: '42 leads — document-ready prospects',
            },
            {
              weeks: 'Weeks 9–12',
              title: 'Full Pipeline Rebuilt',
              description: 'By week 9, all three brokers had full diaries. We maintained a consistent 8–10 new enquiries per week — more than the estate agent referrals had ever provided. Tom added 6 more clients and began building a waitlist for the first time since losing his referral sources.',
              highlight: '19 total clients — pipeline fully rebuilt',
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
          subtitle="From crisis to a £2.1 million mortgage pipeline in 90 days."
        />

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {[
            { end: 19, suffix: '', label: 'New Clients Won', prefix: '' },
            { end: 47, suffix: '', label: 'Cost Per Lead', prefix: '£' },
            { end: 89, suffix: '%', label: 'Show Rate', prefix: '' },
            { end: 2.1, suffix: 'M', label: 'Mortgage Pipeline', prefix: '£', decimals: 1 },
          ].map((stat, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="glass-card p-6 md:p-8 rounded-2xl text-center">
                <AnimatedCounter end={stat.end} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals || 0} />
                <p className="text-ns-body text-sm mt-2">{stat.label}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Financial breakdown */}
        <FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6 md:p-8 rounded-2xl text-center">
              <p className="text-ns-body text-sm mb-2">Average Commission per Client</p>
              <p className="text-3xl md:text-4xl font-bold font-heading text-[#C9A84C]">£1,800</p>
              <p className="text-ns-body text-sm mt-2">Per completed mortgage</p>
            </div>
            <div className="glass-card p-6 md:p-8 rounded-2xl text-center">
              <p className="text-ns-body text-sm mb-2">Total Commission from North Star Leads</p>
              <p className="text-3xl md:text-4xl font-bold font-heading text-[#C9A84C]">£34,200</p>
              <p className="text-ns-body text-sm mt-2">In first 90 days alone</p>
            </div>
            <div className="glass-card p-6 md:p-8 rounded-2xl text-center">
              <p className="text-ns-body text-sm mb-2">Weekly Enquiry Volume</p>
              <p className="text-3xl md:text-4xl font-bold font-heading text-[#C9A84C]">8–10</p>
              <p className="text-ns-body text-sm mt-2">Consistent new enquiries per week</p>
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

        <FadeInSection delay={200}>
          <div className="mt-12 flex justify-center">
            <img
              src="/images/17-analytics-overview.jpg"
              alt="Results dashboard showing leads, appointments, and pipeline"
              className="w-full max-w-3xl rounded-2xl h-48 md:h-64 object-cover"
            />
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
                &ldquo;When I lost those estate agent referrals, I genuinely thought it might
                be the beginning of the end for the business. North Star turned it into the
                best thing that ever happened to us. We now have our own lead generation system
                that nobody can take away from us. No more depending on estate agents, no more
                hoping for referrals. We get 8–10 new enquiries every single week, and the
                quality is better than anything we ever got from agents. I went from considering
                redundancies to having a waiting list. The ROI is ridiculous — for every pound
                we spend, we make back about seven in commission. I just wish this had been
                available five years ago.&rdquo;
              </blockquote>

              <div className="flex flex-col items-center gap-4">
                <img
                  src="/images/testimonials/tom-greenwood.jpg"
                  alt="Tom Greenwood"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold font-heading text-ns-heading text-lg">Tom Greenwood</p>
                  <p className="text-ns-body text-sm">Managing Director — Greenwood Mortgages & Protection, Birmingham</p>
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
          subtitle="What Tom's story teaches us about building resilient mortgage businesses."
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
        headline="Ready to Build a Pipeline You Own?"
        subtext="Book a free discovery call and let us show you how to stop depending on referrals and start generating your own clients — consistently."
        onNavigate={onNavigate}
      />
    </div>
  );
}

export default CaseStudy3;
