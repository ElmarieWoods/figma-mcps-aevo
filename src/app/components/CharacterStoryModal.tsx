"use client";

import { useEffect, useCallback } from "react";

export interface StoryStage {
  imageSrc: string;
  content: React.ReactNode;
}

interface CharacterStoryModalProps {
  stages: StoryStage[];
  activeStage: number;
  onStageChange: (stage: number) => void;
  onClose: () => void;
}

const centuryGothic =
  "'Century Gothic Pro', 'Century Gothic', sans-serif";
const centuryGothicBold =
  "'Century Gothic Pro', 'Century Gothic', sans-serif";

export default function CharacterStoryModal({
  stages,
  activeStage,
  onStageChange,
  onClose,
}: CharacterStoryModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && activeStage < stages.length - 1)
        onStageChange(activeStage + 1);
      if (e.key === "ArrowLeft" && activeStage > 0)
        onStageChange(activeStage - 1);
    },
    [onClose, activeStage, onStageChange, stages.length]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ backgroundColor: "rgba(85, 72, 72, 0.7)", backdropFilter: "blur(5px)" }}
      onClick={onClose}
    >
      {/* Stacked cards container */}
      <div
        className="relative h-[483px] w-[791px]"
        onClick={(e) => e.stopPropagation()}
      >
        {stages.map((stage, index) => {
          const distanceFromActive = index - activeStage;
          const isActive = index === activeStage;
          const isBehind = distanceFromActive > 0;
          const isHidden = distanceFromActive < 0;

          return (
            <div
              key={index}
              className="absolute top-0 left-0 flex w-[670px] flex-col items-center transition-all duration-500 ease-in-out"
              style={{
                zIndex: stages.length - Math.abs(distanceFromActive),
                transform: isBehind
                  ? `translateX(${distanceFromActive * 70}px)`
                  : isHidden
                  ? `translateX(${distanceFromActive * 40}px) scale(0.97)`
                  : "translateX(0)",
                opacity: isActive ? 1 : isHidden ? 0 : 0.2,
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              <div
                className="flex w-full items-center gap-[36px] rounded-[20px] pr-[20px]"
                style={{ backgroundColor: "#c6c5b9", height: "483px" }}
              >
                {/* Image */}
                <div className="relative h-[483px] w-[364px] shrink-0 overflow-hidden rounded-[20px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    className="absolute inset-0 size-full object-cover"
                    src={stage.imageSrc}
                  />
                </div>
                {/* Text content */}
                <div className="flex h-full w-[250px] flex-col justify-center">
                  <div
                    className="text-[20px] leading-normal text-[#0b0606]"
                    style={{ fontFamily: centuryGothic }}
                  >
                    {stage.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dot navigation */}
      <div
        className="mt-4 flex items-center gap-[20px]"
        onClick={(e) => e.stopPropagation()}
      >
        {stages.map((_, index) => (
          <button
            key={index}
            onClick={() => onStageChange(index)}
            className="size-[20px] cursor-pointer rounded-full transition-colors duration-300"
            style={{
              backgroundColor:
                index === activeStage ? "#1a6b3c" : "#b8b8b8",
            }}
            aria-label={`Go to stage ${index + 1}`}
          />
        ))}
      </div>

      {/* Close button */}
      <button
        className="mt-6 cursor-pointer rounded-[5px] border border-solid bg-[#fdfdff] px-[40px] py-[12px]"
        style={{
          borderColor: "#ab9c9c",
          fontFamily: centuryGothicBold,
        }}
        onClick={onClose}
      >
        <span className="text-center text-[14px] font-bold leading-normal text-[#0b0606]">
          Close
        </span>
      </button>
    </div>
  );
}
