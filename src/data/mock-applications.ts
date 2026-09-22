export type ApplicationStatus =
  | "APPLIED"
  | "ASSIGNMENT"
  | "INTERVIEW"
  | "OFFER"
  | "REJECTED";

export type Application = {
  id: string;
  company: string;
  position: string;
  appliedAt: string;
  status: ApplicationStatus;
};

export const mockApplications: Application[] = [
  {
    id: "1",
    company: "Acme Tech",
    position: "Frontend Developer",
    appliedAt: "2026-03-02",
    status: "INTERVIEW",
  },
  {
    id: "2",
    company: "Orbit Labs",
    position: "Full Stack Developer",
    appliedAt: "2026-03-05",
    status: "ASSIGNMENT",
  },
  {
    id: "3",
    company: "Northwind Soft",
    position: "React Developer",
    appliedAt: "2026-03-08",
    status: "APPLIED",
  },
  {
    id: "4",
    company: "Bright Pixel",
    position: "Frontend Engineer",
    appliedAt: "2026-02-20",
    status: "OFFER",
  },
  {
    id: "5",
    company: "CloudNest",
    position: "Web Developer",
    appliedAt: "2026-02-14",
    status: "REJECTED",
  },
  {
    id: "6",
    company: "Harbor Works",
    position: "UI Engineer",
    appliedAt: "2026-03-12",
    status: "APPLIED",
  },
];
