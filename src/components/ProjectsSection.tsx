
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProjectsSection = () => {
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hello! How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const newMessages = [
      ...chatMessages,
      { type: 'user', message: inputValue },
      { type: 'bot', message: 'Thanks for your message! Our AI can handle complex queries and provide instant responses.' }
    ];
    
    setChatMessages(newMessages);
    setInputValue('');
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold font-montserrat mb-4">
            Try Our <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our automation solutions firsthand with these interactive demos
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="chatbot" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="chatbot" className="text-lg">Chatbot Demo</TabsTrigger>
              <TabsTrigger value="automation" className="text-lg">Automation Demo</TabsTrigger>
            </TabsList>

            <TabsContent value="chatbot" className="animate-fade-in-up">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold font-montserrat mb-6 text-center">
                  AI Chatbot Interface
                </h3>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-2xl mx-auto">
                  {/* Chat header */}
                  <div className="gradient-bg text-white p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">AI</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Flowmatic Assistant</h4>
                        <p className="text-sm opacity-90">Online</p>
                      </div>
                    </div>
                  </div>

                  {/* Chat messages */}
                  <div className="h-64 overflow-y-auto p-4 space-y-4">
                    {chatMessages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            msg.type === 'user'
                              ? 'bg-flowmatic-medium-blue text-white'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {msg.message}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chat input */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-flowmatic-medium-blue"
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <Button onClick={handleSendMessage} className="gradient-bg">
                        Send
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="automation" className="animate-fade-in-up">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold font-montserrat mb-6 text-center">
                  CRM Automation Workflow
                </h3>
                
                <div className="max-w-4xl mx-auto">
                  {/* Automation flowchart */}
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
                      {/* Step 1 */}
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-flowmatic-dark-blue rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">
                          1
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Lead Capture</h4>
                        <p className="text-sm text-gray-600">Website form submission</p>
                      </div>

                      {/* Arrow */}
                      <div className="hidden md:block text-flowmatic-medium-blue">→</div>

                      {/* Step 2 */}
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-flowmatic-medium-blue rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">
                          2
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Auto Processing</h4>
                        <p className="text-sm text-gray-600">Data validation & routing</p>
                      </div>

                      {/* Arrow */}
                      <div className="hidden md:block text-flowmatic-teal">→</div>

                      {/* Step 3 */}
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-flowmatic-teal rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">
                          3
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">CRM Integration</h4>
                        <p className="text-sm text-gray-600">GoHighLevel sync</p>
                      </div>

                      {/* Arrow */}
                      <div className="hidden md:block text-flowmatic-green">→</div>

                      {/* Step 4 */}
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-flowmatic-green rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">
                          4
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Follow-up</h4>
                        <p className="text-sm text-gray-600">Automated email sequence</p>
                      </div>
                    </div>

                    <div className="mt-8 text-center">
                      <p className="text-gray-600 mb-4">
                        This workflow processes leads 24/7 without human intervention
                      </p>
                      <div className="flex justify-center space-x-6 text-sm text-gray-500">
                        <span>⚡ n8n Integration</span>
                        <span>🔄 Make.com Workflows</span>
                        <span>📊 GoHighLevel CRM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Button size="lg" className="gradient-bg hover:opacity-90 transition-opacity text-lg px-8 py-3">
              Explore More Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
