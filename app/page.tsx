import Link from "next/link";
import { PageSection } from "@/components/ui/PageSection";

const demos = [
  {
    href: "/demo/semantics",
    title: "Semantics & Landmarks",
    description: "헤딩 계층 구조와 랜드마크 역할 테스트",
  },
  {
    href: "/demo/forms",
    title: "Forms & Inputs",
    description: "라벨, 에러 메시지, 필수 입력 필드 테스트",
  },
  {
    href: "/demo/focus",
    title: "Focus Management",
    description: "키보드 네비게이션 및 탭 순서(Tab Order) 테스트",
  },
  {
    href: "/demo/modal",
    title: "Modals & Dialogs",
    description: "포커스 트래핑 및 aria-hidden 속성 테스트",
  },
  {
    href: "/demo/live-region",
    title: "Live Regions",
    description: "동적 콘텐츠에 대한 aria-live 알림 테스트",
  },
  {
    href: "/demo/interactive-elements",
    title: "Interactive Elements",
    description: "기본 버튼과 가짜 클릭 가능 요소 비교 테스트",
  },
  {
    href: "/demo/list-and-table",
    title: "Lists & Tables",
    description: "읽기 순서(Reading Order) 및 테이블 구조 테스트",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl p-6">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight">
        A11y Demo 플레이그라운드
      </h1>
      <p className="mb-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        모바일 앱 웹뷰(WebView) 및 모바일/PC 브라우저에서 접근성 동작을 재현하고 검증할 수 있는 개발 및 QA 테스트용 샌드박스입니다.
      </p>

      <PageSection
        title="데모 시나리오"
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
