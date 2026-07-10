'use client';
import React from 'react';
import { CheckCircle, Target, Zap, Heart, Award, Users } from 'lucide-react';
import SectionReveal from '@/components/animations/SectionReveal';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-browland-blue" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project we deliver.',
    },
    {
      icon: <Zap className="w-8 h-8 text-browland-gold" />,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies and creative solutions.',
    },
    {
      icon: <Heart className="w-8 h-8 text-browland-light" />,
      title: 'Integrity',
      description: 'Building trust through honesty and transparency.',
    },
    {
      icon: <Users className="w-8 h-8 text-browland-dark" />,
      title: 'Collaboration',
      description: 'Working together to achieve shared success.',
    },
  ];

  const whyChooseUs = [
    'Experienced team of 50+ professionals',
    'Proven track record with 500+ successful projects',
    'Custom solutions tailored to your needs',
    '24/7 dedicated support and maintenance',
    'Competitive pricing with flexible options',
    'Quality assurance and on-time delivery',
  ];

  return (
    <section className="py-24 bg-browland-light-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionReveal>
            <span className="text-browland-blue font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-browland-dark mt-4 mb-6">
              Your Trusted Digital Transformation Partner
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-browland-gray max-w-3xl mx-auto text-lg">
              We help organizations leverage software engineering, artificial intelligence, cloud computing, automation, and strategic technology consulting to improve efficiency and accelerate growth.
            </p>
          </SectionReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <SectionReveal>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-browland-blue to-browland-light flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Award className="w-20 h-20 mx-auto mb-4 opacity-50" />
                  <div className="text-6xl font-bold">10+</div>
                  <div className="text-xl opacity-80">Years of Excellence</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 bg-gradient-to-br from-browland-blue to-browland-light rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="font-bold text-browland-dark">50+ Experts</div>
                    <div className="text-sm text-browland-gray">Ready to help</div>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>

          <div className="space-y-8">
            <SectionReveal delay={0.1}>
              <h3 className="text-2xl font-bold text-browland-dark">
                Vision & Mission
              </h3>
            </SectionReveal>
            
            <SectionReveal delay={0.2}>
              <Card>
                <h4 className="font-bold text-browland-blue mb-2 text-lg">Our Vision</h4>
                <p className="text-browland-gray">
                  To be the leading technology partner driving digital innovation across Africa and beyond.
                </p>
              </Card>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <Card>
                <h4 className="font-bold text-browland-gold mb-2 text-lg">Our Mission</h4>
                <p className="text-browland-gray">
                  To empower businesses with intelligent technology solutions that drive growth, efficiency, and competitive advantage.
                </p>
              </Card>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <Link href="/about">
                <Button variant="outline">
                  Learn More About Us
                </Button>
              </Link>
            </SectionReveal>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <SectionReveal>
            <h3 className="text-2xl font-bold text-browland-dark text-center mb-12">
              Our Core Values
            </h3>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <SectionReveal key={value.title} delay={index * 0.1}>
                <Card hoverable>
                  <div className="mb-4">{value.icon}</div>
                  <h4 className="font-bold text-browland-dark mb-2 text-lg">{value.title}</h4>
                  <p className="text-browland-gray text-sm">{value.description}</p>
                </Card>
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-browland-blue to-browland-light rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Why Choose Browland Technologies?
              </h3>
              <p className="opacity-90 mb-8">
                We combine technical expertise, industry knowledge, and a commitment to excellence to deliver solutions that exceed expectations.
              </p>
              <Link href="/contact">
                <Button variant="gold">
                  Start Your Project
                </Button>
              </Link>
            </SectionReveal>

            <div className="space-y-4">
              {whyChooseUs.map((item, index) => (
                <SectionReveal key={item} delay={index * 0.1}>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-browland-gold flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
