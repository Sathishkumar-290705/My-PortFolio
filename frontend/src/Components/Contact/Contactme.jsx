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
      className="flex min-h-[850px] max-w-screen justify-between px-6 py-24 text-[#1f1f1f]"
    >
      <div className="h-auto w-[600px]">
      <EmailContact/>
      </div>

      <div className="mt-auto w-[800px] gap-12">
        <div className="flex flex-col justify-between rounded-2xl border border-[#6E6A61]/20 bg-[#F7F2E8] p-8">
          <div>
            <h4 className="mb-4 text-2xl font-bold text-[#1f1f1f]">
              {contactMeData && contactMeData?.title1 }
            </h4>

            <p className="mb-8 leading-relaxed text-[#6E6A61]">
              {contactMeData && contactMeData?.content}
            </p>

            <div className="flex flex-row flex-wrap items-start gap-4">
              {contactMeData && contactMeData?.about?.map((item, index) => {
                const Icon = Icons[item.label];
                return (
                  <div
                    key={index}
                    className="flex h-20 w-80 items-center gap-4 rounded-xl border border-[#6E6A61]/20 bg-[#EDE6D6] p-4 transition hover:border-[#ffe9c2]"
                  >
                    {Icon && (
                      <Icon className="text-[#1f1f1f]" size={20} />
                    )}
                    <div className="">
                      <p className="text-sm text-[#6E6A61]">
                        {item.label}
                      </p>
                      <p className="font-medium text-[#1f1f1f]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <ul className="ml-4 mt-10 flex gap-16">
            {linkData && linkData?.map((item, index) => {
              const Icon = linkIcons[item.name];
              return (
                <li key={index}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#1f1f1f] transition hover:text-[#1f1f1f]"
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
