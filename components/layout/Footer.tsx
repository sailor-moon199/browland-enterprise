import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowRight
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'AI Solutions', href: '/ai-solutions' },
  { name: 'Academy', href: '/academy' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

const services = [
  { name: 'Custom Software', href: '/services' },
  { name: 'Mobile Apps', href: '/services' },
  { name: 'Web Development', href: '/services' },
  { name: 'Cloud Solutions', href: '/services' },
  { name: 'Cybersecurity', href: '/services' },
  { name: 'IT Consulting', href: '/consulting' },
];

const products = [
  { name: 'BrowHR', href: '/products' },
  { name: 'BrowERP', href: '/products' },
  { name: 'BrowSchool', href: '/products' },
  { name: 'BrowHospital', href: '/products' },
  { name: 'BrowCRM', href: '/products' },
  { name: 'BrowAI Assistant', href: '/products' },
];

export default function Footer() {
  return (
    <footer className="bg-browland-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-browland-light to-browland-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight">
                  Browland
                </span>
                <span className="text-xs text-gray-400 font-medium tracking-wider">
                  TECHNOLOGIES
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building intelligent solutions for a digital future. We transform businesses through technology, artificial intelligence, and innovation.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-browland-blue transition-colors text-white">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-browland-blue transition-colors text-white">
                <span className="text-sm font-bold">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-browland-blue transition-colors text-white">
                <span className="text-sm font-bold">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-browland-blue transition-colors text-white">
                <span className="text-sm font-bold">ig</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services & Products</h3>
            <div className="grid grid-cols-2 gap-y-3">
              <ul className="space-y-3">
                {services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {products.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-browland-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Abuja, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-browland-gold flex-shrink-0" />
                <span className="text-gray-400">
                  +234 XXX XXXX XXX
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-browland-gold flex-shrink-0" />
                <span className="text-gray-400">
                  info@browlandtech.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-browland-gold flex-shrink-0" />
                <span className="text-gray-400">
                  www.browlandtech.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-10 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Subscribe to our newsletter for the latest insights and updates.</p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-browland-gold transition-colors"
              />
              <button className="px-6 py-3 bg-browland-gold text-white font-medium rounded-lg hover:bg-yellow-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Browland Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
