import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import SectionReveal from '@/components/animations/SectionReveal';
import CTA from '@/components/sections/CTA';
import { aiSolutions } from '@/lib/site-config';
import { Brain } from 'lucide-react';

export default function AISolutionsPage() {
  return (
    <>
      <PageHeader
        title="AI Solutions"
        subtitle="Cutting-edge artificial intelligence solutions to automate processes and drive intelligent decision-making."
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiSolutions.map((solution, index) => (
              <SectionReveal key={solution} delay={index * 0.05}>
                <Card hoverable className="h-full text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-browland-blue to-browland-light rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    <Brain className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-browland-dark">
                    {solution}
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
