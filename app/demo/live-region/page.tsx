"use client";

import { useState } from "react";
import { PageSection } from "@/components/ui/PageSection";
import { DemoCard } from "@/components/ui/DemoCard";
import Link from "next/link";

export default function LiveRegionDemo() {
  const [goodMessage, setGoodMessage] = useState("");
  const [badMessage, setBadMessage] = useState("");

  const triggerGood = () => {
    setGoodMessage("폼이 성공적으로 저장되었습니다! 이제 계속 진행할 수 있습니다.");
    setTimeout(() => setGoodMessage(""), 5000);
  };

  const triggerBad = () => {
    setBadMessage("오류: 연결 시간이 초과되었습니다.");
    setTimeout(() => setBadMessage(""), 5000);
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
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Live Regions (ARIA-Live)
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          포커스를 이동시키지 않고 동적 콘텐츠의 변경을 알리는 기능을 테스트합니다.
        </p>
      </div>

      <PageSection title="동적 알림">
        <DemoCard
          title="공손한 라이브 리전 (Polite)"
          status="good"
          statusText="aria-live='polite'"
          description="스크린 리더는 현재 읽고 있는 문장을 끝낸 후 메시지를 읽어줍니다. '저장됨'과 같이 중요하지 않은 업데이트에 적합합니다."
        >
          <div className="space-y-4">
            <button
              onClick={triggerGood}
              className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              저장 시뮬레이션
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
          title="숨겨진 동적 변경"
          status="bad"
          statusText="No aria-live"
          description="시각적인 텍스트는 나타나지만, 컨테이너에 aria-live 속성이나 role='status'가 없기 때문에 스크린 리더는 이 변경사항을 전혀 알지 못합니다."
        >
          <div className="space-y-4">
            <button
              onClick={triggerBad}
              className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white outline-none hover:bg-blue-700 focus:outline-none focus-visible:outline-none"
            >
              에러 시뮬레이션
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
