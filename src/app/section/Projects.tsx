import React, { useEffect } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure';
import ProjectCard from '../component/ProjectCard';

function Projects() {
    const projects = [
        {
            title: "Comeet",
            description: "모각코 모집, 모임, 운영을 한 플랫폼에서!",
            imageUrl: "/assets/images/comeet_main.png"
        },
        {
            title: "Andy",
            description: "A task management app with AI features.",
            imageUrl: ""
        },
        {
            title: "Wadada",
            description: "A task management app with AI features.",
            imageUrl: ""
        },
        {
            title: "Portfolio",
            description: "A task management app with AI features.",
            imageUrl: ""
        },
        {
            title: "EnjoyTrip",
            description: "A task management app with AI features.",
            imageUrl: ""
        },
        {
            title: "AIfred",
            description: "A task management app with AI features.",
            imageUrl: ""
        },

    ];

    let [ref, { width }] = useMeasure();

    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -width / 4 - 8;

        controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: 80,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        });

        return controls.stop;
    }, [xTranslation, width]);

    return (
        <section id="projects" className="z-10">
            <motion.div
                className="flex gap-8"
                ref={ref}
                style={{ x: xTranslation }}
            >
                {[...projects,...projects,...projects,...projects].map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                    />
                ))}
            </motion.div>
        </section>
    );
}

export default Projects;
