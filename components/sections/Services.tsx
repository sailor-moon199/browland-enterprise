'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  Code,
  Building2,
  Smartphone,
  Globe,
  Brain,
  MessageSquare,
  Cloud,
  Shield,
  BarChart3,
  RefreshCw,
  Briefcase,
  Settings,
  Layout,
  Link2,
  Wrench
} from 'lucide-react';
import SectionReveal from '@/components/animations/SectionReveal';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { services } from '@/lib/site-config';

const iconMap: Record<string, React.ReactNode> = {
  code: <Code className="w-8 h-8" />,
  building: <Building2 className="w-8 h-8" />,
  smartphone: <Smartphone className="w-8 h-8" />,
  globe: <Globe className="w-8 h-8" />,
  brain: <Brain className="w-8 h-8" />,
  'message-square': <MessageSquare className="w-8 h-8" />,
  cloud: <Cloud className="w-8 h-8" />,
  shield: <Shield className="w-8 h-8" />,
  'bar-chart': <BarChart3 className="w-8 h-8" />,
  'refresh-cw': <RefreshCw className="w-8 h-8" />,
  briefcase: <Briefcase className="w-8 h-8" />,
  settings: <Settings className="w-8 h-8" />,
  layout: <Layout className="w-8 h-8" />,
  link: <Link2 className="w-8 h-8" />,
  tool: <Wrench className="w-8 h-8" />,
};

export default function Services() {
  const firstSix = services.slice(0, 6);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionReveal>
            <span className="text-browland-blue font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-browland-dark mt-4 mb-6">
              Comprehensive Technology Solutions
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-browland-gray max-w-3xl mx-auto text-lg">
              We offer a full range of technology services to help your business thrive in the digital age.
            </p>
          </SectionReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {firstSix.map((service, index) => (
            <SectionReveal key={service.title} delay={index * 0.1}>
              <Card hoverable className="group">
                <div className="w-14 h-14 bg-gradient-to-br from-browland-blue to-browland-light rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-xl font-bold text-browland-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-browland-gray mb-6">
                  {service.description}
                </p>
                <Link href="/services" className="inline-flex items-center gap-2 text-browland-blue font-medium group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.6}>
          <div className="text-center">
            <Link href="/services">
              <Button size="lg">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
