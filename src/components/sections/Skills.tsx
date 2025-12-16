import Section from "@/components/Section";
import SkillCard from "@/components/SkillCard";
import {
  Smartphone,
  Code2,
  Flame,
  Database,
  GitBranch,
  Palette,
  Server,
  Layers,
  Zap,
  Box,
} from "lucide-react";

const skills = [
  { name: "Flutter", icon: Smartphone, level: 95 },
  { name: "Dart", icon: Code2, level: 90 },
  { name: "Firebase", icon: Flame, level: 85 },
  { name: "REST APIs", icon: Server, level: 88 },
  { name: "GetX", icon: Zap, level: 90 },
  { name: "Riverpod", icon: Layers, level: 80 },
  { name: "SQLite & Hive", icon: Database, level: 82 },
  { name: "Git & GitHub", icon: GitBranch, level: 85 },
  { name: "Figma", icon: Palette, level: 75 },
  { name: "Clean Architecture", icon: Box, level: 85 },
];

const Skills = () => {
  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      subtitle="Technologies I work with"
      className="bg-muted/30"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            level={skill.level}
            className={`animate-slide-up stagger-${(index % 6) + 1}`}
          />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
