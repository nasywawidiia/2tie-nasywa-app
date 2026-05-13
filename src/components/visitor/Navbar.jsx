import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "menu", "testimonials"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "about",
      label: "Tentang",
    },
    {
      id: "menu",
      label: "Menu",
    },
    {
      id: "testimonials",
      label: "Review",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[999] bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm">
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >
        {/* LOGO */}
        <h1 className="text-3xl font-bold text-orange-500">Nasywa Food</h1>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`
                transition
                relative
                pb-1

                ${
                  activeSection === item.id
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }
              `}
            >
              {item.label}

              {activeSection === item.id && (
                <span
                  className="
                    absolute
                    left-0
                    bottom-0
                    w-full
                    h-[2px]
                    bg-orange-500
                    rounded-full
                  "
                ></span>
              )}
            </a>
          ))}
        </nav>

        {/* BUTTON */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="
              px-5
              py-2
              border
              border-orange-500
              rounded-full
              text-orange-500
              hover:bg-orange-50
              transition
            "
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="
              px-5
              py-2
              bg-orange-500
              text-white
              rounded-full
              hover:bg-orange-600
              transition
            "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
