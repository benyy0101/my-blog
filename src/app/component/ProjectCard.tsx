import React from "react";
import Image from "next/image";
import ReactIcon from "../images/reactIcon";
import ReduxIcon from "../images/reduxIcon";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  stacks: string[];
  githubUrl: string;
  notionUrl: string;
  homeUrl: string;
}

const IconsMap: Record<string, React.ComponentType> = {
  ReactIcon,
  ReduxIcon,
};

function ProjectCard({
  title,
  description,
  imageUrl,
  stacks,
  githubUrl,
  notionUrl,
  homeUrl,
}: ProjectCardProps) {
  return (
    <div className="h-[600px] w-[400px] bg-slate-50 rounded-2xl overflow-hidden">
      <div className="relative h-[250px] w-full">
        <Image
          src={imageUrl}
          alt="이미이미지"
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="p-8 space-y-4">
          <div className="text-2xl font-bold mb-2">{title}</div>
          <p className="text-des">{description}</p>
          <div className="flex space-x-2">
            {stacks.map((item) => {
              const IconComponent = IconsMap[item];
              return IconComponent ? (
                <IconComponent key={item} fill="w-6 h-6" />
              ) : null;
            })}
          </div>
        </div>
        <div className="p-8 space-y-4">
          <a href={githubUrl} className="text-blue-500">
            GitHub
          </a>
          <a href={notionUrl} className="text-blue-500">
            Notion
          </a>
          <a href={homeUrl} className="text-blue-500">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
