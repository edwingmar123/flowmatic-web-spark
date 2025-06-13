
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-flowmatic-medium-blue/10 to-flowmatic-teal/10 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-flowmatic-teal/10 to-flowmatic-green/10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-montserrat leading-tight mb-6">
              <span className="gradient-text">Smart Automation</span>
              <br />
              for Businesses
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              We develop web solutions and AI chatbots to optimize your processes, 
              streamline operations, and boost efficiency with cutting-edge automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="gradient-bg hover:opacity-90 transition-opacity text-lg px-8 py-3"
              >
                View Services
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-flowmatic-medium-blue text-flowmatic-medium-blue hover:bg-flowmatic-medium-blue hover:text-white transition-all text-lg px-8 py-3"
              >
                Try Demos
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative animate-slide-in-right">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              {/* Mock dashboard/interface */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-4 gradient-bg rounded opacity-80"></div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-16 bg-gradient-to-br from-flowmatic-medium-blue/20 to-flowmatic-teal/20 rounded-lg"></div>
                    <div className="h-16 bg-gradient-to-br from-flowmatic-teal/20 to-flowmatic-green/20 rounded-lg"></div>
                    <div className="h-16 bg-gradient-to-br from-flowmatic-green/20 to-flowmatic-medium-blue/20 rounded-lg"></div>
                  </div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 gradient-bg rounded-xl flex items-center justify-center shadow-lg animate-float">
                <span className="text-white font-bold">AI</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-flowmatic-green rounded-lg shadow-lg animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
