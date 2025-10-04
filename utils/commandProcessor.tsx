import React from 'react';
import { 
    aboutContentText,
    projects,
    skills,
    experiences,
    education,
    jokes,
    contactDetails
} from '../data/content';
import { Project, Skill, Experience, EducationItem } from '../types';

// --- Helper Functions & Components ---

const openLink = (url: string) => {
  window.open(url, '_blank');
  return (
    <span>
      Opening <a href={url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">{url}</a>...
    </span>
  );
};

const Command: React.FC<{ name: string; description: string; }> = ({ name, description }) => (
  <li>
    <span className="w-28 inline-block text-yellow-400">[{name}]</span>
    <span>- {description}</span>
  </li>
);

// --- Content Components ---

const helpContent = (
  <div>
    <p className="mb-2">Available commands:</p>
    <ul className="space-y-1">
      <Command name="about" description="Show my professional summary" />
      <Command name="skills" description="List my technical skills" />
      <Command name="projects" description="Showcase my projects" />
      <Command name="experience" description="Display my work experience" />
      <Command name="education" description="Show my education history" />
      <Command name="contact" description="Display contact information" />
      <Command name="resume" description="Get a link to my resume" />
      <Command name="clear" description="Clear the terminal screen" />
      <Command name="joke" description="Tell me a joke" />
      <Command name="sudo" description="Try superuser command" />
    </ul>
  </div>
);

const aboutContent = (
    <div>
        <p className="mb-2 text-pink-500">Hi, I'm Harish B 👋</p>
        <p className="opacity-90">{aboutContentText}</p>
    </div>
)

const projectsContent = (
  <div>
    <p className="mb-2 text-pink-500">Here are some of my projects:</p>
    <ul className="space-y-4">
      {projects.map((proj, index) => (
        <li key={index}>
          <a href={proj.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-bold">{proj.name}</a>
          <p className="ml-2">- {proj.description}</p>
          <p className="ml-2">
            <span className="opacity-70">Stack: </span>
            <span className="text-purple-400">{proj.stack.join(', ')}</span>
          </p>
        </li>
      ))}
    </ul>
  </div>
);

const skillsContent = (
  <div>
    <p className="mb-2 text-pink-500">My technical skills include:</p>
    {skills.map((skill, index) => (
      <div key={index} className="flex mb-2">
        <span className="w-48 text-pink-500">{skill.category}:</span>
        <span className="flex-1 opacity-90">{skill.items.join(', ')}</span>
      </div>
    ))}
  </div>
);

const experienceContent = (
    <div>
      <p className="mb-2 text-pink-500">My professional experience:</p>
      <ul className="space-y-4">
        {experiences.map((exp, index) => (
          <li key={index}>
            <p className="font-bold">
                <span className="text-cyan-400">{exp.role}</span>
                <span className="text-slate-400"> @ </span> 
                <span>{exp.company}</span>
            </p>
            <p className="text-sm opacity-70 ml-2">{exp.duration} ({exp.type})</p>
            <ul className="list-disc list-inside ml-2">
              {exp.points.map((point, pIndex) => (
                <li key={pIndex} className="opacity-90">{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
);

const educationContent = (
    <div>
      <p className="mb-2 text-pink-500">My education:</p>
      <ul className="space-y-3">
        {education.map((edu, index) => (
          <li key={index}>
            <p className="font-bold text-cyan-400">{edu.institution}</p>
            <p className="ml-2 opacity-90">{edu.degree}</p>
            <p className="ml-2 text-sm opacity-70">{edu.duration}</p>
          </li>
        ))}
      </ul>
    </div>
);


const contactContent = (
  <div>
    <p className="mb-2 text-pink-500">You can reach me here:</p>
    <ul className="space-y-1">
      <li><span className="w-20 inline-block text-pink-500">Email:</span> <a href={`mailto:${contactDetails.email}`} className="text-cyan-400 hover:underline">{contactDetails.email}</a></li>
      <li><span className="w-20 inline-block text-pink-500">GitHub:</span> <a href={contactDetails.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{contactDetails.github.replace('https://', '')}</a></li>
      <li><span className="w-20 inline-block text-pink-500">LinkedIn:</span> <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{contactDetails.linkedin.replace('https://www.', '')}</a></li>
      <li><span className="w-20 inline-block text-pink-500">Phone:</span> <a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`} className="text-cyan-400 hover:underline">{contactDetails.phone}</a></li>
    </ul>
  </div>
);

const resumeContent = (
    <div>
        <p>
            You can download my resume here:
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline ml-2">resume.pdf</a>
        </p>
        <p className="text-xs opacity-60 mt-1">Note: Please upload your resume as 'resume.pdf' to the public folder.</p>
    </div>
);


// --- Command Processor ---

export const processCommand = (command: string): React.ReactNode => {
  const cleanCommand = command.toLowerCase().trim();
  switch (cleanCommand) {
    case 'help':
      return helpContent;
    case 'about':
        return aboutContent;
    case 'projects':
      return projectsContent;
    case 'skills':
      return skillsContent;
    case 'experience':
        return experienceContent;
    case 'education':
        return educationContent;
    case 'contact':
      return contactContent;
    case 'resume':
        return resumeContent;
    case 'github':
        return openLink(contactDetails.github);
    case 'linkedin':
        return openLink(contactDetails.linkedin);
    case 'email':
        window.location.href = `mailto:${contactDetails.email}`;
        return 'Opening email client...';
    case 'joke':
        return jokes[Math.floor(Math.random() * jokes.length)];
    case 'sudo':
        return "Permission denied. This isn't your system 😎";
    default:
      return (
        <span>
            <span className="text-red-500">Command not found:</span> '{command}'. Type '<span className="text-yellow-400">help</span>' to see available commands.
        </span>
      );
  }
};
