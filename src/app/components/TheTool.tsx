const centuryGothic = "'Century Gothic Pro', 'Century Gothic', sans-serif";
const baskerville = "'Baskerville', 'Libre Baskerville', serif";

/* Figma asset URLs */
const imgLogo = "https://www.figma.com/api/mcp/asset/bc9b0f69-8e5b-4e05-8733-846cca89fd95";
const imgRow1 = "https://www.figma.com/api/mcp/asset/4b890598-e034-4600-899f-2c1845064537";
const imgRow2 = "https://www.figma.com/api/mcp/asset/613004d9-e7eb-4c86-8b14-b06557e5a8d3";
const imgRow3 = "https://www.figma.com/api/mcp/asset/0c2f5822-8ac0-47b8-b797-64674a539dcc";
const imgRow4 = "https://www.figma.com/api/mcp/asset/92e4438c-0270-490e-8c23-e959ad6f40be";
const imgFlagUS = "https://www.figma.com/api/mcp/asset/1965b73d-a776-4889-a14f-5f1f8572ce57";
const imgFlagCA = "https://www.figma.com/api/mcp/asset/0d537f69-c306-4b36-9a01-98b6f3561e4f";
const imgFlagDE = "https://www.figma.com/api/mcp/asset/bf483bff-2d39-4f27-b72b-3b2dde7bf4a5";
const imgAddIcon = "https://www.figma.com/api/mcp/asset/638a7bec-1d5d-4725-a73e-d57afce46745";
const imgSaveIcon = "https://www.figma.com/api/mcp/asset/ec47a2fc-e235-4534-95ad-6ee7cf89910a";
const imgDownloadIcon = "https://www.figma.com/api/mcp/asset/fe5c6401-a318-41d8-aa32-3431b2ab96f6";

const results = [
  {
    image: imgRow1,
    similarity: "98%",
    arrow: "up" as const,
    flag: imgFlagUS,
    territory: "US",
    givenName: "Judges.com",
    classInfo: "042 - Science and Technology Services",
    owner: "Judges.com",
    status: "Live",
  },
  {
    image: imgRow2,
    similarity: "95%",
    flag: imgFlagUS,
    territory: "US",
    givenName: "TradeMark",
    classInfo: "042 - Science and Technology Services",
    owner: "Peterson Group",
    status: "Registered",
  },
  {
    image: imgRow2,
    similarity: "85%",
    flag: imgFlagCA,
    territory: "CA",
    givenName: "TrademarksInc",
    classInfo: "045 - Legal and Security Services",
    owner: "TheJusticeLeague",
    status: "Pending",
  },
  {
    image: imgRow3,
    similarity: "83%",
    flag: imgFlagDE,
    territory: "DE",
    givenName: "Financial Trades",
    classInfo: "036 - Insurance and Financial Services",
    owner: "AccountantsbyDay",
    status: "Live",
  },
  {
    image: imgRow4,
    similarity: "68%",
    arrow: "down" as const,
    flag: imgFlagUS,
    territory: "US",
    givenName: "CheckYourMark",
    classInfo: "045 - Legal and Security Services",
    owner: "TrademarkLawyers",
    status: "Live",
  },
];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L6 6L11 1" stroke="#0b0606" strokeWidth="1.5" />
    </svg>
  );
}

function ArrowIndicator({ direction }: { direction: "up" | "down" }) {
  return (
    <span className="ml-1 text-[14px] text-[#0b0606]">
      {direction === "up" ? "∧" : "∨"}
    </span>
  );
}

