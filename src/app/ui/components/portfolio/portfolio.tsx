import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAnglesRight,
  faExpand,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { PoppinsSemiBold, Poppins } from "../../font";
import { getData } from "../../../data";

// Outlined project names, like the outlined numbers of the template
const outlined =
  "text-transparent [-webkit-text-stroke:1px_#fafafa] [filter:drop-shadow(0_2px_4px_#0a0a0a)]";

export default function Portfolio() {
  const locale = useLocale();
  const t = useTranslations();
  const projects = getData(locale as Parameters<typeof getData>[0]).portfolio;
  // Open on the last project: it sits on the right and "next" goes left
  const [active, setActive] = useState(projects.length - 1);
  const [fullscreen, setFullscreen] = useState(false);

  // While the image is in full screen: close on Escape and lock page scroll
  useEffect(() => {
    if (!fullscreen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFullscreen(false);
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [fullscreen]);

  if (projects.length === 0) return null;

  const current = projects[active];
  const goTo = (index: number) =>
    setActive((index + projects.length) % projects.length);

  return (
    <div className="flex flex-col gap-12 py-c75" id="portfolio">
      <div className="flex items-start justify-center flex-col px-6 md:px-14 lg:px-36">
        <span className={`${PoppinsSemiBold.className} text-3xl uppercase`}>
          {t("Portfolio.title")}
        </span>
        <div className="flex w-full max-w-xs gap-2.5">
          <div className="flex flex-1 items-center justify-between">
            <hr className="flex flex-1 bg-nanando-white h-0.5"></hr>
          </div>
          <span
            className={`${PoppinsSemiBold.className} flex flex-1 text-sm text-reniala-red uppercase`}
          >
            {t("Portfolio.subtitle")}
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 pr-6 md:pr-14 lg:pr-36">
        {/* Carousel strip: active card stays on the right, previous projects
            collapse to its left and overflow off-screen, next ones are hidden */}
        <div className="flex justify-end overflow-hidden lg:flex-[2] min-w-0">
          {projects.map((project, index) => {
            const isActive = index === active;
            const isHidden = index > active;
            return (
              <div
                key={index}
                aria-hidden={isHidden}
                className={`flex flex-col shrink-0 gap-4 transition-all duration-700 ease-in-out ${
                  isHidden
                    ? "w-0 opacity-0 ml-0"
                    : isActive
                      ? "w-[65vw] md:w-[420px] lg:w-[34vw] xl:w-[520px] opacity-100 ml-3 md:ml-4"
                      : "w-16 md:w-32 lg:w-36 opacity-100 ml-3 md:ml-4"
                }`}
              >
                <button
                  type="button"
                  tabIndex={isHidden ? -1 : 0}
                  onClick={() => (isActive ? setFullscreen(true) : goTo(index))}
                  aria-label={
                    isActive
                      ? `${t("Portfolio.fullscreen")}: ${project.name}`
                      : project.name
                  }
                  className={`group relative h-64 md:h-80 lg:h-[380px] w-full overflow-hidden text-left ${
                    isActive ? "cursor-zoom-in shadow-2xl shadow-black" : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1024px) 40vw, 65vw"
                    className={`object-cover transition duration-700 ${"group-hover:scale-105"}`}
                  />
                  {isActive ? (
                    <>
                      <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-nanando-black/60 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                        <FontAwesomeIcon icon={faExpand} />
                      </span>
                      <span className="absolute bottom-4 left-4 flex flex-wrap gap-2 pr-4">
                        <span
                          className={`${PoppinsSemiBold.className} rounded bg-reniala-red px-2 py-1 text-[10px] uppercase`}
                        >
                          {project.type}
                        </span>
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`${Poppins.className} rounded border border-nanando-white/60 px-2 py-1 text-[10px]`}
                          >
                            {tag}
                          </span>
                        ))}
                      </span>
                    </>
                  ) : (
                    <span
                      className={`${PoppinsSemiBold.className} ${outlined} absolute bottom-2 left-2 right-2 text-right text-xs md:text-xl uppercase leading-tight break-words`}
                    >
                      {project.name}
                    </span>
                  )}
                </button>

                {isActive ? (
                  <div className="flex flex-col md:flex-row md:items-end gap-4">
                    <p
                      className={`${Poppins.className} flex-1 text-xs text-nanando-grey line-clamp-3`}
                    >
                      {project.excerpt}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${PoppinsSemiBold.className} group/more flex items-center gap-3 whitespace-nowrap text-xs uppercase hover:text-reniala-red transition duration-300`}
                    >
                      <span className="block h-px w-8 bg-reniala-red transition-all duration-300 group-hover/more:w-12" />
                      {t("Portfolio.more")}
                    </a>
                  </div>
                ) : (
                  <div className="hidden md:block border-l border-nanando-grey pl-2">
                    <p
                      className={`${Poppins.className} text-[11px] text-nanando-grey line-clamp-4`}
                    >
                      {project.excerpt}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Detail panel: on desktop it takes the strip's height so the
            project list fills the space above the buttons */}
        <div className="lg:relative lg:flex-1 lg:min-w-0">
          <div className="flex flex-col gap-8 pl-6 md:pl-14 lg:pl-0 lg:absolute lg:inset-0">
            <div className="flex gap-6 lg:flex-1 lg:min-h-0">
              {/* Left column: active project name, then the other projects */}
              <div className="flex flex-col gap-6 w-2/5 min-w-0">
                <div
                  key={`name-${active}`}
                  className="flex items-center gap-3 animate-fade-in"
                >
                  <hr className="w-6 md:w-10 h-px border-0 bg-nanando-grey shrink-0" />
                  <span
                    className={`${PoppinsSemiBold.className} text-transparent [-webkit-text-stroke:1px_#E5342A] text-2xl xl:text-4xl uppercase leading-none break-words min-w-0`}
                  >
                    {current.name}
                  </span>
                </div>
                {/* Pagination: the other projects, in "next" order */}
                <ul
                  aria-label={t("Portfolio.projects")}
                  className="flex flex-col justify-between gap-4 lg:flex-1 lg:min-h-0 overflow-y-auto items-between pl-9 md:pl-[3.25rem]"
                >
                  {projects
                    .map((project, index) => ({ project, index }))
                    .reverse()
                    .filter(({ index }) => index !== active)
                    .map(({ project, index }) => (
                      <li key={index}>
                        <button
                          type="button"
                          onClick={() => goTo(index)}
                          className={`${PoppinsSemiBold.className} text-left text-sm uppercase text-nanando-grey hover:text-reniala-red transition duration-300 break-words`}
                        >
                          {project.name}
                        </button>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Right column: details */}
              <div
                key={`detail-${active}`}
                className="flex flex-1 flex-col gap-3 min-w-0 animate-fade-in"
              >
                <span className={`${PoppinsSemiBold.className} text-xl`}>
                  {current.title}
                </span>
                <p className={`${Poppins.className} text-xs text-nanando-grey`}>
                  {current.description}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                className={`${PoppinsSemiBold.className} flex flex-1 flex-col items-center gap-1 border border-nanando-grey py-3 text-xs uppercase hover:border-reniala-red hover:text-reniala-red transition duration-300`}
              >
                {t("Portfolio.next")}
                <FontAwesomeIcon icon={faAnglesLeft} />
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                className={`${PoppinsSemiBold.className} flex flex-1 flex-col items-center gap-1 border border-nanando-grey py-3 text-xs uppercase hover:border-reniala-red hover:text-reniala-red transition duration-300`}
              >
                {t("Portfolio.prev")}
                <FontAwesomeIcon icon={faAnglesRight} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full screen view of the active project's image */}
      {fullscreen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.name}
          onClick={() => setFullscreen(false)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-nanando-black/95 p-6 md:p-14 cursor-zoom-out animate-fade-in"
        >
          <div className="relative h-full w-full">
            <Image
              src={current.image}
              alt={current.name}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <span
            className={`${PoppinsSemiBold.className} absolute bottom-4 left-1/2 -translate-x-1/2 text-xs uppercase text-nanando-grey`}
          >
            {current.name}
          </span>
          <button
            type="button"
            autoFocus
            onClick={() => setFullscreen(false)}
            aria-label={t("Portfolio.close")}
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center text-2xl hover:text-reniala-red transition duration-300"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      )}
    </div>
  );
}
