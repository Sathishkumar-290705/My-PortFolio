import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f14] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-28">
        
        {/* Creative Email Welcome */}
        <div className="text-center mb-28">
          <p className="text-slate-400 text-lg mb-4 tracking-wide">
            Prefer direct communication?
          </p>

          <h3 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=new"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-white
                underline underline-offset-8
                decoration-indigo-400
                hover:text-indigo-400
                transition
              "
            >
              sathishkumar290705@gmail.com
            </a>
          </h3>

          <p className="text-slate-500 mt-6 max-w-xl mx-auto">
            Whether it’s a project, collaboration, or just a tech
            conversation — my inbox is always open.
          </p>
        </div>

        {/* Footer Content */}
        <div className="grid gap-16 md:grid-cols-3">
          
          {/* Identity */}
          <div>
            <h4 className="text-xl font-bold text-white mb-3">
              Sathish Kumar
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Full-Stack Developer & AI Enthusiast crafting secure,
              scalable, and human-centered digital products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-sm font-semibold tracking-widest text-white mb-5">
              EXPLORE
            </h5>
            <ul className="space-y-4">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contactme" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="
                      inline-flex items-center gap-2
                      text-slate-400
                      hover:text-indigo-400
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

          {/* Social */}
          <div>
            <h5 className="text-sm font-semibold tracking-widest text-white mb-5">
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
                      bg-white/5
                      border border-white/10
                      text-slate-400
                      hover:text-indigo-400
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

        {/* Bottom Line */}
        <div className="mt-24 pt-8 border-t border-white/5 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Sathish Kumar — Designed & Built
          with React and Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
