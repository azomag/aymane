import React, { useState } from "react";
import logo_wedotech from "../../assets/logo/logo_wedotech.png";
import Logo_w from "../../assets/logo/Logo_w.png";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import {
  Minimize2,
  ArrowRight,
  Globe,
  ShoppingCart,
  Search,
  Hash,
  Camera,
  Palette,
  Users,
  Briefcase,
  Handshake,
  Award,
  Lightbulb,
  TrendingUp,
  Trophy,
  ChevronRight,
  LanguagesIcon,
} from "lucide-react";
import langueIcon from "../../assets/patterns/langueIcon.svg";
import { useLanguage } from "../../context/LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage, translationsData } = useLanguage();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  console.log(language, toggleLanguage, translationsData);
  const navItems = [
    { label: "Home", href: "/", path: "/", hasDropdown: false },
    {
      label: "Services",
      href: "#services",
      path: "/services",
      hasDropdown: true,
      isMegaMenu: true,
      name: "Services",
    },
    {
      label: "About us",
      href: "#about",
      path: "/about",
      hasDropdown: true,
      isMegaMenu: true,
      name: "About",
    },
    {
      label: "Contact",
      href: "#contact",
      path: "/contact",
      hasDropdown: false,
    },
  ];

  // Simplified mega menu data for Services
  const servicesMenuData = {
    webSolutions: {
      title: "Web Solutions",
      items: [
        {
          name: "Web Development",
          description: "Custom website development services",
          path: "/services/web-development",
          icon: <Globe className="text-[#7e84ff] w-5 h-5" />,
        },
        {
          name: "E-commerce",
          description: "Online store solutions",
          path: "/services/ecommerce",
          icon: <ShoppingCart className="text-[#7e84ff] w-5 h-5" />,
        },
      ],
    },
    marketingSolutions: {
      title: "Marketing Solutions",
      items: [
        {
          name: "SEO",
          description: "Search engine optimization",
          path: "/services/seo",
          icon: <Search className="text-[#7e84ff] w-5 h-5" />,
        },
        {
          name: "Social Media",
          description: "Social media management",
          path: "/services/social-media",
          icon: <Hash className="text-[#7e84ff] w-5 h-5" />,
        },
      ],
    },
    designSolutions: {
      title: "Design Solutions",
      items: [
        {
          name: "Photography",
          description: "Professional photography services",
          path: "/services/photography",
          icon: <Camera className="text-[#7e84ff] w-5 h-5" />,
        },
        {
          name: "Graphic Design",
          description: "Creative design solutions",
          path: "/services/design",
          icon: <Palette className="text-[#7e84ff] w-5 h-5" />,
        },
      ],
    },
  };

  // Simplified mega menu data for About Us
  const aboutMenuData = {
    companyInfo: {
      title: "Company Info",
      items: [
        {
          name: "Our Team",
          description: "Meet our professionals",
          path: "/about/team",
          icon: <Users className="text-[#7e84ff] w-5 h-5" />,
        },
        {
          name: "Our Expertise",
          description: "Areas of specialization",
          path: "/about/expertise",
          icon: <Briefcase className="text-[#7e84ff] w-5 h-5" />,
        },
      ],
    },
    partnerships: {
      title: "Partnerships",
      items: [
        {
          name: "Collaborations",
          description: "Our strategic partners",
          path: "/about/partners",
          icon: <Handshake className="text-[#7e84ff] w-5 h-5" />,
        },
        {
          name: "Awards",
          description: "Industry recognition",
          path: "/about/awards",
          icon: <Award className="text-[#7e84ff] w-5 h-5" />,
        },
      ],
    },
    values: {
      title: "Our Values",
      items: [
        {
          name: "Mission",
          description: "Our core purpose",
          path: "/about/mission",
          icon: <Lightbulb className="text-[#7e84ff] w-5 h-5" />,
        },
        {
          name: "Growth",
          description: "Our progress journey",
          path: "/about/growth",
          icon: <TrendingUp className="text-[#7e84ff] w-5 h-5" />,
        },
      ],
    },
  };

  const renderMobileDropdownContent = (item) => {
    let menuData;
    if (item.label === "Services") {
      menuData = servicesMenuData;
    } else if (item.label === "About us") {
      menuData = aboutMenuData;
    } else {
      return null;
    }

    return (
      <div className="pl-4 mt-2 space-y-6 bg-[#2a2a2a] p-4 rounded-lg">
        {Object.values(menuData).map((section, sectionIndex) => (
          <div className="space-y-4" key={sectionIndex}>
            <h3 className="text-sm font-bold text-[#7e84ff] uppercase tracking-wider">
              {section.title}
            </h3>
            <div className="space-y-4">
              {section.items.map((subItem, idx) => (
                <Link
                  key={idx}
                  to={subItem.path}
                  onClick={() => {
                    setIsSidebarOpen(false);
                    setMobileDropdown(null);
                  }}
                  className="group flex items-start space-x-3 p-2 rounded-lg transition hover:bg-[#3a3a3a]"
                >
                  <div className="flex-shrink-0 mt-1">{subItem.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white">{subItem.name}</h4>
                    <p className="text-sm text-gray-300 mt-1">
                      {subItem.description}
                    </p>
                    <ArrowRight className="text-[#7e84ff] w-4 h-4 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="px-2.5">
      {/* Navigation Bar */}
      <div className=" flex md:gap-4  gap-3  mx-auto w-full max-w-[827px]   h-[100px] items-center">
        <nav className="relative w-full max-w-[827px] h-[52px] mt-12 bg-[#232323] rounded-[50px] border border-solid border-black shadow-[0px_4px_4px_#00000040] flex items-center justify-between px-5">
          <div className="hidden md:flex items-center">
            <img className="h-[31px]" alt="Logo" src={logo_wedotech} />
          </div>
          <div className="md:hidden flex items-center">
            <img className="h-[31px]" alt="Logo" src={Logo_w} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block items-center gap-8">
            <div className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="[font-family:'Nunito',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[normal] hover:text-[#7e84ff] transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button className="w-[109px] h-9 bg-[#7e84ff] rounded-[50px] border border-solid border-black shadow-[0px_4px_4px_#00000040] [font-family:'Nunito',Helvetica] font-normal text-white text-base hover:bg-[#6a70e0]">
              Book a call
            </Button>
          </div>

          {/* Mobile Menu Button and CTA */}
          <div className="flex md:hidden gap-5">
            <div className="md:hidden flex  gap-3 items-center ">
              <Button className="w-[109px] h-8 bg-[#7e84ff] rounded-[50px] border border-solid border-black shadow-[0px_4px_4px_#00000040] [font-family:'Nunito',Helvetica] font-normal text-white text-base hover:bg-[#6a70e0]">
                Book a call
              </Button>
              <img src={langueIcon} alt="" />
            </div>
          </div>
        </nav>

        <Badge className="hidden md:flex bg-[#232323] mt-11 p-2 rounded-full  font-mono tabular-nums  items-center  ">
          <img src={langueIcon} alt="" />
        </Badge>
        <Badge className="md:hidden flex bg-[#232323] mt-11 p-2 rounded-full  font-mono tabular-nums  items-center  ">
          <button onClick={() => setIsSidebarOpen(true)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </Badge>
      </div>
      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          ></div>

          <div className="fixed top-0 right-0 h-full w-full max-w-xs bg-[#232323] shadow-xl transform transition-transform duration-300">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <Link
                onClick={() => setIsSidebarOpen(false)}
                to="/"
                className="w-24"
              >
                <img className="h-[31px]" alt="Logo" src={Logo_w} />
              </Link>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 rounded-full hover:bg-gray-700 transition"
              >
                <Minimize2 className="text-white w-6 h-6" />
              </button>
            </div>

            <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    {item.hasDropdown ? (
                      <div className="mb-4">
                        <button
                          className={`flex items-center justify-between w-full px-4 py-2 rounded-lg font-medium ${
                            mobileDropdown === index
                              ? "text-[#7e84ff] bg-[#19000E]"
                              : "text-white hover:bg-[#19000E]"
                          } transition`}
                          onClick={() =>
                            setMobileDropdown(
                              mobileDropdown === index ? null : index
                            )
                          }
                        >
                          <span>{item.label}</span>
                          <ArrowRight
                            className={`transition-transform duration-200 w-4 h-4 ${
                              mobileDropdown === index
                                ? "rotate-90"
                                : "rotate-0"
                            }`}
                          />
                        </button>

                        {mobileDropdown === index &&
                          renderMobileDropdownContent(item)}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className="block px-4 py-2 rounded-lg font-medium text-white hover:bg-[#19000E] transition"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button
                  onClick={() => setIsSidebarOpen(false)}
                  className="w-full text-center px-6 py-3 bg-[#7e84ff] text-white rounded-lg font-medium hover:bg-[#c10522] transition-colors"
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
