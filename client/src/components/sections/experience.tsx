import { Briefcase, Award, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio-data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">Work Experience</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-200"></div>
            
            {/* Experience Item */}
            {portfolioData.workExperience.map((experience, index) => (
              <div key={index} className="relative flex items-start space-x-6 pb-12">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <Card className="bg-neutral-50 border-neutral-200 hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-secondary">{experience.title}</h3>
                          <p className="text-primary font-medium">{experience.company}</p>
                        </div>
                        <span className="text-neutral-600 font-medium mt-2 lg:mt-0">{experience.duration}</span>
                      </div>
                      
                      <ul className="space-y-3 text-neutral-700 mb-6">
                        {experience.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies Used */}
                      <div className="pt-4 border-t border-neutral-200">
                        <h4 className="text-sm font-medium text-neutral-800 mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-secondary mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioData.certifications.map((cert, index) => (
                <Card key={index} className={`${
                  index === 0 ? 'bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200' : 
                               'bg-gradient-to-r from-green-50 to-green-100 border-green-200'
                } hover:shadow-md transition-shadow duration-300`}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${
                        index === 0 ? 'bg-blue-500' : 'bg-green-500'
                      } rounded-lg flex items-center justify-center`}>
                        {index === 0 ? (
                          <Award className="w-6 h-6 text-white" />
                        ) : (
                          <Cpu className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary">{cert.name}</h4>
                        <p className={`${
                          index === 0 ? 'text-blue-700' : 'text-green-700'
                        } font-medium`}>{cert.issuer}</p>
                        <p className={`${
                          index === 0 ? 'text-blue-600' : 'text-green-600'
                        } text-sm`}>{cert.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
