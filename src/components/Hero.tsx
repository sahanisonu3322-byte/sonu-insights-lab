import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero text-primary-foreground px-4 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Sonu Kumar Sahani
        </h1>
        <p className="text-xl md:text-2xl mb-4 opacity-90">
          Aspiring Data Analyst | Python • SQL • MySQL • Power BI • Excel
        </p>
        <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto">
          Turning data into meaningful insights — bridging biotechnology and analytics.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button 
            size="lg" 
            variant="secondary"
            asChild
            className="hover:scale-105 transition-transform"
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            asChild
            className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
        <div className="flex gap-4 justify-center">
          <a 
            href="https://github.com/sahanisonu3322-byte" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/sonu-kumar-sahani-b71389374/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:sahanisonu3322@gmail.com"
            className="hover:scale-110 transition-transform"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
