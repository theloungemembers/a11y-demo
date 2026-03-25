"use client";

import { PageSection } from "@/components/ui/PageSection";
import { DemoCard } from "@/components/ui/DemoCard";
import { AccessibleInput } from "@/components/ui/AccessibleInput";
import Link from "next/link";

export default function FormsDemo() {
  return (
    <main className="mx-auto w-full max-w-4xl p-6">
      <div className="mb-8">
        <Link
          href="/"
          className="mb-4 inline-block rounded text-sm font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
        >
          &larr; Back to Home
        </Link>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Forms & Inputs</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Testing labels, descriptions, errors, and required fields.
        </p>
      </div>

      <PageSection title="Input Labels & Validation">
        <DemoCard
          title="Correct Input"
          status="good"
          statusText="Explicit Labels & ARIA"
          description="Uses explicit <label htmlFor>, an aria-describedby for descriptions and errors, and aria-invalid for validation state."
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <AccessibleInput
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              required
              description="We'll never share your email with anyone else."
            />

            <AccessibleInput
              label="Username"
              type="text"
              defaultValue="invalid_user_!!$"
              error="Username can only contain letters and numbers."
              required
            />

            <button className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
              Submit Form
            </button>
          </form>
        </DemoCard>

        <DemoCard
          title="Incorrect Input"
          status="bad"
          statusText="Placeholder Only & Visual Cues"
          description="Relies entirely on placeholders instead of labels, and visual color for errors without semantic attributes."
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex w-full max-w-sm flex-col gap-1.5">
              <input
                type="text"
                className="flex h-10 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus-visible:outline-none dark:border-zinc-700 bg-transparent"
                placeholder="First Name (Required)" // Only placeholder!
              />
              <span className="text-xs text-zinc-500">
                Please enter your legal name
              </span>
            </div>

            <div className="flex w-full max-w-sm flex-col gap-1.5">
              <label>Password</label> {/* Orphaned label */}
              <input
                type="password"
                className="flex h-10 w-full rounded-md border border-red-500 px-3 py-2 text-sm focus-visible:outline-none bg-transparent"
              />
              {/* No aria-live, role="alert", or aria-describedby to link this text to input */}
              <span className="text-xs text-red-500">Password is too short</span>
            </div>

            <button className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus-visible:outline-none">
              Submit
            </button>
          </form>
        </DemoCard>
      </PageSection>
    </main>
  );
}
