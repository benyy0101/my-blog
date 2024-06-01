import React, { useEffect, useRef, useState } from 'react';

function NavButton() {
    const stacksRef = useRef<Element>();
    const educationRef = useRef<Element>();
    const projectsRef = useRef<Element>();
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && typeof entry.target.id == 'string')  {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        observer.observe(stacksRef.current);
        observer.observe(educationRef.current);
        observer.observe(projectsRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="sticky top-20 flex flex-col h-screen text-6xl font-black items-start gap-4 z-30">
            <button className={activeSection === 'stacks' ? 'text-main' : 'text-gray-500'} onClick={() => scrollToSection('stacks')} ref={stacksRef}>Stacks</button>
            <button className={activeSection === 'education' ? 'text-main' : 'text-gray-500'} onClick={() => scrollToSection('education')} ref={educationRef}>Education</button>
            <button className={activeSection === 'projects' ? 'text-main' : 'text-gray-500'} onClick={() => scrollToSection('projects')} ref={projectsRef}>Projects</button>
        </div>
    );
}

export default NavButton;
