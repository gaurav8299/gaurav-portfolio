import { Code, Layers, Settings, Zap, Users, Monitor } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio-data";

export default function SkillsSection() {
  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < level ? 'bg-primary' : 'bg-neutral-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">Technical Skills</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-neutral-600 mt-6 text-lg max-w-2xl mx-auto">
              Proficient in modern technologies and frameworks for full-stack development
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Code className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary">Languages</h3>
                </div>
                <div className="space-y-3">
                  {portfolioData.skills.languages.map((language) => (
                    <div key={language.name} className="flex items-center justify-between">
                      <span className="text-neutral-700">{language.name}</span>
                      {renderSkillLevel(language.level)}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Frameworks & Libraries */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Layers className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary">Frameworks & Libraries</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.frameworks.map((framework) => (
                    <Badge key={framework} variant="secondary" className="text-xs">
                      {framework}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools & Platforms */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <Settings className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary">Tools & Platforms</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.tools.map((tool) => (
                    <Badge key={tool} variant="outline" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specializations */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary">Specializations</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.specializations.map((spec) => (
                    <Badge key={spec} variant="secondary" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CRM & Issue Tracking */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary">CRM & Tracking</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.crm.map((tool) => (
                    <Badge key={tool} variant="outline" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Operating Systems */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                    <Monitor className="w-5 h-5 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary">Operating Systems</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.os.map((os) => (
                    <Badge key={os} variant="secondary" className="text-xs">
                      {os}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
