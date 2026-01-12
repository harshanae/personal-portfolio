import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock, BookOpen, Zap } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Web Development: Beyond React",
    excerpt: "Exploring next-generation frameworks and paradigms that are reshaping how we build digital experiences. From server components to edge computing.",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Innovation",
    featured: true
  },
  {
    title: "Building Performant 3D Experiences with WebGL",
    excerpt: "Deep dive into creating immersive 3D interfaces using modern web technologies. Performance optimization techniques and real-world applications.",
    date: "March 8, 2024",
    readTime: "12 min read",
    category: "WebGL",
    featured: false
  },
  {
    title: "AI-Driven Development: The New Paradigm",
    excerpt: "How artificial intelligence is transforming software engineering workflows and what it means for the future of our profession.",
    date: "February 28, 2024",
    readTime: "10 min read",
    category: "AI/ML",
    featured: false
  }
];

export function BlogSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-15"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-12 w-24 h-24 border border-accent/20 rounded-2xl rotate-45 animate-float"></div>
      <div className="absolute bottom-32 left-12 w-18 h-18 bg-primary/10 rounded-full animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-card/30 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 mb-8">
            <BookOpen className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground font-mono">Latest Insights</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-foreground mb-8 leading-tight">
            Thoughts &
            <br />
            <span className="bg-gradient-electric bg-clip-text text-transparent">Ideas</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sharing insights on the future of technology, development trends, and the art of building 
            extraordinary digital experiences that shape tomorrow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className={`group cursor-pointer shadow-cyber hover:shadow-electric transition-all duration-500 hover:scale-[1.03] bg-card/30 backdrop-blur-sm border border-border/30 hover:border-accent/30 relative overflow-hidden ${
                post.featured ? 'ring-1 ring-accent/40' : ''
              }`}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-electric opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              <CardHeader className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <Badge 
                    variant="secondary" 
                    className="bg-secondary/50 text-accent border border-accent/30 font-mono text-xs"
                  >
                    {post.category}
                  </Badge>
                  {post.featured && (
                    <div className="flex items-center gap-1 bg-accent/20 border border-accent/30 rounded-full px-3 py-1">
                      <Zap className="h-3 w-3 text-accent" />
                      <span className="text-xs text-accent font-mono font-medium">Featured</span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300 rounded-xl border border-transparent group-hover:border-accent/30"
                >
                  <span className="font-mono">Read Article</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="cyber" size="lg" className="px-12 py-6 rounded-2xl text-lg">
            <BookOpen className="mr-3 h-5 w-5" />
            Explore All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}