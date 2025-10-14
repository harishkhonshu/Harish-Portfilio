import React from 'react';
import { aboutContentText, contactDetails } from '../data/content';

const Bio: React.FC = () => {
    return (
        <aside className="w-full h-full flex flex-col p-2 sm:p-3 bg-gray-900/50 backdrop-blur-sm rounded-xl border-2 border-gray-800 shadow-2xl text-slate-300">
            <div className="bg-black/80 p-4 rounded-md h-full flex flex-col items-center text-center overflow-y-auto">
                <div className="w-32 h-32 rounded-full border-2 border-cyan-400 bg-gray-800 mb-4 flex-shrink-0 overflow-hidden">
                    <img 
                        src="/components/port.jpeg" 
                        width={200}
                    />
                </div>
                <h1 className="text-2xl text-pink-500 font-bold">Harish B</h1>
                <h2 className="text-lg text-cyan-400 mb-4">Cybersecurity Enthusiast & Developer</h2>
                <div className="text-base opacity-90 text-left flex-grow">
                    <p>{aboutContentText}</p>
                    <p className="mt-4 text-xs opacity-60 text-center">
                        Note: To add your photo, upload an image named `profile.jpg` to the public folder of your project.
                    </p>
                </div>
                <div className="mt-auto pt-4 flex space-x-4">
                     <a href={contactDetails.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">GitHub</a>
                     <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">LinkedIn</a>
                     <a href={`mailto:${contactDetails.email}`} className="text-cyan-400 hover:underline">Email</a>
                </div>
            </div>
        </aside>
    );
}

export default Bio;
