import common from "./common";
import en from "./en";
import fr from "./fr";

type Locale = "en" | "fr";

type DeepPartial<T> = T extends (infer U)[]
  ? DeepPartial<U>[]
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// Recursively merges `override` into `base`.
// - objects: merged key by key
// - arrays: merged by index (override[i] is merged into base[i])
// - primitives: replaced by the override
function deepMerge(base: unknown, override: unknown): unknown {
  if (Array.isArray(base) && Array.isArray(override)) {
    const length = Math.max(base.length, override.length);
    return Array.from({ length }, (_, i) =>
      i < override.length ? deepMerge(base[i], override[i]) : base[i],
    );
  }

  if (isPlainObject(base) && isPlainObject(override)) {
    const result: Record<string, unknown> = { ...base };
    for (const key of Object.keys(override)) {
      result[key] = deepMerge(base[key], override[key]);
    }
    return result;
  }

  return override === undefined ? base : override;
}

const overrides: Record<Locale, DeepPartial<typeof common>> = { en, fr };

export function getData(locale: Locale): typeof common {
  return deepMerge(common, overrides[locale]) as typeof common;
}
