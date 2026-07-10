'use client';
import React from 'react';
import SectionReveal from '@/components/animations/SectionReveal';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-browland-blue/5 to-browland-gold/5">
      <div className="container mx-auto px-4 text-center">
        <SectionReveal>
          <h1 className="text-4xl md:text-5xl font-bold text-browland-dark mb-6">
            {title}
          </h1>
        </SectionReveal>
        {subtitle && (
          <SectionReveal delay={0.1}>
            <p className="text-xl text-browland-gray max-w-3xl mx-auto">
              {subtitle}
            </p>
          </SectionReveal>
        )}
        {children}
      </div>
    </section>
  );
}
