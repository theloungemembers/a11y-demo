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
          &larr; 홈으로 돌아가기
        </Link>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Interactive Elements
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          버튼, 링크, 그리고 가짜 클릭 가능 요소의 위험성을 테스트합니다.
        </p>
      </div>

      <PageSection title="버튼 vs Div">
        <DemoCard
          title="기본 버튼"
          status="good"
          statusText="<button>"
          description="기본적으로 탭 포커스를 받고, Space와 Enter 키에 반응하며, 스크린 리더에서 '버튼'으로 읽힙니다."
        >
          <button
            onClick={handleClick}
            className="rounded-md bg-zinc-900 px-4 py-2 font-medium text-white hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-black"
          >
            진짜 버튼
          </button>
        </DemoCard>

        <DemoCard
          title="가짜 버튼 (Div)"
          status="bad"
          statusText="<div onClick={}>"
          description="Div는 포커스를 받지 못하고, 키보드 이벤트(Space/Enter)에 반응하지 않으며, 스크린 리더에게 인터랙티브 요소라고 알려주지 않습니다."
        >
          <div
            onClick={handleClick}
            className="inline-block cursor-pointer rounded-md bg-zinc-900 px-4 py-2 font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
          >
            가짜 버튼
          </div>
        </DemoCard>

        <DemoCard
          title="수정된 가짜 버튼"
          status="info"
          statusText="role='button'"
          description="만약 반드시 div를 사용해야 한다면(권장하지 않음), role, tabIndex, 그리고 키보드 이벤트 리스너를 수동으로 추가해야 합니다. 이는 오류를 발생시키기 쉽습니다."
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
            수정된 Div 버튼
          </div>
        </DemoCard>
      </PageSection>
    </main>
  );
}
