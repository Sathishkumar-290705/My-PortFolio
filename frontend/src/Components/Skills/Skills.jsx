import { useEffect, useState } from "react";

const Skills = ({ data }) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(data[0]?.skills || []);
  }, [data]);

  return (
    <section
      id="Skills"
      className="bg-[#f7f3eb] text-[#342815] py-28 px-6"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-20">
        <p className="uppercase tracking-widest text-sm text-[#b8aa97] mb-3">
          Expertise
        </p>
        <h2 className="text-5xl md:text-6xl leading-tight text-center">
          Skill Domains
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {skills.map((domain, index) => (
          <article
            key={index}
            className="
              bg-[#efe9df]
              rounded-3xl
              p-10
              w-full min-w-0
              border
              border-[#b8aa97]/40
              transition
              hover:-translate-y-1
              hover:shadow-[0_20px_40px_-20px_rgba(52,40,21,0.35)]
            "
          >
            {/* Domain Title */}
            <h3 className="text-2xl font-semibold mb-6">
              {domain.title}
            </h3>

            {/* Skills Pills */}
            <div className="flex flex-col gap-4 ">
              {domain.items.map((skill, i) => (
                <div>

                <span> ➤ </span>
                <span
                  key={i}
                  className="
                  px-4 py-1.5
                  text-sm
                  rounded-full
                  border
                  border-[#b8aa97]/40
                  text-text
                  hover:text-prim 
                  transition
                  w-fit
                  
                  hover:bg-[#342815]
                  "
                  >
                  {skill}
                </span>
              </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
