import { useEffect, useState } from "react";

const Skills = ({ data }) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(data[0]?.skills || []);
  }, [data]);

  return (
    <section id="Skills" className="px-4 py-20 text-[#1A1A1A] sm:px-6 lg:px-8 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-[#8A8A8A]">Expertise</p>
          <h2 className="skill_heading text-4xl font-semibold leading-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">{skills?.title || "Skills"}</h2>
        </div>

        <div className="grid grid-cols-3 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-7">
          {skills?.items?.map((domain, index) => (
            <article
              key={domain.title || index}
              className="group flex  h-full min-h-[280px]  flex-col rounded-[28px] border border-[#E8E8E8] bg-[#FAFAFA] p-5 shadow-[0_16px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(0,0,0,0.08)] sm:p-6 lg:p-8"
            >
              <h3 className="mb-6 text-2xl font-semibold tracking-tight text-[#1A1A1A] sm:text-[1.7rem]">
                {domain.title}
              </h3>

              <div className=" flex flex-col max-w-fit  gap-2.5 sm:gap-3">
                {domain.items?.map((skill, i) => (
                  <div
                    key={`${domain.title}-${skill}-${i}`}
                    className="flex items-center gap-2 rounded-full border border-[#E8E8E8] bg-white px-3.5 py-2 text-sm text-[#111111] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-colors duration-200 hover:border-[#D4D4D4] hover:bg-[#F0F0F0]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B0B0B0] transition-colors duration-200 group-hover:bg-[#1A1A1A]" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;