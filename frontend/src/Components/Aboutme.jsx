import React, { useEffect, useState } from "react";

const AboutMe = ({ data }) => {
   const [aboutMe ,setAboutMe] = useState([])

  
  useEffect(()=>{
    const aboutMe = data[0]?.aboutMe;
    setAboutMe(aboutMe)
  })

  return (
    <section
      id="about"
      className="max-w-[90%] mx-auto py-24 px-10 text-white"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-semibold mb-12 capitalize">
       Know More &nbsp;
        <span className="text-indigo-400">
          About Me 
        </span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Left: About Content */}
        <div className="md:col-span-2 bg-[#141418] border border-white/10 rounded-2xl p-8 space-y-6 text-gray-400 leading-relaxed">
          {aboutMe?.content?.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        {/* Right: Personal Info */}
        <div className="bg-[#141418] border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-6 text-white">
            Personal Details
          </h3>

          <div className="grid grid-cols-2 gap-y-4 text-sm">
            {Object.entries(aboutMe?.about || {}).map(
              ([key, value], index) => (
                <div key={index} className="bg-indigo-400 max-w-[20] w-[20]">
                  <span className="text-gray-400 font-medium">
                    {key.replace(/_/g, " ")}
                  </span>
                  <br />
                  <span
                    className={`text-white ${
                      key === "Availability" ? "text-green-400 font-medium" : ""
                    }`}
                  >
                    {value}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
