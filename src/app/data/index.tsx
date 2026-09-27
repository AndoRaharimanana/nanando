import * as en from "./en";
import * as fr from "./fr";
import * as common from "./common";

export function getData(locale: "en" | "fr") {
  return {
    ...common,
    ...(locale === "fr" ? fr : en),
  };
}
