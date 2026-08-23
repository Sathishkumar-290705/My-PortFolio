import { ExternalLink, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const Projects = ({ data }) => {
  const [projects, setProjects] = useState();

  useEffect(() => {
    setProjects(data[0]?.projects || []);
  }, [data]);

  return (
    <section
      id="Projects"
      className="bg-[#f7f3eb] text-[#342815] py-28 px-6"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-20">
        <p className="uppercase tracking-widest text-sm text-[#b8aa97] mb-3">
          Selected Work
        </p>
        <h2 className="text-5xl md:text-6xl  leading-tight  text-center ">
         Key Projects 
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="max-w-screen justify-center mx-auto flex flex-wrap gap-14">
        {projects && projects.map(({ _id, title, description, technologies, url }) => (
          <article
            key={_id}
            className="
              bg-[#efe9df]
              rounded-3xl
              p-10
              flex
              flex-col
              w-[380px]
              border
              border-[#b8aa97]/40
              transition
              hover:-translate-y-1
              hover:shadow-[0_20px_40px_-20px_rgba(52,40,21,0.35)]
            "
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold mb-4">
              {title}
            </h3>

            {/* Description */}
            <p className="text-[#4c3a1e] leading-relaxed mb-8 flex-1">
              {description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-4 py-1.5
                    text-sm
                    rounded-full
                    bg-[#252320]
                    border
                    border-[#b8aa97]/40
                    text-prim
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Link */}
            { (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  w-fit
                  text-sm
                  font-medium
                  text-[#342815]
                  hover:text-[#4c3a1e]
                "
              >
                View Project
                <ArrowUpRight
                  size={16}
                  className="
                    transition
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
