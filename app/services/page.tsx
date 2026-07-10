import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import SectionReveal from '@/components/animations/SectionReveal';
import CTA from '@/components/sections/CTA';
import { services } from '@/lib/site-config';
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

const iconMap: Record<string, React.ReactNode> = {
  code: <Code className="w-10 h-10" />,
  building: <Building2 className="w-10 h-10" />,
  smartphone: <Smartphone className="w-10 h-10" />,
  globe: <Globe className="w-10 h-10" />,
  brain: <Brain className="w-10 h-10" />,
  'message-square': <MessageSquare className="w-10 h-10" />,
  cloud: <Cloud className="w-10 h-10" />,
  shield: <Shield className="w-10 h-10" />,
  'bar-chart': <BarChart3 className="w-10 h-10" />,
  'refresh-cw': <RefreshCw className="w-10 h-10" />,
  briefcase: <Briefcase className="w-10 h-10" />,
  settings: <Settings className="w-10 h-10" />,
  layout: <Layout className="w-10 h-10" />,
  link: <Link2 className="w-10 h-10" />,
  tool: <Wrench className="w-10 h-10" />,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive technology solutions designed to help your business thrive in the digital age."
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <SectionReveal key={service.title} delay={index * 0.05}>
                <Card hoverable className="h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-browland-blue to-browland-light rounded-2xl flex items-center justify-center text-white mb-6">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-xl font-bold text-browland-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-browland-gray">
                    {service.description}
                  </p>
                </Card>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
