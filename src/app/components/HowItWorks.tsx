const centuryGothic = "'Century Gothic Pro', 'Century Gothic', sans-serif";

/* Figma asset URLs */
const imgFileDownload =
  "https://www.figma.com/api/mcp/asset/d26462a2-ff13-491a-bea7-c25a4d23a107";
const imgUserClock =
  "https://www.figma.com/api/mcp/asset/3db03d62-0196-4b26-b051-c9a222af5cd1";
const imgRocketship =
  "https://www.figma.com/api/mcp/asset/3de4d1f6-2693-4ebc-b17b-a0d11d7b3d71";
const imgShape =
  "https://www.figma.com/api/mcp/asset/97202112-4166-43ca-83ce-08eeee8c005e";
const imgNikeSwoosh =
  "https://www.figma.com/api/mcp/asset/2ada7c71-8798-4630-a120-b18116b43702";
const imgNikeSwoosh3D =
  "https://www.figma.com/api/mcp/asset/02eaf796-7ceb-4f8e-a0a6-6624c6aaf2c7";
const imgCocaCola =
  "https://www.figma.com/api/mcp/asset/2e09df58-7c74-47de-b855-7936e953b698";
const imgHallmark =
  "https://www.figma.com/api/mcp/asset/3a4f4b60-9cde-4c0c-b62e-21127c259d50";
const imgMatch1 =
  "https://www.figma.com/api/mcp/asset/4e45de28-8424-4e25-99cc-2aca853c216e";
const imgMatch2 =
  "https://www.figma.com/api/mcp/asset/c1586b29-dc7a-4d9e-9268-dbe9ca62c8b6";
const imgMatch3 =
  "https://www.figma.com/api/mcp/asset/35244aaf-f24b-44fd-8706-beab65e27d50";

function StepBadge({
  number,
  icon,
  title,
  description,
  position = "left",
}: {
  number: number;
  icon: string;
  title: string;
  description: string;
  position?: "left" | "right";
}) {
  const isRight = position === "right";

  return (
    <div
      className="relative flex h-[270px] w-[328px] shrink-0 flex-col overflow-hidden"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderRadius: isRight
          ? "0 20px 20px 100px"
          : "20px 0 100px 20px",
        boxShadow: isRight
          ? "-4px 0px 4px 0px rgba(0, 0, 0, 0.25)"
          : "4px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        alignItems: isRight ? "flex-end" : "flex-start",
      }}
    >
      {/* Step number */}
      <div
        className="relative flex h-[43px] w-[51px] shrink-0 items-center justify-center overflow-hidden"
        style={{
          backgroundColor: "#62929e",
          borderRadius: isRight ? "0 0 0 30px" : "0 0 30px 0",
          opacity: 0.8,
          boxShadow: "inset 0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <span
          className="text-center text-[20px] font-bold leading-normal text-[#fdfdff]"
          style={{ fontFamily: centuryGothic }}
        >
          {number}
        </span>
      </div>
      {/* Content */}
      <div className="flex flex-1 flex-col items-center gap-[12px] px-[20px] pb-[20px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" className="size-[50px]" src={icon} />
        <p
          className="w-full text-center text-[20px] font-bold leading-normal text-[#0b0606]"
          style={{ fontFamily: centuryGothic }}
        >
          {title}
        </p>
        <p
          className="w-full text-center text-[20px] leading-normal text-[#0b0606]"
          style={{ fontFamily: centuryGothic }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      className="flex flex-col gap-[36px] overflow-hidden px-[146px] py-[72px]"
      style={{
        backgroundColor: "#c6c5b9",
        borderRadius: "0 150px 0 150px",
      }}
    >
      {/* Title */}
      <h2
        className="w-[1148px] text-[48px] leading-normal text-[#0b0606]"
        style={{ fontFamily: centuryGothic }}
      >
        How It Works
      </h2>

      <div className="flex w-[1148px] flex-col gap-[36px]">
        {/* Step 1: Upload Any Mark */}
        <div
          className="flex items-center gap-[36px] rounded-[20px]"
          style={{
            backgroundColor: "rgba(253, 253, 255, 0.6)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
          }}
        >
          <StepBadge
            number={1}
            icon={imgFileDownload}
            title="Upload Any Mark"
            description="We accept word marks, logos, stylized graphics — with or without letters / numbers"
          />
          <div className="flex flex-1 items-center justify-center gap-[36px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Nike swoosh"
              className="h-[113px] w-[200px] object-cover"
              src={imgNikeSwoosh}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Coca-Cola"
              className="h-[63px] w-[200px] object-cover"
              src={imgCocaCola}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Hallmark"
              className="h-[76px] w-[200px] object-cover"
              src={imgHallmark}
            />
          </div>
        </div>

        {/* Step 2: Instant Analysis */}
        <div
          className="flex items-center justify-between rounded-[20px]"
          style={{
            backgroundColor: "rgba(253, 253, 255, 0.6)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
          }}
        >
          <div className="flex w-[820px] items-center justify-center gap-[10px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Nike swoosh"
              className="h-[113px] w-[119px] object-contain"
              src={imgNikeSwoosh}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Plus"
              className="size-[60px] p-[10px]"
              src={imgShape}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="3D analysis"
              className="h-[142px] w-[140px] object-contain"
              src={imgNikeSwoosh3D}
            />
          </div>
          <StepBadge
            number={2}
            icon={imgUserClock}
            title="Instant Analysis"
            description="Our algorithm scans 2.5M+ live trademark records in minutes"
            position="right"
          />
        </div>

        {/* Step 3: Clear Results */}
        <div
          className="flex items-center rounded-[20px]"
          style={{
            backgroundColor: "rgba(253, 253, 255, 0.6)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
          }}
        >
          <StepBadge
            number={3}
            icon={imgRocketship}
            title="Clear Results"
            description="See your closest matches ranked by similarity"
          />
          <div className="flex flex-1 items-center gap-[36px] px-[20px]">
            {/* Nike swoosh */}
            <div className="h-[84px] w-[90px] shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Nike swoosh"
                className="size-full object-contain"
                src={imgNikeSwoosh}
              />
            </div>
            {/* "is closely similar to..." */}
            <p
              className="shrink-0 text-center text-[20px] font-bold leading-normal text-[#0b0606]"
              style={{ fontFamily: centuryGothic }}
            >
              is closely similar to...
            </p>
            {/* Match results */}
            {[
              { img: imgMatch1, pct: "83%", h: 87, w: 92 },
              { img: imgMatch2, pct: "65%", h: 94, w: 92 },
              { img: imgMatch3, pct: "21%", h: 94, w: 76 },
            ].map((match) => (
              <div
                key={match.pct}
                className="flex shrink-0 flex-col items-center justify-center gap-[36px]"
              >
                <p
                  className="text-center text-[20px] leading-normal text-[#0b0606]"
                  style={{ fontFamily: centuryGothic }}
                >
                  {match.pct}
                </p>
                <div
                  className="overflow-hidden"
                  style={{ height: match.h, width: match.w }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={`${match.pct} match`}
                    className="size-full object-contain"
                    src={match.img}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <p
        className="w-[1148px] text-right text-[14px] leading-normal text-[#0b0606]"
        style={{ fontFamily: centuryGothic }}
      >
        All trademarks shown are property of their respective owners and used
        for illustrative purposes only.
      </p>
    </section>
  );
}
