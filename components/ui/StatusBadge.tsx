import React from "react";
import { cn } from "@/lib/utils";

export function StatusBadge({
  status,
  children,
}: {
  status: "good" | "bad" | "info";
  children: React.ReactNode;
}) {
  const statusStyles = {
    good: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800",
    bad: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800",
    info: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-1 text-xs font-semibold",
        statusStyles[status]
      )}
    >
      {children}
    </span>
  );
}
