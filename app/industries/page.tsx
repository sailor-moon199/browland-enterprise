import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import SectionReveal from '@/components/animations/SectionReveal';
import CTA from '@/components/sections/CTA';
import { industries } from '@/lib/site-config';
import { Building2 } from 'lucide-react';

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        title="Industries We Serve"
        subtitle="Industry-specific technology solutions tailored to the unique needs of your sector."
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <SectionReveal key={industry} delay={index * 0.05}>
                <Card hoverable className="h-full text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-browland-light to-browland-blue rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-browland-dark">
                    {industry}
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
