import React from 'react';
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
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  MapPin,
  Briefcase,
  Users,
  Target,
  TrendingUp,
  PoundSterling,
  BarChart3,
  Zap,
  MessageSquare,
  Shield,
} from 'lucide-react';

function CaseStudy1({ onNavigate }) {
  const heroStats = [
    { value: 14, suffix: '', label: 'New Clients' },
    { value: 87, suffix: '', label: 'Days' },
    { value: 39, prefix: '£', suffix: '', label: 'Cost Per Lead' },
    { value: 91, suffix: '%', label: 'Show Rate' },
    { value: 168, prefix: '£', suffix: 'K+', label: 'Recurring Revenue' },
  ];

  const monthlyData = [
    { month: 'Month 1', leads: 23, appointments: 8, clients: 3 },
    { month: 'Month 2', leads: 41, appointments: 16, clients: 6 },
    { month: 'Month 3', leads: 38, appointments: 14, clients: 5 },
    { month: 'Total', leads: 102, appointments: 38, clients: 14 },
  ];

  const takeaways = [
    {
      icon: <Target size={24} className="text-ns-accent" />,
      title: 'Specificity Wins',
      description: 'Targeting pre-retirees aged 55–67 with £100K+ pensions within 30 miles of Manchester produced far higher quality leads than any broad campaign ever could.',
    },
    {
      icon: <Clock size={24} className="text-ns-accent" />,
      title: 'Speed of Contact Matters',
      description: 'Contacting leads within 60 seconds of enquiry resulted in a 78% contact rate — more than triple the industry average of 25%.',
    },
    {
      icon: <MessageSquare size={24} className="text-ns-accent" />,
      title: 'Nurture Drives Show Rates',
      description: 'The 5-touch pre-meeting nurture sequence — combining email, SMS, and a personal video from James — pushed show rates from 85% to 91%.',
    },
    {
      icon: <Shield size={24} className="text-ns-accent" />,
      title: 'Compliance Builds Trust',
      description: 'FCA-compliant ad copy that avoided hype and focused on education actually outperformed aggressive messaging by 2.3x on click-through rate.',
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
                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-ns-body">
                  <span className="flex items-center gap-1">
                    <Briefcase size={14} className="text-ns-accent" />
                    IFA — Retirement & Pension Specialist
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-ns-accent" />
                    Manchester
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={14} className="text-ns-accent" />
                    Solo practitioner + 1 admin
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-ns-heading leading-tight">
                  From Referral-Only to{' '}
                  <span className="text-ns-accent">14 New Clients</span>{' '}
                  in 87 Days
                </h1>
                <p className="text-lg text-ns-body leading-relaxed">
                  How James Hartley transformed his retirement and pension practice from
                  hoping for referrals to running a predictable, scalable client acquisition
                  system — and added £168,000 in annual recurring revenue in the process.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <ImagePlaceholder
                description="Professional headshot of James Hartley — male, 40s, suit, friendly"
                className="w-full rounded-2xl"
                height="h-72 md:h-96"
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
                  James Hartley had been a successful IFA for 12 years, specialising in retirement
                  planning and pension advice. His practice was built entirely on referrals — word
                  of mouth from satisfied clients, introductions from accountants, and the occasional
                  recommendation from a solicitor.
                </p>
                <p>
                  But by 2024, the referrals had slowed to a trickle. James was seeing just 2–3
                  new clients per quarter — barely enough to maintain the practice, let alone grow
                  it. The pipeline was unpredictable, and the anxiety of not knowing where the next
                  client would come from was taking its toll.
                </p>
                <p>
                  He had tried Google Ads once before, spending £3,000 over three months. The result?
                  Two leads, neither of whom converted. The experience left him deeply sceptical of
                  digital marketing.
                </p>
                <p>
                  James was seriously considering joining St. James's Place for their lead flow and
                  brand recognition, but he didn't want to lose the independence he had spent over a
                  decade building. He had no marketing system, no CRM, and no structured follow-up
                  process. His entire growth strategy was "do good work and hope people tell their
                  friends."
                </p>
              </div>

              {/* Client quote */}
              <div className="mt-8 glass-card p-6 rounded-2xl border-l-4 border-ns-accent">
                <p className="text-ns-heading italic leading-relaxed">
                  "I'm great in front of clients, but I have no idea how to find them consistently.
                  I've been doing this for 12 years and my pipeline has never been more uncertain
                  than it is right now."
                </p>
                <p className="text-ns-accent text-sm font-semibold mt-3">— James Hartley</p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="space-y-4">
              {[
                'Referrals slowing — only 2–3 new clients per quarter',
                'Spent £3,000 on Google Ads with zero return',
                'No CRM, no follow-up process, no marketing system',
                'Considering joining SJP — risking his independence',
                'Deep scepticism of marketing agencies after being burned',
                'Pipeline entirely dependent on goodwill of others',
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
          subtitle="A bespoke acquisition system built around James's ideal client profile and practice specialisms."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeInSection>
            <div className="space-y-6">
              {[
                {
                  icon: <Target size={20} className="text-ns-accent" />,
                  title: 'Ideal Client Targeting',
                  detail: 'Pre-retirees aged 55–67 within 30 miles of Manchester with £100K+ in pensions. Laser-focused on people actively thinking about their retirement options.',
                },
                {
                  icon: <Shield size={20} className="text-ns-accent" />,
                  title: 'Compliant Meta Ad Campaigns',
                  detail: 'FCA-conscious ad creative focusing on pension review and retirement planning education. No misleading claims, no performance promises — just genuine value.',
                },
                {
                  icon: <Zap size={20} className="text-ns-accent" />,
                  title: 'Dedicated Landing Page',
                  detail: 'A bespoke, high-converting landing page offering a free "Pension Health Check" — a compelling, compliant offer that attracted serious prospects.',
                },
                {
                  icon: <Users size={20} className="text-ns-accent" />,
                  title: 'Appointment Setting Team',
                  detail: 'Our trained setters used FA-specific scripts to contact every lead within 60 seconds, qualify them against James\'s criteria, and book meetings directly into his diary.',
                },
                {
                  icon: <MessageSquare size={20} className="text-ns-accent" />,
                  title: '5-Touch Nurture Sequence',
                  detail: 'Every booked prospect received 5 pre-meeting touches — email confirmation, SMS reminder, educational content, a personal video from James, and a final reminder — ensuring they arrived informed and ready.',
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
            <ImagePlaceholder
              description="Strategy document mockup or campaign architecture diagram"
              className="w-full rounded-2xl"
              height="h-80 md:h-[500px]"
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
          subtitle="A week-by-week breakdown of how we took James from zero to 14 new clients."
        />

        <div className="max-w-4xl mx-auto">
          {[
            {
              weeks: 'Weeks 1–2',
              title: 'Onboarding & Build',
              description: 'Deep-dive discovery session with James to map his ideal client, specialisms, and capacity. Built bespoke ad creative, landing page, and setter scripts. Compliance review of all materials. CRM setup and calendar integration.',
              highlight: 'Foundation laid in just 10 working days',
            },
            {
              weeks: 'Weeks 3–4',
              title: 'Campaign Launch & First Results',
              description: 'Meta campaigns went live targeting pre-retirees within 30 miles of Manchester. First leads arrived within 48 hours. Our setter team began contacting prospects immediately. By the end of week 4, James had 23 leads, 8 booked appointments, and his first 3 new clients.',
              highlight: '23 leads, 8 appointments, 3 clients',
            },
            {
              weeks: 'Weeks 5–8',
              title: 'Optimisation & Improvement',
              description: 'Data-driven refinement phase. We split-tested ad creative, refined audience targeting, and optimised the landing page. Cost per lead dropped from £52 to £39. Show rate improved from 85% to 91% as we perfected the nurture sequence. James converted 6 more clients during this period.',
              highlight: 'CPL reduced 25% — show rate up to 91%',
            },
            {
              weeks: 'Weeks 9–12',
              title: 'Scaling & Consistency',
              description: 'With a proven, optimised system in place, we increased the ad budget and expanded targeting. James was consistently seeing 4–5 new clients per month. He converted 5 more clients, bringing the total to 14. By week 12, he had a waiting list for the first time in his career.',
              highlight: '14 total clients — waiting list established',
            },
          ].map((phase, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="relative flex gap-6 md:gap-8 pb-12 last:pb-0">
                {/* Connector line */}
                {i < 3 && (
                  <div className="absolute left-5 md:left-6 top-14 bottom-0 w-px bg-gradient-to-b from-ns-accent/40 to-ns-accent/10" />
                )}
                {/* Step indicator */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-ns-accent/20 border-2 border-ns-accent flex items-center justify-center">
                    <span className="text-ns-accent font-heading font-bold text-sm">{i + 1}</span>
                  </div>
                </div>
                {/* Content */}
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

        <FadeInSection delay={400}>
          <div className="mt-12 flex justify-center">
            <ImagePlaceholder
              description="Timeline graphic showing 12-week progression"
              className="w-full max-w-3xl rounded-2xl"
              height="h-48 md:h-64"
            />
          </div>
        </FadeInSection>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          THE RESULTS
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-ns-card/30">
        <SectionHeading
          title="The Results"
          subtitle="The numbers that transformed James's practice — and his confidence."
        />

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {[
            { end: 14, suffix: '', label: 'New Clients Won', prefix: '' },
            { end: 87, suffix: '', label: 'Days to Deliver', prefix: '' },
            { end: 39, suffix: '', label: 'Cost Per Lead', prefix: '£' },
            { end: 91, suffix: '%', label: 'Show Rate', prefix: '' },
          ].map((stat, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="glass-card p-6 md:p-8 rounded-2xl text-center">
                <AnimatedCounter end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
                <p className="text-ns-body text-sm mt-2">{stat.label}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Revenue impact */}
        <FadeInSection>
          <div className="glass-card p-6 md:p-8 rounded-2xl mb-12 text-center">
            <h3 className="text-xl font-heading font-bold text-ns-heading mb-2">Revenue Impact</h3>
            <p className="text-ns-body mb-4">14 new clients × £12,000 average annual recurring revenue</p>
            <p className="text-4xl md:text-5xl font-bold font-heading text-[#C9A84C]">£168,000+</p>
            <p className="text-ns-body text-sm mt-2">Annual recurring revenue added</p>
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
            <ImagePlaceholder
              description="Results chart — bar graph showing monthly leads, appointments, and clients"
              className="w-full max-w-3xl rounded-2xl"
              height="h-48 md:h-64"
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
                &ldquo;I was sceptical — I'd been burned by a marketing agency before. But within 3
                weeks I had qualified meetings in my diary with exactly the type of people I want to
                help. These aren't tyre-kickers, they're serious people with real money who need
                advice. North Star has completely changed my business. I've gone from hoping the
                phone rings to having to manage a waiting list. I only wish I'd found them sooner.&rdquo;
              </blockquote>

              <div className="flex flex-col items-center gap-4">
                <ImagePlaceholder
                  description="James Hartley circular headshot"
                  circle
                  height="h-20"
                  className="w-20"
                />
                <div>
                  <p className="font-bold font-heading text-ns-heading text-lg">James Hartley</p>
                  <p className="text-ns-body text-sm">Director — Hartley Wealth Management, Manchester</p>
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
          subtitle="What James's case study teaches us about client acquisition for IFAs."
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
        headline="Want Results Like James?"
        subtext="Book a free discovery call and let us show you how we'd build a predictable client acquisition system for your practice."
        onNavigate={onNavigate}
      />
    </div>
  );
}

export default CaseStudy1;
