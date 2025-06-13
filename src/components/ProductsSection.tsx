
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProductsSection = () => {
  const products = [
    {
      name: "FlowAI Chatbot",
      description: "Intelligent customer service automation with natural language processing",
      features: [
        "24/7 Customer Support",
        "Multi-language Support", 
        "CRM Integration",
        "Analytics Dashboard"
      ],
      pricing: "Starting at $99/month",
      popular: false
    },
    {
      name: "Automation Pro Suite",
      description: "Complete workflow automation package for growing businesses",
      features: [
        "n8n Workflow Builder",
        "Make.com Integration",
        "GoHighLevel Sync",
        "Custom Automations",
        "Priority Support"
      ],
      pricing: "Starting at $299/month",
      popular: true
    },
    {
      name: "Enterprise Solutions",
      description: "Custom automation solutions tailored for large organizations",
      features: [
        "Custom Development",
        "Dedicated Support Team",
        "Advanced Analytics",
        "Security Compliance",
        "Training & Onboarding"
      ],
      pricing: "Customizable based on needs",
      popular: false
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold font-montserrat mb-4">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our packaged solutions designed to accelerate your automation journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className={`relative hover-scale ${product.popular ? 'ring-2 ring-flowmatic-medium-blue' : ''}`}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="gradient-bg text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-montserrat text-gray-800">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {product.pricing}
                  </div>
                </div>

                <ul className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="w-5 h-5 gradient-bg rounded-full flex items-center justify-center text-white text-xs mr-3">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    product.popular 
                      ? 'gradient-bg hover:opacity-90' 
                      : 'border border-flowmatic-medium-blue text-flowmatic-medium-blue hover:bg-flowmatic-medium-blue hover:text-white'
                  } transition-all`}
                  variant={product.popular ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need something custom? We create tailored solutions for your specific needs.
          </p>
          <Button variant="outline" className="border-flowmatic-teal text-flowmatic-teal hover:bg-flowmatic-teal hover:text-white">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
