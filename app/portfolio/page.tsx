import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import SectionReveal from '@/components/animations/SectionReveal';
import CTA from '@/components/sections/CTA';
import { Image } from 'lucide-react';

const projects = [
  { title: 'Enterprise ERP System', category: 'Software Development' },
  { title: 'AI Chatbot Platform', category: 'AI Solutions' },
  { title: 'Mobile Banking App', category: 'Mobile Apps' },
  { title: 'E-commerce Platform', category: 'Web Development' },
  { title: 'Cloud Migration', category: 'Cloud Services' },
  { title: 'Healthcare Management', category: 'Enterprise Solutions' },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Portfolio"
        subtitle="Explore our successful projects and see how we've helped businesses transform through technology."
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <SectionReveal key={project.title} delay={index * 0.05}>
                <Card hoverable className="overflow-hidden p-0">
                  <div className="aspect-video bg-gradient-to-br from-browland-blue to-browland-light flex items-center justify-center">
                    <Image className="w-12 h-12 text-white/50" />
                  </div>
                  <div className="p-6">
                    <span className="text-browland-blue text-sm font-medium">{project.category}</span>
                    <h3 className="text-xl font-bold text-browland-dark mt-2">{project.title}</h3>
                  </div>
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
