
import { Home } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'GitHub', href: '#', icon: '⚡' },
    { name: 'Email', href: 'mailto:hello@flowmatic.com', icon: '📧' }
  ];

  return (
    <footer className="bg-flowmatic-dark-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-flowmatic-dark-blue" />
              </div>
              <span className="text-xl font-bold font-montserrat">
                Flowmatic
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transforming businesses through intelligent automation and AI solutions. 
              We turn complex workflows into simple, efficient processes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-montserrat mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold font-montserrat mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Web Development</li>
              <li>AI Chatbots</li>
              <li>Process Automation</li>
              <li>CRM Integration</li>
              <li>Custom Solutions</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold font-montserrat mb-4">Connect</h3>
            <div className="space-y-3">
              <p className="text-gray-300">mariecharlotte@flowmatic-ia.com</p>
              <p className="text-gray-300">+34 (614) 39-4276</p>
              
              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-flowmatic-medium-blue rounded-lg flex items-center justify-center hover:bg-flowmatic-teal transition-colors duration-300"
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-flowmatic-medium-blue/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 Flowmatic. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
