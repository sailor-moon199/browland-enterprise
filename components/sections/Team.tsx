'use client';

import React from 'react';
import Image from 'next/image';
import SectionReveal from '../animations/SectionReveal';
import Card from '../ui/Card';

const teamMembers = [
  {
    name: 'Charles O. Shittu',
    role: 'Managing Partner',
    image: '/browland-assets/staff/Charles O. Shittu - managing partner.JPG',
  },
  {
    name: 'Israel Okeke',
    role: 'Lead Financial Systems Consultant',
    image: '/browland-assets/staff/Israel Okeke - Lead financial systems consultant.JPG',
  },
  {
    name: 'Theodora Francis',
    role: 'Head Corporate Communications',
    image: '/browland-assets/staff/Theodora Francis - head corporate communications.JPG',
  },
  {
    name: 'Adewole O. Adeyemi',
    role: 'Senior Consultant',
    image: '/browland-assets/staff/Adewole O. Adeyemi.JPG',
  },
  {
    name: 'Levi Matthew',
    role: 'Software Engineer',
    image: '/browland-assets/staff/Levi Matthew.JPG',
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-browland-light-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionReveal>
            <span className="text-browland-blue font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-browland-dark mt-4 mb-6">
              Meet the Browland Team
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="text-browland-gray max-w-3xl mx-auto text-lg">
              Dedicated professionals committed to delivering excellence in technology solutions.
            </p>
          </SectionReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <SectionReveal key={member.name} delay={index * 0.1}>
              <Card hoverable className="group h-full overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-xl bg-gradient-to-br from-browland-blue/10 to-browland-gold/10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-browland-dark mb-1">
                    {member.name}
                  </h3>
                  <p className="text-browland-gray font-medium">
                    {member.role}
                  </p>
                </div>
              </Card>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
