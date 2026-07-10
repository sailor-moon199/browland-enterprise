import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import SectionReveal from '@/components/animations/SectionReveal';
import CTA from '@/components/sections/CTA';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'The Future of AI in Business: What You Need to Know',
    excerpt: 'Exploring how artificial intelligence is transforming businesses across industries.',
    date: 'Jan 15, 2025',
    author: 'John Doe',
    category: 'AI Solutions'
  },
  {
    title: 'Cloud Migration Best Practices for Enterprise',
    excerpt: 'A comprehensive guide to successfully migrating your business to the cloud.',
    date: 'Jan 10, 2025',
    author: 'Jane Smith',
    category: 'Cloud Computing'
  },
  {
    title: 'Cybersecurity Trends to Watch in 2025',
    excerpt: 'Stay ahead of emerging threats with these key cybersecurity insights.',
    date: 'Jan 5, 2025',
    author: 'Mike Johnson',
    category: 'Cybersecurity'
  },
];

const categories = [
  'Artificial Intelligence',
  'Business Technology',
  'Software Development',
  'Cybersecurity',
  'Cloud Computing',
  'Digital Transformation',
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Insights, trends, and expert perspectives on technology and digital transformation."
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {blogPosts.map((post, index) => (
                  <SectionReveal key={post.title} delay={index * 0.1}>
                    <Card hoverable>
                      <div className="aspect-video bg-gradient-to-br from-browland-blue to-browland-light rounded-xl mb-6" />
                      <span className="text-browland-blue text-sm font-medium">{post.category}</span>
                      <h3 className="text-2xl font-bold text-browland-dark mt-2 mb-3">{post.title}</h3>
                      <p className="text-browland-gray mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-browland-gray mb-4">
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                        <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
                      </div>
                      <Link href="#" className="inline-flex items-center gap-2 text-browland-blue font-medium hover:gap-3 transition-all">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Card>
                  </SectionReveal>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <h3 className="text-xl font-bold text-browland-dark mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button key={category} className="w-full text-left text-browland-gray hover:text-browland-blue transition-colors">
                      {category}
                    </button>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
