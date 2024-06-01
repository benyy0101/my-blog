/* eslint-disable react/no-array-index-key */
/* eslint-disable prefer-const */
import React, { useEffect } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import ProjectCard from "../component/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "코밋 (Comeet)",
      description: "모각코 모집, 모임, 운영을 한 플랫폼에서!",
      imageUrl: "/assets/images/comeet_main.png",
      stacks: [],
      githubUrl: "",
      notionUrl: "",
      homeUrl: "",
    },
    {
      title: "앤디",
      description: "활동성과 어휘력을 한번에 잡은 유아용 단어학습 서비스",
      imageUrl: "/assets/images/andy.png",
      stacks: [],
      githubUrl: "",
      notionUrl: "",
      homeUrl: "",
    },
    {
      title: "와다다",
      description: "친구와 함께 뛰고 싶은 러너들을 위한 앱",
      imageUrl: "/assets/images/wadada.png",
      stacks: [],
      githubUrl: "",
      notionUrl: "",
      homeUrl: "",
    },
    {
      title: "Portfolio",
      description: "감각적인 포트폴리오",
      stacks: [],
      imageUrl: "",
      githubUrl: "",
      notionUrl: "",
      homeUrl: "",
    },
    {
      title: "EnjoyTrip",
      description: "여행 계획과 꿀팁을 한곳에서!",
      imageUrl: "/assets/images/enjoyTrip.png",
      stacks: [],
      githubUrl: "",
      notionUrl: "",
      homeUrl: "",
    },
    {
      title: "AIfred",
      description: "A task management app with AI features.",
      imageUrl: "/assets/images/aifred.png",
      stacks: [],
      githubUrl: "",
      notionUrl: "",
      homeUrl: "",
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
    <>
      <section id="projects" />
      <section className="z-10">
        <motion.div
          className="flex gap-8"
          ref={ref}
          style={{ x: xTranslation }}
        >
          {[...projects, ...projects, ...projects, ...projects].map(
            (project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                notionUrl={project.notionUrl}
                githubUrl={project.githubUrl}
                stacks={project.stacks}
                homeUrl={project.homeUrl}
              />
            )
          )}
        </motion.div>
      </section>
    </>
  );
}

export default Projects;
