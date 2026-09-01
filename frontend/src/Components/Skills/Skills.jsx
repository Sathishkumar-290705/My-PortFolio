import { useEffect, useState } from "react";

const Skills = ({ data }) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(data[0]?.skills || []);
  }, [data]);

  return (
    <section id="Skills" className="px-4 py-20 text-[#1f1f1f] sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-[#6E6A61]">Expertise</p>
          <h2 className="text-4xl font-semibold leading-tight text-[#1f1f1f] sm:text-5xl lg:text-6xl">Skill Domains</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-7">
          {skills.map((domain, index) => (
            <article
              key={domain.title || index}
              className="group flex h-full flex-col rounded-[28px] border border-[#6E6A61]/25 bg-[#F7F2E8] p-5 shadow-[0_16px_30px_rgba(31,31,31,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(31,31,31,0.1)] sm:p-6 lg:p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6E6A61]/35 bg-[#EDE6D6] text-sm font-semibold text-[#1f1f1f]">
                  {index + 1}
                </span>
                <span className="rounded-full border border-[#6E6A61]/30 bg-[#ffe9c2] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#1f1f1f]">
                  {domain.items?.length || 0} skills
                </span>
              </div>

              <h3 className="mb-6 text-2xl font-semibold tracking-tight text-[#1f1f1f] sm:text-[1.7rem]">
                {domain.title}
              </h3>

              <div className="mt-auto flex flex-wrap gap-2.5 sm:gap-3">
                {domain.items?.map((skill, i) => (
                  <div
                    key={`${domain.title}-${skill}-${i}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[#6E6A61]/30 bg-[#fffdf9] px-3.5 py-2 text-sm text-[#1f1f1f] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] transition-colors duration-200 hover:border-[#ffe9c2] hover:bg-[#ffe9c2]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ffe9c2] transition-colors duration-200 group-hover:bg-[#1f1f1f]" />
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
