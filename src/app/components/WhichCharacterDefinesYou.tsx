"use client";

import { useState } from "react";
import CharacterCard from "./CharacterCard";
import CharacterStoryModal, { StoryStage } from "./CharacterStoryModal";

const centuryGothicBold: React.CSSProperties = {
  fontWeight: 700,
  fontFamily: "'Century Gothic Pro', 'Century Gothic', sans-serif",
};

interface CharacterData {
  imageSrc: string;
  name: string;
  role: string;
  stages: StoryStage[];
}

const characters: CharacterData[] = [
  {
    imageSrc:
      "https://www.figma.com/api/mcp/asset/c58c5594-ba4a-450a-a540-38fcb7884e83",
    name: "Ingrid",
    role: "Entrepreneur",
    stages: [
      {
        imageSrc:
          "https://www.figma.com/api/mcp/asset/c58c5594-ba4a-450a-a540-38fcb7884e83",
        content: (
          <>
            Ingrid is a small business owner who just{" "}
            <span style={centuryGothicBold}>
              created the perfect logo for her brand
            </span>
            . Before investing in packaging and marketing, she wants to make
            sure no one else is using it.
          </>
        ),
      },
      {
        imageSrc:
          "https://www.figma.com/api/mcp/asset/c58c5594-ba4a-450a-a540-38fcb7884e83",
        content: (
          <>
            <span style={centuryGothicBold}>After 2-4 weeks</span>, she
            unfortunately receives a notification that{" "}
            <span style={centuryGothicBold}>
              her logo wasn&apos;t approved
            </span>{" "}
            and needs to resubmit a new one.
          </>
        ),
      },
      {
        imageSrc:
          "https://www.figma.com/api/mcp/asset/c58c5594-ba4a-450a-a540-38fcb7884e83",
        content: (
          <>
            <span style={centuryGothicBold}>
              Ingrid consulted Trademarked or Not
            </span>
            , and confirmed the perfect and unique logo for her business within
            minutes! 🎉
          </>
        ),
      },
    ],
  },
  {
    imageSrc:
      "https://www.figma.com/api/mcp/asset/54d9fad6-41b0-443d-b32b-2293eb1f178e",
    name: "Marcus",
    role: "Trademark Attorney",
    stages: [
      {
        imageSrc:
          "https://www.figma.com/api/mcp/asset/54d9fad6-41b0-443d-b32b-2293eb1f178e",
        content: (
          <>
            Marcus is a trademark attorney who{" "}
            <span style={centuryGothicBold}>
              handles hundreds of trademark searches every month
            </span>
            . Accuracy and speed are essential to keeping his clients happy.
          </>
        ),
      },
      {
        imageSrc:
          "https://www.figma.com/api/mcp/asset/54d9fad6-41b0-443d-b32b-2293eb1f178e",
        content: (
          <>
            Traditional searches take{" "}
            <span style={centuryGothicBold}>hours of manual review</span>,
            comparing databases and cross-referencing existing marks — time
            he could spend advising clients.
          </>
        ),
      },
      {
        imageSrc:
          "https://www.figma.com/api/mcp/asset/54d9fad6-41b0-443d-b32b-2293eb1f178e",
        content: (
          <>
            With Trademarked or Not, Marcus{" "}
            <span style={centuryGothicBold}>
              completes preliminary searches in seconds
            </span>
            , giving clients instant confidence and freeing up his schedule for
            high-value legal work.
          </>
        ),
      },
    ],
  },
  {
    imageSrc:
      "https://www.figma.com/api/mcp/asset/8b39cb66-ec2e-4e6f-8e4a-c8e4271c57eb",
    name: "Laura",
    role: "Firm Partner",
    stages: [
      {
        imageSrc:
          "https://www.figma.com/api/mcp/asset/8b39cb66-ec2e-4e6f-8e4a-c8e4271c57eb",
        content: (
          <>
            Laura manages a team of associates{" "}
            <span style={centuryGothicBold}>
              filing dozens of trademark applications per month
            </span>
            . Quality and consistency across every filing is her responsibility.
          </>
        ),
      },
      {
        imageSrc:
          "https://www.figma.com/api/mcp/asset/8b39cb66-ec2e-4e6f-8e4a-c8e4271c57eb",
        content: (
          <>
            <span style={centuryGothicBold}>After 2-4 weeks</span>, she
            unfortunately receives a notification that{" "}
            <span style={centuryGothicBold}>
              her logo wasn&apos;t approved
            </span>{" "}
            and needs to resubmit a new one.
          </>
        ),
      },
      {
        imageSrc:
          "https://www.figma.com/api/mcp/asset/8b39cb66-ec2e-4e6f-8e4a-c8e4271c57eb",
        content: (
          <>
            <span style={centuryGothicBold}>
              Ingrid consulted Trademarked or Not
            </span>
            , and confirmed the perfect and unique logo for her business within
            minutes! 🎉
          </>
        ),
      },
    ],
  },
];

export default function WhichCharacterDefinesYou() {
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(
    null
  );
  const [activeStage, setActiveStage] = useState(0);

  const openModal = (characterIndex: number) => {
    setSelectedCharacter(characterIndex);
    setActiveStage(0);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
    setActiveStage(0);
  };

  return (
    <>
      <section className="bg-white px-[144px] py-[60px]">
        <h2
          className="mb-8 text-5xl leading-none text-[#0b0606]"
          style={{
            fontFamily: "'Century Gothic Pro', 'Century Gothic', sans-serif",
          }}
        >
          Which Character Defines You?
        </h2>
        <div className="flex flex-wrap items-start justify-between gap-8">
          {characters.map((character, index) => (
            <CharacterCard
              key={character.name}
              imageSrc={character.imageSrc}
              name={character.name}
              role={character.role}
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </section>

      {selectedCharacter !== null && (
        <CharacterStoryModal
          stages={characters[selectedCharacter].stages}
          activeStage={activeStage}
          onStageChange={setActiveStage}
          onClose={closeModal}
        />
      )}
    </>
  );
}
