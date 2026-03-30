import CharacterCard from "./CharacterCard";

const characters = [
  {
    imageSrc:
      "https://www.figma.com/api/mcp/asset/c58c5594-ba4a-450a-a540-38fcb7884e83",
    name: "Ingrid",
    role: "Entrepreneur",
  },
  {
    imageSrc:
      "https://www.figma.com/api/mcp/asset/54d9fad6-41b0-443d-b32b-2293eb1f178e",
    name: "Marcus",
    role: "Trademark Attorney",
  },
  {
    imageSrc:
      "https://www.figma.com/api/mcp/asset/8b39cb66-ec2e-4e6f-8e4a-c8e4271c57eb",
    name: "Laura",
    role: "Firm Partner",
  },
];

export default function WhichCharacterDefinesYou() {
  return (
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
        {characters.map((character) => (
          <CharacterCard key={character.name} {...character} />
        ))}
      </div>
    </section>
  );
}
