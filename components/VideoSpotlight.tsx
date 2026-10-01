"use client";

import { useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlayIcon, YoutubeIcon, Video01Icon } from "@hugeicons/core-free-icons";

interface VideoSpotlightProps {
  videoId?: string;
  title?: string;
  thumbnailUrl?: string;
  channelName?: string;
  channelUrl?: string;
}

export default function VideoSpotlight({
  videoId = "PGDYL1R33nA",
  title = "Don't do this if you want to lose",
  thumbnailUrl = "/images/video-thumbnail.jpg",
  channelName = "Well IT & Consultancy Ltd",
  channelUrl = "https://www.youtube.com/@Wellit2022",
}: VideoSpotlightProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* Decorative ambient lighting glow matching brand colors */}
      <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-r from-blue/20 via-sky/15 to-mint/20 blur-2xl -z-10" />

      {/* Main player container */}
      <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-ink shadow-soft">
        <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
          {!isPlaying ? (
            <div className="group relative h-full w-full">
              {/* Thumbnail Image */}
              <Image
                src={thumbnailUrl}
                alt={`${title} - ${channelName}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Vignette Overlays for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/35 to-black/40 transition-opacity duration-300 group-hover:opacity-85" />

              {/* Top Bar with Channel Badge and HD pill */}
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink/75 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-red-600 text-white">
                    <HugeiconsIcon icon={YoutubeIcon} size={13} color="currentColor" />
                  </span>
                  <span>{channelName}</span>
                </div>
                <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-bold tracking-wider text-white/90 backdrop-blur-md sm:inline-flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse" />
                  <span>OFFICIAL VIDEO</span>
                </div>
              </div>

              {/* Central Play Button */}
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label={`Play video: ${title}`}
                className="group/btn absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full sm:h-24 sm:w-24 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue"
              >
                {/* Pulsing ring */}
                <span className="absolute inset-0 rounded-full bg-blue/30 animate-ping opacity-60 duration-1000 group-hover/btn:opacity-90" />
                {/* Outer glow circle */}
                <span className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue/40 to-sky/40 blur-md transition-all duration-300 group-hover/btn:scale-110" />
                {/* Button base */}
                <span className="relative grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-blue to-sky text-white shadow-glow transition-transform duration-300 group-hover/btn:scale-110 sm:h-20 sm:w-20">
                  <span className="translate-x-0.5">
                    <HugeiconsIcon icon={PlayIcon} size={30} color="currentColor" strokeWidth={2.4} />
                  </span>
                </span>
              </button>

              {/* Bottom Caption and Actions */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[.16em] text-sky">
                      <HugeiconsIcon icon={Video01Icon} size={14} color="currentColor" />
                      <span>Executive Perspective</span>
                    </div>
                    <h3 className="mt-1 text-lg font-extrabold text-white sm:text-2xl tracking-tight line-clamp-2">
                      {title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(true)}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-ink transition hover:bg-sky"
                    >
                      <HugeiconsIcon icon={PlayIcon} size={14} color="currentColor" />
                      <span>Play Now</span>
                    </button>
                    <a
                      href={`https://youtu.be/${videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                    >
                      <span>YouTube</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative h-full w-full">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                title={`${title} - ${channelName}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full border-0"
              />
              <button
                type="button"
                onClick={() => setIsPlaying(false)}
                aria-label="Close video"
                className="absolute right-3 top-3 z-20 rounded-full border border-white/20 bg-ink/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition hover:bg-ink"
              >
                ✕ Close
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Floating Meta Badges for desktop */}
      <div className="floating absolute -bottom-5 -left-4 hidden rounded-2xl border border-white/20 bg-white p-3.5 text-ink shadow-soft sm:block">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue/10 text-blue">
            <HugeiconsIcon icon={Video01Icon} size={18} color="currentColor" />
          </span>
          <div>
            <p className="text-xs font-extrabold">Executive Insight</p>
            <p className="text-[10px] text-slate-500">Culture & operations</p>
          </div>
        </div>
      </div>

      <div className="floating-delayed absolute -top-5 -right-4 hidden rounded-2xl border border-white/10 bg-ink px-4 py-2.5 text-white shadow-soft sm:block">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-bold text-white">Full HD Available</span>
        </div>
      </div>
    </div>
  );
}
