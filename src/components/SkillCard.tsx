import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  level?: number;
  className?: string;
}

const SkillCard = ({ name, icon: Icon, level = 80, className }: SkillCardProps) => {
  return (
    <div
      className={cn(
        "group relative p-4 rounded-xl bg-card border border-border hover-lift",
        "flex flex-col items-center gap-3 text-center",
        className
      )}
    >
      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <span className="font-medium text-sm">{name}</span>
      <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full gradient-bg rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillCard;
