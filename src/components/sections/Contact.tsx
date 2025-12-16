import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Let's build something amazing together"
    >
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <p className="text-muted-foreground leading-relaxed">
            I'm currently open to new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:rubayet.khusbu@gmail.com" className="font-medium hover:text-primary transition-colors">
                  rubayet.khusbu@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/rubayatkhusbu25" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/rubayatislam25/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:rubayet.khusbu@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <Input placeholder="What's this about?" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea placeholder="Your message..." rows={5} />
            </div>
            <Button type="submit" size="lg" className="w-full">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Form submission coming soon
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
