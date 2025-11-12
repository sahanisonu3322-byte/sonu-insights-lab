import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden gradient-hero px-4 py-20">
      {/* Accent geometric shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 accent-shape opacity-90 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 accent-shape opacity-70 blur-3xl"></div>
      <div className="absolute top-20 right-20 w-64 h-64 accent-shape rounded-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left side - Text content */}
          <div className="animate-fade-in space-y-8">
            <div>
              <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight text-foreground">
                Sonu Kumar<br/>
                <span className="text-primary">Sahani</span>
              </h1>
              <div className="h-1 w-24 bg-primary mb-6"></div>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                Aspiring Data Analyst
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                Based in Warangal, India<br/>
                I'm a data analyst and biotechnology researcher.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-foreground/80 max-w-xl">
              Turning data into meaningful insights — bridging biotechnology and analytics. 
              Specialized in Python, SQL, MySQL, Power BI, and Excel for data-driven decision-making.
            </p>

            {/* Stats */}
            <div className="inline-block">
              <div className="text-6xl font-bold text-primary mb-2">4+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Years Of<br/>Experience
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform glow-effect"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="border-2 hover:scale-105 transition-transform"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            <div className="flex gap-6 pt-4">
              <a 
                href="https://github.com/sahanisonu3322-byte" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-primary transition-all"
                aria-label="GitHub"
              >
                <Github className="w-7 h-7" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sonu-kumar-sahani-b71389374/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a 
                href="mailto:sahanisonu3322@gmail.com"
                className="hover:scale-110 hover:text-primary transition-all"
                aria-label="Email"
              >
                <Mail className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Right side - Contact info */}
          <div className="animate-slide-up lg:text-right space-y-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Let's talk about your project</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">Any Type Of Query<br/>& Discussion.</h3>
                <p className="text-muted-foreground mb-6">Let's talk with me</p>
                <a 
                  href="mailto:sahanisonu3322@gmail.com" 
                  className="text-primary hover:text-primary/80 text-xl font-medium inline-flex items-center gap-2 group"
                >
                  sahanisonu3322@gmail.com
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
