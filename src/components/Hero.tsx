import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden gradient-hero px-4 py-20">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 accent-shape opacity-90 blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 accent-shape opacity-70 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-20 right-20 w-64 h-64 accent-shape rounded-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 accent-shape rounded-full opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Available for opportunities</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-[0.95] tracking-tight">
                <span className="text-foreground">Sonu Kumar</span><br/>
                <span className="gradient-text text-glow">Sahani</span>
              </h1>
              <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-accent rounded-full mb-6 glow-effect"></div>
              <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Aspiring Data Analyst
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                📍 Based in Warangal, India<br/>
                💼 Data analyst and biotechnology researcher
              </p>
            </div>

            <div className="animate-slide-right">
              <p className="text-lg leading-relaxed text-foreground/80 max-w-xl">
                Turning data into <span className="text-primary font-semibold">meaningful insights</span> — 
                bridging biotechnology and analytics. Specialized in 
                <span className="text-foreground font-medium"> Python, SQL, MySQL, Power BI, and Excel</span> for 
                data-driven decision-making.
              </p>
            </div>

            {/* Stats Card */}
            <div className="animate-slide-right glass-card inline-block p-6 rounded-2xl glow-effect" style={{ animationDelay: '0.1s' }}>
              <div className="text-6xl font-bold gradient-text mb-2">4+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                Years Of<br/>Experience
              </div>
            </div>

            <div className="flex flex-wrap gap-4 animate-slide-right" style={{ animationDelay: '0.2s' }}>
              <Button 
                size="lg" 
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300 glow-effect shadow-lg group"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="border-2 hover:scale-105 transition-all duration-300 glass-card hover:border-primary/50"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            <div className="flex gap-6 pt-4 animate-slide-right" style={{ animationDelay: '0.3s' }}>
              <a 
                href="https://github.com/sahanisonu3322-byte" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full glass-card hover:scale-110 hover:text-primary hover:border-primary/50 transition-all duration-300 border border-border/30"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sonu-kumar-sahani-b71389374/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full glass-card hover:scale-110 hover:text-primary hover:border-primary/50 transition-all duration-300 border border-border/30"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:sahanisonu3322@gmail.com"
                className="w-12 h-12 flex items-center justify-center rounded-full glass-card hover:scale-110 hover:text-primary hover:border-primary/50 transition-all duration-300 border border-border/30"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right side - Contact card */}
          <div className="animate-slide-up lg:flex lg:justify-end">
            <div className="glass-card p-8 rounded-3xl border border-border/30 max-w-md space-y-6 glow-effect">
              <div className="space-y-4">
                <p className="text-sm text-primary uppercase tracking-wider font-semibold flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-primary"></span>
                  Let's Collaborate
                </p>
                <h3 className="text-3xl font-bold text-foreground leading-tight">
                  Any Type Of Query<br/>
                  <span className="gradient-text">& Discussion</span>
                </h3>
                <p className="text-muted-foreground">
                  Have a project in mind? Let's create something amazing together.
                </p>
              </div>
              
              <div className="pt-4 border-t border-border/30">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Email me at</p>
                <a 
                  href="mailto:sahanisonu3322@gmail.com" 
                  className="text-primary hover:text-primary/80 text-lg font-medium inline-flex items-center gap-2 group break-all transition-colors"
                >
                  sahanisonu3322@gmail.com
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </a>
              </div>

              <div className="flex gap-3 pt-2">
                <div className="flex-1 glass-card p-3 rounded-xl text-center">
                  <p className="text-2xl font-bold text-primary">5+</p>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
                <div className="flex-1 glass-card p-3 rounded-xl text-center">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-xs text-muted-foreground">Remote</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
