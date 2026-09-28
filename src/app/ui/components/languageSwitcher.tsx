"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../../../i18n/navigation"; // adjust relative path to your file location

type Locale = "en" | "fr";

const LANGUAGES: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "/en.svg" }, // TODO: replace with real flag image
  { code: "fr", label: "Français", flag: "/fr.svg" }, // TODO: replace with real flag image
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname(); // pathname without the locale prefix

  const switchLanguage = (newLocale: Locale) => {
    if (newLocale === locale) return;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2" role="group" aria-label="Language">
      {LANGUAGES.map(({ code, label, flag }) => {
        const isActive = locale === code;

        return (
          <button
            key={code}
            type="button"
            onClick={() => switchLanguage(code)}
            aria-label={label}
            aria-pressed={isActive}
            title={label}
            className={`p-0.5 transition duration-200 ${
              isActive
                ? "ring-2 ring-nanando-grey scale-110"
                : "hover:scale-105"
            }`}
          >
            <Image
              src={flag}
              alt={label}
              width={28}
              height={20}
              className="h-5 w-7 object-cover"
            />
          </button>
        );
      })}
    </div>
  );
}
