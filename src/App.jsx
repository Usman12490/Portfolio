import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, User, Code, Award, Target, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const skills = [
    { category: "AI & Machine Learning", items: ["Large Language Models (LLMs)", "LangChain", "Vector Databases", "Pydantic"] },
    { category: "Programming Languages", items: ["Python", "JavaScript", "TypeScript", "Java", "C++"] },
    { category: "Web Technologies", items: ["React", "Node.js", "HTML/CSS", "Tailwind CSS", "REST APIs"] },
    { category: "Tools & Frameworks", items: ["Git", "Docker", "MongoDB", "PostgreSQL", "FastAPI"] }
  ];

  const projects = [
    {
      title: "AI-Powered Chatbot",
      description: "Built an intelligent chatbot using LangChain and vector databases for document retrieval and question answering.",
      tech: ["Python", "LangChain", "Vector DB", "Pydantic"],
      status: "In Progress",
      link: null
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with modern UI/UX, payment integration, and real-time updates using Firebase database.",
      tech: ["React", "Tailwind CSS", "React Router", "Redux", "Firebase"],
      status: "Completed",
      link: "https://ecommerce-website-2004.netlify.app/"
    },
    {
      title: "Educational Platform",
      description: "Front-end Educational Website with modern UI/UX, form submission using localStorage",
      tech: ["React", "Tailwind CSS", "Node"],
      status: "Completed",
      link: "https://edusity2004.netlify.app/"
    },

    {
      title: "Advanced Music Player",
      description: "Advanced Music Player with modern UI/UX, Playlist option,Autoplay, Shuffle songs, User Add/Remove Songs",
      tech: ["HTML", "CSS", "Javascript"],
      status: "Completed",
      link: "https://musicplayer2004.netlify.app/"
    },

    {
      title: "Food Delivery Platform",
      description: "Front-end Restaurant platform with modern UI/UX, Manage Cart items,Filters Menu Items, Checkout Form, Responsive",
      tech: ["React", "Tailwind CSS", "Node", "React-Router"],
      status: "Completed",
      link: "https://food-del-2004.netlify.app/"
    },
  ];

  const achievements = [
    "Completed Pakistan Freelancing Training Program MERN Stack Certificate",
    "Develop some MINI Projects using ReactJS and Tailwind CSS",
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-lg border-b border-purple-500/20 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </h1>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize cursor-pointer transition-colors duration-300 hover:text-purple-400 ${activeSection === section ? 'text-purple-400' : 'text-gray-300'
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`transform transition-all duration-1000 ${isVisible.home ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Profile Photo Placeholder */}

            <div className="mx-auto w-48 h-48 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 mb-8">

              <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center">
                <img src="../dist/public/MyPic.jpg" className='w-full h-full rounded-full' alt="" />


              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Muhammad Usman Ashfaq
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Computer Science Student at International Islamic University Islamabad
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Aspiring to lead in the tech field with expertise in Mongo, Express, React JS, Tailwind CSS, Node, JavaScript, Python, C++, JAVA, Firebase. <br />
              And now focus on Mastering AI technologies including Large Language Models, LangChain, Pydantic and vector databases
            </p>

            <button
              onClick={() => scrollToSection('about')}
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span>Explore My Journey</span>
              <ChevronDown className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600 rounded-full opacity-10 animate-pulse delay-700"></div>
        </div>
      </section >

      {/* About Section */}
      <section section id="about" className="py-20 bg-black/30" >
        <div className="container mx-auto px-6">
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I am a dedicated Computer Science student at International Islamic University Islamabad with a passion for cutting-edge technology and artificial intelligence.
                  My journey in tech is driven by curiosity and a desire to create innovative solutions that make a meaningful impact.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Currently focused on mastering AI technologies including Large Language Models, LangChain, and vector databases,
                  I combine theoretical knowledge with practical application to build intelligent systems.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-purple-500/10 rounded-xl border border-purple-500/20">
                    <Target className="mx-auto mb-4 text-purple-400" size={40} />
                    <h3 className="text-xl font-semibold mb-2">Career Goal</h3>
                    <p className="text-gray-400">Lead innovation in the tech industry through AI and machine learning</p>
                  </div>
                  <div className="text-center p-6 bg-pink-500/10 rounded-xl border border-pink-500/20">
                    <Code className="mx-auto mb-4 text-pink-400" size={40} />
                    <h3 className="text-xl font-semibold mb-2">Focus Areas</h3>
                    <p className="text-gray-400">AI, LLMs, Python, Vector Databases, LangChain</p>
                  </div>
                  <div className="text-center p-6 bg-purple-500/10 rounded-xl border border-purple-500/20">
                    <User className="mx-auto mb-4 text-purple-400" size={40} />
                    <h3 className="text-xl font-semibold mb-2">Background</h3>
                    <p className="text-gray-400">Computer Science Student with strong foundation in technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      < section section id="skills" className="py-20" >
        <div className="container mx-auto px-6">
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, index) => (
                <div
                  key={skillGroup.category}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-gray-300 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ section>

      {/* Projects Section */}
      < section section id="projects" className="py-20 bg-black/30" >
        <div className="container mx-auto px-6">
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 group-hover:text-purple-400 transition-colors hover:scale-110 transform"
                      >
                        <ExternalLink size={20} />
                      </a>
                    ) : (
                      <ExternalLink className="text-gray-600 opacity-50" size={20} />
                    )}
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`px-3 py-1 rounded-full text-sm ${project.status === 'Completed'
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                      : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                      }`}>
                      {project.status}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                      >
                        View Live
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ section>

      {/* Achievements Section */}
      <section section id="achievements" className="py-20" >
        <div className="container mx-auto px-6">
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible.achievements ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Achievements
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                      <Award className="text-purple-400 flex-shrink-0" size={24} />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Contact Section */}
      < section section id="contact" className="py-20 bg-black/30" >
        <div className="container mx-auto px-6">
          <div className={`transform transition-all duration-1000 delay-600 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
                <p className="text-center text-lg text-gray-300 mb-8">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and AI.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQZCChWtSsNmrFnfckVdNRxStCVtkQMNZtvzDKbvQdLQjsRFclClZSQBXDcdqXMqZfJLl"
                    className="flex items-start space-x-1 p-6 bg-purple-500/10 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <Mail className="text-purple-400 group-hover:text-purple-300" size={24} />
                    <div>
                      <h3 className="font-semibold text-start mx-auto">usmanashfaq8744@gmail.com</h3>
                      <p className="text-gray-400">Contact Me</p>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammad-usman-ashfaq-236a70294/"
                    className="flex items-center space-x-4 p-6 bg-blue-500/10 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <Linkedin className="text-blue-400 group-hover:text-blue-300" size={24} />
                    <div>
                      <h3 className="font-semibold">LinkedIn</h3>
                      <p className="text-gray-400">Connect with me</p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/Usman12490"
                    className="flex items-center space-x-4 p-6 bg-pink-500/10 rounded-xl border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <Github className="text-pink-400 group-hover:text-pink-300" size={24} />
                    <div>
                      <h3 className="font-semibold">GitHub</h3>
                      <p className="text-gray-400">View my projects</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ section>

      {/* Footer */}
      < footer footer className="py-8 border-t border-purple-500/20" >
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Your Muhammad Usman Ashfaq. Built with React and Tailwind CSS.
          </p>
        </div>
      </ footer>
    </div >
  );
}