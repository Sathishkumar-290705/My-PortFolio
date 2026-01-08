import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const Projects = ({ data }) => {

  const[projects,setProjects] = useState([]);

  useEffect(()=> {
    const project = data[0]?.projects;
    setProjects(project)
  })
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-24 px-6 text-white"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-semibold mb-12">
        Featured <span className="text-indigo-400">Projects</span>
      </h2>

      {/* Projects Grid */}
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map(
          ({ _id, title, description, technologies, url }) => (
            <div
              key={_id}
              className="bg-[#141418] border border-white/10 rounded-2xl p-6 hover:border-indigo-400/40 transition flex flex-col"
            >
              {/* Title */}
              <h4 className="text-xl font-semibold mb-3">{title}</h4>

              {/* Description */}
              <p className="text-gray-400 mb-5 leading-relaxed">
                {description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300"
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
                  className="mt-auto inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition text-sm font-medium"
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
