import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import SectionReveal from '@/components/animations/SectionReveal';
import CTA from '@/components/sections/CTA';
import {
  RefreshCw,
  Target,
  Zap,
  Building2,
  Settings,
  Cloud,
  ShoppingCart,
  Brain
} from 'lucide-react';

const consultingServices = [
  { title: 'Digital Transformation', icon: <RefreshCw className="w-10 h-10" /> },
  { title: 'Technology Strategy', icon: <Target className="w-10 h-10" /> },
  { title: 'Startup Advisory', icon: <Zap className="w-10 h-10" /> },
  { title: 'Software Architecture', icon: <Building2 className="w-10 h-10" /> },
  { title: 'Business Process Automation', icon: <Settings className="w-10 h-10" /> },
  { title: 'IT Governance', icon: <Building2 className="w-10 h-10" /> },
  { title: 'Innovation Consulting', icon: <Zap className="w-10 h-10" /> },
  { title: 'Cloud Migration', icon: <Cloud className="w-10 h-10" /> },
  { title: 'Technology Procurement', icon: <ShoppingCart className="w-10 h-10" /> },
  { title: 'AI Adoption Strategy', icon: <Brain className="w-10 h-10" /> },
];

export default function ConsultingPage() {
  return (
    <>
      <PageHeader
        title="Technology Consulting"
        subtitle="Strategic technology consulting to help your business navigate the digital landscape and achieve your goals."
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <SectionReveal key={service.title} delay={index * 0.05}>
                <Card hoverable className="h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-browland-blue to-browland-light rounded-2xl flex items-center justify-center text-white mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-browland-dark">
                    {service.title}
                  </h3>
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
