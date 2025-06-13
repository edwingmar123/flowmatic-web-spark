
import { useState } from 'react';

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: "🌐",
      title: "Custom Web Development",
      description: "Modern, responsive web applications built with the latest technologies",
      details: "Full-stack development using React, Node.js, and cloud technologies for scalable solutions"
    },
    {
      icon: "🤖",
      title: "AI Chatbots",
      description: "24/7 intelligent customer support with CRM integration",
      details: "Advanced conversational AI with natural language processing and seamless CRM connectivity"
    },
    {
      icon: "⚡",
      title: "Process Automation",
      description: "Streamline workflows with n8n, Make, and GoHighLevel",
      details: "End-to-end automation solutions that eliminate manual tasks and boost productivity"
    },
    {
      icon: "🎯",
      title: "Internal Virtual Assistants",
      description: "Smart assistants for internal operations and team productivity",
      details: "Custom AI assistants that handle routine tasks, scheduling, and data management"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold font-montserrat mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver comprehensive automation solutions that transform how businesses operate, 
            leveraging AI and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-6 shadow-lg hover-scale cursor-pointer group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold font-montserrat mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>

              {/* Tooltip on hover */}
              {hoveredCard === index && (
                <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-flowmatic-dark-blue text-white rounded-lg shadow-xl z-10 animate-fade-in-up">
                  <p className="text-sm">{service.details}</p>
                </div>
              )}

              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-flowmatic-medium-blue via-flowmatic-teal to-flowmatic-green p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                <div className="bg-white rounded-xl h-full w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
