import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const Projects = ({ data }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const project = data[0]?.projects || [];
    setProjects(project);
  }, [data]);

  return (
    <section
      id="projects"
      className="max-w-screen mx-auto py-24 px-6 text-slate-100 bg-[#0f0f14]"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-semibold mb-12 text-center">
        Featured <span className="text-indigo-400">Projects</span>
      </h2>

      {/* Projects Grid */}
      <div className="flex flex-row flex-wrap  gap-10 justify-center">
        {projects.map(
          ({ _id, title, description, technologies, url }) => (
            <div
              key={_id}
              className="
                bg-[#15151c]
                border border-white/5
                rounded-2xl
                p-6
                w-96
                transition
                hover:border-indigo-400/40
                hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.25)]
                flex flex-col
              "
            >
              {/* Title */}
              <h4 className="text-xl font-semibold text-white mb-3">
                {title}
              </h4>

              {/* Description */}
              <p className="text-slate-400 mb-5 leading-relaxed flex-1">
                {description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 h-20 mb-6">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3 py-1
                      text-sm
                   
                      h-fit
                      rounded-full
                      bg-indigo-400/10
                      border border-indigo-400/20
                      text-indigo-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action */}
              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-auto
                    inline-flex
                    items-start
                    gap-2
                    text-indigo-400
                    hover:text-indigo-300
                    transition
                    text-sm
                    font-medium
                  "
                >
                  View Project <ExternalLink size={16} />
                </a>
              )}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
