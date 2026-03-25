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
          &larr; 홈으로 돌아가기
        </Link>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Semantics & Landmarks
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          랜드마크(header, nav, main, footer)와 헤딩 계층 구조를 테스트합니다.
        </p>
      </div>

      <PageSection title="랜드마크">
        <DemoCard
          title="올바른 랜드마크"
          status="good"
          statusText="Semantic HTML5"
          description="<header>, <main>, <footer>와 같은 네이티브 구조 요소를 사용합니다."
        >
          <div className="overflow-hidden rounded-md border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
            <header className="border-b border-zinc-200 bg-zinc-100 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="text-lg font-bold">
                앱 헤더 (<code className="text-sm">&lt;header&gt;</code>)
              </h2>
              <nav aria-label="메인 네비게이션">
                <span className="text-sm text-zinc-500">
                  네비게이션 링크 (<code className="text-sm">&lt;nav&gt;</code>)
                </span>
              </nav>
            </header>
            <main className="min-h-[100px] bg-white p-4 dark:bg-black">
              메인 콘텐츠 영역 (<code className="text-sm">&lt;main&gt;</code>)
            </main>
            <footer className="border-t border-zinc-200 bg-zinc-100 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900">
              앱 푸터 (<code className="text-sm">&lt;footer&gt;</code>)
            </footer>
          </div>
        </DemoCard>

        <DemoCard
          title="잘못된 랜드마크"
          status="bad"
          statusText="Generic <div>s"
          description="범용 컨테이너 요소만 사용하여, 스크린 리더에게 어떠한 시맨틱 구조도 제공하지 않습니다."
        >
          <div className="overflow-hidden rounded-md border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
            <div className="border-b border-zinc-200 bg-zinc-100 p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="text-lg font-bold">
                앱 헤더 (<code className="text-sm">&lt;div&gt;</code>)
              </div>
              <div className="text-sm text-zinc-500">
                네비게이션 링크 (<code className="text-sm">&lt;div&gt;</code>)
              </div>
            </div>
            <div className="min-h-[100px] bg-white p-4 dark:bg-black">
              메인 콘텐츠 영역 (<code className="text-sm">&lt;div&gt;</code>)
            </div>
            <div className="border-t border-zinc-200 bg-zinc-100 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900">
              앱 푸터 (<code className="text-sm">&lt;div&gt;</code>)
            </div>
          </div>
        </DemoCard>
      </PageSection>

      <PageSection title="헤딩 계층 구조">
        <DemoCard
          title="올바른 계층 구조"
          status="good"
          statusText="순차적인 헤딩"
          description="헤딩이 논리적이고 순차적인 순서(h1 -> h2 -> h3)를 따릅니다."
        >
          <div className="flex flex-col gap-2 rounded-md border border-zinc-200 p-4 dark:border-zinc-800">
            <h2 className="mb-2 border-b pb-2 text-xl font-bold">
              섹션 제목 (h2)
            </h2>
            <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">섹션을 설명하는 콘텐츠입니다.</p>
            <h3 className="text-lg font-semibold">소목차 (h3)</h3>
            <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">소목차에 대한 세부 내용입니다.</p>
            <h4 className="text-base font-medium">하위 소목차 (h4)</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">구체적인 세부 정보입니다.</p>
          </div>
        </DemoCard>

        <DemoCard
          title="잘못된 계층 구조"
          status="bad"
          statusText="건너뛴 헤딩"
          description="헤딩 레벨을 건너뛰어 스크린 리더 탐색에 혼란을 줍니다."
        >
          <div className="flex flex-col gap-2 rounded-md border border-zinc-200 p-4 dark:border-zinc-800">
            <h2 className="mb-2 border-b pb-2 text-xl font-bold">
              섹션 제목 (h2)
            </h2>
            <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">섹션을 설명하는 콘텐츠입니다.</p>
            {/* Intentionally skipped h3 */}
            <h4 className="text-lg font-semibold">
              h3처럼 스타일되었지만 실제로는 h4인 소목차 (h4)
            </h4>
            <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">이런 구조는 헤딩 단위 탐색 시 혼란스럽습니다.</p>
            {/* Intentionally using h6 for something that should be h3 */}
            <h6 className="text-base font-medium">
              폰트 크기 조절만을 위해 무작위로 쓰인 h6
            </h6>
          </div>
        </DemoCard>
      </PageSection>
    </main>
  );
}
