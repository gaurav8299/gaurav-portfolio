import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { portfolioData } from "@/data/portfolio-data";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-neutral-600 mt-6 text-lg max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can work together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Email */}
                <Card className="bg-neutral-50 border-neutral-200 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary">Email</h4>
                        <a 
                          href={`mailto:${portfolioData.personal.email}`} 
                          className="text-primary hover:underline"
                        >
                          {portfolioData.personal.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Phone */}
                <Card className="bg-neutral-50 border-neutral-200 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary">Phone</h4>
                        <a 
                          href={`tel:${portfolioData.personal.phone}`} 
                          className="text-accent hover:underline"
                        >
                          {portfolioData.personal.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="bg-neutral-50 border-neutral-200 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary">Location</h4>
                        <p className="text-neutral-600">{portfolioData.personal.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-secondary">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href={`https://${portfolioData.personal.linkedin}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 hover:scale-110 transform"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href={`https://${portfolioData.personal.github}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors duration-300 hover:scale-110 transform"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a 
                    href={`mailto:${portfolioData.personal.email}`}
                    className="w-12 h-12 bg-red-500 text-white rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300 hover:scale-110 transform"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                  <a 
                    href={`tel:${portfolioData.personal.phone}`}
                    className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-300 hover:scale-110 transform"
                  >
                    <Phone className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-neutral-50 border-neutral-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-secondary mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                        className="border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message here..."
                      required
                      className="border-neutral-300 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-blue-700 text-white py-3 transition-colors duration-300"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
