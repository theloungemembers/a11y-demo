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
          &larr; 홈으로 돌아가기
        </Link>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Forms & Inputs</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          라벨, 설명, 에러 메시지 및 필수 입력 필드를 테스트합니다.
        </p>
      </div>

      <PageSection title="입력 필드 라벨 및 유효성 검사">
        <DemoCard
          title="올바른 입력 필드"
          status="good"
          statusText="명시적인 라벨 및 ARIA"
          description="명시적인 <label htmlFor>와 설명을 위한 aria-describedby, 그리고 유효성 상태를 위한 aria-invalid를 사용합니다."
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <AccessibleInput
              label="이메일 주소"
              type="email"
              placeholder="you@example.com"
              required
              description="이메일 주소는 다른 사람과 공유되지 않습니다."
            />

            <AccessibleInput
              label="사용자 이름"
              type="text"
              defaultValue="invalid_user_!!$"
              error="사용자 이름은 영문자와 숫자만 포함할 수 있습니다."
              required
            />

            <button className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
              폼 제출
            </button>
          </form>
        </DemoCard>

        <DemoCard
          title="잘못된 입력 필드"
          status="bad"
          statusText="Placeholder만 사용 & 시각적 힌트만 제공"
          description="라벨 대신 플레이스홀더에 전적으로 의존하며, 시맨틱 속성 없이 시각적 색상만으로 오류를 표시합니다."
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex w-full max-w-sm flex-col gap-1.5">
              <input
                type="text"
                className="flex h-10 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus-visible:outline-none dark:border-zinc-700 bg-transparent"
                placeholder="이름 (필수)" // Only placeholder!
              />
              <span className="text-xs text-zinc-500">
                실명을 입력해 주세요
              </span>
            </div>

            <div className="flex w-full max-w-sm flex-col gap-1.5">
              <label>비밀번호</label> {/* Orphaned label */}
              <input
                type="password"
                className="flex h-10 w-full rounded-md border border-red-500 px-3 py-2 text-sm focus-visible:outline-none bg-transparent"
              />
              {/* No aria-live, role="alert", or aria-describedby to link this text to input */}
              <span className="text-xs text-red-500">비밀번호가 너무 짧습니다</span>
            </div>

            <button className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus-visible:outline-none">
              제출
            </button>
          </form>
        </DemoCard>
      </PageSection>
    </main>
  );
}
