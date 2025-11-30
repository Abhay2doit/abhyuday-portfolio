import { cn } from "@/lib/utils";

interface RetroStripesProps {
  className?: string;
  variant?: "vertical" | "diagonal";
}

const RetroStripes = ({ className, variant = "diagonal" }: RetroStripesProps) => {
  const stripeColors = [
    "bg-retro-teal",
    "bg-retro-orange", 
    "bg-retro-green",
    "bg-retro-burgundy",
  ];

  if (variant === "diagonal") {
    return (
      <div className={cn("flex overflow-hidden", className)}>
        {stripeColors.map((color, index) => (
          <div
            key={index}
            className={cn(
              color,
              "w-8 md:w-12 lg:w-16 h-full transform -skew-x-12 animate-stripe"
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={cn("flex gap-1", className)}>
      {stripeColors.map((color, index) => (
        <div
          key={index}
          className={cn(color, "w-3 md:w-4 h-full animate-stripe")}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </div>
  );
};

export default RetroStripes;
