"use client";

import { useState } from "react";
import { PageSection } from "@/components/ui/PageSection";
import { DemoCard } from "@/components/ui/DemoCard";
import { AccessibleDialog } from "@/components/ui/AccessibleDialog";
import Link from "next/link";

export default function ModalDemo() {
  const [isGoodModalOpen, setIsGoodModalOpen] = useState(false);
  const [isBadModalOpen, setIsBadModalOpen] = useState(false);

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
          Modals & Dialogs
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Testing focus trapping and underlying page accessibility when a dialog
          is open.
        </p>
      </div>

      <PageSection title="Dialog Implementations">
        <DemoCard
          title="Accessible Dialog"
          status="good"
          statusText="Native <dialog>"
          description="Uses the HTML5 <dialog> element which natively traps focus, restorative focus on close, and hides the rest of the document from screen readers with 'inert' implicitly."
        >
          <button
            onClick={() => setIsGoodModalOpen(true)}
            className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Open Accessible Dialog
          </button>

          <AccessibleDialog
            isOpen={isGoodModalOpen}
            onClose={() => setIsGoodModalOpen(false)}
            title="Terms & Conditions"
          >
            <p className="text-sm">
              You are trapped here! Your focus cannot leave this dialog until
              you explicitly close it.
            </p>
            <div className="mt-4 flex gap-2">
              <button className="rounded bg-zinc-100 px-4 py-2 dark:bg-zinc-800">
                I Accept
              </button>
              <button className="rounded bg-zinc-100 px-4 py-2 text-zinc-500 dark:bg-zinc-800">
                Cancel
              </button>
            </div>
          </AccessibleDialog>
        </DemoCard>

        <DemoCard
          title="Inaccessible Modal"
          status="bad"
          statusText="Absolute Div"
          description="A visually styled div that doesn't trap keyboard focus, meaning users can tab 'behind' the modal into the main page."
        >
          <button
            onClick={() => setIsBadModalOpen(true)}
            className="rounded-md bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
          >
            Open Inaccessible Div
          </button>

          {isBadModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-black border border-zinc-200 dark:border-zinc-800">
                <h2 className="mb-4 text-xl font-bold text-black dark:text-white">Fake Modal</h2>
                <p className="mb-4 text-sm text-black dark:text-white">
                  Try pressing Tab. Your focus will leave this
                  modal and navigate the links and buttons behind it!
                </p>
                <div className="flex justify-end gap-2 text-black dark:text-white">
                  <button
                    onClick={() => setIsBadModalOpen(false)}
                    className="rounded bg-zinc-100 px-4 py-2 dark:bg-zinc-800"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </DemoCard>
      </PageSection>
    </main>
  );
}
