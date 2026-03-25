"use client";

import React, { useEffect, useRef } from "react";

interface AccessibleDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function AccessibleDialog({
  isOpen,
  onClose,
  title,
  children,
}: AccessibleDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen) {
      if (!dialog?.open) {
        dialog?.showModal();
      }
    } else {
      if (dialog?.open) {
        dialog?.close();
      }
    }
  }, [isOpen]);

  // Handle native close event (e.g. Escape key)
  const handleClose = () => {
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      aria-labelledby="dialog-title"
      className="m-auto w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 shadow-2xl backdrop:bg-black/50 open:animate-in open:zoom-in-95 dark:border-zinc-800 dark:bg-black dark:text-zinc-50"
    >
      <div className="flex flex-col gap-4">
        <h2 id="dialog-title" className="text-xl font-bold">
          {title}
        </h2>
        <div>{children}</div>
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md bg-zinc-100 px-4 py-2 font-medium hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-black"
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}
