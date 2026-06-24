import React from 'react';
import { Project } from '../types';
import { Icons } from '../constants';

interface ProjectCardProps {
project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
return ( <div className="group card-premium rounded-3xl overflow-hidden flex flex-col h-full border border-brand-border hover:border-brand-primary/30 transition-all duration-500">

```
  <div className="relative aspect-video overflow-hidden">

    <img
      src={project.imageUrl}
      alt={project.title}
      className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-all duration-700"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

    <div className="absolute top-5 left-5">
      <span className="px-3 py-1 rounded-full bg-brand-primary/90 text-white text-[10px] font-bold uppercase tracking-widest">
        Featured Work
      </span>
    </div>

  </div>

  <div className="p-8 flex flex-col flex-1">

    <div className="flex flex-wrap gap-2 mb-5">

      {project.tags.slice(0, 4).map((tag) => (
        <span
          key={tag}
          className="text-[10px] font-bold px-3 py-1 bg-neutral-900 text-neutral-400 rounded-full border border-brand-border uppercase tracking-wider"
        >
          {tag}
        </span>
      ))}

    </div>

    <h3 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-brand-primary transition-colors">
      {project.title}
    </h3>

    <p className="text-neutral-400 text-sm leading-relaxed mb-8 flex-1">
      {project.description}
    </p>

    <div className="border-t border-brand-border pt-6 flex items-center justify-between">

      <div className="flex items-center gap-2">

        <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
          <Icons.Star />
        </div>

        <span className="text-xs text-neutral-500 uppercase tracking-widest">
          Case Study
        </span>

      </div>

      <a
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-brand-primary transition-colors"
      >
        View Project
        <Icons.ExternalLink />
      </a>

    </div>

  </div>

</div>
```

);
};

export default ProjectCard;

