import {
  Briefcase,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  MailIcon,
  MapPinIcon,
  Phone,
  Twitter,
} from "lucide-react";
import React, { useState } from "react";
import EmailContact from "./EmailContact";

const ContactMe = ({ data }) => {
  
  
  const [contactMeData , setContactMeData] = React.useState();
  const [linkData , setLinkData]= React.useState();
//  console.log("sathish",linkData);
 
  
  React.useEffect(() => {
    if(data){
      setLinkData(data[0]?.links || []);
      setContactMeData(data[0]?.contactMe || []);
    }
    // console.log(data);
  }, [data]);

  // const [getData, setGetData] = React.useState({
  //   name: "",
  //   email: "",
  //   contactNumber: "",
  //   subject: "",
  //   message: "",
  // });

  // const handleValidation = (e) => {
  //   const { name, value } = e.target;
  //   setGetData((prev) => ({ ...prev, [name]: value }));
  // };

  const Icons = {
    Email: MailIcon,
    Phone: Phone,
    Location: MapPinIcon,
    Field : Briefcase
  };

  const linkIcons = {
    Linkedin,
    Github,
    Instagram,
    X: Twitter,
    Facebook,
  };

  return (
    <section
      id="Contact"
      className="max-w-screen  py-24 px-6 text-slate-100 flex  justify-between min-h-[850px]"
    >
      {/* Title */}
      <div className="w-[600px] h-auto  ">
      <h2 className="text-4xl font-semibold  text-tan">
        {/* Let’s <span className="text-mossy">Connect</span> */}
      </h2>
      <EmailContact/>
      </div>

      <div className="w-[800px] gap-12 mt-auto">
        {/* Contact Info */}
        <div className=" border border-white/5 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h4 className="text-2xl font-bold mb-4 text-[#35332f]">
              {contactMeData && contactMeData?.title1 }
            </h4>

            <p className="text-text leading-relaxed mb-8">
              {contactMeData && contactMeData?.content}
            </p>

            <div className=" flex flex-row flex-wrap gap-4 items-start ">
              {contactMeData && contactMeData?.about?.map((item, index) => {
                const Icon = Icons[item.label];
                return (
                  <div
                    key={index}
                    className="
                      flex  w-80  h-20 items-center gap-4
                      bg-[#efe9df]
                      border border-white/10
                      rounded-xl
                      p-4
                      hover:border-indigo-400/40
                      transition
                    "
                  >
                    {Icon && (
                      <Icon className="text-mossy" size={20} />
                    )}
                    <div className="">
                      <p className="text-sm text-mossy">
                        {item.label}
                      </p>
                      <p className="font-medium text-text">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Social Links */}
          <ul className="flex gap-16 mt-10 ml-4">
            {linkData && linkData?.map((item, index) => {
              const Icon = linkIcons[item.name];
              return (
                <li key={index}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-mossy
                      hover:text-indigo-400
                      transition
                    "
                  >
                    {Icon && <Icon size={22} />}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

       
      
      </div>

     
    </section>
  );
};

export default ContactMe;
