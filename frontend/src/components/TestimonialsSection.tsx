import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, Users } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at NeuralTech",
    company: "AI Unicorn Startup",
    content: "Alex doesn't just write code—they architect the future. Their ability to blend cutting-edge technology with elegant design philosophy has been transformational for our platform.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Marcus Rodriguez",
    role: "Lead Engineer at QuantumFlow",
    company: "Quantum Computing Pioneer",
    content: "Working with Alex is like collaborating with a tech visionary. They anticipate industry trends and deliver solutions that are years ahead of the curve.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Elena Volkov",
    role: "Product Director at CyberSphere",
    company: "Metaverse Platform",
    content: "Alex's technical mastery is matched only by their strategic thinking. They don't just solve problems—they reimagine possibilities and create entirely new paradigms.",
    rating: 5,
    avatar: "EV"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-dark/50">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      
      {/* Floating geometric elements */}
      <div className="absolute top-24 left-12 w-28 h-28 border border-primary/20 rounded-3xl rotate-12 animate-float"></div>
      <div className="absolute bottom-32 right-12 w-20 h-20 bg-accent/10 rounded-full animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-card/30 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 mb-8">
            <Users className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground font-mono">Client Testimonials</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-foreground mb-8 leading-tight">
            <span className="bg-gradient-electric bg-clip-text text-transparent">Trusted</span>
            <br />
            by Innovators
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Collaborating with visionary teams to push the boundaries of what's possible. 
            Here's what industry leaders say about our partnership.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group relative shadow-cyber hover:shadow-electric transition-all duration-500 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-accent/30 hover:scale-[1.02]"
            >
              {/* Quote decoration */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/30">
                <Quote className="h-4 w-4 text-accent" />
              </div>
              
              <CardContent className="p-8 space-y-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-base italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-border/30">
                  <Avatar className="h-14 w-14 ring-2 ring-accent/30 group-hover:ring-accent/50 transition-all">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-electric text-background font-bold text-sm">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-foreground text-base">{testimonial.name}</div>
                    <div className="text-sm text-accent font-medium">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground font-mono">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Star className="h-4 w-4 text-accent animate-pulse" />
            <span className="text-sm font-mono">98% client satisfaction rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}