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
  CheckCircle,
  MapPin,
  Briefcase,
  Users,
  Target,
  MessageSquare,
  Shield,
  Award,
  Scale,
  FileCheck,
  Lock,
} from 'lucide-react';

function CaseStudy4({ onNavigate }) {
  const heroStats = [
    { value: 17, suffix: '', label: 'New Clients' },
    { value: 12, suffix: '', label: 'Weeks' },
    { value: 52, prefix: '£', suffix: '', label: 'Cost Per Lead' },
    { value: 96, suffix: '%', label: 'Show Rate' },
    { value: 0, suffix: '', label: 'Compliance Issues' },
  ];

  const monthlyData = [
    { month: 'Month 1', leads: 18, appointments: 7, clients: 4 },
    { month: 'Month 2', leads: 26, appointments: 11, clients: 7 },
    { month: 'Month 3', leads: 24, appointments: 10, clients: 6 },
    { month: 'Total', leads: 68, appointments: 28, clients: 17 },
  ];

  const takeaways = [
    {
      icon: <Shield size={24} className="text-ns-accent" />,
      title: 'Compliance Is a Competitive Advantage',
      description: 'Far from being a hindrance, Eleanor\'s insistence on full FCA compliance actually improved campaign performance. Prospects trusted the messaging precisely because it was measured, professional, and devoid of hype.',
    },
    {
      icon: <Award size={24} className="text-ns-accent" />,
      title: 'Chartered Status Commands Premium',
      description: 'Positioning around Eleanor\'s Chartered Financial Planner credentials and fiduciary duty attracted high-net-worth individuals willing to pay premium fees. The average investable assets of £340K per client validated this approach.',
    },
    {
      icon: <MessageSquare size={24} className="text-ns-accent" />,
      title: 'Longer Nurture for HNW Clients',
      description: 'The 7-touch, 10-day nurture sequence was longer than typical but essential for the HNW market. These prospects needed more time and more information before committing to a first meeting. The result was a 96% show rate.',
    },
    {
      icon: <Lock size={24} className="text-ns-accent" />,
      title: 'Fear Should Not Prevent Growth',
      description: 'Eleanor spent 20 years avoiding marketing out of fear. With the right partner who understands financial regulations, compliant growth is not only possible — it can be more effective than aggressive marketing.',
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
                    Chartered Financial Planner — Investment & Tax
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-ns-accent" />
                    Bristol
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={14} className="text-ns-accent" />
                    2 planners + 2 paraplanners + 1 admin
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-ns-heading leading-tight">
                  From FCA Fine Fears to{' '}
                  <span className="text-ns-accent">Fully Compliant Growth:</span>{' '}
                  17 Clients in 12 Weeks
                </h1>
                <p className="text-lg text-ns-body leading-relaxed">
                  How Eleanor Pemberton overcame two decades of marketing paralysis to build a
                  compliant, premium client acquisition system — attracting high-net-worth
                  individuals without compromising a single compliance standard.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <ImagePlaceholder
                description="Eleanor Pemberton — female, 50s, authoritative, elegant office"
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
                  Eleanor Pemberton is one of Bristol's most respected Chartered Financial
                  Planners. With over 25 years of experience specialising in investment
                  management and tax planning for high-net-worth individuals, her reputation
                  is impeccable. Her practice, Pemberton & Associates, manages tens of millions
                  in client assets.
                </p>
                <p>
                  Yet for 20 years, Eleanor had actively avoided all forms of marketing. The
                  reason? A deep, paralysing fear of FCA compliance consequences. She had
                  watched a competitor receive a £50,000 fine for misleading financial
                  promotions — advertisements that made implicit performance guarantees and
                  failed to include appropriate risk warnings. That experience terrified her
                  into inaction.
                </p>
                <p>
                  Instead, Eleanor relied entirely on referrals from solicitors and accountants.
                  For years, this worked beautifully. But the landscape was shifting. Several of
                  her key referral partners were retiring, and others had been acquired by larger
                  firms with their own in-house wealth management operations. Her pipeline was
                  shrinking by roughly 30% year on year.
                </p>
                <p>
                  Eleanor knew she needed to market. She had attended seminars, read articles,
                  and even consulted with two marketing agencies. Both experiences reinforced her
                  fears — neither agency understood FCA regulations, and both proposed advertising
                  approaches that would have been clearly non-compliant. She walked away more
                  convinced than ever that marketing was too risky.
                </p>
              </div>

              <div className="mt-8 glass-card p-6 rounded-2xl border-l-4 border-ns-accent">
                <p className="text-ns-heading italic leading-relaxed">
                  "I knew I needed to market, but I couldn't afford to get it wrong. I watched
                  a colleague receive a £50,000 fine for a Facebook ad that implied guaranteed
                  returns. That was all I needed to see. For 20 years, I did nothing — and my
                  pipeline paid the price."
                </p>
                <p className="text-ns-accent text-sm font-semibold mt-3">— Eleanor Pemberton</p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="space-y-4">
              {[
                'Avoided all marketing for 20 years due to FCA compliance fears',
                'Competitor fined £50K for misleading financial promotions',
                'Two previous agencies proposed non-compliant advertising',
                'Relied entirely on solicitor and accountant referrals',
                'Key referral partners retiring or being acquired',
                'Pipeline shrinking 30% year on year with no replacement source',
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
          subtitle="An ultra-conservative, compliance-first approach designed to attract high-net-worth individuals without a single regulatory risk."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeInSection>
            <div className="space-y-6">
              {[
                {
                  icon: <Shield size={20} className="text-ns-accent" />,
                  title: 'Compliance-First Campaign Design',
                  detail: 'Every piece of ad copy was reviewed against FCA COBS (Conduct of Business Sourcebook) rules before publication. No performance claims, no guaranteed returns, no misleading language. Eleanor personally reviewed and approved every word.',
                },
                {
                  icon: <Award size={20} className="text-ns-accent" />,
                  title: 'Chartered Credentials as Differentiator',
                  detail: 'Rather than competing on promises, we positioned Eleanor\'s Chartered Financial Planner status and fiduciary duty as the core differentiator. The messaging emphasised trust, independence, and professional credentials over returns.',
                },
                {
                  icon: <Target size={20} className="text-ns-accent" />,
                  title: 'HNW Targeting',
                  detail: 'High-net-worth individuals aged 50–70 with £250K+ in investable assets within 25 miles of Bristol. Targeting parameters used interest-based and behavioural indicators to reach the right demographic.',
                },
                {
                  icon: <FileCheck size={20} className="text-ns-accent" />,
                  title: 'Premium Landing Experience',
                  detail: 'A bespoke landing page that reflected Eleanor\'s brand — understated elegance, Chartered credentials prominently displayed, client testimonials, and a "Complimentary Financial Review" offer that felt premium, not promotional.',
                },
                {
                  icon: <MessageSquare size={20} className="text-ns-accent" />,
                  title: 'Extended 7-Touch Nurture',
                  detail: 'Recognising that HNW prospects require more trust-building, we designed a 7-touch nurture sequence over 10 days — including educational content on tax-efficient investing, a personal video from Eleanor, and a detailed "What to expect" guide.',
                },
                {
                  icon: <Scale size={20} className="text-ns-accent" />,
                  title: 'Full Compliance Audit Trail',
                  detail: 'Every ad, every landing page variation, every email and SMS — all documented with compliance rationale. Eleanor had a complete audit trail demonstrating her adherence to FCA financial promotion rules.',
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
              description="Premium, compliance-first campaign architecture — elegant design"
              className="w-full rounded-2xl"
              height="h-80 md:h-[560px]"
            />
          </FadeInSection>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          THE EXECUTION
      ═══════════════════════════════════════════════════════════════ */}
      <Section>
        <SectionHeading
          title="The Execution"
          subtitle="How a compliance-first approach actually improved conversion rates at every stage."
        />

        <div className="max-w-4xl mx-auto">
          {[
            {
              weeks: 'Weeks 1–3',
              title: 'Compliance-Led Build Phase',
              description: 'We invested an additional week in the build phase compared to our standard process. Every ad variation was drafted, reviewed by our compliance team, then reviewed by Eleanor and her compliance consultant. Three rounds of revisions ensured every word was impeccable. Landing page copy was similarly scrutinised. The result was a suite of materials Eleanor felt 100% confident putting her name to.',
              highlight: 'Full FCA compliance sign-off achieved',
            },
            {
              weeks: 'Weeks 4–5',
              title: 'Controlled Launch',
              description: 'Rather than launching aggressively, we started with a conservative budget to validate the approach. The first 18 leads arrived within the fortnight. Crucially, the quality was exceptional — the compliance-first messaging naturally filtered out less serious prospects. Our setters reported that leads were more engaged and better informed than typical campaigns.',
              highlight: '18 leads — premium quality validated',
            },
            {
              weeks: 'Weeks 6–9',
              title: 'Trust Compounds',
              description: 'As Eleanor\'s confidence grew, so did our investment. The extended nurture sequence was performing brilliantly — a 96% show rate, far above industry norms. Prospects were arriving to meetings having read Eleanor\'s educational content, watched her introduction video, and already feeling a sense of trust. Conversion rates were remarkably high for the HNW market.',
              highlight: '96% show rate — conversion rate double industry average',
            },
            {
              weeks: 'Weeks 10–12',
              title: 'Scaling with Confidence',
              description: 'By week 10, Eleanor was fully converted. She increased the budget herself, asking us to scale. In the final three weeks, the system delivered 6 more HNW clients, bringing the total to 17. More importantly, Eleanor had a waiting list for the first time in her career and made the decision to hire an additional Chartered Financial Planner.',
              highlight: '17 HNW clients — new planner hired',
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
          subtitle="Premium clients, zero compliance issues, and a practice transformed."
        />

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {[
            { end: 17, suffix: '', label: 'HNW Clients Won', prefix: '' },
            { end: 52, suffix: '', label: 'Cost Per Lead', prefix: '£' },
            { end: 96, suffix: '%', label: 'Show Rate', prefix: '' },
            { end: 0, suffix: '', label: 'Compliance Issues', prefix: '' },
          ].map((stat, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="glass-card p-6 md:p-8 rounded-2xl text-center">
                <AnimatedCounter end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
                <p className="text-ns-body text-sm mt-2">{stat.label}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Premium metrics */}
        <FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6 md:p-8 rounded-2xl text-center">
              <p className="text-ns-body text-sm mb-2">Average Investable Assets per Client</p>
              <p className="text-3xl md:text-4xl font-bold font-heading text-[#C9A84C]">£340K</p>
              <p className="text-ns-body text-sm mt-2">Per new client</p>
            </div>
            <div className="glass-card p-6 md:p-8 rounded-2xl text-center">
              <p className="text-ns-body text-sm mb-2">Practice Status</p>
              <p className="text-3xl md:text-4xl font-bold font-heading text-[#C9A84C]">2-Month</p>
              <p className="text-ns-body text-sm mt-2">Waiting list established</p>
            </div>
            <div className="glass-card p-6 md:p-8 rounded-2xl text-center">
              <p className="text-ns-body text-sm mb-2">Team Growth</p>
              <p className="text-3xl md:text-4xl font-bold font-heading text-[#C9A84C]">+1</p>
              <p className="text-ns-body text-sm mt-2">Additional Chartered Planner hired</p>
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
            <ImagePlaceholder
              description="Elegant results presentation — premium feel with compliance badge"
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
                &ldquo;For twenty years, I avoided marketing because I was terrified of getting
                it wrong. North Star showed me it was possible to grow compliantly. Every ad,
                every message — I reviewed them all, and they were impeccable. The quality of
                prospects has been extraordinary. These are exactly the kind of people I want
                to help: serious, affluent, and in need of proper financial planning. I'm now
                turning away business — something I never thought I'd say. The compliance-first
                approach didn't just protect me — it actually attracted better clients. People
                respond to professionalism and trust, not flashy promises. I only wish I'd had
                the courage to do this a decade ago.&rdquo;
              </blockquote>

              <div className="flex flex-col items-center gap-4">
                <ImagePlaceholder
                  description="Eleanor Pemberton circular headshot"
                  circle
                  height="h-20"
                  className="w-20"
                />
                <div>
                  <p className="font-bold font-heading text-ns-heading text-lg">Eleanor Pemberton</p>
                  <p className="text-ns-body text-sm">Principal — Pemberton & Associates, Bristol</p>
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
          subtitle="What Eleanor's story teaches us about compliant growth for Chartered Financial Planners."
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
        headline="Worried About Compliance? Let Us Show You It's Possible."
        subtext="Book a free discovery call and we'll walk you through our compliance-first approach to client acquisition — no risk, no obligation."
        onNavigate={onNavigate}
      />
    </div>
  );
}

export default CaseStudy4;
