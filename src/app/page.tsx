import { ApplicationList } from "@/components/application/application-list";
import { mockApplications } from "@/data/mock-applications";

const statusCards = [
  {
    label: "전체 지원",
    count: mockApplications.length,
  },
  {
    label: "진행 중",
    count: mockApplications.filter(
      (item) => item.status === "APPLIED" || item.status === "ASSIGNMENT",
    ).length,
  },
  {
    label: "면접",
    count: mockApplications.filter((item) => item.status === "INTERVIEW")
      .length,
  },
  {
    label: "오퍼",
    count: mockApplications.filter((item) => item.status === "OFFER").length,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-14 max-w-5xl items-center px-4">
          <span className="text-lg font-semibold text-gray-900">ApplyFlow</span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">지원 현황</h1>
          <p className="mt-1 text-sm text-gray-600">
            최근 지원 현황을 확인해보세요.
          </p>
        </div>

        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statusCards.map((card) => (
            <div
              key={card.label}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            >
              <p className="text-sm text-gray-600">{card.label}</p>
              <p className="mt-2 text-2xl font-semibold text-gray-900">
                {card.count}
              </p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-gray-900">지원 목록</h2>
          <ApplicationList applications={mockApplications} />
        </section>
      </main>
    </div>
  );
}
