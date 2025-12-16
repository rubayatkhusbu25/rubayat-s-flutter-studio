import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import { Smartphone, Palette, Flame, Bug, Zap, Code2 } from "lucide-react";

const services = [
  {
    title: "Flutter App Development",
    description: "Building high-performance, cross-platform mobile applications with beautiful UI and smooth animations.",
    icon: Smartphone,
  },
  {
    title: "UI to Flutter Conversion",
    description: "Transforming Figma, Adobe XD, or sketch designs into pixel-perfect Flutter interfaces.",
    icon: Palette,
  },
  {
    title: "Firebase Integration",
    description: "Setting up authentication, real-time database, cloud storage, and push notifications.",
    icon: Flame,
  },
  {
    title: "API Integration",
    description: "Connecting your app with REST APIs, GraphQL, and third-party services seamlessly.",
    icon: Code2,
  },
  {
    title: "Bug Fixing",
    description: "Identifying and resolving bugs, crashes, and performance issues in existing Flutter apps.",
    icon: Bug,
  },
  {
    title: "App Optimization",
    description: "Improving app performance, reducing load times, and optimizing memory usage.",
    icon: Zap,
  },
];

const Services = () => {
  return (
    <Section
      id="services"
      title="Services"
      subtitle="What I can do for you"
      className="bg-muted/30"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            {...service}
            className={`animate-slide-up stagger-${(index % 6) + 1}`}
          />
        ))}
      </div>
    </Section>
  );
};

export default Services;
