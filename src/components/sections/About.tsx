import Section from "@/components/Section";
import { Code, Layers, Smartphone, Palette } from "lucide-react";

const highlights = [
  { icon: Smartphone, label: "Mobile First", value: "Flutter Expert" },
  { icon: Code, label: "Clean Code", value: "Best Practices" },
  { icon: Layers, label: "Architecture", value: "MVVM & Clean" },
  { icon: Palette, label: "UI/UX", value: "Pixel Perfect" },
];

const About = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know me better"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            I'm a dedicated <span className="text-primary font-medium">Flutter Developer</span> with 
            a strong foundation in mobile app development. I specialize in building cross-platform 
            applications that deliver exceptional user experiences with clean, maintainable code.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My expertise spans from implementing complex state management solutions using 
            <span className="text-primary font-medium"> GetX and Riverpod</span> to crafting 
            beautiful UI designs that convert Figma mockups into pixel-perfect Flutter interfaces. 
            I'm passionate about clean architecture, performance optimization, and staying current 
            with the latest Flutter ecosystem updates.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not coding, you'll find me solving problems on LeetCode (100+ problems solved!), 
            exploring new technologies, or contributing to the developer community.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <div
              key={item.label}
              className="p-6 bg-card rounded-2xl border border-border hover-lift text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <p className="font-bold font-display">{item.value}</p>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
