import {
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
  const [userData, setUserData] = React.useState([]);
  const contactMeData = userData[0]?.contactMe;
  const linkData = userData[0]?.links;

  React.useEffect(() => {
    setUserData(data);
  }, [data]);

  const [getData, setGetData] = React.useState({
    name: "",
    email: "",
    contactNumber: "",
    subject: "",
    message: "",
  });

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setGetData((prev) => ({ ...prev, [name]: value }));
  };

  const Icons = {
    Email: MailIcon,
    Phone: Phone,
    Location: MapPinIcon,
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
      id="contactme"
      className="max-w-6xl mx-auto py-24 px-6 text-slate-100 bg-[#0f0f14]"
    >
      {/* Title */}
      <h2 className="text-4xl font-semibold mb-14">
        Let’s <span className="text-indigo-400">Connect</span>
      </h2>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Contact Info */}
        <div className="bg-[#15151c] border border-white/5 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">
              {contactMeData?.title1 || "Contact Information"}
            </h4>

            <p className="text-slate-400 leading-relaxed mb-8">
              {contactMeData?.content}
            </p>

            <div className="space-y-4">
              {contactMeData?.about?.map((item, index) => {
                const Icon = Icons[item.label];
                return (
                  <div
                    key={index}
                    className="
                      flex items-center gap-4
                      bg-white/5
                      border border-white/10
                      rounded-xl
                      p-4
                      hover:border-indigo-400/40
                      transition
                    "
                  >
                    {Icon && (
                      <Icon className="text-indigo-400" size={20} />
                    )}
                    <div>
                      <p className="text-sm text-slate-400">
                        {item.label}
                      </p>
                      <p className="font-medium text-slate-200">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Social Links */}
          <ul className="flex gap-6 mt-10">
            {linkData?.map((item, index) => {
              const Icon = linkIcons[item.name];
              return (
                <li key={index}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-slate-400
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

        {/* Contact Form */}
        <div className="bg-[#15151c] border border-white/5 rounded-2xl p-8">
          <h4 className="text-xl font-semibold mb-6 text-white">
            {contactMeData?.title2 || "Send a Message"}
          </h4>

          <form className="space-y-4">
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "contactNumber", label: "Contact Number", type: "text" },
              { name: "subject", label: "Subject", type: "text" },
            ].map((field) => (
              <div key={field.name}>
                <label className="text-sm text-slate-400">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={getData[field.name]}
                  onChange={handleValidation}
                  className="
                    mt-1 w-full
                    rounded-lg
                    bg-white/5
                    border border-white/10
                    px-4 py-2
                    text-slate-200
                    focus:outline-none
                    focus:border-indigo-400
                  "
                />
              </div>
            ))}

            <div>
              <label className="text-sm text-slate-400">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={getData.message}
                onChange={handleValidation}
                className="
                  mt-1 w-full
                  rounded-lg
                  bg-white/5
                  border border-white/10
                  px-4 py-2
                  text-slate-200
                  focus:outline-none
                  focus:border-indigo-400
                "
              />
            </div>

            <button
              type="submit"
              className="
                w-full
                bg-indigo-500
                hover:bg-indigo-600
                transition
                rounded-lg
                py-3
                font-medium
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Email CTA */}
      {/* <EmailContact/> */}
    </section>
  );
};

export default ContactMe;
