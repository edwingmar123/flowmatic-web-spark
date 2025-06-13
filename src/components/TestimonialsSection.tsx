
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Flowmatic transformed our customer service with their AI chatbot. We've seen a 60% reduction in response time and our customers love the instant support.",
      author: "Jennifer Martinez",
      role: "Operations Manager",
      company: "TechStart Inc."
    },
    {
      quote: "The automation workflows they built for us saved our team 20 hours per week. The ROI was immediate and the implementation was seamless.",
      author: "David Thompson", 
      role: "CEO",
      company: "Growth Solutions LLC"
    },
    {
      quote: "Their expertise in GoHighLevel and n8n integrations helped us automate our entire lead nurturing process. Highly recommended!",
      author: "Lisa Chen",
      role: "Marketing Director", 
      company: "Digital Dynamics"
    }
  ];

  const partners = [
    { name: "TechStart", logo: "🚀" },
    { name: "Growth Solutions", logo: "📈" },
    { name: "Digital Dynamics", logo: "💡" },
    { name: "Innovation Hub", logo: "🔬" },
    { name: "Future Systems", logo: "🌟" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Testimonials */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold font-montserrat mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Don't just take our word for it - hear from businesses that have transformed 
              their operations with our automation solutions.
            </p>

            {/* Testimonial Carousel */}
            <div className="relative bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
              <div className="text-6xl text-flowmatic-medium-blue mb-4">"</div>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed italic">
                {testimonials[currentIndex].quote}
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white font-bold">
                  {testimonials[currentIndex].author.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-flowmatic-medium-blue">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-flowmatic-medium-blue' 
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold font-montserrat mb-8 text-gray-800">
              Trusted by Growing Businesses
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 hover:opacity-100 transition-opacity"
                >
                  <span className="text-2xl">{partner.logo}</span>
                  <span className="text-lg font-medium text-gray-600">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
