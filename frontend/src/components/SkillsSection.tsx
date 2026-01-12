import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Code, Zap, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Mastery",
    icon: Code,
    skills: [
      { name: "React/Next.js", level: 96, color: "bg-primary" },
      { name: "TypeScript", level: 94, color: "bg-accent" },
      { name: "Three.js/WebGL", level: 88, color: "bg-primary-glow" },
      { name: "Vue 3/Nuxt", level: 85, color: "bg-accent-dark" }
    ]
  },
  {
    title: "Backend Engineering",
    icon: Cpu,
    skills: [
      { name: "Node.js/Deno", level: 92, color: "bg-primary" },
      { name: "Python/FastAPI", level: 89, color: "bg-accent" },
      { name: "Rust/WebAssembly", level: 78, color: "bg-primary-glow" },
      { name: "GraphQL/tRPC", level: 86, color: "bg-accent-dark" }
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: Zap,
    skills: [
      { name: "Docker/K8s", level: 87, color: "bg-primary" },
      { name: "AWS/Vercel", level: 84, color: "bg-accent" },
      { name: "Terraform/IaC", level: 75, color: "bg-primary-glow" },
      { name: "CI/CD Pipelines", level: 90, color: "bg-accent-dark" }
    ]
  }
];

const technologies = [
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "language" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "styling" },
  { name: "Three.js", category: "3d" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "language" },
  { name: "Rust", category: "language" },
  { name: "PostgreSQL", category: "database" },
  { name: "Redis", category: "database" },
  { name: "Docker", category: "devops" },
  { name: "Kubernetes", category: "devops" },
  { name: "AWS", category: "cloud" },
  { name: "Vercel", category: "cloud" },
  { name: "GraphQL", category: "api" },
  { name: "WebAssembly", category: "performance" },
  { name: "Machine Learning", category: "ai" },
  { name: "Blockchain", category: "web3" }
];

export function SkillsSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-15"></div>
      
      {/* Floating elements */}
      <div className="absolute top-32 right-8 w-20 h-20 border border-accent/20 rounded-2xl rotate-45 animate-float"></div>
      <div className="absolute bottom-40 left-8 w-16 h-16 bg-primary/10 rounded-full animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-card/30 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 mb-8">
            <Brain className="h-4 w-4 text-accent animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">Technical Arsenal</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-foreground mb-8 leading-tight">
            Skills &
            <br />
            <span className="bg-gradient-electric bg-clip-text text-transparent">Expertise</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Constantly evolving my technical skillset to stay at the forefront of technology. 
            From cutting-edge frameworks to emerging paradigms, I embrace innovation.
          </p>
        </div>

        {/* Skill Progress Bars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card 
                key={categoryIndex} 
                className="shadow-cyber hover:shadow-electric transition-all duration-500 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-accent/30 group"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-foreground flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground font-mono">{skill.name}</span>
                        <span className="text-sm text-accent font-mono">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-muted/50"
                        />
                        <div 
                          className="absolute top-0 left-0 h-2 rounded-full bg-gradient-electric opacity-80"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technology Cloud */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-12">
            Technology <span className="text-accent">Ecosystem</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-sm px-6 py-3 bg-secondary/30 hover:bg-accent/20 hover:text-accent transition-all duration-300 hover:scale-105 cursor-default border border-border/30 hover:border-accent/30 font-mono backdrop-blur-sm"
                style={{ 
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <Zap className="h-4 w-4 text-accent animate-pulse" />
              <span className="text-sm font-mono">Always learning, always innovating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}