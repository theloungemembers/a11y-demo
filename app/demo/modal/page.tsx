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
          &larr; 홈으로 돌아가기
        </Link>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Modals & Dialogs
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          다이얼로그가 열려 있을 때 포커스 트래핑과 배경 페이지의 접근성을 테스트합니다.
        </p>
      </div>

      <PageSection title="다이얼로그 구현체">
        <DemoCard
          title="접근성 있는 다이얼로그"
          status="good"
          statusText="Native <dialog>"
          description="HTML5 <dialog> 요소를 사용하여 기본적으로 포커스를 가두고, 닫을 때 포커스를 복원하며, 'inert' 속성을 통해 스크린 리더에서 배경 문서가 숨겨집니다."
        >
          <button
            onClick={() => setIsGoodModalOpen(true)}
            className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            접근성 있는 다이얼로그 열기
          </button>

          <AccessibleDialog
            isOpen={isGoodModalOpen}
            onClose={() => setIsGoodModalOpen(false)}
            title="이용 약관"
          >
            <p className="text-sm">
              이곳에 갇혔습니다! 명시적으로 닫기 전까지 포커스가 이 다이얼로그를 벗어날 수 없습니다.
            </p>
            <div className="mt-4 flex gap-2">
              <button className="rounded bg-zinc-100 px-4 py-2 dark:bg-zinc-800">
                동의합니다
              </button>
              <button className="rounded bg-zinc-100 px-4 py-2 text-zinc-500 dark:bg-zinc-800">
                취소
              </button>
            </div>
          </AccessibleDialog>
        </DemoCard>

        <DemoCard
          title="접근성 없는 모달"
          status="bad"
          statusText="Absolute Div"
          description="시각적으로 스타일링 되었으나 키보드 포커스를 가두지 않는 div입니다. 사용자는 탭 키를 통해 모달 '뒤'에 있는 메인 페이지로 이동할 수 있습니다."
        >
          <button
            onClick={() => setIsBadModalOpen(true)}
            className="rounded-md bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
          >
            접근성 없는 Div 열기
          </button>

          {isBadModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-black border border-zinc-200 dark:border-zinc-800">
                <h2 className="mb-4 text-xl font-bold text-black dark:text-white">가짜 모달</h2>
                <p className="mb-4 text-sm text-black dark:text-white">
                  탭(Tab) 키를 눌러보세요. 포커스가 이 모달을 벗어나
                  뒤에 있는 링크와 버튼들을 탐색하게 될 것입니다!
                </p>
                <div className="flex justify-end gap-2 text-black dark:text-white">
                  <button
                    onClick={() => setIsBadModalOpen(false)}
                    className="rounded bg-zinc-100 px-4 py-2 dark:bg-zinc-800"
                  >
                    닫기
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
