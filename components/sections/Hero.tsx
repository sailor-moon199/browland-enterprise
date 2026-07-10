'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Cpu, Cloud, Shield, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionReveal from '@/components/animations/SectionReveal';
import { siteConfig } from '@/lib/site-config';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-browland-light/10 via-transparent to-browland-gold/5" />
      
      {/* Animated Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-browland-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-browland-gold/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(30, 64, 175, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 64, 175, 0.4) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-browland-blue/10 rounded-full border border-browland-blue/20">
                <Sparkles className="w-4 h-4 text-browland-gold" />
                <span className="text-sm font-medium text-browland-blue">
                  Premium Technology Solutions
                </span>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-browland-dark leading-tight">
                Transforming Businesses Through{' '}
                <span className="text-browland-blue">Technology</span>,{' '}
                <span className="text-browland-gold">AI</span> &{' '}
                <span className="text-browland-light">Innovation</span>
              </h1>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-lg text-browland-gray leading-relaxed max-w-xl">
                We develop enterprise software, AI-powered solutions, mobile apps, websites, cloud systems, and digital transformation strategies while providing professional technology training and consulting services.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Request a Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Explore Our Solutions
                  </Button>
                </Link>
              </div>
            </SectionReveal>

            {/* Stats */}
            <SectionReveal delay={0.4}>
              <div className="flex flex-wrap gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-browland-blue">500+</div>
                  <div className="text-sm text-browland-gray">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-browland-gold">150+</div>
                  <div className="text-sm text-browland-gray">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-browland-light">50+</div>
                  <div className="text-sm text-browland-gray">Expert Team</div>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Visual */}
          <SectionReveal direction="left" delay={0.2} className="relative">
            <div className="relative">
              {/* Main Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="bg-gradient-to-br from-browland-blue to-browland-light rounded-2xl p-6 text-white">
                        <Cpu className="w-8 h-8 mb-2" />
                        <div className="font-semibold">AI Solutions</div>
                      </div>
                      <div className="bg-gradient-to-br from-browland-gold to-yellow-500 rounded-2xl p-6 text-white">
                        <Cloud className="w-8 h-8 mb-2" />
                        <div className="font-semibold">Cloud Services</div>
                      </div>
                    </div>
                    <div className="space-y-4 pt-8">
                      <div className="bg-gradient-to-br from-browland-dark to-gray-700 rounded-2xl p-6 text-white">
                        <Shield className="w-8 h-8 mb-2" />
                        <div className="font-semibold">Cybersecurity</div>
                      </div>
                      <div className="bg-gradient-to-br from-browland-gray to-gray-500 rounded-2xl p-6 text-white">
                        <Zap className="w-8 h-8 mb-2" />
                        <div className="font-semibold">Automation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -left-8 top-1/4 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
                animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-browland-dark">24/7 Support</div>
                    <div className="text-xs text-browland-gray">Always available</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
                animate={{ x: [0, -10, 0], y: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-browland-gold fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm font-semibold text-browland-dark mt-1">Top Rated</div>
              </motion.div>
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-browland-gray/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-browland-blue rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
