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
      stacks: ["ReactIcon", "TailwindIcon", "ReduxIcon", "TypescriptIcon"],
      githubUrl: "",
      notionUrl: "",
      homeUrl: "/comeet",
    },
    {
      title: "앤디",
      description: "단어를 찾아 다니는 유아용 단어학습 서비스",
      imageUrl: "/assets/images/andy.png",
      stacks: [
        "NextdotjsIcon",
        "TailwindIcon",
        "TypescriptIcon",
        "ReactqueryIcon",
        "PwaIcon",
        "FramerIcon",
      ],
      githubUrl: "",
      notionUrl: "",
      homeUrl: "/andy",
    },
    {
      title: "와다다",
      description: "친구와 함께 뛰고 싶은 러너들을 위한 앱",
      imageUrl: "/assets/images/wadada.png",
      stacks: ["FlutterIcon", "GetxIcon", "KotlinIcon"],
      githubUrl: "",
      notionUrl: "",
      homeUrl: "/wadada",
    },
    {
      title: "포트폴리오",
      description: "개인 포트폴리오 사이트 입니다.",
      stacks: ["NextdotjsIcon", "TailwindIcon", "FramerIcon", "TypescriptIcon"],
      imageUrl: "/assets/images/portfolio.png",
      githubUrl: "",
      notionUrl: "",
      homeUrl: "/portfolio",
    },
    {
      title: "EnjoyTrip",
      description: "여행 계획과 꿀팁을 한곳에서 ",
      imageUrl: "/assets/images/enjoyTrip.png",
      stacks: ["SpringbootIcon", "VueIcon", "MysqlIcon"],
      githubUrl: "",
      notionUrl: "",
      homeUrl: "/enjoytrip",
    },
    {
      title: "AIfred",
      description: "모델을 튜닝해 만드는 나만의 생성형 AI",
      imageUrl: "/assets/images/aifred.png",
      stacks: ["NextdotjsIcon", "TypescriptIcon", "PrismaIcon", "MongoIcon"],
      githubUrl: "",
      notionUrl: "",
      homeUrl: "/aifred",
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
