import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import SectionReveal from '@/components/animations/SectionReveal';
import Button from '@/components/ui/Button';
import CTA from '@/components/sections/CTA';
import { academyCourses } from '@/lib/site-config';
import { GraduationCap } from 'lucide-react';

export default function AcademyPage() {
  return (
    <>
      <PageHeader
        title="Training Academy"
        subtitle="Professional technology training programs designed to equip you with the skills needed for the digital future."
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {academyCourses.map((course, index) => (
              <SectionReveal key={course} delay={index * 0.05}>
                <Card hoverable className="h-full text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-browland-gold to-yellow-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-browland-dark">
                    {course}
                  </h3>
                </Card>
              </SectionReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg">
              View All Courses
            </Button>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
