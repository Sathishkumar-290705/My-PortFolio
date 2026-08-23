import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  ArrowUpRight,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] border-t border-white/5">
      <div className="max-w-[80%] mx-auto  pt-12 pb-12">
        {/* Creative Email Welcome
        <div className="text-center mb-20">
          <p className="text-[#b8aa97] text-lg mb-4 tracking-wide">
            Prefer direct communication?
          </p>

        

          <p className="text-[#efe9df] mt-6 max-w-xl mx-auto">
            Whether it’s a project, collaboration, or just a tech conversation —
            my inbox is always open.
          </p>
        </div> */}

        {/* Footer Content */}
        <div className="flex justify-around">
          {/* Identity */}
          <div className="w-96 flex flex-col gap-12">
            <div className="">

            <h4 className="text-xl font-bold text-prim mb-3">Sathish Kumar</h4>
            <p className="text-prim leading-relaxed text-justify">
              Full-Stack Developer & AI Enthusiast crafting secure, scalable,
              and human-centered digital products. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolores rerum nemo ipsa pariatur
              similique vero deserunt magnam eius optio. Cupiditate!
            </p>
            </div>
            {/* Social */}
             <div>
            <h5 className="text-sm font-semibold tracking-widest text-prim mb-5">
              FOLLOW
            </h5>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, url: "#" },
                { icon: Github, url: "#" },
                { icon: Instagram, url: "#" },
                { icon: Twitter, url: "#" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      p-4 rounded-2xl
                      bg-[#efe9df]
                      border border-white/10
                      text-text
                      hover:bg-[#b8aa97]
                      hover:text-prim
                      hover:border-indigo-400/40
                      transition
                    "
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
          </div>

          {/* Quick Links */}
          <div className="w-72">
            <h5 className="text-sm font-semibold tracking-widest text-white mb-5">
              EXPLORE
            </h5>
            <ul className="space-y-4">
              {[
                { label: "Home", href: "#Home" },
                { label: "About", href: "#About" },
                { label: "Skills", href: "#Skills" },
                { label: "Projects", href: "#Projects" },
                { label: "Contact", href: "#Contact" },
                { label: "Services", href: "#Services" },
                { label: "Experience", href: "#Experience" },
              ].map((item) => (
                <li key={item.label} >
                  <a
                    href={item.href}
                    className="
                      inline-flex items-center gap-2
                      text-prim
                  
                      hover:text-[#efe9df]
                      transition
                    "
                  >
                    {item.label}
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-80">
            <h5 className="text-xl font-semibold tracking-widest text-[#f7f3eb] mb-5">
              Services
            </h5>
            <ul className="space-y-4 text-prim">
              <li>UI Design</li>
              <li>ML Model Training</li>
              <li>Web Application Development</li>
              <li>AI-Powered Development</li>
              <li></li>
            </ul>
          </div>

      
         
        </div>

        {/* Bottom Line */}

        <div className="mt-20 pt-8 border-t border-white/5 text-center text-sm text-[#b8aa97] flex flex-row justify-between">
          <p className="flex flex-row gap-2 ">
            © {new Date().getFullYear()} Sathish Kumar — Designed & Development 
          </p>
          <p className="flex text-end">
            Even though God be against, Effort is bound to pay the wages of labour. 
            <br /> <br /> - Thiruvalluvar  &nbsp;&nbsp;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
