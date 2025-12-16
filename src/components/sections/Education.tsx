import Section from "@/components/Section";
import { GraduationCap, Award, Code } from "lucide-react";

const Education = () => {
  return (
    <Section
      id="education"
      title="Education & Achievements"
      subtitle="My academic background and accomplishments"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {/* Education */}
        <div className="bg-card rounded-2xl border border-border p-6 hover-lift">
          <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
            <GraduationCap className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="text-lg font-bold font-display mb-2">B.Sc. in CSE</h3>
          <p className="text-primary font-medium text-sm mb-1">North Bengal International University</p>
          <p className="text-muted-foreground text-sm mb-2">2019 – 2023</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            CGPA: 3.96 / 4.00
          </div>
        </div>

        {/* LeetCode */}
        <div className="bg-card rounded-2xl border border-border p-6 hover-lift">
          <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
            <Code className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="text-lg font-bold font-display mb-2">LeetCode</h3>
          <p className="text-muted-foreground text-sm mb-3">Competitive Programming</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            100+ Problems Solved
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-card rounded-2xl border border-border p-6 hover-lift">
          <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
            <Award className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="text-lg font-bold font-display mb-2">Certifications</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              HackerRank Problem Solving
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              HackerRank Python
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Flutter Development
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Education;
