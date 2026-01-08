import {
  Monitor,
  Server,
  Brain,
  Database,
  Wrench,
  Users,
  Layers,
} from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Icon mapper (based on skill title)
 * Backend sends only title + items
 */
const iconMap = {
  Frontend: Monitor,
  Backend: Server,
  "AI/ML": Brain,
  Database: Database,
  "DevOps and Tools": Wrench,
  "Soft Skills": Users,
  "Other Skills": Layers,
};

const Skills = ({ data }) => {

  const [skills,setSkills]=useState([])

  useEffect(()=>{
    const skills = data[0]?.skills;
    setSkills(skills)
  })
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto py-24 px-6 text-white"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-semibold mb-12">
        Technical <span className="text-indigo-400">Skills</span>
      </h2>

      {/* Skills Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ _id, title, items }) => {
          const Icon = iconMap[title] || Layers;

          return (
            <div
              key={_id}
              className="bg-[#141418] border border-white/10 rounded-2xl p-6 hover:border-indigo-400/40 transition"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-4">
                <Icon className="text-indigo-400" size={22} />
                <h4 className="text-lg font-semibold">{title}</h4>
              </div>

              {/* Skill Items */}
              <ul className="flex flex-wrap gap-2 text-sm">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
