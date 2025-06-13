
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold font-montserrat mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to automate your business processes? Let's discuss how we can help 
              you achieve your automation goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold font-montserrat mb-6 text-gray-800">
                  Send us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-flowmatic-medium-blue focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-flowmatic-medium-blue focus:border-transparent transition-all"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-flowmatic-medium-blue focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your automation needs..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gradient-bg hover:opacity-90 transition-opacity text-lg py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info & Map */}
            <div className="animate-slide-in-right space-y-8">
              {/* Contact Info */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold font-montserrat mb-6 text-gray-800">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">hello@flowmatic.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Location</h4>
                      <p className="text-gray-600">
                        123 Tech Street<br />
                        Innovation District<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Map Placeholder */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold font-montserrat mb-6 text-gray-800">
                  Find Us
                </h3>
                
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-4">🗺️</div>
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-flowmatic-dark-blue to-flowmatic-medium-blue rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-semibold font-montserrat mb-4">
              Stay Updated
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Subscribe to our newsletter for automation tips and industry insights
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-flowmatic-green"
              />
              <Button 
                className="bg-flowmatic-green hover:bg-flowmatic-teal transition-colors px-8"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
