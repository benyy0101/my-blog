import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SideNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && typeof entry.target.id === "string") {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const stacksSection = document.getElementById("stacks");
    const educationSection = document.getElementById("education");
    const projectsSection = document.getElementById("projects");

    if (stacksSection) observer.observe(stacksSection);
    if (educationSection) observer.observe(educationSection);
    if (projectsSection) observer.observe(projectsSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -100;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const buttonVariants = {
    active: {
      color: "#000",
      scale: 1.1,
    },
    inactive: {
      color: "#6b7280",
      scale: 1,
    },
  };

  const textOutlineStyle = {
		textShadow: `
      -0.5px -0.5px 0 #fff,  
      0.5px -0.5px 0 #fff,
      -0.5px 0.5px 0 #fff,
      0.5px 0.5px 0 #fff
    `,
	};

	return (
		<div className="sticky top-20 flex flex-col h-screen text-6xl font-black items-start gap-4 z-30">
			<AnimatePresence>
				{["stacks", "education", "projects"].map((section) => (
					<motion.button
						key={section}
						className="text-gray-500"
						onClick={() => scrollToSection(section)}
						initial="inactive"
						animate={activeSection === section ? "active" : "inactive"}
						variants={buttonVariants}
						transition={{ duration: 0.3 }}
						style={textOutlineStyle}
					>
						{section.charAt(0).toUpperCase() + section.slice(1)}
					</motion.button>
				))}
			</AnimatePresence>
		</div>
	);
}

export default SideNav;
