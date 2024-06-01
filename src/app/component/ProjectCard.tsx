// ProjectCard.js
import React from 'react';
import Image from 'next/image';

interface ProjectCardProps { 
    title: string,
    description: string,
    imageUrl: string,
}

const ProjectCard = ({ title, description, imageUrl }: ProjectCardProps) => {
    return (
        <div className="h-[600px] w-[400px] bg-slate-50 rounded-2xl">
            <div className="">
                <Image src={imageUrl} alt={`이미이미지` } height={300} width={400} className='rounded-t-2xl'/>
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
