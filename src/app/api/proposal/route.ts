import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Field = { key: string; label: string; required?: boolean };
type ProposalType = "job" | "freelance" | "project" | "others";

const TYPE_LABELS: Record<ProposalType, string> = {
  job: "Job",
  freelance: "Freelance / Mission",
  project: "Project",
  others: "Others",
};

const COMMON_FIELDS: Field[] = [
  { key: "name", label: "Name", required: true },
  { key: "company", label: "Company" },
  { key: "role", label: "Role" },
  { key: "email", label: "Email", required: true },
  { key: "contact", label: "Contact" },
  { key: "subject", label: "Subject", required: true },
  { key: "description", label: "Description", required: true },
];

// Only these keys are accepted for each proposal type
const TYPE_FIELDS: Record<ProposalType, Field[]> = {
  job: [
    { key: "position", label: "Job position", required: true },
    { key: "applicationDeadline", label: "Ending of candidature date" },
    { key: "offerLink", label: "Job offer link" },
    { key: "contractType", label: "Contract type", required: true },
    { key: "startDate", label: "Starting date", required: true },
    { key: "endDate", label: "Ending date" },
    { key: "salary", label: "Net salary per month" },
    { key: "currency", label: "Currency" },
    { key: "remote", label: "Remote possible" },
    { key: "remoteDays", label: "Remote days per week" },
    { key: "hoursPerWeek", label: "Hours per week" },
    { key: "location", label: "Office location", required: true },
    { key: "techStack", label: "Tech stack" },
  ],
  freelance: [
    { key: "postLink", label: "Freelance/Mission post link" },
    { key: "duration", label: "Duration", required: true },
    { key: "hourlyRate", label: "Price per hour" },
    { key: "currency", label: "Currency" },
    { key: "startDate", label: "Starting date", required: true },
    { key: "endDate", label: "Ending date" },
    { key: "workMode", label: "Work mode" },
    { key: "hoursPerWeek", label: "Hours per week" },
    { key: "techStack", label: "Tech stack" },
  ],
  project: [
    { key: "deliverable", label: "Deliverable", required: true },
    { key: "platform", label: "Platform" },
    { key: "projectState", label: "Project state" },
    { key: "budget", label: "Budget" },
    { key: "currency", label: "Currency" },
    { key: "duration", label: "Expected duration" },
    { key: "startDate", label: "Starting date", required: true },
    { key: "techStack", label: "Tech stack" },
    { key: "links", label: "Links (specs, designs...)" },
  ],
  others: [],
};

const MAX_LENGTH = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const clean = (value: unknown) => {
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (typeof value !== "string" && typeof value !== "number") return "";
  return String(value).trim().slice(0, MAX_LENGTH);
};

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field
  if (clean(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const type = body.type as ProposalType;
  if (!(type in TYPE_FIELDS)) {
    return NextResponse.json(
      { error: "Invalid proposal type" },
      { status: 400 },
    );
  }

  const details = (body.details ?? {}) as Record<string, unknown>;
  const common = COMMON_FIELDS.map((field) => ({
    ...field,
    value: clean(body[field.key]),
  }));
  const specific = TYPE_FIELDS[type].map((field) => ({
    ...field,
    value: clean(details[field.key]),
  }));

  const missing = [...common, ...specific].filter(
    (field) => field.required && !field.value,
  );
  if (details.contractType === "CDD" && !clean(details.endDate)) {
    missing.push({ key: "endDate", label: "Ending date", value: "" });
  }
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing fields: ${missing.map((f) => f.label).join(", ")}` },
      { status: 400 },
    );
  }

  const email = clean(body.email);
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, PROPOSAL_TO } =
    process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    console.error("Proposal form: SMTP_USER / SMTP_PASS are not configured");
    return NextResponse.json(
      { error: "Email not configured" },
      { status: 500 },
    );
  }

  const name = clean(body.name);
  const subject = clean(body.subject).replace(/[\r\n]+/g, " ");
  const rows = [
    { label: "Type", value: TYPE_LABELS[type] },
    ...common,
    ...specific,
  ].filter((row) => row.value);

  const html = `
    <h2 style="font-family:sans-serif">New ${TYPE_LABELS[type]} proposal</h2>
    <table style="font-family:sans-serif;border-collapse:collapse">
      ${rows
        .map(
          (row) => `<tr>
            <td style="padding:6px 12px;border:1px solid #ddd;font-weight:bold;vertical-align:top">${escapeHtml(row.label)}</td>
            <td style="padding:6px 12px;border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(row.value)}</td>
          </tr>`,
        )
        .join("")}
    </table>`;
  const text = rows.map((row) => `${row.label}: ${row.value}`).join("\n");

  const port = Number(SMTP_PORT ?? 465);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST ?? "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio proposal" <${SMTP_USER}>`,
      to: PROPOSAL_TO ?? "raharimanana99@gmail.com",
      replyTo: { name: name.replace(/[\r\n"]+/g, " "), address: email },
      subject: `[${TYPE_LABELS[type]}] ${subject}`,
      text,
      html,
    });
  } catch (error) {
    console.error("Proposal form: sending failed", error);
    return NextResponse.json({ error: "Sending failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
