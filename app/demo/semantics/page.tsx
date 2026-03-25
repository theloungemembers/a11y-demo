import { PageSection } from "@/components/ui/PageSection";
import { DemoCard } from "@/components/ui/DemoCard";
import Link from "next/link";

export default function SemanticsDemo() {
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
          Semantics & Landmarks
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Testing landmarks (header, nav, main, footer) and heading hierarchy
          structure.
        </p>
      </div>

      <PageSection title="Landmarks">
        <DemoCard
          title="Correct Landmarks"
          status="good"
          statusText="Semantic HTML5"
          description="Uses native structural elements like <header>, <main>, and <footer>."
        >
          <div className="overflow-hidden rounded-md border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
            <header className="border-b border-zinc-200 bg-zinc-100 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="text-lg font-bold">
                App Header (<code className="text-sm">&lt;header&gt;</code>)
              </h2>
              <nav aria-label="Main Navigation">
                <span className="text-sm text-zinc-500">
                  Navigation links (<code className="text-sm">&lt;nav&gt;</code>)
                </span>
              </nav>
            </header>
            <main className="min-h-[100px] bg-white p-4 dark:bg-black">
              Main Content Area (<code className="text-sm">&lt;main&gt;</code>)
            </main>
            <footer className="border-t border-zinc-200 bg-zinc-100 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900">
              App Footer (<code className="text-sm">&lt;footer&gt;</code>)
            </footer>
          </div>
        </DemoCard>

        <DemoCard
          title="Incorrect Landmarks"
          status="bad"
          statusText="Generic <div>s"
          description="Uses only generic container elements, providing no semantic structure for screen readers."
        >
          <div className="overflow-hidden rounded-md border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
            <div className="border-b border-zinc-200 bg-zinc-100 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-lg font-bold">
                App Header (<code className="text-sm">&lt;div&gt;</code>)
              </div>
              <div className="text-sm text-zinc-500">
                Navigation links (<code className="text-sm">&lt;div&gt;</code>)
              </div>
            </div>
            <div className="min-h-[100px] bg-white p-4 dark:bg-black">
              Main Content Area (<code className="text-sm">&lt;div&gt;</code>)
            </div>
            <div className="border-t border-zinc-200 bg-zinc-100 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900">
              App Footer (<code className="text-sm">&lt;div&gt;</code>)
            </div>
          </div>
        </DemoCard>
      </PageSection>

      <PageSection title="Heading Hierarchy">
        <DemoCard
          title="Correct Hierarchy"
          status="good"
          statusText="Sequential Headings"
          description="Headings follow a logical, sequential order (h1 -> h2 -> h3)."
        >
          <div className="flex flex-col gap-2 rounded-md border border-zinc-200 p-4 dark:border-zinc-800">
            <h2 className="mb-2 border-b pb-2 text-xl font-bold">
              Section Heading (h2)
            </h2>
            <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">Content describing the section.</p>
            <h3 className="text-lg font-semibold">Subsection (h3)</h3>
            <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">Details for the subsection.</p>
            <h4 className="text-base font-medium">Sub-subsection (h4)</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">Granular details.</p>
          </div>
        </DemoCard>

        <DemoCard
          title="Incorrect Hierarchy"
          status="bad"
          statusText="Skipped Headings"
          description="Headings skip levels, confusing screen reader navigation."
        >
          <div className="flex flex-col gap-2 rounded-md border border-zinc-200 p-4 dark:border-zinc-800">
            <h2 className="mb-2 border-b pb-2 text-xl font-bold">
              Section Heading (h2)
            </h2>
            <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">Content describing the section.</p>
            {/* Intentionally skipped h3 */}
            <h4 className="text-lg font-semibold">
              Subsection styled like h3 but is h4 (h4)
            </h4>
            <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">This is confusing to navigate by headings.</p>
            {/* Intentionally using h6 for something that should be h3 */}
            <h6 className="text-base font-medium">
              Random h6 used just for its font size
            </h6>
          </div>
        </DemoCard>
      </PageSection>
    </main>
  );
}
