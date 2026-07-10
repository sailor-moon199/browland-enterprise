'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Shield, Users, Cpu } from 'lucide-react';
import SectionReveal from '@/components/animations/SectionReveal';
import Button from '@/components/ui/Button';

export default function CTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-browland-blue via-browland-dark to-browland-dark p-8 md:p-12 lg:p-16">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-browland-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-browland-light/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <SectionReveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-8">
                  <Sparkles className="w-4 h-4 text-browland-gold" />
                  <span className="text-sm font-medium text-white">
                    Ready to Transform Your Business?
                  </span>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Let's Build Something Amazing Together
                </h2>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                  Whether you need custom software, AI solutions, or digital transformation consulting, our team is ready to help you achieve your goals.
                </p>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                  <Link href="/contact">
                    <Button variant="gold" size="lg" className="w-full sm:w-auto">
                      Request a Consultation
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-browland-dark">
                      Explore Our Services
                    </Button>
                  </Link>
                </div>
              </SectionReveal>

              {/* Stats */}
              <SectionReveal delay={0.4}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
                  <div>
                    <div className="text-3xl font-bold text-browland-gold">500+</div>
                    <div className="text-white/70 text-sm">Projects Done</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-browland-gold">150+</div>
                    <div className="text-white/70 text-sm">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-browland-gold">50+</div>
                    <div className="text-white/70 text-sm">Team Members</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-browland-gold">10+</div>
                    <div className="text-white/70 text-sm">Years Experience</div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
