import { FormEvent, ReactNode, useState } from "react";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEllipsis,
  faHandshake,
  faRocket,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { PoppinsSemiBold, Poppins } from "../../font";

type ProposalType = "job" | "freelance" | "project" | "others";
type Status = "idle" | "sending" | "success" | "error";

const TYPES: { value: ProposalType; icon: IconDefinition }[] = [
  { value: "job", icon: faBriefcase },
  { value: "freelance", icon: faHandshake },
  { value: "project", icon: faRocket },
  { value: "others", icon: faEllipsis },
];

// Fields sent for each proposal type (must match the API route)
const TYPE_FIELDS: Record<ProposalType, string[]> = {
  job: [
    "position",
    "applicationDeadline",
    "offerLink",
    "contractType",
    "startDate",
    "endDate",
    "salary",
    "currency",
    "remote",
    "remoteDays",
    "hoursPerWeek",
    "location",
    "techStack",
  ],
  freelance: [
    "postLink",
    "duration",
    "hourlyRate",
    "currency",
    "startDate",
    "endDate",
    "workMode",
    "hoursPerWeek",
    "techStack",
  ],
  project: [
    "deliverable",
    "platform",
    "projectState",
    "budget",
    "currency",
    "duration",
    "startDate",
    "techStack",
    "links",
  ],
  others: [],
};

const CURRENCIES = ["EUR", "USD", "MUR", "MGA"];
const OTHER_CURRENCY = "__other";
// The amount the currency applies to, for each type
const AMOUNT_FIELD: Partial<Record<ProposalType, string>> = {
  job: "salary",
  freelance: "hourlyRate",
  project: "budget",
};

const EMPTY = {
  name: "",
  company: "",
  role: "",
  email: "",
  contact: "",
  subject: "",
  description: "",
  website: "",
};

const baseClass = `${Poppins.className} rounded border border-nanando-grey px-3 py-2 text-sm text-nanando-white focus:outline-none focus:border-reniala-red transition duration-300 [color-scheme:dark] placeholder:text-nanando-grey`;
const inputClass = `${baseClass} w-full bg-transparent`;
// Options need their own colors, otherwise the opened list is white on white
const selectBaseClass = `${baseClass} bg-nanando-black [&>option]:bg-nanando-black [&>option]:text-nanando-white`;
const selectClass = `${selectBaseClass} w-full`;

