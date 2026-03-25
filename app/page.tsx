import Link from "next/link";
import { PageSection } from "@/components/ui/PageSection";

const demos = [
  {
    href: "/demo/semantics",
    title: "Semantics & Landmarks",
    description: "Test heading hierarchy and landmark roles",
  },
  {
    href: "/demo/forms",
    title: "Forms & Inputs",
    description: "Test labels, errors, and required fields",
  },
  {
    href: "/demo/focus",
    title: "Focus Management",
    description: "Test keyboard navigation and tab order",
  },
  {
    href: "/demo/modal",
    title: "Modals & Dialogs",
    description: "Test focus trapping and aria-hidden properties",
  },
  {
    href: "/demo/live-region",
    title: "Live Regions",
    description: "Test aria-live announcements for dynamic content",
  },
  {
    href: "/demo/interactive-elements",
    title: "Interactive Elements",
    description: "Test buttons vs fake clickable elements",
  },
  {
    href: "/demo/list-and-table",
    title: "Lists & Tables",
    description: "Test reading order and table structure",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl p-6">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight">
        Accessibility Demo Playground
      </h1>
      <p className="mb-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        A practical QA/dev sandbox for reproducing and validating accessibility
        behavior in mobile app WebViews and standard browsers.
      </p>

      <PageSection
        title="Demo Scenarios"
        className="border-0 bg-transparent p-0 dark:bg-transparent"
      >
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {demos.map((demo) => (
            <li key={demo.href}>
              <Link
                href={demo.href}
                className="block h-full rounded-xl border border-zinc-200 p-6 transition-colors hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:border-zinc-800 dark:hover:bg-zinc-900/50 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-zinc-950"
              >
                <h3 className="mb-2 text-xl font-semibold">{demo.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {demo.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </PageSection>
    </main>
  );
}
