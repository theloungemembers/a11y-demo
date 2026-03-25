import React from "react";
import { cn } from "@/lib/utils";

interface PageSectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  as?: "section" | "article" | "div";
}

export function PageSection({
  title,
  as: Component = "section",
  className,
  children,
  ...props
}: PageSectionProps) {
  return (
    <Component
      className={cn(
        "mb-8 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/40",
        className
      )}
      {...props}
    >
      {title && (
        <h2 className="mb-4 text-2xl font-bold tracking-tight">{title}</h2>
      )}
      {children}
    </Component>
  );
}
