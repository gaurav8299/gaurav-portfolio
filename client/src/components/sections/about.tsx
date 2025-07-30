import { GraduationCap, Trophy, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio-data";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-secondary mb-4">Career Objective</h3>
              <p className="text-neutral-600 leading-relaxed text-lg">
                {portfolioData.objective}
              </p>

              {/* Key Highlights */}
              <div className="space-y-3 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-neutral-700">Full Stack Development with MERN Stack</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-neutral-700">REST API Design & Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-neutral-700">System-level Debugging & Optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-neutral-700">Linux Automation & Shell Scripting</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Education Card */}
              <Card className="bg-neutral-50 border-neutral-200 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-secondary text-lg">{portfolioData.education.degree}</h4>
                      <p className="text-primary font-medium">{portfolioData.education.university}</p>
                      <p className="text-neutral-600 text-sm">{portfolioData.education.duration} • CGPA: {portfolioData.education.cgpa}</p>
                      <p className="text-neutral-600 text-sm mt-1">{portfolioData.education.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-secondary">Key Achievements</h4>
                <div className="space-y-3">
                  {portfolioData.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-accent/5 rounded-lg">
                      {index === 0 ? (
                        <Trophy className="w-5 h-5 text-accent" />
                      ) : (
                        <Code2 className="w-5 h-5 text-primary" />
                      )}
                      <span className="text-neutral-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
