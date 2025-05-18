import React, { useEffect, useState } from 'react';
import { Head } from '@inertiajs/react';
import NavBar from '../Components/Nav';
import { useSpring, animated, useTransition } from 'react-spring';

export default function Welcome(props) {
  const [selectedTech, setSelectedTech] = useState(null);
  // Add new states for projects section
  const [filter, setFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);
  
  // Tech stack data with knowledge details
  const techStackData = [
    { 
      icon: '🌐', 
      name: 'HTML', 
      color: 'text-orange-500 dark:text-orange-400 purple:text-orange-400',
      knowledge: 'Advanced - 5+ years experience with semantic HTML, accessibility practices, and HTML5 APIs.'
    },
    { 
      icon: '🎨', 
      name: 'CSS', 
      color: 'text-blue-500 dark:text-blue-400 purple:text-blue-400',
      knowledge: 'Advanced - Proficient with CSS3, Flexbox, Grid, animations, and responsive design principles.'
    },
    { 
      icon: '📜', 
      name: 'JavaScript', 
      color: 'text-yellow-500 dark:text-yellow-400 purple:text-yellow-400',
      knowledge: 'Advanced - Strong knowledge of ES6+, async/await, DOM manipulation, and modern JS patterns.'
    },
    { 
      icon: '📘', 
      name: 'TypeScript', 
      color: 'text-blue-600 dark:text-blue-400 purple:text-blue-400',
      knowledge: 'Intermediate - Type systems, interfaces, generics, and integration with React projects.'
    },
    { 
      icon: '⚛️', 
      name: 'ReactJS', 
      color: 'text-cyan-500 dark:text-cyan-400 purple:text-cyan-400',
      knowledge: 'Advanced - Hooks, Context API, Redux, custom hooks, and performance optimization techniques.'
    },
    { 
      icon: '⏭️', 
      name: 'NextJS', 
      color: 'text-gray-700 dark:text-gray-300 purple:text-gray-300',
      knowledge: 'Intermediate - Server-side rendering, static site generation, and API routes implementation.'
    },
    { 
      icon: '🎭', 
      name: 'NodeJS', 
      color: 'text-green-600 dark:text-green-400 purple:text-green-400',
      knowledge: 'Intermediate - Express.js, RESTful APIs, middleware, and basic server architecture.'
    },
    { 
      icon: '🔄', 
      name: 'PHP', 
      color: 'text-purple-600 dark:text-purple-400 purple:text-purple-400',
      knowledge: 'Advanced - OOP principles, MVC architecture, and integration with various frameworks.'
    },
    { 
      icon: '🛠️', 
      name: 'Laravel', 
      color: 'text-red-600 dark:text-red-400 purple:text-red-400',
      knowledge: 'Advanced - Eloquent ORM, Blade templates, routing, middleware, and Laravel ecosystem tools.'
    },
    { 
      icon: '🧰', 
      name: 'MySQL', 
      color: 'text-blue-800 dark:text-blue-500 purple:text-blue-500',
      knowledge: 'Intermediate - Database design, complex queries, performance optimization, and transactions.'
    },
    { 
      icon: '🔧', 
      name: 'Git', 
      color: 'text-gray-700 dark:text-gray-300 purple:text-gray-300',
      knowledge: 'Advanced - Branch management, rebasing, merge conflict resolution, and collaborative workflows.'
    },
    { 
      icon: '🐱', 
      name: 'GitHub', 
      color: 'text-gray-800 dark:text-gray-200 purple:text-gray-200',
      knowledge: 'Advanced - Actions, CI/CD pipelines, project management, and collaboration features.'
    }
  ];
  
  // Add project data
  const projectsData = [
    {
      id: 1,
      title: "Health Tracking Platform",
      category: "web",
      image: "https://via.placeholder.com/600x340",
      description: "A comprehensive mental health tracking platform for students and educational institutions.",
      technologies: ["React", "Laravel", "MySQL"],
      features: [
        "User authentication and role-based access",
        "Real-time data visualization",
        "Customizable dashboards for different user types",
        "Automated reporting system"
      ],
      link: "https://github.com/your-username/health-platform",
      demoLink: "https://health-platform-demo.com"
    },
    {
      id: 2,
      title: "E-commerce Website",
      category: "web",
      image: "https://via.placeholder.com/600x340",
      description: "A fully responsive e-commerce platform with modern UI and seamless checkout experience.",
      technologies: ["NextJS", "Node.js", "MongoDB", "Stripe API"],
      features: [
        "Product catalog with advanced filtering",
        "Shopping cart and wishlist functionality",
        "Secure payment processing",
        "Order tracking and management"
      ],
      link: "https://github.com/your-username/ecommerce-website",
      demoLink: "https://ecommerce-demo.com"
    },
    {
      id: 3,
      title: "Task Management App",
      category: "mobile",
      image: "https://via.placeholder.com/600x340",
      description: "A productivity application that helps users organize and prioritize their tasks.",
      technologies: ["React Native", "Firebase", "Redux"],
      features: [
        "Task creation and assignment",
        "Due date and priority settings",
        "Push notifications and reminders",
        "Progress tracking and reporting"
      ],
      link: "https://github.com/your-username/task-manager",
      demoLink: "https://task-manager-demo.com"
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "ui",
      image: "https://via.placeholder.com/600x340",
      description: "A modern and interactive portfolio website showcasing my skills and projects.",
      technologies: ["React", "TailwindCSS", "React Spring"],
      features: [
        "Responsive design for all devices",
        "Interactive UI elements and animations",
        "Dark and light mode support",
        "Contact form with validation"
      ],
      link: "https://github.com/your-username/portfolio",
      demoLink: "#"
    },
    {
      id: 5,
      title: "Weather Dashboard",
      category: "web",
      image: "https://via.placeholder.com/600x340",
      description: "A real-time weather application with location-based forecasting and interactive maps.",
      technologies: ["JavaScript", "WeatherAPI", "Chart.js"],
      features: [
        "Current weather conditions display",
        "5-day forecast visualization",
        "Location-based weather updates",
        "Historical weather data analysis"
      ],
      link: "https://github.com/your-username/weather-dashboard",
      demoLink: "https://weather-dashboard-demo.com"
    },
    {
      id: 6,
      title: "Educational Quiz Platform",
      category: "design",
      image: "https://via.placeholder.com/600x340",
      description: "An interactive learning platform with customizable quizzes and progress tracking.",
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
      features: [
        "Quiz creation and management",
        "Real-time scoring and feedback",
        "Student progress tracking",
        "Certificate generation for completion"
      ],
      link: "https://github.com/your-username/quiz-platform",
      demoLink: "https://quiz-platform-demo.com"
    }
  ];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
  
  // Close the tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.tech-item')) {
        setSelectedTech(null);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeProject && !event.target.closest('.project-modal-content')) {
        setActiveProject(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeProject]);
  
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeProject]);
  
  // All your original animations
  const headerAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 180, friction: 12 },
    delay: 200
  });
  
  const profileAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(-30px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { tension: 180, friction: 12 },
    delay: 400
  });
  
  const contentAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(30px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { tension: 180, friction: 12 },
    delay: 600
  });
  
  const educationAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 180, friction: 12 },
    delay: 800
  });
  
  const experienceAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 180, friction: 12 },
    delay: 1000
  });
  
  const techStackAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 180, friction: 12 },
    delay: 1200
  });
  
  const techItemAnimation = index => useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 180, friction: 12 },
    delay: 1300 + (index * 50)
  });
  
  const titleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 180, friction: 12 },
    delay: 200
  });
  
  const subtitleAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 600
  });
  
  const descriptionAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 900
  });
  
  const buttonsAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1200
  });
  
  const socialsAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1500
  });

  const cardAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { mass: 1, tension: 180, friction: 20 },
    delay: 300
  });
  
  const dotsAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { mass: 1, tension: 200, friction: 15 },
    delay: 800
  });
  
  const fileNameAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(20px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { mass: 1, tension: 170, friction: 14 },
    delay: 1000
  });

  // Animation for the tooltip
  const tooltipAnimation = useSpring({
    opacity: selectedTech ? 1 : 0,
    transform: selectedTech ? 'scale(1)' : 'scale(0.8)',
    config: { tension: 300, friction: 20 }
  });

  // Animation for projects section
  const projectsHeaderAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 180, friction: 12 },
    delay: 200
  });
  
  const filterAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 180, friction: 12 },
    delay: 400
  });
  
  // Projects grid animations
  const projectItemAnimation = index => useSpring({
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 180, friction: 12 },
    delay: 600 + (index * 100)
  });
  
  // Modal animation for project details
  const modalAnimation = useSpring({
    opacity: activeProject ? 1 : 0,
    transform: activeProject ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 300, friction: 26 }
  });
  
  // Backdrop animation for modal
  const backdropAnimation = useSpring({
    opacity: activeProject ? 0.5 : 0,
    config: { tension: 300, friction: 26 }
  });

  // Typing animation for the code section
  const [typing, setTyping] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Code lines to type out
  const codeLines = [
    "// Software Engineer",
    "const developer = {",
    "  name: 'Hanz Pillerva',",
    "  skills: ['React', 'Node.js', 'Php', 'Laravel',",
    "           'JavaScript', 'HTML/CSS', 'Mysql'],",
    "  focuses: ['Full-Stack', 'UI/UX', 'Web Performance',",
    "            'Responsive Design'],",
    "  learning: 'Always'",
    "};"
  ];
  
  // Typing effect for code
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  useEffect(() => {
    if (!isLoaded || currentLine >= codeLines.length) return;
    
    const targetLine = codeLines[currentLine];
    const timer = setTimeout(() => {
      if (typing.length < targetLine.length) {
        setTyping(targetLine.substring(0, typing.length + 1));
      } else {
        setTyping('');
        setCurrentLine(prev => prev + 1);
      }
    }, 30);
    
    return () => clearTimeout(timer);
  }, [typing, currentLine, isLoaded]);
  
  // Create completed code lines and the current typing line
  const completedLines = codeLines.slice(0, currentLine);
  const currentTypingLine = currentLine < codeLines.length ? typing : '';
  
  // Cursor blink animation
  const cursorAnimation = useSpring({
    from: { opacity: 0 },
    to: async (next) => {
      while (isLoaded) {
        await next({ opacity: 1 });
        await next({ opacity: 0 });
      }
    },
    config: { duration: 500 }
  });

  // Helper function to format code with syntax highlighting
  const formatCodeLine = (line) => {
    if (line.startsWith('//')) {
      return <span className="text-gray-500 dark:text-gray-400 purple:text-purple-400">{line}</span>;
    }
    
    // Basic syntax highlighting
    const parts = [];
    let inString = false;
    let currentPart = '';
    let key = 0;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === "'" && line[i-1] !== '\\') {
        inString = !inString;
        currentPart += char;
        if (!inString) {
          parts.push(<span key={key++} className="text-green-500 dark:text-green-400 purple:text-purple-400">{currentPart}</span>);
          currentPart = '';
        }
      } else if (inString) {
        currentPart += char;
      } else if (char === ':') {
        if (currentPart.trim()) {
          parts.push(<span key={key++} className="text-purple-500 dark:text-purple-400 purple:text-purple-400">{currentPart}</span>);
        }
        parts.push(<span key={key++} className="text-gray-500 dark:text-gray-400 purple:text-purple-400">{char}</span>);
        currentPart = '';
      } else if (char === '{' || char === '}' || char === '[' || char === ']' || char === ',' || char === ';') {
        if (currentPart.trim()) {
          parts.push(<span key={key++}>{currentPart}</span>);
        }
        parts.push(<span key={key++} className="text-gray-500 dark:text-gray-400 purple:text-purple-400">{char}</span>);
        currentPart = '';
      } else if (char === ' ' && currentPart.trim() === 'const') {
        parts.push(<span key={key++} className="text-purple-500 dark:text-purple-400 purple:text-purple-400">{currentPart}</span>);
        parts.push(<span key={key++}>{char}</span>);
        currentPart = '';
      } else {
        currentPart += char;
      }
    }
    
    if (currentPart) {
      if (currentPart === 'developer') {
        parts.push(<span key={key++} className="text-blue-500 dark:text-blue-400 purple:text-purple-400">{currentPart}</span>);
      } else {
        parts.push(<span key={key++}>{currentPart}</span>);
      }
    }
    
    return <>{parts}</>;
  };

  // Function to handle tech stack item click
  const handleTechClick = (tech) => {
    // If clicking the same tech, toggle it off
    if (selectedTech && selectedTech.name === tech.name) {
      setSelectedTech(null);
    } else {
      setSelectedTech(tech);
    }
  };

  return (
    <>
    <section>
      <Head title="Hanz Pillerva | Portfolio" />
      
      {/* Navbar - Explicitly positioned at the top with z-index to ensure visibility */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </div>
      
      {/* Add padding-top to prevent content from being hidden behind the navbar */}
      <div className="min-h-screen 
                    bg-white dark:bg-gray-900 purple:bg-purple-950 
                    text-gray-800 dark:text-white purple:text-purple-200 
                    flex flex-col items-center justify-center py-12 px-4 md:px-8 
                    transition-colors duration-300
                    pt-16"> {/* Added padding-top (pt-16) */}
        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-start lg:items-center justify-between text-center lg:text-left gap-12">

          {/* Profile Info - With animations */}
          <div className="w-full lg:w-1/2 mb-16 lg:mb-0">
            <animated.div style={titleAnimation} className="mb-6">
              <p className="text-blue-600 dark:text-blue-400 purple:text-purple-400 text-2xl">Hello! I'm</p>
              <h1 className="text-6xl md:text-7xl font-bold mt-3">
                <span className="text-gray-800 dark:text-white purple:text-purple-200">Hanz</span>{" "}
                <span className="text-blue-600 dark:text-blue-400 purple:text-purple-400">Pillerva</span>
              </h1>
            </animated.div>
            
            <animated.h2 style={subtitleAnimation} className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 purple:text-purple-300 mb-8">
              Full-Stack Web Developer & Technical Specialist
            </animated.h2>
            
            <animated.p style={descriptionAnimation} className="text-lg text-gray-600 dark:text-gray-400 purple:text-purple-400 mb-10 max-w-xl mx-auto">
              Building elegant solutions to complex problems with modern
              technologies.
            </animated.p>
            
            <animated.div style={buttonsAnimation} className="flex justify-center gap-6 mb-10">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 
                        dark:bg-blue-400 dark:hover:bg-blue-500 
                        purple:bg-purple-400 purple:hover:bg-purple-500 
                        text-white 
                        px-8 py-4 rounded-md font-medium transition-colors text-lg"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="bg-transparent 
                        border border-gray-300 hover:border-gray-400 
                        dark:border-gray-700 dark:hover:border-gray-500 
                        purple:border-purple-700 purple:hover:border-purple-500 
                        text-gray-700 dark:text-white purple:text-purple-200 
                        px-8 py-4 rounded-md font-medium transition-colors text-lg"
              >
                View Projects
              </a>
            </animated.div>
            
            {/* Social Icons - With animations */}
            <animated.div style={socialsAnimation} className="flex justify-center gap-8">
              <a 
                href="https://github.com" 
                className="text-gray-500 hover:text-gray-800 
                        dark:text-gray-400 dark:hover:text-white 
                        purple:text-purple-400 purple:hover:text-purple-300 
                        transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                className="text-gray-500 hover:text-gray-800 
                        dark:text-gray-400 dark:hover:text-white 
                        purple:text-purple-400 purple:hover:text-purple-300 
                        transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="mailto:email@example.com" 
                className="text-gray-500 hover:text-gray-800 
                        dark:text-gray-400 dark:hover:text-white 
                        purple:text-purple-400 purple:hover:text-purple-300 
                        transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </animated.div>
          </div>
          
          {/* Code Card - With animations */}
          <animated.div style={cardAnimation} className="w-full lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 purple:bg-purple-900 rounded-lg overflow-hidden shadow-2xl">
              <div className="flex items-center px-4 py-3 bg-gray-100 dark:bg-gray-900 purple:bg-purple-950">
                <animated.div style={dotsAnimation} className="flex space-x-2">
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                </animated.div>
                <animated.div style={fileNameAnimation} className="ml-auto text-sm text-gray-500 dark:text-gray-400 purple:text-purple-400">
                  developer.js
                </animated.div>
              </div>
              
              <div className="p-8 font-mono text-base">
                {/* Completed Lines */}
                {completedLines.map((line, index) => (
                  <div key={index} className="mb-1">
                    {formatCodeLine(line)}
                  </div>
                ))}
                
                {/* Currently Typing Line */}
                {currentLine < codeLines.length && (
                  <div className="mb-1 flex">
                    {formatCodeLine(currentTypingLine)}
                    <animated.span style={cursorAnimation} className="ml-1 inline-block w-2 h-4 bg-blue-400 dark:bg-blue-400 purple:bg-purple-400"></animated.span>
                  </div>
                )}
                
                {/* If all lines are typed, show the full static code with proper styling */}
                {currentLine >= codeLines.length && (
                  <>
                    {/* This is the static version that was in the original file */}
                    {/* We're not displaying this since we're replacing it with the animated version */}
                  </>
                )}
              </div>
            </div>
          </animated.div>
        </div>
      </div>
    </section>
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 purple:bg-[#0f172a] transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Section Header */}
        <animated.div style={headerAnimation} className="text-center mb-12">
          <p className="text-lg text-gray-500 dark:text-gray-400 purple:text-gray-400 mb-2">GET TO KNOW ME</p>
          <h2 className="text-5xl font-bold purple:text-transparent purple:bg-clip-text purple:bg-gradient-to-r purple:from-red-500 purple:to-orange-500 text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
        </animated.div>
        
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Profile Image and Bio */}
          <animated.div style={profileAnimation} className="w-full lg:w-2/5 flex flex-col items-center text-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden mb-8 border-4 border-white dark:border-gray-700 purple:border-[#374151]">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 purple:from-[#8a3ffc] purple:to-[#7633d6] flex items-center justify-center text-white text-6xl font-bold">
                HP
              </div>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 purple:text-[#d1d5db] mb-6 leading-relaxed">
              I'm a passionate Full-Stack Developer who loves building 
              dynamic, user-friendly applications. I thrive on solving 
              problems, creating seamless experiences, and continuously 
              expanding my skills. Always eager to learn and grow, I'm currently 
              looking for new opportunities to contribute and innovate.
            </p>
            
            <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 purple:text-[#9d4edd] mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Tarlac City, Philippines</span>
            </div>
          </animated.div>
          
          {/* Education, Experience and Skills */}
          <animated.div style={contentAnimation} className="w-full lg:w-3/5">
            {/* Education Section */}
            <animated.div style={educationAnimation} className="mb-10">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white purple:text-[#f9fafb] mb-6">Education</h3>
              <div className="flex justify-between items-start border-b border-gray-200 dark:border-gray-700 purple:border-[#374151] pb-4 mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-200 purple:text-[#d1d5db]">Tarlac State University</h4>
                  <p className="text-gray-500 dark:text-gray-400 purple:text-[#9d4edd]">BS in Computer Science</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-700 dark:text-gray-300 purple:text-[#d1d5db]">2017 - 2021</p>
                  <p className="text-gray-500 dark:text-gray-400 purple:text-[#9d4edd]">CGPA: 3.8</p>
                </div>
              </div>
            </animated.div>
            
            {/* Experience Section */}
            <animated.div style={experienceAnimation} className="mb-10">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white purple:text-[#f9fafb] mb-6">Experience</h3>
              <div className="border-b border-gray-200 dark:border-gray-700 purple:border-[#374151] pb-6 mb-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-200 purple:text-[#d1d5db]">Full-Stack Web Developer</h4>
                  <div className="text-right">
                    <p className="text-gray-700 dark:text-gray-300 purple:text-[#d1d5db]">Jan 2022 - Present</p>
                    <p className="text-gray-500 dark:text-gray-400 purple:text-[#9d4edd]">Remote</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                  <div className="min-w-4 h-4 mt-1.5 mr-3 border-l-2 border-blue-500 dark:border-blue-400 purple:border-[#8a3ffc]"></div>
                    <p className="text-gray-600 dark:text-gray-300 purple:text-[#d1d5db]">Improved website performance, increasing mobile traffic by 10%</p>
                  </div>
                  <div className="flex items-start">
                    <div className="min-w-4 h-4 mt-1.5 mr-3 border-l-2 border-blue-500 dark:border-blue-400 purple:border-[#8a3ffc]"></div>
                    <p className="text-gray-600 dark:text-gray-300 purple:text-[#d1d5db]">Developed a mental health tracking platform, adopted by 700+ students</p>
                  </div>
                  <div className="flex items-start">
                    <div className="min-w-4 h-4 mt-1.5 mr-3 border-l-2 border-blue-500 dark:border-blue-400 purple:border-[#8a3ffc]"></div>
                    <p className="text-gray-600 dark:text-gray-300 purple:text-[#d1d5db]">Fixed UI bugs, reducing complaints by 50%</p>
                  </div>
                </div>
              </div>
            </animated.div>
            
            {/* Tech Stack */}
            <animated.div style={techStackAnimation}>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white purple:text-[#f9fafb] mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-3 relative">
                {/* Here is the updated tech stack section that responds to clicks */}
                {techStackData.map((tech, index) => (
                  <animated.div 
                    key={index} 
                    style={techItemAnimation(index)}
                    className={`px-4 py-2 rounded-full bg-white dark:bg-gray-700 purple:bg-[#1e293b] ${tech.color} 
                              flex items-center shadow-sm border border-gray-200 dark:border-gray-600 purple:border-[#374151]
                              hover:shadow-md transition-all duration-300 cursor-pointer tech-item
                              ${selectedTech && selectedTech.name === tech.name ? 'ring-2 ring-blue-500 dark:ring-blue-400 purple:ring-purple-400' : ''}
                              `}
                    onClick={() => handleTechClick(tech)}
                  >
                    <span className="mr-2">{tech.icon}</span>{tech.name}
                  </animated.div>
                ))}

                {/* Tooltip with tech knowledge details */}
                {selectedTech && (
                  <animated.div 
                    style={tooltipAnimation}
                    className="absolute top-full left-0 right-0 mt-4 p-4 bg-white dark:bg-gray-800 purple:bg-[#1e293b] 
                             rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 purple:border-[#374151] 
                             z-10 text-left"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`text-2xl ${selectedTech.color}`}>{selectedTech.icon}</div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-white purple:text-[#f9fafb] mb-1">{selectedTech.name}</h4>
                        <p className="text-gray-600 dark:text-gray-300 purple:text-[#d1d5db]">{selectedTech.knowledge}</p>
                      </div>
                    </div>
                    
                    {/* Visual skill progress indicator */}
                    <div className="mt-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-500 dark:text-gray-400 purple:text-[#9d4edd]">Proficiency Level</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 purple:text-[#d1d5db]">
                          {selectedTech.knowledge.startsWith('Advanced') ? '90%' : selectedTech.knowledge.startsWith('Intermediate') ? '70%' : '50%'}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 purple:bg-[#374151] rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${selectedTech.color.includes('orange') ? 'bg-orange-500' : 
                                    selectedTech.color.includes('blue') ? 'bg-blue-500' : 
                                    selectedTech.color.includes('yellow') ? 'bg-yellow-500' : 
                                    selectedTech.color.includes('green') ? 'bg-green-600' : 
                                    selectedTech.color.includes('red') ? 'bg-red-600' : 
                                    selectedTech.color.includes('purple') ? 'bg-purple-600' : 
                                    selectedTech.color.includes('cyan') ? 'bg-cyan-500' : 'bg-gray-700'}`} 
                          style={{ width: selectedTech.knowledge.startsWith('Advanced') ? '90%' : selectedTech.knowledge.startsWith('Intermediate') ? '70%' : '50%' }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Close button */}
                    <button 
                      onClick={() => setSelectedTech(null)}
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 purple:text-purple-400 purple:hover:text-purple-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </animated.div>
                )}
              </div>
            </animated.div>
          </animated.div>
        </div>
      </div>
    </section>

    {/* NEW PROJECTS SECTION */}
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 purple:bg-purple-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Section Header */}
        <animated.div style={projectsHeaderAnimation} className="text-center mb-12">
          <p className="text-lg text-gray-500 dark:text-gray-400 purple:text-gray-400 mb-2">MY RECENT WORK</p>
          <h2 className="text-5xl font-bold purple:text-transparent purple:bg-clip-text purple:bg-gradient-to-r purple:from-blue-500 purple:to-purple-500 text-gray-800 dark:text-white mb-4">
            Projects
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 purple:text-purple-300">
            Here are some of my recent projects that showcase my skills and experience. Click on any project to learn more about it.
          </p>
        </animated.div>
        
        {/* Filter Buttons */}
        <animated.div style={filterAnimation} className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-full transition-colors duration-300
                      ${filter === 'all' 
                        ? 'bg-blue-600 dark:bg-blue-500 purple:bg-purple-500 text-white' 
                        : 'bg-gray-100 dark:bg-gray-800 purple:bg-purple-900 text-gray-700 dark:text-gray-300 purple:text-purple-300 hover:bg-gray-200 dark:hover:bg-gray-700 purple:hover:bg-purple-800'}`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter('web')}
            className={`px-6 py-3 rounded-full transition-colors duration-300
                      ${filter === 'web' 
                        ? 'bg-blue-600 dark:bg-blue-500 purple:bg-purple-500 text-white' 
                        : 'bg-gray-100 dark:bg-gray-800 purple:bg-purple-900 text-gray-700 dark:text-gray-300 purple:text-purple-300 hover:bg-gray-200 dark:hover:bg-gray-700 purple:hover:bg-purple-800'}`}
          >
            Web Development
          </button>
          <button 
            onClick={() => setFilter('mobile')}
            className={`px-6 py-3 rounded-full transition-colors duration-300
                      ${filter === 'mobile' 
                        ? 'bg-blue-600 dark:bg-blue-500 purple:bg-purple-500 text-white' 
                        : 'bg-gray-100 dark:bg-gray-800 purple:bg-purple-900 text-gray-700 dark:text-gray-300 purple:text-purple-300 hover:bg-gray-200 dark:hover:bg-gray-700 purple:hover:bg-purple-800'}`}
          >
            Mobile Apps
          </button>
          <button 
            onClick={() => setFilter('ui')}
            className={`px-6 py-3 rounded-full transition-colors duration-300
                      ${filter === 'ui' 
                        ? 'bg-blue-600 dark:bg-blue-500 purple:bg-purple-500 text-white' 
                        : 'bg-gray-100 dark:bg-gray-800 purple:bg-purple-900 text-gray-700 dark:text-gray-300 purple:text-purple-300 hover:bg-gray-200 dark:hover:bg-gray-700 purple:hover:bg-purple-800'}`}
          >
            UI/UX Design
          </button>
          <button 
            onClick={() => setFilter('design')}
            className={`px-6 py-3 rounded-full transition-colors duration-300
                      ${filter === 'design' 
                        ? 'bg-blue-600 dark:bg-blue-500 purple:bg-purple-500 text-white' 
                        : 'bg-gray-100 dark:bg-gray-800 purple:bg-purple-900 text-gray-700 dark:text-gray-300 purple:text-purple-300 hover:bg-gray-200 dark:hover:bg-gray-700 purple:hover:bg-purple-800'}`}
          >
            Design
          </button>
        </animated.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <animated.div 
              key={project.id} 
              style={projectItemAnimation(index)}
              className="bg-white dark:bg-gray-800 purple:bg-purple-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={() => setActiveProject(project)}
            >
              <div className="h-56 w-full bg-gray-200 dark:bg-gray-700 purple:bg-purple-800 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white purple:text-purple-200 mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 purple:text-purple-300 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 purple:bg-purple-800 text-blue-800 dark:text-blue-200 purple:text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 purple:bg-purple-800 text-gray-800 dark:text-gray-200 purple:text-purple-200">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <button 
                  className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 purple:bg-purple-600 purple:hover:bg-purple-700 text-white transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProject(project);
                  }}
                >
                  View Details
                </button>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
      
      {/* Project Details Modal */}
      {activeProject && (
        <>
          <animated.div 
            style={backdropAnimation}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setActiveProject(null)}
          />
          <animated.div 
            style={modalAnimation}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 purple:bg-purple-900 rounded-xl shadow-2xl project-modal-content">
              <div className="relative">
                <div className="h-60 md:h-80 w-full bg-gray-200 dark:bg-gray-700 purple:bg-purple-800 overflow-hidden">
                  <img 
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <button 
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                  onClick={() => setActiveProject(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6 md:p-8">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white purple:text-purple-200 mb-4">{activeProject.title}</h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 purple:text-purple-300 mb-6">
                  {activeProject.description}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white purple:text-purple-200 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-sm px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 purple:bg-purple-800 text-blue-800 dark:text-blue-200 purple:text-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white purple:text-purple-200 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {activeProject.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-start text-gray-600 dark:text-gray-300 purple:text-purple-300"
                      >
                        <span className="mr-2 mt-1 text-blue-500 dark:text-blue-400 purple:text-purple-400">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 purple:bg-purple-600 purple:hover:bg-purple-700 text-white text-center transition-colors duration-300"
                  >
                    View Source Code
                  </a>
                  <a 
                    href={activeProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 purple:bg-purple-800 purple:hover:bg-purple-700 text-gray-800 dark:text-white purple:text-purple-200 text-center transition-colors duration-300"
                  >
                    View Live Demo
                  </a>
                </div>
              </div>
            </div>
          </animated.div>
        </>
      )}
    </section>
    </>
  );
}