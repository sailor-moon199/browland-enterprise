import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import CTA from '@/components/sections/CTA';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Browland Technologies"
        subtitle="Your trusted digital transformation partner helping organizations leverage technology to improve efficiency and accelerate growth."
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-browland-light-gray/30 rounded-3xl p-12">
              <h2 className="text-2xl font-bold text-browland-dark mb-6">Coming Soon</h2>
              <p className="text-browland-gray text-lg">
                This page is currently under development. Please check back soon for our complete About Us section.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
