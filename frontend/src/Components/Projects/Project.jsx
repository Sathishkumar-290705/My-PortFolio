import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";

const ProjectCard = ({ project, onOpen }) => (
  <article className="flex h-full flex-col rounded-[28px] border border-[#6E6A61]/25 p-6 shadow-[0_16px_30px_rgba(31,31,31,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(31,31,31,0.1)]">
    <h3 className="mb-4 text-2xl font-semibold text-[#1f1f1f]">{project.title}</h3>
    <p className="mb-8 flex-1 text-base leading-relaxed text-[#6E6A61]">{project.description}</p>

    <button
      type="button"
      onClick={() => onOpen(project)}
      className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-[#fff] hover:bg-offPrim px-4 py-2.5 text-sm font-semibold text-[#1f1f1f] border shadow-[0_10px_18px_rgba(0,0,0,0.25)]" >
      View Project
      <ArrowUpRight size={16} />
    </button>
  </article>
);

const ProjectModal = ({ project, onClose }) => {


  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center  px-4 py-6  "
      onClick={onClose}
      aria-modal="true"
      role="dialog" >

      <div
        className="relative w-full max-w-2xl rounded-[28px] bg-prim border border-[#6E6A61]  p-6 
        shadow-[0_28px_60px_rgba(31,31,31,0.18)] sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >

        <button
          type="button"
          onClick={onClose}
          className=" absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border 
          border-[#6E6A61]/30 text-[#1f1f1f] hover:bg-[#ffe9c2]"
          aria-label="Close project details"
        >

          <X size={18} />

        </button>

        <div className="pr-12">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[#6E6A61]">Project</p>
          <h3 className="mb-4 text-3xl font-semibold text-[#1f1f1f]">{project.title}</h3>
          
        </div>

        <p className="mb-6 text-base leading-relaxed text-[#1f1f1f]">{project.description}</p>

        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#6E6A61]">Technologies</h4>
          <div className="flex flex-wrap gap-2.5">
            {(project.technologies || []).map((tech) => (
              <span key={tech} className="rounded-full border border-[#6E6A61]/25 bg-[#ffe9c2] px-3 py-1.5 text-sm font-medium text-[#1f1f1f]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#1f1f1f] px-4 py-2.5 text-sm font-semibold text-[#F7F2E8] hover:bg-[#3a3a3a]"
            >
              GitHub Link
            </a>
          ) : (
            <span className="inline-flex items-center justify-center rounded-full bg-[#1f1f1f] px-4 py-2.5 text-sm font-semibold text-[#F7F2E8] opacity-70">
              GitHub Link
            </span>
          )}

          <a
            href={project.url || "#"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#6E6A61]/30 bg-[#EDE6D6] px-4 py-2.5 text-sm font-semibold text-[#1f1f1f] hover:bg-[#ffe9c2]"
          >


            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ data }) => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setProjects(data[0]?.projects || []);
  }, [data]);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  return (

    <section id="Projects" className=" px-4 py-20 text-[#1f1f1f] sm:px-6 lg:px-8 lg:py-28 ">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-[#6E6A61]">Selected Work</p>
          <h2 className="text-4xl font-semibold leading-tight text-[#1f1f1f] sm:text-5xl lg:text-6xl">Key Projects</h2>
        </div>

        <div className="grid grid-cols-3 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-7">
          {projects.map((project) => (
            <ProjectCard key={project._id || project.title} project={project} onOpen={setSelectedProject} />
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;
