import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import SectionReveal from '@/components/animations/SectionReveal';
import { MapPin, Phone, Mail, MessageSquare, Globe } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team. We're here to help with all your technology needs."
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <SectionReveal>
              <Card className="h-full">
                <h2 className="text-2xl font-bold text-browland-dark mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-browland-dark mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-browland-blue focus:ring-2 focus:ring-browland-blue/20 outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-browland-dark mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-browland-blue focus:ring-2 focus:ring-browland-blue/20 outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-browland-dark mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-browland-blue focus:ring-2 focus:ring-browland-blue/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-browland-dark mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-browland-blue focus:ring-2 focus:ring-browland-blue/20 outline-none transition-all"
                      placeholder="+234 xxx xxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-browland-dark mb-2">Subject</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-browland-blue focus:ring-2 focus:ring-browland-blue/20 outline-none transition-all">
                      <option>Select a subject</option>
                      <option>General Inquiry</option>
                      <option>Software Development</option>
                      <option>AI Solutions</option>
                      <option>Training</option>
                      <option>Consulting</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-browland-dark mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-browland-blue focus:ring-2 focus:ring-browland-blue/20 outline-none transition-all"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </SectionReveal>

            <div className="space-y-8">
              <SectionReveal delay={0.1}>
                <Card>
                  <h2 className="text-2xl font-bold text-browland-dark mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-browland-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-browland-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-browland-dark mb-1">Office Address</h3>
                        <p className="text-browland-gray">Abuja, Nigeria</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-browland-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-browland-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-browland-dark mb-1">Phone</h3>
                        <p className="text-browland-gray">+234 808 3114 365</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-browland-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-browland-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-browland-dark mb-1">Email</h3>
                        <p className="text-browland-gray">info@browlandtechnologies.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-browland-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-browland-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-browland-dark mb-1">Website</h3>
                        <p className="text-browland-gray">www.browlandtechnologies.com</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <Card className="bg-gradient-to-br from-browland-blue to-browland-light text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Live Chat Support</h3>
                      <p className="text-white/80 text-sm">Available 24/7</p>
                    </div>
                  </div>
                  <Button variant="gold" className="w-full">
                    Start Live Chat
                  </Button>
                </Card>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
