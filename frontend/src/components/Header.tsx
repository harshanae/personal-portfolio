import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, Download, Code2, Zap } from "lucide-react";
import profilePhoto from "@/assets/HarshanaE_Blue_Photo.png";
import UserDetails from "@/constants/user-details";

export function Header() {
  return (
    <header className="relative min-h-screen overflow-hidden bg-gradient-dark">
      <div className="absolute inset-0 bg-gradient-mesh"></div>
      
      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-24 h-24 border border-accent/20 rounded-3xl rotate-45 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary/10 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-32 left-20 w-32 h-32 border border-primary/20 rounded-2xl rotate-12 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 min-h-[60vh] justify-center">
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gradient-electric rounded-full opacity-20 animate-glow"></div>
            <Avatar className="w-64 h-64 shadow-neon ring-2 ring-accent/30 relative z-10">
              <AvatarImage src={profilePhoto} alt="Profile photo" className="object-cover" />
              <AvatarFallback className="text-6xl bg-gradient-electric text-background font-bold">AE</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-4 -right-4 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-2xl p-3">
              <Code2 className="h-8 w-8 text-accent animate-pulse" />
            </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-4">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">Available for work</span>
                </div>
                
                <h1 className="text-6xl lg:text-8xl font-black text-foreground mb-6 leading-none">
                  <span className="bg-gradient-electric bg-clip-text text-transparent">{UserDetails.FullName}</span>
                </h1>
                
                <div className="space-y-2">
                  <p className="text-2xl lg:text-3xl text-accent font-light">
                    Software Engineer
                  </p>
                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
                    Crafting digital experiences that blend cutting-edge technology with thoughtful design. 
                    Passionate about building things that make a difference.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="electric" className="text-lg px-10 py-8 rounded-2xl group">
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Let's Collaborate
                  <Zap className="ml-2 h-4 w-4 opacity-70" />
                </Button>
                <Button size="lg" variant="cyber" className="text-lg px-10 py-8 rounded-2xl">
                  <Download className="mr-2 h-5 w-5" />
                  View Resume
                </Button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-3 text-muted-foreground pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-mono">San Francisco, CA</span>
                </div>
                <span className="text-accent/50">•</span>
                <span className="text-sm font-mono">Building the future</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}