import React, { useState } from 'react';
import { FadeInSection, Section, SectionHeading } from '../components/shared';
import {
  Mail, Phone, MapPin, Clock, Calendar, ChevronDown, Send, CheckCircle
} from 'lucide-react';

function ContactPage({ onNavigate }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    advisorType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@north-star-solutions.com', href: 'mailto:hello@north-star-solutions.com' },
    { icon: Phone, label: 'Phone', value: '+44 (0) 330 818 0291', href: 'tel:+443308180291' },
    { icon: MapPin, label: 'Office', value: 'Remote-first, UK-based', href: null },
    { icon: Clock, label: 'Response Time', value: 'We respond within 2 hours during business hours', href: null },
  ];

  const faqs = [
    {
      question: 'What happens on the discovery call?',
      answer: "It's a relaxed, no-pressure conversation. We'll ask about your practice, your ideal clients, and your growth goals. Then we'll explain exactly how our system works and what results you could expect. If it's a good fit, we'll outline next steps. If it's not, we'll tell you honestly.",
    },
    {
      question: 'Is there a minimum contract?',
      answer: "Our standard engagement is 90 days — that's the minimum time needed to build, launch, optimise, and deliver our guarantee of 10–20 new clients. After the initial period, we work on a rolling monthly basis. No long-term lock-ins.",
    },
    {
      question: 'Do you work with advisors outside the UK?',
      answer: 'Currently, we focus exclusively on the UK market. Our campaigns, compliance knowledge, and appointment setting are all built around UK financial services. We may expand internationally in the future.',
    },
    {
      question: 'How quickly can we get started?',
      answer: "From signing up to campaigns going live is typically 2 weeks. That includes strategy, ad creative, landing page build, setter training, and compliance review. We move quickly without cutting corners.",
    },
    {
      question: "What if I've been burned by agencies before?",
      answer: "We hear this a lot. Most agencies that work with financial advisors are generalists who don't understand the market. Our guarantee — 10–20 new clients in 90 days or we work for free — exists specifically because we're confident in our system. We have case studies, references, and real results to back it up.",
    },
  ];

  const advisorTypes = [
    'IFA',
    'Wealth Manager',
    'Mortgage Broker',
    'Financial Planner',
    'Pension Specialist',
    'Other',
  ];

  const discoveryPoints = [
    'Your current client acquisition methods',
    'Your ideal client profile',
    'Your capacity and growth goals',
    'How our system would work for your specific situation',
    'Expected results and timelines',
  ];

  return (
    <div>
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ns-accent/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeInSection>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-ns-heading">
                Let's Talk About Growing Your Practice
              </h1>
              <p className="text-lg md:text-xl text-ns-body max-w-3xl mx-auto leading-relaxed">
                Whether you're ready to get started or just want to understand how we work, we'd love to hear from you.
                No hard sell, no pressure — just a straightforward conversation about your goals.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ─── Contact Form & Info ───────────────────────────────────────── */}
      <Section id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Form */}
          <FadeInSection>
            <div className="glass-card p-6 md:p-8 rounded-2xl">
              <h2 className="text-2xl font-heading font-bold text-ns-heading mb-6">Get in Touch</h2>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-ns-accent/20 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-ns-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-ns-heading mb-2">Thank You!</h3>
                  <p className="text-ns-body leading-relaxed">
                    Thanks for getting in touch! We'll be in contact within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ns-heading mb-1.5">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-ns-heading placeholder-ns-body/50 focus:outline-none focus:border-ns-accent/50 focus:ring-1 focus:ring-ns-accent/50 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ns-heading mb-1.5">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-ns-heading placeholder-ns-body/50 focus:outline-none focus:border-ns-accent/50 focus:ring-1 focus:ring-ns-accent/50 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ns-heading mb-1.5">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-ns-heading placeholder-ns-body/50 focus:outline-none focus:border-ns-accent/50 focus:ring-1 focus:ring-ns-accent/50 transition-colors"
                      placeholder="+44 (0) 7700 000000"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-ns-heading mb-1.5">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-ns-heading placeholder-ns-body/50 focus:outline-none focus:border-ns-accent/50 focus:ring-1 focus:ring-ns-accent/50 transition-colors"
                      placeholder="Your practice name"
                    />
                  </div>
                  <div>
                    <label htmlFor="advisorType" className="block text-sm font-medium text-ns-heading mb-1.5">
                      What type of financial advisor are you?
                    </label>
                    <select
                      id="advisorType"
                      name="advisorType"
                      value={form.advisorType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-ns-heading focus:outline-none focus:border-ns-accent/50 focus:ring-1 focus:ring-ns-accent/50 transition-colors appearance-none"
                    >
                      <option value="" disabled>Select your specialism</option>
                      {advisorTypes.map((type) => (
                        <option key={type} value={type} className="bg-gray-900 text-white">{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ns-heading mb-1.5">
                      Tell us about your practice
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-ns-heading placeholder-ns-body/50 focus:outline-none focus:border-ns-accent/50 focus:ring-1 focus:ring-ns-accent/50 transition-colors resize-none"
                      placeholder="Tell us about your practice, your goals, and how we might help..."
                    />
                  </div>
                  <button type="submit" className="cta-button w-full flex items-center justify-center gap-2 py-3 rounded-xl text-lg">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </FadeInSection>

          {/* Right — Contact Info */}
          <FadeInSection delay={200}>
            <div className="space-y-4">
              <h2 className="text-2xl font-heading font-bold text-ns-heading mb-6">Contact Information</h2>
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <div className="glass-card p-5 rounded-2xl flex items-start gap-4 hover:border-ns-accent/30 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-ns-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-ns-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-ns-body mb-0.5">{item.label}</p>
                      <p className="text-ns-heading font-medium">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="block">{content}</a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </FadeInSection>
        </div>
      </Section>

      {/* ─── Book a Discovery Call ─────────────────────────────────────── */}
      <Section id="discovery-call" className="bg-ns-card/30">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ns-heading mb-4">
                Prefer to Jump Straight to a Call?
              </h2>
              <p className="text-lg text-ns-body leading-relaxed max-w-3xl mx-auto mb-6">
                Our discovery calls are free, no-obligation conversations where we learn about your practice and show you
                exactly how we'd help you grow. They typically last 20–30 minutes and cover:
              </p>
              <ul className="inline-block text-left space-y-2 mb-8">
                {discoveryPoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-ns-body">
                    <CheckCircle size={16} className="text-ns-accent flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <div>
                <button className="cta-button px-8 py-3.5 rounded-xl text-lg inline-flex items-center gap-2">
                  <Calendar size={20} />
                  Book Your Free Discovery Call
                </button>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="glass-card p-12 md:p-16 rounded-2xl flex flex-col items-center justify-center text-center">
              <Calendar size={48} className="text-ns-accent mb-4" />
              <p className="text-ns-body text-lg">
                Calendar booking widget will be embedded here — Calendly or Cal.com integration
              </p>
            </div>
          </FadeInSection>
        </div>
      </Section>

      {/* ─── FAQ Mini Section ──────────────────────────────────────────── */}
      <Section id="faq">
        <FadeInSection>
          <SectionHeading title="Frequently Asked Questions" />
        </FadeInSection>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FadeInSection key={index} delay={index * 75}>
              <div
                className="glass-card rounded-2xl overflow-hidden hover:border-ns-accent/30 transition-all duration-300 cursor-pointer"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="flex items-center justify-between p-5 md:p-6">
                  <h3 className="text-lg font-heading font-bold text-ns-heading pr-4">{faq.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-ns-accent flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {openFaq === index && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <p className="text-ns-body leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            </FadeInSection>
          ))}
        </div>
      </Section>

    </div>
  );
}

export default ContactPage;
