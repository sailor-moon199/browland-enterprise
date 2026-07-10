import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import SectionReveal from '@/components/animations/SectionReveal';
import Button from '@/components/ui/Button';
import CTA from '@/components/sections/CTA';
import { MapPin, Clock, Briefcase } from 'lucide-react';

const openPositions = [
  {
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Abuja, Nigeria (Remote)',
    type: 'Full-time',
    description: 'Join our engineering team to build cutting-edge technology solutions.'
  },
  {
    title: 'AI/ML Engineer',
    department: 'AI & Data Science',
    location: 'Abuja, Nigeria',
    type: 'Full-time',
    description: 'Help us develop innovative AI and machine learning solutions for our clients.'
  },
  {
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create beautiful and intuitive user experiences for our products.'
  },
  {
    title: 'Project Manager',
    department: 'Management',
    location: 'Abuja, Nigeria',
    type: 'Full-time',
    description: 'Lead and deliver complex technology projects for our clients.'
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        title="Careers"
        subtitle="Join our team of talented professionals and help us shape the future of technology in Africa."
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <SectionReveal key={position.title} delay={index * 0.1}>
                <Card hoverable>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-browland-dark mb-2">{position.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-browland-gray text-sm mb-3">
                        <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {position.department}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {position.location}</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {position.type}</span>
                      </div>
                      <p className="text-browland-gray">{position.description}</p>
                    </div>
                    <Button>Apply Now</Button>
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
