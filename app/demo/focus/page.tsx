"use client";

import { PageSection } from "@/components/ui/PageSection";
import { DemoCard } from "@/components/ui/DemoCard";
import Link from "next/link";
import { useRef } from "react";

export default function FocusDemo() {
  const customFocusRef = useRef<HTMLDivElement>(null);

  const moveFocus = () => {
    if (customFocusRef.current) {
      customFocusRef.current.focus();
    }
  };

  return (
    <main className="mx-auto w-full max-w-4xl p-6">
      <div className="mb-8">
        <Link
          href="/"
          className="mb-4 inline-block rounded text-sm font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300"
        >
          &larr; 홈으로 돌아가기
        </Link>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Focus Management</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          키보드 네비게이션, 탭 순서(Tab Order), 프로그래밍 방식의 포커스 이동을 테스트합니다.
        </p>
      </div>

      <PageSection title="포커스 이동">
        <DemoCard
          title="직접적인 포커스 이동"
          status="good"
          statusText="tabIndex={-1}"
          description="버튼을 클릭하면 tabIndex={-1} 속성으로 인해 프로그램적으로 포커스를 받을 수 있는 알림 컨테이너로 포커스가 이동합니다."
        >
          <div className="space-y-4">
            <button
              onClick={moveFocus}
              className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              메시지로 포커스 이동
            </button>
            <div
              ref={customFocusRef}
              tabIndex={-1}
              className="rounded-md border border-green-200 bg-green-50 p-4 text-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 dark:border-green-900/50 dark:bg-green-900/20 dark:text-green-400"
            >
              이 컨테이너는 프로그램적으로 포커스를 받았습니다! 이제 스크린 리더가 이 내용을 읽어줍니다.
            </div>
          </div>
        </DemoCard>

        <DemoCard
          title="포커스할 수 없는 에러 메시지"
          status="bad"
          statusText="No tabIndex"
          description="버튼을 클릭하면 스크롤은 이동할 수 있지만, tabIndex가 없어서 포커스를 잃게 되고 스크린 리더는 새로운 내용을 자동으로 읽지 못합니다."
        >
          <div className="space-y-4">
            <button className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white outline-none hover:bg-blue-700 focus:outline-none focus-visible:outline-none">
              {`에러 표시 (포커스 이동 안됨)`}
            </button>
            <div
              // No tabIndex here
              className="rounded-md border border-red-200 bg-red-50 p-4 text-red-800 dark:border-red-900/50 dark:bg-red-900/20 dark:text-red-400"
            >
              {`이것은 중요한 에러 메시지입니다. 하지만 탭 키로 접근할 수 없으며 프로그램적으로 포커스를 줄 수도 없습니다.`}
            </div>
          </div>
        </DemoCard>
      </PageSection>

      <PageSection title="탭 순서(Tab Order) 오버라이드">
        <DemoCard
          title="논리적인 탭 순서"
          status="good"
          statusText="DOM Order"
          description="포커스는 DOM 구조에 기반하여 시각적 레이아웃을 암시적으로 따릅니다."
        >
          <div className="flex gap-4 rounded-md border border-zinc-200 p-4 dark:border-zinc-800">
            <button className="rounded border px-4 py-2 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-300">
              첫 번째
            </button>
            <button className="rounded border px-4 py-2 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-300">
              두 번째
            </button>
            <button className="rounded border px-4 py-2 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-300">
              세 번째
            </button>
          </div>
        </DemoCard>

        <DemoCard
          title="양수 tabindex 사용"
          status="bad"
          statusText="tabindex > 0"
          description="양수 tabindex는 사용하지 마세요. 읽기 순서가 예측할 수 없을 정도로 혼란스러워집니다."
        >
          <div className="flex gap-4 rounded-md border border-zinc-200 p-4 dark:border-zinc-800">
            <button
              tabIndex={3}
              className="rounded border border-red-200 px-4 py-2 outline-none hover:bg-zinc-100 dark:border-red-900 dark:hover:bg-zinc-800 focus:outline-none"
            >
              시각적 첫 번째 (Tab index: 3)
            </button>
            <button
              tabIndex={1}
              className="rounded border border-red-200 px-4 py-2 outline-none hover:bg-zinc-100 dark:border-red-900 dark:hover:bg-zinc-800 focus:outline-none"
            >
              시각적 두 번째 (Tab index: 1)
            </button>
            <button
              tabIndex={2}
              className="rounded border border-red-200 px-4 py-2 outline-none hover:bg-zinc-100 dark:border-red-900 dark:hover:bg-zinc-800 focus:outline-none"
            >
              시각적 세 번째 (Tab index: 2)
            </button>
          </div>
        </DemoCard>
      </PageSection>
    </main>
  );
}
