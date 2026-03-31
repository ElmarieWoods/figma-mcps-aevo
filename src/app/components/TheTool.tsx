const centuryGothic = "'Century Gothic Pro', 'Century Gothic', sans-serif";

export default function TheTool() {
  return (
    <section
      className="flex flex-col gap-[36px] px-[144px] py-[60px]"
      style={{
        backgroundColor: "#554848",
        borderRadius: "150px 0 0 0",
      }}
    >
      <h2
        className="text-[48px] leading-normal text-white"
        style={{ fontFamily: centuryGothic }}
      >
        The Tool
      </h2>

      {/* Dashboard screenshot placeholder — replace src with actual exported image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="Trademark search results dashboard showing mark profile, filters, similarity results table, pagination and action buttons"
        className="w-[1152px] rounded-[19px]"
        style={{ boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)" }}
        src="/images/the-tool-dashboard.png"
      />
    </section>
  );
}
