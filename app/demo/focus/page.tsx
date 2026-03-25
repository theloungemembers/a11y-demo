"use client";

import { PageSection } from "@/components/ui/PageSection";
import { DemoCard } from "@/components/ui/DemoCard";
import Link from "next/link";
import { useRef } from "react";

export default function FocusDemo() {
  const customFocusRef = useRef<HTMLDivElement>(null);

  const moveFocus = () => {
    if (customFocusRef.current) {
      customFocusRef.current.focus();
    }
  };

  return (
    <main className="mx-auto w-full max-w-4xl p-6">
      <div className="mb-8">
        <Link
          href="/"
          className="mb-4 inline-block rounded text-sm font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
        >
          &larr; Back to Home
        </Link>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Focus Management</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Testing keyboard navigation, tab order, and programmatically moving
          focus.
        </p>
      </div>

      <PageSection title="Focus Movement">
        <DemoCard
          title="Directing Focus"
          status="good"
          statusText="tabIndex={-1}"
          description="Clicking the button moves focus to the alert container, which is programmatically focusable due to tabIndex={-1}."
        >
          <div className="space-y-4">
            <button
              onClick={moveFocus}
              className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Move focus to message
            </button>
            <div
              ref={customFocusRef}
              tabIndex={-1}
              className="rounded-md border border-green-200 bg-green-50 p-4 text-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 dark:border-green-900/50 dark:bg-green-900/20 dark:text-green-400"
            >
              This container received focus programmatically! Screen readers
              will announce it now.
            </div>
          </div>
        </DemoCard>

        <DemoCard
          title="Unfocusable Error Message"
          status="bad"
          statusText="No tabIndex"
          description="Clicking the button might scroll things into view, but without tabIndex, focus is lost and screen readers won't read the new content automatically."
        >
          <div className="space-y-4">
            <button className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white outline-none hover:bg-blue-700 focus:outline-none focus-visible:outline-none">
              {`Show error (doesn't move focus)`}
            </button>
            <div
              // No tabIndex here
              className="rounded-md border border-red-200 bg-red-50 p-4 text-red-800 dark:border-red-900/50 dark:bg-red-900/20 dark:text-red-400"
            >
              {`This is an important error, but you can't tab to it or
              programmatically focus it.`}
            </div>
          </div>
        </DemoCard>
      </PageSection>

      <PageSection title="Tab Order overrides">
        <DemoCard
          title="Logical Tab Order"
          status="good"
          statusText="DOM Order"
          description="Focus follows the visual layout implicitly based on DOM structure."
        >
          <div className="flex gap-4 rounded-md border border-zinc-200 p-4 dark:border-zinc-800">
            <button className="rounded border px-4 py-2 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-300">
              First
            </button>
            <button className="rounded border px-4 py-2 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-300">
              Second
            </button>
            <button className="rounded border px-4 py-2 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-300">
              Third
            </button>
          </div>
        </DemoCard>

        <DemoCard
          title="Positive tabindex"
          status="bad"
          statusText="tabindex > 0"
          description="Never use positive tabindex. It creates a chaotic, unpredictable reading order."
        >
          <div className="flex gap-4 rounded-md border border-zinc-200 p-4 dark:border-zinc-800">
            <button
              tabIndex={3}
              className="rounded border border-red-200 px-4 py-2 outline-none hover:bg-zinc-100 dark:border-red-900 dark:hover:bg-zinc-800 focus:outline-none"
            >
              Visual First (Tab index: 3)
            </button>
            <button
              tabIndex={1}
              className="rounded border border-red-200 px-4 py-2 outline-none hover:bg-zinc-100 dark:border-red-900 dark:hover:bg-zinc-800 focus:outline-none"
            >
              Visual Second (Tab index: 1)
            </button>
            <button
              tabIndex={2}
              className="rounded border border-red-200 px-4 py-2 outline-none hover:bg-zinc-100 dark:border-red-900 dark:hover:bg-zinc-800 focus:outline-none"
            >
              Visual Third (Tab index: 2)
            </button>
          </div>
        </DemoCard>
      </PageSection>
    </main>
  );
}
