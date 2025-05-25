import React, { useState, useEffect, useRef } from "react";

export default function NavBar() {
  const [colorMode, setColorMode] = useState("light");
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const themeMenuRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setColorMode(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "purple", "light");
    document.documentElement.classList.add(colorMode);
    localStorage.setItem("theme", colorMode);
  }, [colorMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target)) {
        setIsThemeMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleThemeMenu = () => {
    setIsThemeMenuOpen(!isThemeMenuOpen);
  };

  const changeTheme = (theme) => {
    setColorMode(theme);
    setIsThemeMenuOpen(false);
  };

  const themeOptions = [
    {
      name: "light",
      icon: (
        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      name: "dark",
      icon: (
        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    },
    {
      name: "purple",
      icon: (
        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 purple:bg-purple-950 border-b border-gray-200 dark:border-gray-800 purple:border-purple-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="/" className="text-xl font-bold text-gray-800 dark:text-white purple:text-purple-200">
            HP<span className="text-blue-600 dark:text-blue-400 purple:text-purple-400">.</span>
          </a>
          <div className="hidden md:flex space-x-6 items-center">
            {['Home', 'About', 'Projects', 'Skills', 'Achievements', 'Contact'].map((text) => (
              <a
                key={text}
                href={`#${text.toLowerCase()}`}
                className="text-gray-500 dark:text-gray-300 purple:text-purple-300 hover:text-gray-900 dark:hover:text-white purple:hover:text-purple-100 text-sm font-medium"
              >
                {text}
              </a>
            ))}
            <div className="relative" ref={themeMenuRef}>
              <button
                onClick={toggleThemeMenu}
                className="text-gray-500 dark:text-gray-300 purple:text-purple-300 hover:text-gray-900 dark:hover:text-white purple:hover:text-purple-100"
              >
                {themeOptions.find((t) => t.name === colorMode).icon}
              </button>
              {isThemeMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 purple:bg-purple-900 ring-1 ring-black ring-opacity-5 py-1 z-50">
                  {themeOptions.map(({ name, icon }) => (
                    <button
                      key={name}
                      onClick={() => changeTheme(name)}
                      className={`${
                        colorMode === name ? "bg-gray-100 dark:bg-gray-700 purple:bg-purple-800" : ""
                      } flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 purple:text-purple-200 hover:bg-gray-100 dark:hover:bg-gray-700 purple:hover:bg-purple-800`}
                    >
                      {icon}{name.charAt(0).toUpperCase() + name.slice(1)}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a
              href="/resume"
              className="bg-blue-600 hover:bg-blue-700 
                        dark:bg-blue-400 dark:hover:bg-blue-500 
                        purple:bg-purple-400 purple:hover:bg-purple-500 
                        text-white 
                        px-8 py-4 rounded-md font-medium transition-colors text-lg"
              >
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleThemeMenu}
              className="p-2 text-gray-500 dark:text-gray-300 purple:text-purple-300 hover:text-gray-900 dark:hover:text-white purple:hover:text-purple-100"
            >
              {themeOptions.find((t) => t.name === colorMode).icon}
            </button>
            <button
              className="p-2 text-gray-500 dark:text-gray-300 purple:text-purple-300 hover:text-gray-900 dark:hover:text-white purple:hover:text-purple-100"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isThemeMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4">
          {themeOptions.map(({ name, icon }) => (
            <button
              key={name}
              onClick={() => changeTheme(name)}
              className={`${
                colorMode === name ? "bg-gray-100 dark:bg-gray-700 purple:bg-purple-800" : ""
              } flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 purple:text-purple-200 hover:bg-gray-100 dark:hover:bg-gray-700 purple:hover:bg-purple-800 mb-1`}
            >
              {icon}{name.charAt(0).toUpperCase() + name.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
