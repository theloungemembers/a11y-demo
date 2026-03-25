"use client";

import { PageSection } from "@/components/ui/PageSection";
import { DemoCard } from "@/components/ui/DemoCard";
import Link from "next/link";

export default function ListTableDemo() {
  return (
    <main className="mx-auto w-full max-w-4xl p-6">
      <div className="mb-8">
        <Link
          href="/"
          className="mb-4 inline-block rounded text-sm font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
        >
          &larr; Back to Home
        </Link>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Lists & Tables</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Testing data structures, reading order, and semantic table headers.
        </p>
      </div>

      <PageSection title="Lists">
        <DemoCard
          title="Semantic Lists"
          status="good"
          statusText="<ul> and <li>"
          description="Screen readers announce 'List with 3 items' letting users know what's coming and allowing them to skip the list entirely."
        >
          <ul className="list-disc space-y-1 pl-5">
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
          </ul>
        </DemoCard>

        <DemoCard
          title="Fake Lists"
          status="bad"
          statusText="<br> delimited"
          description="Visually looks like a list, but screen readers just read it as a giant run-on paragraph."
        >
          <div className="border-l-2 border-red-200 pl-2">
            • Item one
            <br />
            • Item two
            <br />• Item three
          </div>
        </DemoCard>
      </PageSection>

      <PageSection title="Tables">
        <DemoCard
          title="Accessible Table"
          status="good"
          statusText="<th> with scope"
          description="Uses proper <thead>, <tbody>, and <th> with scope attributes so screen readers can associate cells with their row/column headers."
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
                <tr>
                  <th scope="col" className="p-3 font-semibold">
                    Name
                  </th>
                  <th scope="col" className="p-3 font-semibold">
                    Role
                  </th>
                  <th scope="col" className="p-3 font-semibold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                <tr>
                  <td className="p-3">Alice</td>
                  <td className="p-3">Admin</td>
                  <td className="p-3">Active</td>
                </tr>
                <tr>
                  <td className="p-3">Bob</td>
                  <td className="p-3">User</td>
                  <td className="p-3">Inactive</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DemoCard>

        <DemoCard
          title="CSS Grid Table"
          status="bad"
          statusText="<div className='grid'>"
          description="Looks exactly like a table, but screen readers treat it as unconnected text nodes. Users can't navigate by cell or row."
        >
          <div className="w-full overflow-hidden rounded-md border border-zinc-200 border-collapse text-sm dark:border-zinc-800">
            <div className="grid grid-cols-3 border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="p-3 font-semibold">Name</div>
              <div className="p-3 font-semibold">Role</div>
              <div className="p-3 font-semibold">Status</div>
            </div>
            <div className="grid grid-cols-3 border-b border-zinc-200 dark:border-zinc-800">
              <div className="p-3">Alice</div>
              <div className="p-3">Admin</div>
              <div className="p-3">Active</div>
            </div>
            <div className="grid grid-cols-3">
              <div className="p-3">Bob</div>
              <div className="p-3">User</div>
              <div className="p-3">Inactive</div>
            </div>
          </div>
        </DemoCard>
      </PageSection>
    </main>
  );
}
