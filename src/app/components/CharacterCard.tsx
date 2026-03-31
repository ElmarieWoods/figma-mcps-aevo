interface CharacterCardProps {
  imageSrc: string;
  name: string;
  role: string;
  onClick?: () => void;
}

export default function CharacterCard({
  imageSrc,
  name,
  role,
  onClick,
}: CharacterCardProps) {
  return (
    <div
      className="flex w-[302px] cursor-pointer flex-col items-center"
      onClick={onClick}
    >
      <div className="relative aspect-[928/1232] w-full overflow-hidden rounded-[20px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={`${name} - ${role}`}
          className="absolute inset-0 size-full object-cover"
          src={imageSrc}
        />
      </div>
      <p
        className="w-full text-center text-5xl leading-normal text-black"
        style={{ fontFamily: "'Baskerville', 'Libre Baskerville', serif" }}
      >
        {name}
      </p>
      <p
        className="w-full text-center text-2xl leading-normal text-black"
        style={{ fontFamily: "'Baskerville', 'Libre Baskerville', serif" }}
      >
        {role}
      </p>
    </div>
  );
}
