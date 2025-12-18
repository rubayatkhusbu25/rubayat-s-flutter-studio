import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-2 animate-fade-in">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 animate-slide-up">
              Rubayat Islam
            </h1>
            <h2 className="text-2xl md:text-3xl font-display gradient-text mb-6 animate-slide-up stagger-1">
              Flutter Developer
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up stagger-2">
              Passionate about building amazing, high-performance mobile applications 
              with clean architecture and exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up stagger-3">
              <Button size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/RUBAYAT_ISLAM.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start animate-slide-up stagger-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/rubayatkhusbu25" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/rubayatislam25/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:rubayet.khusbu@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 animate-float">
                <img
                  src={profileImage}
                  alt="Rubayat Islam"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: "20s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
