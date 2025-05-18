import React, { useState, useEffect, useRef } from "react";

export default function NavBar() {
  const [colorMode, setColorMode] = useState("light");
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const themeMenuRef = useRef(null);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    setColorMode(savedTheme);
  }, []);

  useEffect(() => {
    // Remove existing theme classes
    document.documentElement.classList.remove("dark", "purple", "light");
    
    // Apply the selected color mode
    document.documentElement.classList.add(colorMode);
    
    // Save preference
    localStorage.setItem('theme', colorMode);
  }, [colorMode]);

  // Close the theme menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target)) {
        setIsThemeMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleThemeMenu = () => {
    setIsThemeMenuOpen(!isThemeMenuOpen);
  };

  const changeTheme = (theme) => {
    setColorMode(theme);
    setIsThemeMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 purple:bg-white border-b border-gray-200 dark:border-gray-800 purple:border-purple-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-xl font-bold text-gray-800 dark:text-white purple:text-gray-800">
              AZ<span className="text-blue-600 dark:text-blue-400 purple:text-purple-600">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#home" className="text-gray-500 dark:text-gray-300 purple:text-gray-600 hover:text-gray-900 dark:hover:text-white purple:hover:text-purple-600 px-3 py-2 text-sm font-medium">Home</a>
            <a href="#about" className="text-gray-500 dark:text-gray-300 purple:text-gray-600 hover:text-gray-900 dark:hover:text-white purple:hover:text-purple-600 px-3 py-2 text-sm font-medium">About</a>
            <a href="#projects" className="text-gray-500 dark:text-gray-300 purple:text-gray-600 hover:text-gray-900 dark:hover:text-white purple:hover:text-purple-600 px-3 py-2 text-sm font-medium">Projects</a>
            <a href="#skills" className="text-gray-500 dark:text-gray-300 purple:text-gray-600 hover:text-gray-900 dark:hover:text-white purple:hover:text-purple-600 px-3 py-2 text-sm font-medium">Skills</a>
            <a href="#achievements" className="text-gray-500 dark:text-gray-300 purple:text-gray-600 hover:text-gray-900 dark:hover:text-white purple:hover:text-purple-600 px-3 py-2 text-sm font-medium">Achievements</a>
            <a href="#contact" className="text-gray-500 dark:text-gray-300 purple:text-gray-600 hover:text-gray-900 dark:hover:text-white purple:hover:text-purple-600 px-3 py-2 text-sm font-medium">Contact</a>
            
            {/* Theme Switcher */}
            <div className="relative" ref={themeMenuRef}>
              <button
                onClick={toggleThemeMenu}
                className="flex items-center text-gray-500 dark:text-gray-300 purple:text-gray-600 hover:text-gray-900 dark:hover:text-white purple:hover:text-purple-600 focus:outline-none"
                aria-label="Toggle color mode"
              >
                {colorMode === "light" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
                {colorMode === "dark" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
                {colorMode === "purple" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )}
              </button>
              
              {/* Theme Menu Dropdown */}
              {isThemeMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 purple:bg-white ring-1 ring-black ring-opacity-5 py-1">
                  <button
                    onClick={() => changeTheme("light")}
                    className={`${
                      colorMode === "light" ? "bg-gray-100 dark:bg-gray-700 purple:bg-gray-100" : ""
                    } flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 purple:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 purple:hover:bg-gray-100`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Light
                  </button>
                  <button
                    onClick={() => changeTheme("dark")}
                    className={`${
                      colorMode === "dark" ? "bg-gray-100 dark:bg-gray-700 purple:bg-gray-100" : ""
                    } flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 purple:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 purple:hover:bg-gray-100`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    Dark
                  </button>
                  <button
                    onClick={() => changeTheme("purple")}
                    className={`${
                      colorMode === "purple" ? "bg-gray-100 dark:bg-gray-700 purple:bg-gray-100" : ""
                    } flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 purple:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 purple:hover:bg-gray-100`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Purple
                  </button>
                </div>
              )}
            </div>
            
            {/* Resume Button */}
            <a
              href="/resume"
              className="ml-2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 dark:bg-blue-500 purple:bg-purple-600 hover:bg-blue-700 dark:hover:bg-blue-600 purple:hover:bg-purple-700 transition-colors duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {/* Theme icon button for mobile */}
            <button
              onClick={toggleThemeMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-300 purple:text-gray-600 hover:text-gray-900 dark:hover:text-white purple:hover:text-purple-600 focus:outline-none"
              aria-label="Toggle theme"
            >
              {colorMode === "light" && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
              {colorMode === "dark" && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
              {colorMode === "purple" && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              )}
            </button>
            
            {/* Hamburger menu button */}
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-300 purple:text-gray-600 hover:text-gray-900 dark:hover:text-white purple:hover:text-purple-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Theme Menu Dropdown for Mobile */}
      {isThemeMenuOpen && (
        <div className="md:hidden absolute right-4 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 purple:bg-white ring-1 ring-black ring-opacity-5 py-1 z-50">
          <button
            onClick={() => changeTheme("light")}
            className={`${
              colorMode === "light" ? "bg-gray-100 dark:bg-gray-700 purple:bg-gray-100" : ""
            } flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 purple:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 purple:hover:bg-gray-100`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Light
          </button>
          <button
            onClick={() => changeTheme("dark")}
            className={`${
              colorMode === "dark" ? "bg-gray-100 dark:bg-gray-700 purple:bg-gray-100" : ""
            } flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 purple:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 purple:hover:bg-gray-100`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            Dark
          </button>
          <button
            onClick={() => changeTheme("purple")}
            className={`${
              colorMode === "purple" ? "bg-gray-100 dark:bg-gray-700 purple:bg-gray-100" : ""
            } flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 purple:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 purple:hover:bg-gray-100`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Purple
          </button>
        </div>
      )}
    </nav>
  );
}