export default function TheTool() {
  return (
    <section
      className="flex flex-col gap-[36px] px-[144px] py-[60px]"
      style={{
        backgroundColor: "#554848",
        borderRadius: "150px 0 0 0",
      }}
    >
      {/* Title */}
      <h2
        className="text-[48px] leading-normal text-white"
        style={{ fontFamily: centuryGothic }}
      >
        The Tool
      </h2>

      {/* Main card */}
      <div
        className="flex w-[1152px] flex-col gap-[28px] rounded-[19px] bg-[#fdfdff] p-[25px]"
        style={{ boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)" }}
      >
        {/* Mark Profile Header */}
        <div
          className="flex w-full flex-col items-start rounded-[20px] border border-solid p-[15px]"
          style={{
            backgroundColor: "#387780",
            borderColor: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(7.5px)",
          }}
        >
          <div className="flex h-[150px] w-full items-center gap-[24px]">
            {/* Logo */}
            <div className="flex w-[150px] shrink-0 items-center justify-center py-[15px]">
              <div className="rounded-[15px] p-[10px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Trademarked or Not logo"
                  className="size-[100px] object-contain"
                  src={imgLogo}
                />
              </div>
            </div>
            {/* Left info */}
            <div className="flex flex-col gap-[24px]" style={{ fontFamily: baskerville }}>
              <p className="text-[24px] leading-normal text-[#fdfdff]">
                <span className="font-bold">Given Name</span>: Trademarked or
                Not?
              </p>
              <p className="text-[24px] leading-normal text-[#fdfdff]">
                <span className="font-bold">Territory</span>: United States
              </p>
            </div>
            {/* Right info */}
            <div className="flex flex-col gap-[24px]" style={{ fontFamily: baskerville }}>
              <p className="text-[24px] leading-normal text-[#fdfdff]">
                <span className="font-bold">Owner</span>: TrademarkedorNot
              </p>
              <p className="text-[24px] leading-normal text-[#fdfdff]">
                <span className="font-bold">Class(es)</span>: 042- Science and
                Technology Services
              </p>
            </div>
          </div>
        </div>

        {/* Filters Row */}
        <div className="flex gap-[28px]">
          {/* Trademark Status Dropdown */}
          <button
            className="flex w-[215px] items-center justify-between rounded-[5px] border border-solid px-[15px] py-[10px]"
            style={{ borderColor: "#ab9c9c", fontFamily: centuryGothic }}
          >
            <span className="text-[14px] leading-normal text-[#0b0606]">
              Trademark Status
            </span>
            <ChevronDown />
          </button>
          {/* Mark Territory Dropdown */}
          <button
            className="flex w-[361px] items-center justify-between rounded-[5px] border border-solid bg-[#fdfdff] px-[15px] py-[10px]"
            style={{ borderColor: "#ab9c9c", fontFamily: centuryGothic }}
          >
            <span className="text-[14px] leading-normal text-[#0b0606]">
              Mark Territory
            </span>
            <ChevronDown />
          </button>
          {/* Class Search Input */}
          <div
            className="flex flex-1 items-center rounded-[5px] border border-solid bg-white px-[14px] py-[12px]"
            style={{ borderColor: "#ab9c9c", fontFamily: centuryGothic }}
          >
            <span className="text-[14px] leading-normal text-[#0b0606]">
              Enter class identification or name
            </span>
          </div>
        </div>

        {/* Results Table */}
        <div className="w-full overflow-x-auto overflow-y-auto" style={{ maxHeight: 393 }}>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {[
                  { label: "Image", width: "w-[70px]" },
                  { label: "Similarity %", width: "w-[100px]" },
                  { label: "Territory", width: "w-[90px]" },
                  { label: "Given Name", width: "w-[140px]" },
                  { label: "Class(es)", width: "w-auto" },
                  { label: "Owner", width: "w-[160px]" },
                  { label: "Status", width: "w-[100px]" },
                ].map((col) => (
                  <th
                    key={col.label}
                    className={`py-[10px] pr-[10px] text-left text-[14px] font-bold leading-normal text-black ${col.width}`}
                    style={{ fontFamily: "'Century Gothic', sans-serif" }}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((row, i) => (
                <tr key={i}>
                  {/* Image */}
                  <td className="py-[10px]">
                    <div className="relative size-[50px] overflow-hidden rounded-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt=""
                        className="absolute inset-0 size-full object-cover"
                        src={row.image}
                      />
                    </div>
                  </td>
                  {/* Similarity % */}
                  <td className="py-[10px]">
                    <span
                      className="text-[20px] leading-normal text-black"
                      style={{ fontFamily: baskerville }}
                    >
                      {row.similarity}
                    </span>
                    {row.arrow && <ArrowIndicator direction={row.arrow} />}
                  </td>
                  {/* Territory */}
                  <td className="py-[10px]">
                    <div className="flex items-center gap-[10px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt={row.territory}
                        className="size-[20px]"
                        src={row.flag}
                      />
                      <span
                        className="text-[20px] leading-normal text-black"
                        style={{ fontFamily: baskerville }}
                      >
                        {row.territory}
                      </span>
                    </div>
                  </td>
                  {/* Given Name */}
                  <td className="py-[10px]">
                    <span
                      className="text-[20px] leading-normal text-black"
                      style={{ fontFamily: baskerville }}
                    >
                      {row.givenName}
                    </span>
                  </td>
                  {/* Class(es) */}
                  <td className="py-[10px]">
                    <span
                      className="text-[20px] leading-normal text-black"
                      style={{ fontFamily: baskerville }}
                    >
                      {row.classInfo}
                    </span>
                  </td>
                  {/* Owner */}
                  <td className="py-[10px]">
                    <span
                      className="text-[20px] leading-normal text-black"
                      style={{ fontFamily: baskerville }}
                    >
                      {row.owner}
                    </span>
                  </td>
                  {/* Status */}
                  <td className="py-[10px]">
                    <span
                      className="text-[20px] leading-normal text-black"
                      style={{ fontFamily: baskerville }}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Bar: Pagination + Action Buttons */}
        <div className="flex w-full items-center justify-between">
          {/* Pagination */}
          <div
            className="flex items-center gap-[23px] rounded-[15px] bg-white p-[12px]"
            style={{
              boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
              fontFamily: centuryGothic,
            }}
          >
            <span className="text-[14px] font-bold leading-normal text-black underline">
              1
            </span>
            {["2", "3", "4", "5", "..."].map((page) => (
              <button
                key={page}
                className="cursor-pointer text-[14px] leading-normal text-black"
              >
                {page}
              </button>
            ))}
            <div className="h-[17px] w-px bg-[#d9d9d9]" />
            <button className="cursor-pointer text-[14px] leading-normal text-black">
              Next
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-[10px]">
            {/* Compare New Logo */}
            <button
              className="relative flex w-[182px] items-center gap-[5px] overflow-hidden rounded-[20px] px-[10px] py-[15px]"
              style={{
                backgroundColor: "#f7f4f4",
                boxShadow:
                  "inset -2px -2px 4px 0px rgba(189,189,189,0.25), inset 0px 2px 4px 0px rgba(0,0,0,0.25)",
                fontFamily: centuryGothic,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" className="size-[17px]" src={imgAddIcon} />
              <span className="text-[14px] leading-normal text-black">
                Compare New Logo
              </span>
            </button>
            {/* Save Results */}
            <button
              className="relative flex w-[124px] items-center gap-[5px] overflow-hidden rounded-[20px] border border-solid px-[10px] py-[15px]"
              style={{
                backgroundColor: "#e3e2dd",
                borderColor: "#e3e2dd",
                boxShadow:
                  "inset -2px -2px 4px 0px rgba(189,189,189,0.25), inset 0px 2px 4px 0px rgba(0,0,0,0.25)",
                fontFamily: centuryGothic,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" className="size-[17px]" src={imgSaveIcon} />
              <span className="text-[14px] leading-normal text-[#0b0606]">
                Save Results
              </span>
            </button>
            {/* Download Report */}
            <button
              className="relative flex w-[163px] items-center gap-[5px] overflow-hidden rounded-[20px] px-[10px] py-[15px]"
              style={{
                backgroundColor: "#554848",
                boxShadow:
                  "inset -2px -2px 4px 0px rgba(189,189,189,0.25), inset 0px 2px 4px 0px rgba(0,0,0,0.25)",
                fontFamily: centuryGothic,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" className="size-[17px]" src={imgDownloadIcon} />
              <span className="text-[14px] leading-normal text-[#e0e0e0]">
                Download Report
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
