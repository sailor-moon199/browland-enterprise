import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import SectionReveal from '@/components/animations/SectionReveal';
import CTA from '@/components/sections/CTA';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type CaseStudyMetric = {
  label: string;
  value: string;
};

type CaseStudy = {
  title: string;
  description: string;
  highlight: CaseStudyMetric;
  metrics: CaseStudyMetric[];
};

const caseStudies: CaseStudy[] = [
  {
    title: 'Financial Institution Digital Transformation',
    description: 'How we helped a major bank modernize their infrastructure and improve customer experience.',
    highlight: { label: 'Efficiency', value: '+45%' },
    metrics: [
      { label: 'Efficiency', value: '+45%' },
      { label: 'Revenue', value: '+30%' },
      { label: 'Satisfaction', value: '+60%' },
    ]
  },
  {
    title: 'Healthcare Patient Management System',
    description: 'Transforming patient care with a comprehensive healthcare management solution.',
    highlight: { label: 'Wait Time', value: '-50%' },
    metrics: [
      { label: 'Wait Time', value: '-50%' },
      { label: 'Errors', value: '-70%' },
      { label: 'Satisfaction', value: '+55%' },
    ]
  },
  {
    title: 'Retail E-commerce Platform',
    description: 'Building a scalable e-commerce solution that drove significant revenue growth.',
    highlight: { label: 'Conversion', value: '+40%' },
    metrics: [
      { label: 'Conversion', value: '+40%' },
      { label: 'Traffic', value: '+80%' },
      { label: 'Revenue', value: '+120%' },
    ]
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        title="Case Studies"
        subtitle="Real-world examples of how our solutions have helped businesses achieve measurable results."
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <SectionReveal key={study.title} delay={index * 0.1}>
                <Card hoverable className="h-full">
                  <div className="aspect-video bg-gradient-to-br from-browland-gold to-yellow-500 rounded-xl mb-6 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold">{study.highlight.value}</div>
                      <div className="text-sm opacity-80">{study.highlight.label}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-browland-dark mb-3">{study.title}</h3>
                  <p className="text-browland-gray mb-6">{study.description}</p>
                  <div className="mb-6 grid grid-cols-3 gap-2 text-center">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-lg bg-browland-light-gray/60 px-3 py-3">
                        <div className="text-sm font-semibold text-browland-dark">{metric.value}</div>
                        <div className="text-xs text-browland-gray">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link href="#" className="inline-flex items-center gap-2 text-browland-blue font-medium hover:gap-3 transition-all">
                    Read Full Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
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
