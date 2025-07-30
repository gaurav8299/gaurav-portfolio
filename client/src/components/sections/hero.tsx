import { ArrowRight, Download, Code, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio-data";
import profileImage from "@assets/ProfilePicGaurav_1753904023501.jpg";

export default function HeroSection() {
  const handleDownloadResume = () => {
    // Create a download link for the resume
    const link = document.createElement('a');
    link.href = '/attached_assets/Gaurav_Rajput_Resume_SDE_1753903883387.pdf';
    link.download = 'Gaurav_Rajput_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-secondary leading-tight">
                  Hi, I'm <span className="text-primary">Gaurav</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-neutral-600 font-medium">
                  {portfolioData.personal.title}
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
                  {portfolioData.objective}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleContactClick}
                  className="bg-primary hover:bg-blue-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleDownloadResume}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 transition-all duration-300"
                >
                  Download Resume
                  <Download className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-8 pt-8 border-t border-neutral-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{portfolioData.stats.experience}</div>
                  <div className="text-sm text-neutral-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{portfolioData.stats.projects}</div>
                  <div className="text-sm text-neutral-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{portfolioData.stats.leetcode}</div>
                  <div className="text-sm text-neutral-600">LeetCode Problems</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                {/* Profile image with floating animation */}
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl animate-float bg-gradient-to-br from-primary/10 to-accent/10 p-2">
                  <img 
                    src={profileImage}
                    alt="Gaurav Rajput - Full Stack Developer" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                {/* Floating elements around profile */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '-2s'}}>
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '-4s'}}>
                  <Database className="w-6 h-6 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
