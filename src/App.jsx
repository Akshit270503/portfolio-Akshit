import React from "react";

const customStyles = `
  .radial-gradient-bg {
    background: radial-gradient(circle at center, rgba(0, 212, 255, 0.1) 0%, rgba(0, 0, 40, 0.6) 40%, rgba(0, 0, 20, 1) 100%);
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
  }

  .gradient-border-profile {
    background: linear-gradient(135deg, #00C9FF 0%, #92FE9D 100%);
    padding: 3px;
    border-radius: 50%;
  }

  .gradient-border-profile img {
    padding: 1px;
    background-color: #0A1128;
  }

  .hover-glow:hover {
    box-shadow: 0 0 25px rgba(0, 212, 255, 0.5);
  }

  @keyframes fade-in-down {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-fade-in-down {
    animation: fade-in-down 0.4s ease forwards;
  }
`;

const GithubIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3-1 6-4 6-8s-2.3-4-4.8-5c.5-1.5-.2-3.2-1-3.5 0-.7-1.3-.9-1.8-.1C12.9.2 11.5 0 10 0c-1.5 0-2.9.2-3.7 1-.5-.8-1.8-.6-1.8.1-.8.3-1.5 2-1 3.5C2.3 4 0 7 0 11s3 7 6 8a4.8 4.8 0 0 0-1 3.5v4"/>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const ProjectCard = ({ title, description, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-4 rounded-lg border border-[#0D2B45] bg-[#0A192F] hover:bg-[#102A43] transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-black/20 hover-glow group"
  >
    <div className="flex justify-between items-center mb-1">
      <h3 className="text-base font-semibold text-gray-200 group-hover:text-[#00D4FF]">
        {title}
      </h3>
      <svg className="w-4 h-4 text-gray-400 group-hover:text-[#00BFFF]"
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M10 6L14 12L10 18" />
      </svg>
    </div>
    <p className="text-xs text-gray-400">{description}</p>
  </a>
);

const SkillCard = ({ skill }) => (
  <div className="p-3 rounded-lg border border-[#0D2B45] bg-[#0A192F] transition-all duration-300 hover:scale-[1.05] hover:shadow-md hover:shadow-[#00C9FF]/10 text-sm hover-glow">
    <h4 className="font-medium text-gray-300">{skill}</h4>
  </div>
);

export default function App() {
  const skills = [
    "React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS",
    "Python", "Django", "Git/GitHub", "Responsive Design"
  ];

  const projects = [
    { 
      title: "Email Spam Line Detector", 
      description: "Analyzes subject lines for spam probability using AI — try it live!",
      link: "https://subject-line-tester-yf6g.vercel.app/"
    },
    { 
      title: "Story Book Generator", 
      description: "Generates creative story content from prompts using an AI-powered model.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-[#010A18] text-white font-sans relative overflow-x-hidden scroll-smooth">
      <style>{customStyles}</style>
      <div className="absolute inset-0 z-0 radial-gradient-bg"></div>

      <div className="relative z-10 max-w-7xl mx-auto my-6 p-6 bg-[#0A1128] bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl shadow-[#00BFFF]/30 border border-[#0D2B45] min-h-[95vh]">

        {/* Header */}
        <nav className="flex justify-between items-center py-4 px-3 md:px-6 border-b border-[#0D2B45]/60 mb-10">
          <h1 className="text-2xl font-extrabold tracking-wide">
            <span className="text-[#00BFFF]">Akshit</span>
            <span className="text-gray-300">.dev</span>
          </h1>

          <div className="hidden md:flex space-x-6 text-gray-400 text-sm">
            {["Home", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#00D4FF] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between py-10 border-b border-[#0D2B45]/60 mb-10">
          <div className="md:w-3/5 text-center md:text-left pr-0 md:pr-12">
            <h2 className="text-2xl font-medium text-gray-300 mb-2">Hi, I'm</h2>
            <h1 className="text-5xl font-extrabold mb-3 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FF] to-[#00BFFF]">
                Akshit
              </span>
            </h1>
            <p className="text-xl font-light text-[#00C9FF] mb-6">
              Frontend Web Developer
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              I create responsive, user-friendly web interfaces using React and Tailwind CSS.
              I’m passionate about smooth UI/UX, elegant animations, and clean code.
            </p>

            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <a
                href="https://www.linkedin.com/in/akshit-2a694022a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm bg-[#00BFFF] hover:bg-[#00A6FF] text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <LinkedinIcon className="w-4 h-4 mr-2" /> LinkedIn
              </a>
              <a
                href="https://github.com/Akshit270503"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm border border-[#00BFFF] text-[#00D4FF] hover:bg-[#00BFFF] hover:text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <GithubIcon className="w-4 h-4 mr-2" /> GitHub
              </a>
            </div>
          </div>

          <div className="md:w-2/5 flex justify-center md:justify-end mb-10 md:mb-0">
            <div className="w-48 h-48 rounded-full gradient-border-profile overflow-hidden shadow-xl shadow-[#00C9FF]/50 flex items-center justify-center transform hover:scale-[1.05] transition duration-500">
              <img
                src="/akshit.jpg"
                alt="akshit.jpg"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </section>

        {/* Skills and Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <section id="skills">
            <h2 className="text-2xl font-bold mb-6 text-[#00D4FF]">Core Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </div>
          </section>

          <section id="projects">
            <h2 className="text-2xl font-bold mb-6 text-[#00D4FF]">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              ))}
            </div>
          </section>
        </div>

        {/* Contact */}
        <section id="contact" className="text-center border-t border-[#0D2B45]/60 mt-10 pt-10">
          <h2 className="text-2xl font-bold mb-4 text-[#00BFFF]">Get In Touch</h2>
          <p className="text-gray-400 mb-6">
            I’m open to freelance opportunities and collaborations. Let’s connect!
          </p>
          <a
            href="mailto:akshitrao773@gmail.com"
            className="bg-gradient-to-r from-[#00BFFF] to-[#00D4FF] hover:from-[#0096C7] hover:to-[#00B4D8] text-white px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg shadow-[#00C9FF]/40 text-base transform hover:scale-105 inline-flex items-center"
          >
            ✉️ akshitrao773@gmail.com
          </a>
        </section>
      </div>

      <footer className="py-4 text-center text-gray-500 text-xs mt-4">
        © {new Date().getFullYear()} Akshit. All rights reserved.
      </footer>
    </div>
  );
}
