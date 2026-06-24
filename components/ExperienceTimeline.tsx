import React from 'react';

const experiences = [
  {
    id: 1,
    period: 'Foundation',
    role: 'Information Technology Student',
    company: 'B.Tech – Information Technology',
    description: [
      'Developed a strong foundation in technology, systems, problem solving, and digital innovation.',
      'Built an understanding of software, websites, digital platforms, and business technologies.',
      'Cultivated a curiosity for how technology can transform businesses and customer experiences.'
    ],
    technologies: [
      'Information Technology',
      'Web Technologies',
      'Digital Systems',
      'Problem Solving'
    ]
  },

  {
    id: 2,
    period: 'Growth Phase',
    role: 'Digital Marketing Strategist',
    company: 'Branding & Marketing Solutions',
    description: [
      'Explored digital marketing, customer acquisition, branding, and content strategy.',
      'Helped businesses improve visibility, engagement, and brand positioning.',
      'Developed practical marketing solutions focused on measurable business growth.'
    ],
    technologies: [
      'Digital Marketing',
      'Lead Generation',
      'Brand Strategy',
      'Content Marketing',
      'Social Media'
    ]
  },

  {
    id: 3,
    period: 'Innovation Phase',
    role: 'AI Creative Specialist',
    company: 'Artificial Intelligence Solutions',
    description: [
      'Specialized in AI-powered content creation, image generation, and video production.',
      'Integrated AI tools into marketing workflows to improve speed, quality, and efficiency.',
      'Developed innovative AI-driven creative systems for business communication.'
    ],
    technologies: [
      'AI Video Production',
      'AI Image Generation',
      'Prompt Engineering',
      'Creative Automation',
      'AI Content Creation'
    ]
  },

  {
    id: 4,
    period: 'Present',
    role: 'Founder • Entrepreneur • Digital Growth Strategist',
    company: 'Digital Marketing & AI Creative Solutions',
    description: [
      'Helping businesses leverage technology, branding, marketing, and artificial intelligence.',
      'Providing solutions in website development, digital marketing, AI content creation, and business growth.',
      'Working with businesses across retail, jewellery, fashion, education, restaurants, startups, and local enterprises.'
    ],
    technologies: [
      'Digital Growth',
      'Website Development',
      'Brand Development',
      'Business Consulting',
      'Local SEO',
      'AI Solutions'
    ]
  }
];

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6">

      {/* Section Header */}
      <div className="text-center mb-20">

        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>

          <span className="text-brand-primary text-[10px] font-bold tracking-[0.25em] uppercase">
            Professional Journey
          </span>
        </div>

        <h2 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight">
          Experience & Growth
        </h2>

        <p className="mt-6 text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          A journey built through technology, creativity, marketing,
          entrepreneurship, and continuous innovation.
        </p>

      </div>

      <div className="space-y-24">

        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="relative pl-10 border-l border-brand-border"
          >
            <div className="absolute -left-[6px] top-0 w-3 h-3 bg-brand-primary rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>

            <div className="space-y-4">

              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">
                {exp.period}
              </span>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  {exp.role}
                </h3>

                <p className="text-neutral-500 font-medium">
                  {exp.company}
                </p>
              </div>

              <ul className="space-y-4 pt-4">

                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="text-neutral-400 text-sm leading-relaxed flex gap-3"
                  >
                    <span className="text-brand-primary">•</span>
                    {item}
                  </li>
                ))}

              </ul>

              <div className="flex flex-wrap gap-2 pt-6">

                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-bold px-3 py-1 bg-neutral-900 text-neutral-500 rounded border border-brand-border uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default ExperienceTimeline;
