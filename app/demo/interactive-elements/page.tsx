"use client";

import { PageSection } from "@/components/ui/PageSection";
import { DemoCard } from "@/components/ui/DemoCard";
import Link from "next/link";

export default function InteractiveElementsDemo() {
  const handleClick = () => alert("Clicked!");

  return (
    <main className="mx-auto w-full max-w-4xl p-6">
      <div className="mb-8">
        <Link
          href="/"
          className="mb-4 inline-block rounded text-sm font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
        >
          &larr; Back to Home
        </Link>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Interactive Elements
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Testing buttons, links, and the hazards of fake clickable elements.
        </p>
      </div>

      <PageSection title="Buttons vs Divs">
        <DemoCard
          title="Native Button"
          status="good"
          statusText="<button>"
          description="Natively receives tab focus, responds to Space and Enter keys, and is announced as a 'Button'."
        >
          <button
            onClick={handleClick}
            className="rounded-md bg-zinc-900 px-4 py-2 font-medium text-white hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-black"
          >
            Real Button
          </button>
        </DemoCard>

        <DemoCard
          title="Fake Button (Div)"
          status="bad"
          statusText="<div onClick={}>"
          description="Divs do not receive focus, do not respond to keyboard events (Space/Enter), and do not tell screen readers they are interactive."
        >
          <div
            onClick={handleClick}
            className="inline-block cursor-pointer rounded-md bg-zinc-900 px-4 py-2 font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
          >
            Fake Button
          </div>
        </DemoCard>

        <DemoCard
          title="Patched Fake Button"
          status="info"
          statusText="role='button'"
          description="If you MUST use a div (you shouldn't), you have to manually add role, tabIndex, and keyboard event listeners. It's error-prone."
        >
          <div
            role="button"
            tabIndex={0}
            onClick={handleClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClick();
              }
            }}
            className="inline-block cursor-pointer rounded-md border-2 border-dashed border-zinc-900 px-4 py-2 font-medium hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:border-zinc-100 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-300"
          >
            Patched Div Button
          </div>
        </DemoCard>
      </PageSection>
    </main>
  );
}
