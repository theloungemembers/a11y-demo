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
          &larr; 홈으로 돌아가기
        </Link>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Lists & Tables</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          데이터 구조, 읽기 순서(Reading Order), 시맨틱 테이블 헤더를 테스트합니다.
        </p>
      </div>

      <PageSection title="목록">
        <DemoCard
          title="시맨틱 목록"
          status="good"
          statusText="<ul>과 <li>"
          description="스크린 리더는 '3개의 항목이 있는 목록'이라고 알려주어 사용자가 앞으로 나올 내용을 파악하고 필요시 목록 전체를 건너뛸 수 있게 합니다."
        >
          <ul className="list-disc space-y-1 pl-5">
            <li>첫 번째 항목</li>
            <li>두 번째 항목</li>
            <li>세 번째 항목</li>
          </ul>
        </DemoCard>

        <DemoCard
          title="가짜 목록"
          status="bad"
          statusText="<br>로 구분"
          description="시각적으로는 목록처럼 보이지만, 스크린 리더는 이를 거대한 하나의 문단으로 읽습니다."
        >
          <div className="border-l-2 border-red-200 pl-2">
            • 첫 번째 항목
            <br />
            • 두 번째 항목
            <br />• 세 번째 항목
          </div>
        </DemoCard>
      </PageSection>

      <PageSection title="테이블">
        <DemoCard
          title="접근성 있는 테이블"
          status="good"
          statusText="scope 속성을 가진 <th>"
          description="올바른 <thead>, <tbody>, 그리고 scope 속성을 가진 <th>를 사용하여 스크린 리더가 셀을 행/열 헤더와 제대로 연결할 수 있게 합니다."
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
                <tr>
                  <th scope="col" className="p-3 font-semibold">
                    이름
                  </th>
                  <th scope="col" className="p-3 font-semibold">
                    역할
                  </th>
                  <th scope="col" className="p-3 font-semibold">
                    상태
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                <tr>
                  <td className="p-3">홍길동</td>
                  <td className="p-3">관리자</td>
                  <td className="p-3">활성화</td>
                </tr>
                <tr>
                  <td className="p-3">임꺽정</td>
                  <td className="p-3">사용자</td>
                  <td className="p-3">비활성화</td>
                </tr>
              </tbody>
            </table>
          </div>
        </DemoCard>

        <DemoCard
          title="CSS Grid 로 만든 테이블"
          status="bad"
          statusText="<div className='grid'>"
          description="테이블처럼 똑같이 생겼지만, 스크린 리더는 이를 연결되지 않은 텍스트 노드들로 취급합니다. 사용자는 셀이나 행 단위로 탐색할 수 없습니다."
        >
          <div className="w-full overflow-hidden rounded-md border border-zinc-200 border-collapse text-sm dark:border-zinc-800">
            <div className="grid grid-cols-3 border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="p-3 font-semibold">이름</div>
              <div className="p-3 font-semibold">역할</div>
              <div className="p-3 font-semibold">상태</div>
            </div>
            <div className="grid grid-cols-3 border-b border-zinc-200 dark:border-zinc-800">
              <div className="p-3">홍길동</div>
              <div className="p-3">관리자</div>
              <div className="p-3">활성화</div>
            </div>
            <div className="grid grid-cols-3">
              <div className="p-3">임꺽정</div>
              <div className="p-3">사용자</div>
              <div className="p-3">비활성화</div>
            </div>
          </div>
        </DemoCard>
      </PageSection>
    </main>
  );
}
