"use client";

import { useState } from "react";
import { PageSection } from "@/components/ui/PageSection";
import { DemoCard } from "@/components/ui/DemoCard";
import Link from "next/link";

export default function LiveRegionDemo() {
  const [goodMessage, setGoodMessage] = useState("");
  const [badMessage, setBadMessage] = useState("");

  const triggerGood = () => {
    setGoodMessage("Form saved successfully! You can now proceed.");
    setTimeout(() => setGoodMessage(""), 5000);
  };

  const triggerBad = () => {
    setBadMessage("Error: The connection timed out.");
    setTimeout(() => setBadMessage(""), 5000);
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
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Live Regions (ARIA-Live)
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Testing dynamic content announcements without moving focus.
        </p>
      </div>

      <PageSection title="Dynamic Announcements">
        <DemoCard
          title="Polite Live Region"
          status="good"
          statusText="aria-live='polite'"
          description="Screen readers will announce the message after finishing their current sentence. Best for non-critical updates like 'Saved'."
        >
          <div className="space-y-4">
            <button
              onClick={triggerGood}
              className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Simulate Save
            </button>
            <div
              aria-live="polite"
              className="min-h-[24px] text-sm font-medium text-green-700 dark:text-green-400"
            >
              {goodMessage}
            </div>
          </div>
        </DemoCard>

        <DemoCard
          title="Hidden Dynamic Changes"
          status="bad"
          statusText="No aria-live"
          description="Visual text appears, but screen readers are never notified because the container lacks aria-live or role='status'."
        >
          <div className="space-y-4">
            <button
              onClick={triggerBad}
              className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white outline-none hover:bg-blue-700 focus:outline-none focus-visible:outline-none"
            >
              Simulate Error
            </button>
            <div className="min-h-[24px] text-sm font-medium text-red-600 dark:text-red-400">
              {badMessage}
            </div>
          </div>
        </DemoCard>
      </PageSection>
    </main>
  );
}
