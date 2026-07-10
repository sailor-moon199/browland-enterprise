import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import SectionReveal from '@/components/animations/SectionReveal';
import Button from '@/components/ui/Button';
import CTA from '@/components/sections/CTA';
import { products } from '@/lib/site-config';
import { ArrowRight } from 'lucide-react';

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Software Products"
        subtitle="Premium software solutions designed to streamline your business operations and drive growth."
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <SectionReveal key={product.name} delay={index * 0.05}>
                <Card hoverable className="h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-browland-gold to-yellow-500 rounded-2xl flex items-center justify-center text-white mb-6">
                    <span className="text-2xl font-bold">{product.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-browland-dark mb-3">
                    {product.name}
                  </h3>
                  <p className="text-browland-gray mb-6">
                    {product.description}
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      Request Demo
                    </Button>
                    <Button size="sm" className="flex-1">
                      Learn More
                    </Button>
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
