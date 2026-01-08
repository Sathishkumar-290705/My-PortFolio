import { Book, Briefcase, Calendar, MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";

const Experience = ({ data }) => {

  const[experience , setExperience ] = useState([])

  useEffect(()=> {
     const experience = data[0]?.experience;
     setExperience(experience)
  })
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto py-24 px-6 text-white"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-semibold mb-12">
        Experience & <span className="text-indigo-400">Learning</span>
      </h2>

      <div className="space-y-16">
        {/* Learning Path */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Book className="text-indigo-400" />
            <h3 className="text-2xl font-semibold">Learning Path</h3>
          </div>

          <div className="bg-[#141418] border border-white/10 rounded-2xl p-8 grid md:grid-cols-3 gap-8">
            {/* Left */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold">
                  {experience?.Academic_qualification}
                </h4>
                <p className="text-gray-400">
                  {experience?.college}
                </p>
              </div>

              <div className="space-y-2 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{experience?.education_place}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{experience?.education_time}</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl p-5 text-gray-300 leading-relaxed">
              {experience?.learningPath}
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-indigo-400" />
            <h3 className="text-2xl font-semibold">Experience</h3>
          </div>

          <div className="bg-[#141418] border border-white/10 rounded-2xl p-8 grid md:grid-cols-3 gap-8">
            {/* Left */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold">
                  {experience?.working_role}
                </h4>
                <p className="text-gray-400">
                  {experience?.company || experience?.college}
                </p>
              </div>

              <div className="space-y-2 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{experience?.work_place}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{experience?.working_time}</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-xl p-5 text-gray-300 leading-relaxed">
              {experience?.work}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
