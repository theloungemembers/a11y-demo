import React, { useId } from "react";
import { cn } from "@/lib/utils";

export interface AccessibleInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  error?: string;
}

export function AccessibleInput({
  label,
  description,
  error,
  className,
  ...props
}: AccessibleInputProps) {
  const id = useId();
  const descriptionId = `${id}-description`;
  const errorId = `${id}-error`;

  return (
    <div className="flex w-full max-w-sm flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
        {label}{" "}
        {props.required && (
          <span aria-hidden="true" className="text-red-500">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        className={cn(
          "flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-950 dark:text-zinc-50 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400",
          error
            ? "border-red-500 focus-visible:ring-red-500"
            : "border-zinc-300 focus-visible:ring-zinc-950 dark:border-zinc-700 dark:focus-visible:ring-zinc-300",
          className
        )}
        aria-describedby={
          [description ? descriptionId : null, error ? errorId : null]
            .filter(Boolean)
            .join(" ") || undefined
        }
        aria-invalid={!!error}
        {...props}
      />
      {description && (
        <p
          id={descriptionId}
          className="text-xs text-zinc-500 dark:text-zinc-400"
        >
          {description}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-xs text-red-500 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
