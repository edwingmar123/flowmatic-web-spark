
const AboutSection = () => {
  const teamMembers = [
    {
      name: "xxxxxxxx",
      role: "Lead Developer",
      image: "https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg"
    },
    {
      name: "xxxxxxxx",
      role: "AI Specialist", 
      image: "https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg"
    },
    {
      name: "xxxxxxxx",
      role: "Automation Expert",
      image: "https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg"
    }
  ];

  const tools = [
    { name: "n8n", color: "bg-red-500" },
    { name: "Make", color: "bg-blue-500" },
    { name: "GoHighLevel", color: "bg-green-500" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Story & Mission */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold font-montserrat mb-8">
              About <span className="gradient-text">Flowmatic</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left animate-slide-in-left">
                <h3 className="text-2xl font-semibold font-montserrat mb-4 text-gray-800">
                  Our Story
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded with a vision to democratize automation, Flowmatic emerged from the 
                  belief that every business deserves efficient, intelligent workflows. We started 
                  as a small team of developers and automation enthusiasts who saw the potential 
                  of AI and workflow automation to transform how businesses operate.
                </p>
                
                <h3 className="text-2xl font-semibold font-montserrat mb-4 text-gray-800">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  <span className="font-semibold gradient-text">"We turn ideas into efficient workflows"</span>
                  <br /><br />
                  We're committed to helping businesses of all sizes harness the power of automation 
                  and AI to eliminate repetitive tasks, improve customer experiences, and drive growth 
                  through intelligent solutions.
                </p>
              </div>

              <div className="animate-slide-in-right">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                      <div className="text-gray-600">Projects Completed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold gradient-text mb-2">99%</div>
                      <div className="text-gray-600">Client Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                      <div className="text-gray-600">AI Support</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                      <div className="text-gray-600">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold font-montserrat text-center mb-12 text-gray-800">
              Meet Our Team
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center hover-scale">
                  <div className="relative mb-4 inline-block">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-flowmatic-medium-blue/20 to-flowmatic-teal/20"></div>
                  </div>
                  <h4 className="text-xl font-semibold font-montserrat text-gray-800 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-flowmatic-medium-blue font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="text-center">
            <h3 className="text-3xl font-bold font-montserrat mb-8 text-gray-800">
              Powered by Industry Leaders
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center space-x-3 hover-scale">
                  <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">
                      {tool.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-xl font-semibold text-gray-800">{tool.name}</span>
                </div>
              ))}
            </div>
            
            <p className="text-gray-600 mt-8 max-w-2xl mx-auto">
              We leverage the best automation platforms to deliver robust, scalable solutions 
              that integrate seamlessly with your existing systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
