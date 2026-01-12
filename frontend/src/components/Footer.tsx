import { Button } from "@/components/ui/button";
import UserDetails from "@/constants/user-details";
import { Github, Linkedin, Twitter, Mail, Sparkles, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-dark border-t border-border/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      
      {/* Floating elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border border-accent/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-primary/10 rounded-2xl rotate-45 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-card/30 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3">
              <Sparkles className="h-4 w-4 text-accent animate-pulse" />
              <span className="text-sm text-muted-foreground font-mono">Ready to innovate</span>
            </div>
            
            <h3 className="text-4xl lg:text-6xl font-black text-foreground leading-tight">
              Let's Build Something
              <br />
              <span className="bg-gradient-electric bg-clip-text text-transparent">Extraordinary</span>
            </h3>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always excited to collaborate on innovative projects and bring bold ideas to life. 
              Let's create the future together.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="electric" size="lg" className="text-lg px-12 py-8 rounded-2xl group">
              <Mail className="mr-3 h-5 w-5 group-hover:animate-pulse" />
              Start a Project
              <ArrowUpRight className="ml-2 h-4 w-4 opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
            <Button variant="cyber" size="lg" className="text-lg px-12 py-8 rounded-2xl">
              <Sparkles className="mr-3 h-5 w-5" />
              Schedule Call
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <Button variant="minimal" size="icon" className="h-16 w-16 rounded-2xl group">
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
            <Button variant="minimal" size="icon" className="h-16 w-16 rounded-2xl group">
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
            <Button variant="minimal" size="icon" className="h-16 w-16 rounded-2xl group">
              <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
            <Button variant="minimal" size="icon" className="h-16 w-16 rounded-2xl group">
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
          
          <div className="pt-12 border-t border-border/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground font-mono text-sm">
                © 2024 {UserDetails.FullName} • Crafted with precision
              </p>
              <div className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground/70 font-mono">CURRENTLY BUILDING:</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-xs text-accent font-mono">Next-Gen Web Experiences</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}