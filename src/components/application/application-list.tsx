import type { Application, ApplicationStatus } from "@/data/mock-applications";

const statusLabel: Record<ApplicationStatus, string> = {
  APPLIED: "지원 완료",
  ASSIGNMENT: "과제",
  INTERVIEW: "면접",
  OFFER: "오퍼",
  REJECTED: "탈락",
};

const statusClassName: Record<ApplicationStatus, string> = {
  APPLIED: "bg-blue-50 text-blue-700",
  ASSIGNMENT: "bg-amber-50 text-amber-700",
  INTERVIEW: "bg-violet-50 text-violet-700",
  OFFER: "bg-emerald-50 text-emerald-700",
  REJECTED: "bg-gray-100 text-gray-600",
};

type ApplicationListProps = {
  applications: Application[];
};

export function ApplicationList({ applications }: ApplicationListProps) {
  if (applications.length === 0) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white px-4 py-10 text-center text-sm text-gray-500">
        등록된 지원 내역이 없습니다.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="min-w-full text-left text-sm">
        <thead className="border-b border-gray-200 bg-gray-50 text-gray-600">
          <tr>
            <th className="px-4 py-3 font-medium">회사</th>
            <th className="px-4 py-3 font-medium">포지션</th>
            <th className="px-4 py-3 font-medium">지원일</th>
            <th className="px-4 py-3 font-medium">상태</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr
              key={application.id}
              className="border-b border-gray-100 last:border-b-0"
            >
              <td className="px-4 py-3 text-gray-900">{application.company}</td>
              <td className="px-4 py-3 text-gray-700">{application.position}</td>
              <td className="px-4 py-3 text-gray-700">{application.appliedAt}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-block rounded-md px-2 py-1 text-xs font-medium ${statusClassName[application.status]}`}
                >
                  {statusLabel[application.status]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