function Field({
  label,
  required,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-1 ${className}`}>
      <span
        className={`${PoppinsSemiBold.className} text-[11px] uppercase text-nanando-grey`}
      >
        {label}
        {required && <span className="text-reniala-red"> *</span>}
      </span>
      {children}
    </label>
  );
}

export default function Proposal() {
  const t = useTranslations("Proposal");
  const [type, setType] = useState<ProposalType | null>(null);
  const [values, setValues] = useState(EMPTY);
  const [details, setDetails] = useState<Record<string, string | boolean>>({
    currency: "EUR",
  });
  const [customCurrency, setCustomCurrency] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const value = (key: keyof typeof EMPTY) => ({
    value: values[key],
    onChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => setValues({ ...values, [key]: event.target.value }),
  });
  const detail = (key: string) => ({
    value: (details[key] as string) ?? "",
    onChange: (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => setDetails({ ...details, [key]: event.target.value }),
  });

  const selectType = (next: ProposalType) => {
    setType(next);
    // Prefill the subject, replacing what was there before
    setValues({
      ...values,
      subject: next === "others" ? "" : t(`subjectDefaults.${next}`),
    });
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!type) return;
    setStatus("sending");
    // Skip fields that are hidden in the current state of the form
    const hidden = new Set<string>();
    if (type === "job" && details.contractType !== "CDD") hidden.add("endDate");
    if (details.remote !== true) hidden.add("remoteDays");
    const amountField = AMOUNT_FIELD[type];
    if (!amountField || !details[amountField]) hidden.add("currency");
    const sent = Object.fromEntries(
      TYPE_FIELDS[type]
        .filter(
          (key) =>
            !hidden.has(key) &&
            details[key] !== undefined &&
            details[key] !== "",
        )
        .map((key) => [key, details[key]]),
    );
    try {
      const response = await fetch("/api/proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, type, details: sent }),
      });
      if (!response.ok) throw new Error(await response.text());
      setStatus("success");
      setValues(EMPTY);
      setType(null);
      setDetails({ currency: details.currency });
    } catch {
      setStatus("error");
    }
  };

  const currencySelect = (
    <>
      <select
        aria-label={t("currency")}
        className={`${selectBaseClass} w-28 shrink-0`}
        value={customCurrency ? OTHER_CURRENCY : (details.currency as string)}
        onChange={(event) => {
          const isCustom = event.target.value === OTHER_CURRENCY;
          setCustomCurrency(isCustom);
          setDetails({
            ...details,
            currency: isCustom ? "" : event.target.value,
          });
        }}
      >
        {CURRENCIES.map((currency) => (
          <option key={currency}>{currency}</option>
        ))}
        <option value={OTHER_CURRENCY}>{t("otherCurrency")}</option>
      </select>
      {customCurrency && (
        <input
          aria-label={t("currency")}
          maxLength={10}
          placeholder={t("customCurrencyPlaceholder")}
          className={`${baseClass} w-24 shrink-0 bg-transparent uppercase animate-fade-in`}
          {...detail("currency")}
        />
      )}
    </>
  );

  const amountWithCurrency = (key: string) => (
    <div className="flex gap-3">
      <input
        type="number"
        min={0}
        className={`${inputClass} min-w-0`}
        {...detail(key)}
      />
      {currencySelect}
    </div>
  );

  return (
    <div
      className="flex flex-col gap-10 px-6 md:px-14 lg:px-36 py-c75"
      id="proposal"
    >
      <div className="flex items-start justify-center flex-col">
        <span className={`${PoppinsSemiBold.className} text-3xl uppercase`}>
          {t("title")}
        </span>
        <div className="flex w-full max-w-sm gap-2.5">
          <div className="flex flex-1 items-center justify-between">
            <hr className="flex flex-1 bg-nanando-white h-0.5"></hr>
          </div>
          <span
            className={`${PoppinsSemiBold.className} flex flex-[2] text-sm text-reniala-red uppercase`}
          >
            {t("subtitle")}
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <p
          className={`${Poppins.className} lg:flex-1 text-sm text-nanando-grey max-w-md`}
        >
          {t("intro")}
        </p>

        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-10 lg:flex-[2] min-w-0"
        >
          {/* Honeypot against spam bots, hidden from visitors */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
            className="hidden"
            {...value("website")}
          />

          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <legend
              className={`${PoppinsSemiBold.className} mb-6 text-sm uppercase`}
            >
              {t("aboutYou")}
            </legend>
            <Field label={t("name")} required>
              <input required className={inputClass} {...value("name")} />
            </Field>
            <Field label={t("email")} required>
              <input
                type="email"
                required
                className={inputClass}
                {...value("email")}
              />
            </Field>
            <Field label={t("company")}>
              <input className={inputClass} {...value("company")} />
            </Field>
            <Field label={t("role")}>
              <input
                placeholder={t("rolePlaceholder")}
                className={inputClass}
                {...value("role")}
              />
            </Field>
            <Field label={t("contact")} className="md:col-span-2">
              <input
                placeholder={t("contactPlaceholder")}
                className={inputClass}
                {...value("contact")}
              />
            </Field>
          </fieldset>

          <Field label={t("subject")} required>
            <input required className={inputClass} {...value("subject")} />
          </Field>

          <fieldset className="flex flex-col gap-6">
            <legend
              className={`${PoppinsSemiBold.className} mb-6 text-sm uppercase`}
            >
              {t("typeLabel")} <span className="text-reniala-red">*</span>
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {TYPES.map((item) => (
                <label
                  key={item.value}
                  className={`${PoppinsSemiBold.className} relative flex items-center justify-center gap-3 rounded border py-4 text-xs uppercase cursor-pointer transition duration-300 has-[:focus-visible]:ring-1 has-[:focus-visible]:ring-reniala-red ${
                    type === item.value
                      ? "border-reniala-red text-reniala-red"
                      : "border-nanando-grey hover:border-reniala-red hover:text-reniala-red"
                  }`}
                >
                  <input
                    type="radio"
                    name="type"
                    required
                    value={item.value}
                    checked={type === item.value}
                    onChange={() => selectType(item.value)}
                    className="sr-only"
                  />
                  <FontAwesomeIcon icon={item.icon} />
                  {t(`types.${item.value}`)}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Fields depending on the proposal type */}
          <fieldset
            key={type ?? "none"}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 animate-fade-in"
          >
            {type === "job" && (
              <Field label={t("position")} required className="md:col-span-2">
                <input
                  required
                  className={inputClass}
                  {...detail("position")}
                />
              </Field>
            )}

            <Field
              label={t(`description.${type ?? "others"}`)}
              required
              className="md:col-span-2"
            >
              <textarea
                required
                rows={5}
                placeholder={t(`descriptionPlaceholder.${type ?? "others"}`)}
                className={`${inputClass} resize-y`}
                {...value("description")}
              />
            </Field>

            {type === "job" && (
              <>
                <Field label={t("applicationDeadline")}>
                  <input
                    type="date"
                    className={inputClass}
                    {...detail("applicationDeadline")}
                  />
                </Field>
                <Field label={t("offerLink")}>
                  <input
                    type="url"
                    placeholder={t("linkPlaceholder")}
                    className={inputClass}
                    {...detail("offerLink")}
                  />
                </Field>
                <Field label={t("contractType")} required>
                  <select
                    required
                    className={selectClass}
                    {...detail("contractType")}
                  >
                    <option value="">—</option>
                    <option value="CDI">{t("contracts.CDI")}</option>
                    <option value="CDD">{t("contracts.CDD")}</option>
                  </select>
                </Field>
                <Field label={t("startDate")} required>
                  <input
                    type="date"
                    required
                    className={inputClass}
                    {...detail("startDate")}
                  />
                </Field>
                {details.contractType === "CDD" && (
                  <Field
                    label={t("endDate")}
                    required
                    className="animate-fade-in"
                  >
                    <input
                      type="date"
                      required
                      min={(details.startDate as string) || undefined}
                      className={inputClass}
                      {...detail("endDate")}
                    />
                  </Field>
                )}
                <Field label={t("salary")}>{amountWithCurrency("salary")}</Field>
                <Field label={t("hoursPerWeek")}>
                  <input
                    type="number"
                    min={1}
                    max={80}
                    className={inputClass}
                    {...detail("hoursPerWeek")}
                  />
                </Field>
                <Field label={t("location")} required>
                  <input
                    required
                    className={inputClass}
                    {...detail("location")}
                  />
                </Field>
                <Field label={t("techStack")}>
                  <input
                    placeholder={t("techStackPlaceholder")}
                    className={inputClass}
                    {...detail("techStack")}
                  />
                </Field>
                <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-end md:gap-8">
                  <label
                    className={`${Poppins.className} flex items-center gap-3 text-sm cursor-pointer`}
                  >
                    <input
                      type="checkbox"
                      checked={details.remote === true}
                      onChange={(event) =>
                        setDetails({ ...details, remote: event.target.checked })
                      }
                      className="h-4 w-4 accent-reniala-red"
                    />
                    {t("remote")}
                  </label>
                  {details.remote === true && (
                    <Field
                      label={t("remoteDays")}
                      required
                      className="md:w-60 animate-fade-in"
                    >
                      <input
                        type="number"
                        required
                        min={1}
                        max={5}
                        className={inputClass}
                        {...detail("remoteDays")}
                      />
                    </Field>
                  )}
                </div>
              </>
            )}

            {type === "freelance" && (
              <>
                <Field label={t("postLink")} className="md:col-span-2">
                  <input
                    type="url"
                    placeholder={t("linkPlaceholder")}
                    className={inputClass}
                    {...detail("postLink")}
                  />
                </Field>
                <Field label={t("duration")} required>
                  <input
                    required
                    placeholder={t("durationPlaceholder")}
                    className={inputClass}
                    {...detail("duration")}
                  />
                </Field>
                <Field label={t("hourlyRate")}>
                  {amountWithCurrency("hourlyRate")}
                </Field>
                <Field label={t("startDate")} required>
                  <input
                    type="date"
                    required
                    className={inputClass}
                    {...detail("startDate")}
                  />
                </Field>
                <Field label={t("endDate")}>
                  <input
                    type="date"
                    min={(details.startDate as string) || undefined}
                    className={inputClass}
                    {...detail("endDate")}
                  />
                </Field>
                <Field label={t("workMode")}>
                  <select className={selectClass} {...detail("workMode")}>
                    <option value="">—</option>
                    <option value="Remote">{t("workModes.remote")}</option>
                    <option value="On site">{t("workModes.onsite")}</option>
                    <option value="Hybrid">{t("workModes.hybrid")}</option>
                  </select>
                </Field>
                <Field label={t("hoursPerWeek")}>
                  <input
                    type="number"
                    min={1}
                    max={80}
                    className={inputClass}
                    {...detail("hoursPerWeek")}
                  />
                </Field>
                <Field label={t("techStack")} className="md:col-span-2">
                  <input
                    placeholder={t("techStackPlaceholder")}
                    className={inputClass}
                    {...detail("techStack")}
                  />
                </Field>
              </>
            )}

            {type === "project" && (
              <>
                <Field label={t("deliverable")} required>
                  <select
                    required
                    className={selectClass}
                    {...detail("deliverable")}
                  >
                    <option value="">—</option>
                    <option value="POC">POC</option>
                    <option value="MVP">MVP</option>
                    <option value="Production">{t("production")}</option>
                    <option value="Other">{t("other")}</option>
                  </select>
                </Field>
                <Field label={t("platform")}>
                  <select className={selectClass} {...detail("platform")}>
                    <option value="">—</option>
                    <option value="Web">{t("platforms.web")}</option>
                    <option value="Mobile">{t("platforms.mobile")}</option>
                    <option value="Web + Mobile">{t("platforms.both")}</option>
                    <option value="Other">{t("other")}</option>
                  </select>
                </Field>
                <Field label={t("projectState")}>
                  <select className={selectClass} {...detail("projectState")}>
                    <option value="">—</option>
                    <option value="New project">
                      {t("projectStates.new")}
                    </option>
                    <option value="Existing project">
                      {t("projectStates.existing")}
                    </option>
                  </select>
                </Field>
                <Field label={t("budget")}>{amountWithCurrency("budget")}</Field>
                <Field label={t("startDate")} required>
                  <input
                    type="date"
                    required
                    className={inputClass}
                    {...detail("startDate")}
                  />
                </Field>
                <Field label={`${t("expectedDuration")} (${t("optional")})`}>
                  <input
                    placeholder={t("durationPlaceholder")}
                    className={inputClass}
                    {...detail("duration")}
                  />
                </Field>
                <Field label={t("techStack")}>
                  <input
                    placeholder={t("techStackPlaceholder")}
                    className={inputClass}
                    {...detail("techStack")}
                  />
                </Field>
                <Field label={t("links")}>
                  <input
                    placeholder={t("linksPlaceholder")}
                    className={inputClass}
                    {...detail("links")}
                  />
                </Field>
              </>
            )}
          </fieldset>

          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <button
              type="submit"
              disabled={status === "sending"}
              className={`${PoppinsSemiBold.className} inline-block self-start rounded px-6 py-4 text-xs uppercase text-white bg-reniala-red hover:-translate-y-1 hover:bg-reniala-red-dark transition ease-in-out delay-150 duration-300 disabled:opacity-60 disabled:hover:translate-y-0`}
            >
              {status === "sending" ? t("sending") : t("submit")}
            </button>
            <p role="status" className={`${Poppins.className} text-sm`}>
              {status === "success" && (
                <span className="text-nanando-white">{t("success")}</span>
              )}
              {status === "error" && (
                <span className="text-reniala-red">{t("error")}</span>
              )}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
