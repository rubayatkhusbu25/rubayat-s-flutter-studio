import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description: string | string[];
  isLeft?: boolean;
  className?: string;
}

const TimelineItem = ({
  title,
  subtitle,
  date,
  description,
  isLeft = false,
  className,
}: TimelineItemProps) => {
  const descriptionItems = Array.isArray(description) ? description : [description];

  return (
    <div className={cn("relative flex items-start gap-4", className)}>
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full gradient-bg border-4 border-background z-10" />

      {/* Content */}
      <div
        className={cn(
          "ml-8 md:ml-0 md:w-1/2 p-5 bg-card rounded-xl border border-border hover-lift",
          isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-[50%]"
        )}
      >
        <span className="text-sm text-primary font-medium">{date}</span>
        <h3 className="text-lg font-bold font-display mt-1">{title}</h3>
        <p className="text-muted-foreground text-sm mb-2">{subtitle}</p>
        <ul className={cn("text-sm text-muted-foreground space-y-1", isLeft ? "md:ml-auto" : "")}>
          {descriptionItems.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-1.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;
