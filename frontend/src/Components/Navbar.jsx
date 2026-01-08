import {
  Home,
  Briefcase,
  Folder,
  Paintbrush,
  ShoppingBag,
  Mail,
  Linkedin,
  Instagram,
  X,
  Dribbble,
  MapPin,
} from "lucide-react";
import s_letter from '../Assets/s_letter.jpeg'

const NavItem = ({ icon: Icon, label, active }) => (
  <div
    className={`flex items-center gap-4 px-5 py-3 rounded-xl cursor-pointer transition
      ${
        active
          ? "bg-white/10 text-white"
          : "text-gray-400 hover:bg-white/5 hover:text-white"
      }`}
  >
    <Icon size={20} />
    <span className="text-base font-medium">{label}</span>
  </div>
);

const Navbar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[360px] bg-[#000000] px-8 py-8">
      
      {/* Profile */}
      <div className="flex items-center gap-3 mb-10">
        <img
          src={s_letter}
          className="w-10 h-10 rounded-full object-cover"
          alt="avatar"
        />
        <div>
          <h2 className="font-bold text-lg text-white">Sathish Kumar R </h2>
          <p className="text-sm text-green-400">ML Engineer</p>
        </div>
      </div>

      {/* Creations */}
      <p className="text-xs text-gray-500 tracking-widest mb-4">
        CREATIONS
      </p>

    <nav className="space-y-3">
    <NavItem icon={Home} label="About Me" active />
    <NavItem icon={Paintbrush} label="Skills" />
    <NavItem icon={Briefcase} label="Experience" />
    <NavItem icon={Folder} label="Projects" />  
    <NavItem icon={Mail} label="Contact" />
    </nav>

      {/* Socials */}
      <div className="mt-10">
        <p className="text-sm font-semibold text-gray-500 tracking-widest mb-4">
          SOCIALS
        </p>
        <div className="flex gap-6 text-gray-400">
          <Mail size={24} />
          <Dribbble size={24} />
          <Linkedin size={24} />
          <X size={24} />
          <Instagram size={24} />
        </div>
      </div>

      {/* Location */}
      <p className="absolute bottom-6 left-6 text-sm text-gray-500 flex flex-row gap-2">
        <MapPin/>  Chennai , Tamil Nadu , India 
      </p>
    </aside>
  );
};

export default Navbar;
