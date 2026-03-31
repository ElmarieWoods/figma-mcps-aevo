const centuryGothic = "'Century Gothic Pro', 'Century Gothic', sans-serif";

const valueProps = [
  {
    heading: "Search before you file",
    description:
      "The average USPTO filing costs $250\u2013$350 per class, and rejected applications don\u2019t get refunds.",
  },
  {
    heading: "Hours back to your day",
    description:
      "Forget spending hours manually searching for conflicts. Get comprehensive results in minutes, not days.",
  },
  {
    heading: "Peace of Mind",
    description:
      "Save, archive, and revisit your searches anytime. File with confidence knowing your mark stands out.",
  },
];

export default function ValueProposition() {
  return (
    <section className="flex flex-col gap-[36px] bg-white px-[144px] py-[60px]">
      {valueProps.map((prop, index) => (
        <div key={prop.heading}>
          <div
            className="flex items-center gap-[50px] px-[10px] py-[40px]"
            style={{ fontFamily: centuryGothic }}
          >
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-[48px] leading-normal text-[#0b0606]">
                {prop.heading}
              </p>
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-[20px] leading-normal text-[#333]">
                {prop.description}
              </p>
            </div>
          </div>
          {index < valueProps.length - 1 && (
            <div className="h-px w-full bg-[#387780]" />
          )}
        </div>
      ))}
    </section>
  );
}
