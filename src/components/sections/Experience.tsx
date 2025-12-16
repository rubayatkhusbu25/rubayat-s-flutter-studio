import Section from "@/components/Section";
import TimelineItem from "@/components/TimelineItem";

const experiences = [
  {
    title: "Flutter Developer",
    subtitle: "Astha Insights",
    date: "Aug 2024 – Jan 2025",
    description: [
      "Developed and maintained cross-platform mobile applications using Flutter",
      "Implemented clean architecture patterns and state management solutions",
      "Collaborated with UI/UX designers to deliver pixel-perfect interfaces",
      "Integrated REST APIs and Firebase services for backend functionality",
    ],
  },
  {
    title: "Mobile App Developer Intern",
    subtitle: "Prodigy InfoTech",
    date: "Apr – May 2024",
    description: [
      "Built mobile applications using Flutter framework",
      "Gained hands-on experience with state management and API integration",
      "Participated in code reviews and agile development processes",
    ],
  },
];

const Experience = () => {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="My professional journey"
      className="bg-muted/30"
    >
      {/* Timeline line */}
      <div className="relative">
        <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.title}
              {...exp}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
