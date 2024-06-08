/* eslint-disable react/no-unused-prop-types */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReactIcon from "../icons/reactIcon";
import ReduxIcon from "../icons/reduxIcon";
import GithubIcon from "../icons/githubIcon";
import ReactqueryIcon from "../icons/reactqueryIcon";
import FlutterIcon from "../icons/flutterIcon";
import TailwindIcon from "../icons/tailwindIcon";
import TypescriptIcon from "../icons/typescriptIcon";
import ViteIcon from "../icons/viteIcon";
import SpringbootIcon from "../icons/springbootIcon";
import MysqlIcon from "../icons/mysqlIcon";
import NodedotjsIcon from "../icons/nodedotjsIcon";
import NextdotjsIcon from "../icons/nextdotjsIcon";
import FigmaIcon from "../icons/figmaIcon";
import GetxIcon from "../icons/getxIcon";
import PrismaIcon from "../icons/prismaIcon";
import JavaScriptIcon from "../icons/javasriptIcon";
import MongoIcon from "../icons/mongoIcon";
import TensorFlowIcon from "../icons/tensorflowIcon";
import JiraIcon from "../icons/jiraIcon";
import PwaIcon from "../icons/pwaIcon";
import VueIcon from "../icons/vueIcon";
import FramerIcon from "../icons/framerIcon";
import KotlinIcon from "../icons/kotlinIcon";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  stacks: string[];
  githubUrl: string;
  notionUrl: string;
  homeUrl: string;
}

const IconsMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ReactIcon,
  ReduxIcon,
  FlutterIcon,
  GithubIcon,
  ReactqueryIcon,
  TailwindIcon,
  TypescriptIcon,
  ViteIcon,
  SpringbootIcon,
  MysqlIcon,
  NodedotjsIcon,
  NextdotjsIcon,
  FigmaIcon,
  GetxIcon,
  PrismaIcon,
  JavaScriptIcon,
  MongoIcon,
  TensorFlowIcon,
  JiraIcon,
  PwaIcon,
  VueIcon,
  FramerIcon,
  KotlinIcon,
};

function ProjectCard({
  title,
  description,
  imageUrl,
  stacks,
  githubUrl,
  homeUrl,
}: ProjectCardProps) {
  return (
    <div className="h-[600px] w-[400px] bg-slate-50 rounded-2xl overflow-hidden">
      <div className="relative h-[300px] w-full">
        <Link href={homeUrl}>
          <Image
            src={imageUrl}
            alt="이미이미지"
            layout="fill"
            objectFit="cover"
            className="rounded-t-2xl"
          />
        </Link>
      </div>
      <div className="flex flex-col h-[300px] justify-between p-8 ">
        <div className="space-y-6">
          <div className="text-4xl font-bold mb-2 text-main">{title}</div>
          <p className="text-des">{description}</p>
          <div className="flex space-x-4">
            {stacks.map((item) => {
              const IconComponent = IconsMap[item];
              return IconComponent ? <IconComponent key={item} /> : null;
            })}
          </div>
        </div>
        <div className="space-x-4">
          <a href={githubUrl} className="w-6 h-6 hover:w-8 hover:h-8">
            <GithubIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
