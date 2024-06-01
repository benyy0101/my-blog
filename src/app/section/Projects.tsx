import React, { useEffect } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure';
import ProjectCard from '../component/ProjectCard';

function Projects() {
    const projects = [
        {
            title: "Comeet",
            description: "A social networking platform for professionals.",
            imageUrl: "comeet.jpg"
        },
        {
            title: "Andy",
            description: "A task management app with AI features.",
            imageUrl: "andy.jpg"
        },
        {
            title: "Wadada",
            description: "A task management app with AI features.",
            imageUrl: "andy.jpg"
        },
        {
            title: "Portfolio",
            description: "A task management app with AI features.",
            imageUrl: "andy.jpg"
        },
        {
            title: "EnjoyTrip",
            description: "A task management app with AI features.",
            imageUrl: "andy.jpg"
        },
        {
            title: "AIfred",
            description: "A task management app with AI features.",
            imageUrl: "andy.jpg"
        },

    ];

    let [ref, { width }] = useMeasure();

    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 8;

        controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        });

        return controls.stop;
    }, [xTranslation, width]);

    return (
        <div className="z-10">
            <motion.div
                className="flex gap-8"
                ref={ref}
                style={{ x: xTranslation }}
            >
                {[...projects,...projects].map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                    />
                ))}
            </motion.div>
        </div>
    );
}

export default Projects;
