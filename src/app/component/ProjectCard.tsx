// ProjectCard.js
import React from 'react';

interface ProjectCardProps { 
    title: string,
    description: string,
    imageUrl: string,
}

const ProjectCard = ({ title, description, imageUrl }: ProjectCardProps) => {
    return (
        <div className="h-[600px] w-[400px] bg-slate-50 rounded-2xl">
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
