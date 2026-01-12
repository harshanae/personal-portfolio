import { ProjectCard } from "./ProjectCard";
import { Layers, Zap, Cpu } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "NeuroMetrics Dashboard",
    description: "AI-powered analytics platform with real-time neural network visualization. Features advanced machine learning algorithms and interactive data exploration capabilities.",
    image: project1,
    techStack: ["React", "TypeScript", "TensorFlow.js", "D3.js", "Python", "FastAPI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "CryptoVault Mobile",
    description: "Next-generation cryptocurrency trading app with advanced portfolio management, real-time market analysis, and biometric security features.",
    image: project2,
    techStack: ["React Native", "Web3.js", "Redux Toolkit", "Solidity", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Quantum Task Engine",
    description: "Revolutionary task management system leveraging quantum computing principles for optimal workflow optimization and team coordination.",
    image: project3,
    techStack: ["Vue 3", "Composition API", "GraphQL", "Prisma", "PostgreSQL", "Docker"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
];

export function FeaturedProjects() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      
      {/* Floating geometric elements */}
      <div className="absolute top-20 left-4 w-32 h-32 border border-primary/20 rounded-3xl rotate-12 animate-float"></div>
      <div className="absolute bottom-20 right-4 w-24 h-24 bg-accent/10 rounded-full animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-card/30 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 mb-8">
            <Layers className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground font-mono">Featured Work</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-foreground mb-8 leading-tight">
            <span className="bg-gradient-electric bg-clip-text text-transparent">Exceptional</span>
            <br />
            Projects
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pushing the boundaries of what's possible with cutting-edge technology and innovative design. 
            Each project represents a commitment to excellence and forward-thinking solutions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-in"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Zap className="h-4 w-4 text-accent animate-pulse" />
            <span className="text-sm font-mono">More innovative projects coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}