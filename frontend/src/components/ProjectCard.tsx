import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight, Sparkles } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ title, description, image, techStack, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-cyber hover:shadow-electric transition-all duration-500 hover:scale-[1.03] bg-card/30 backdrop-blur-sm">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-electric opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"></div>
      
      <div className="relative">
        <div className="aspect-video overflow-hidden rounded-t-xl relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Floating icon */}
          <div className="absolute top-4 right-4 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-xl p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <Sparkles className="h-4 w-4 text-accent" />
          </div>
        </div>
        
        <CardContent className="p-8 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base">
              {description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="bg-secondary/50 text-foreground hover:bg-accent/20 hover:text-accent transition-all duration-300 border border-border/30 font-mono text-xs"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-3 pt-4">
            {liveUrl && (
              <Button variant="default" size="sm" className="flex-1 group/btn rounded-xl">
                <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:animate-pulse" />
                Live Demo
                <ArrowUpRight className="ml-1 h-3 w-3 opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Button>
            )}
            {githubUrl && (
              <Button variant="outline" size="sm" className="flex-1 rounded-xl">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}