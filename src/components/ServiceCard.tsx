import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const ServiceCard = ({ title, description, icon: Icon, className }: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "group p-6 bg-card rounded-2xl border border-border hover-lift text-center",
        className
      )}
    >
      <div className="mx-auto mb-4 w-14 h-14 rounded-xl gradient-bg flex items-center justify-center">
        <Icon className="w-7 h-7 text-primary-foreground" />
      </div>
      <h3 className="text-lg font-bold font-display mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
