import React from "react";
import { cn } from "@/lib/utils";
import { StatusBadge } from "./StatusBadge";

interface DemoCardProps {
  title: string;
  status: "good" | "bad" | "info";
  statusText: string;
  description?: string;
  children: React.ReactNode;
}

export function DemoCard({
  title,
  status,
  statusText,
  description,
  children,
}: DemoCardProps) {
  return (
    <div
      className={cn(
        "mb-6 flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black"
      )}
    >
      <div className="flex flex-col items-start justify-between border-b border-zinc-200 bg-zinc-100 p-4 dark:border-zinc-800 dark:bg-zinc-900/50 sm:flex-row sm:items-center">
        <div className="mb-2 sm:mb-0">
          <h3 className="text-lg font-semibold">{title}</h3>
          {description && (
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
          )}
        </div>
        <StatusBadge status={status}>{statusText}</StatusBadge>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
