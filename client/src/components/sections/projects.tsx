import { ExternalLink, Github, Briefcase, Utensils, Database, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio-data";

export default function ProjectsSection() {
  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <Briefcase className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />;
      case 'fullstack':
        return <Utensils className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />;
      case 'backend':
        return <Database className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />;
      case 'automation':
        return <Terminal className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />;
      default:
        return <Briefcase className="w-16 h-16 group-hover:scale-110 transition-transform duration-300" />;
    }
  };

  const getProjectGradient = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'bg-gradient-to-br from-blue-500 to-blue-600';
      case 'fullstack':
        return 'bg-gradient-to-br from-orange-500 to-red-500';
      case 'backend':
        return 'bg-gradient-to-br from-green-500 to-teal-500';
      case 'automation':
        return 'bg-gradient-to-br from-gray-600 to-gray-800';
      default:
        return 'bg-gradient-to-br from-blue-500 to-blue-600';
    }
  };

  return (
    <section id="projects" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-neutral-600 mt-6 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that demonstrate my technical skills and problem-solving abilities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className={`h-48 ${getProjectGradient(project.category)} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-center text-white">
                    {getProjectIcon(project.category)}
                    <h3 className="font-semibold text-xl mt-4">{project.title}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-secondary">{project.title}</h3>
                    <span className="text-sm text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full">
                      {project.duration}
                    </span>
                  </div>
                  
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-neutral-800 mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <ul className="space-y-2 mb-6 text-sm text-neutral-700">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-accent rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <Button
                      asChild
                      variant="default"
                      size="sm"
                      className="bg-secondary hover:bg-neutral-700 text-white"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-neutral-300 text-neutral-700 hover:bg-neutral-50"
                      onClick={() => {
                        // Placeholder for live demo functionality
                        alert('Live demo would be linked here in production');
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-primary hover:bg-blue-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="https://github.com/gaurav8299" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
