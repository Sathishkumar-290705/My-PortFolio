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
import React from "react";
import EmailContact from "./EmailContact";

const ContactMe = ({ data }) => {
  const [contactMeData, setContactMeData] = React.useState();
  const [linkData, setLinkData] = React.useState();


  const email = "sathishkumar290705@gmail.com";


  React.useEffect(() => {
    if (data) {
      setLinkData(data[0]?.links || []);
      setContactMeData(data[0]?.contactMe || []);
    }
  }, [data]);

  const Icons = {
    Email: MailIcon,
    Phone: Phone,
    Location: MapPinIcon,
    Field: Briefcase,
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
      className="flex min-h-[800px] max-w-screen justify-between px-6 py-4 text-[#000000]"
    >
      <div className="h-auto w-[600px]">
        <EmailContact email={email} />
      </div>

      <div className="mt-56 w-[800px] gap-8 ">
        <div className="flex flex-col justify-between rounded-2xl border border-darkGray bg-smoke p-8">
  <div>
    <h4 className="mb-4 text-2xl font-bold text-[#1A1A1A]">
      {contactMeData && contactMeData?.title1}
    </h4>

    <p className="mb-8 leading-relaxed text-[#666666]">
      {contactMeData && contactMeData?.content}
    </p>

    <div className="flex flex-row flex-wrap items-start gap-4">
      {contactMeData &&
        contactMeData?.about?.map((item, index) => {
          const Icon = Icons[item.label];
          return (
            <div
              key={index}
              className="flex h-20 w-80 items-center gap-4 rounded-xl border border-[#cccccc] bg-[#ffffff] p-4 transition hover:border-[#1A1A1A]"
            >
              {Icon && <Icon className="text-[#000000]" size={20} />}
              <div>
                <p className="text-sm text-[#666666]">{item.label}</p>
                <p className="font-medium text-[#000000]">{item.value}</p>
              </div>
            </div>
          );
        })}
    </div>
  </div>

  <ul className="ml-4 mt-10 flex gap-16">
    {linkData &&
      linkData?.map((item, index) => {
        const Icon = linkIcons[item.name];
        return (
          <li key={index}>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-[#666666] transition hover:text-[#000000]"
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