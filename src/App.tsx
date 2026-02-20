import { motion } from "motion/react";
import { Github, Mail, Phone, MapPin, ExternalLink, Code2, Cpu, Terminal, CheckCircle2, Layout, Database, Layers } from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-bg-dark/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold font-mono text-brand-primary"
        >
          &lt;Hoang Duc Thien&gt;
        </motion.div>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-brand-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            AVAILABLE FOR NEW OPPORTUNITIES
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Ensuring <span className="text-gradient">Quality</span> Through <span className="italic font-serif">Automation</span>
          </h1>
          <p className="text-lg text-zinc-400 mb-8 max-w-xl leading-relaxed">
            Hi, I'm <span className="text-white font-medium">Hoang Duc Thien</span>. An SDET with 3+ years of experience building robust automation frameworks and integrating Machine Learning into the testing lifecycle.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View Projects <ExternalLink size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="glass-card p-8 border-white/10 bg-zinc-900/50 backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="ml-2 text-xs font-mono text-zinc-500">test_suite_v2.py</span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <p className="text-brand-secondary">import pytest</p>
              <p className="text-brand-secondary">from ml_model import QualityPredictor</p>
              <p className="text-zinc-500 mt-4"># Initializing AI-driven test suite</p>
              <p><span className="text-purple-400">def</span> <span className="text-blue-400">test_rag_system_accuracy</span>():</p>
              <p className="pl-4">predictor = QualityPredictor(model_path=<span className="text-orange-300">'./weights'</span>)</p>
              <p className="pl-4">results = predictor.evaluate(test_data)</p>
              <p className="pl-4 text-brand-primary">assert results.accuracy &gt; 0.95</p>
              <p className="text-zinc-500 mt-4"># Output:</p>
              <p className="text-brand-primary flex items-center gap-2">
                <CheckCircle2 size={14} /> 142 tests passed in 12.4s
              </p>
            </div>
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 glass-card p-4 shadow-2xl border-brand-primary/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                <Cpu size={20} />
              </div>
              <div>
                <p className="text-xs text-zinc-500 font-mono">ML Expertise</p>
                <p className="text-sm font-bold">Computer Vision & NLP</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-brand-primary font-mono text-xl">01.</span> About Me
            </h2>
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p>
                I am a Software Development Engineer in Test (SDET) based in Ho Chi Minh City, with a strong foundation in Computer Science and a passion for integrating AI into quality assurance.
              </p>
              <p>
                My journey started with a Bachelor's in Computer Science from the Industrial University of Ho Chi Minh City, where I specialized in Machine Learning and Computer Vision. This unique background allows me to approach testing not just as a verification step, but as a data-driven engineering challenge.
              </p>
              <p>
                Currently at DR Digital, I focus on building scalable automation frameworks for Web, Mobile, and AI systems, significantly reducing regression times while ensuring high-quality releases.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <p className="text-2xl font-bold text-white">3+</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Years in QC</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <p className="text-2xl font-bold text-white">2+</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Years Automation</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10">
              <img
                src="https://picsum.photos/seed/thien/800/800"
                alt="Hoang Duc Thien"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -inset-4 border-2 border-brand-primary/30 rounded-2xl -z-10 translate-x-4 translate-y-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Automation",
      icon: <Terminal size={20} />,
      skills: ["Cypress", "Playwright", "Katalon", "Selenium", "Performance Testing", "API Testing", "Appium"]
    },
    {
      title: "AI / ML",
      icon: <Cpu size={20} />,
      skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP"]
    },
    {
      title: "Programming",
      icon: <Code2 size={20} />,
      skills: ["Python", "SQL", "JavaScript"]
    },
    {
      title: "Tools & DevOps",
      icon: <Layers size={20} />,
      skills: ["GitHub", "Postman", "CI/CD"]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-zinc-500">A comprehensive set of tools and technologies I use to build and test robust systems.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 hover:border-brand-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-bg-dark transition-all">
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-2 py-1 rounded-md bg-white/5 text-xs font-mono text-zinc-400 border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "DR Digital",
      role: "SDET",
      period: "Oct 2024 – Present",
      achievements: [
        "Automation testing for Web, Mobile, and AI systems using Cypress & Playwright.",
        "Mobile automation using Appium and API testing with Postman & Python.",
        "Performance testing with JMeter and specialized testing for AI chatbot and RAG systems.",
        "Reduced regression testing time by 50% through optimized framework design.",
        "Integrated testing into CI/CD pipelines using GitHub Actions."
      ]
    },
    {
      company: "Freelancer",
      role: "Developer",
      period: "Apr 2024 – Sep 2024",
      achievements: [
        "Delivered Cypress automation for Japanese enterprise projects.",
        "Built Python pytest frameworks for blog platform automation.",
        "Executed freelance ML & Deep Learning projects focusing on Computer Vision."
      ]
    },
    {
      company: "Lac Viet Corp",
      role: "Automation Tester",
      period: "Oct 2022 – Apr 2024",
      achievements: [
        "Developed Web automation suites using Katalon Studio.",
        "Implemented Mobile automation with Appium.",
        "Conducted performance testing using JMeter & BlazeMeter.",
        "Improved overall testing efficiency by 40%."
      ]
    },
    {
      company: "Just In Time Solution",
      role: "Manual Tester",
      period: "Feb 2022 – Jun 2022",
      achievements: [
        "Core banking system testing for K-Bank and Ocean Bank.",
        "Designed comprehensive test cases and managed bug reporting lifecycles."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-zinc-900/30">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-3">
          <span className="text-brand-primary font-mono text-xl">02.</span> Professional Journey
        </h2>

        <div className="space-y-12 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white/10 ml-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="pl-8 relative"
            >
              <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-brand-primary shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-4">
                <h3 className="text-xl font-bold text-white">{exp.role} <span className="text-brand-primary">@ {exp.company}</span></h3>
                <span className="text-sm font-mono text-zinc-500">{exp.period}</span>
              </div>
              <ul className="space-y-3">
                {exp.achievements.map((item, idx) => (
                  <li key={idx} className="text-zinc-400 text-sm flex gap-3">
                    <span className="text-brand-primary mt-1.5 shrink-0"><CheckCircle2 size={14} /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Cypress Automation OrangeHRM",
      description: "A robust Page Object Model (POM) test framework for the OrangeHRM demo site, focusing on scalability and execution speed.",
      tags: ["Cypress", "JavaScript", "POM", "Automation"],
      link: "https://github.com/rudojr",
      image: "https://picsum.photos/seed/cypress/600/400"
    },
    {
      title: "Python Pytest Blog Automation",
      description: "End-to-end automation suite for a blog platform with integrated HTML reporting and parallel execution capabilities.",
      tags: ["Python", "Pytest", "Selenium", "Reporting"],
      link: "https://github.com/rudojr",
      image: "https://picsum.photos/seed/pytest/600/400"
    },
    {
      title: "AI Chatbot & RAG Testing",
      description: "Specialized testing framework for evaluating the accuracy and reliability of Retrieval-Augmented Generation systems.",
      tags: ["AI Testing", "RAG", "Python", "LLM"],
      link: "https://github.com/rudojr",
      image: "https://picsum.photos/seed/ai/600/400"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-3">
          <span className="text-brand-primary font-mono text-xl">03.</span> Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a href={project.link} target="_blank" className="p-3 bg-white text-bg-dark rounded-full shadow-xl">
                    <Github size={24} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono uppercase tracking-wider text-brand-primary px-2 py-0.5 rounded-full bg-brand-primary/10 border border-brand-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors">{project.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <a href={project.link} target="_blank" className="text-sm font-medium flex items-center gap-2 text-white hover:text-brand-primary transition-colors">
                  View Repository <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-900/30">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-zinc-400 mb-12">
          I'm currently looking for new opportunities as an SDET or Automation Engineer. Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a href="mailto:hoangducthien176@gmail.com" className="glass-card p-6 hover:border-brand-primary/30 transition-all">
            <Mail className="mx-auto mb-4 text-brand-primary" size={24} />
            <p className="text-xs text-zinc-500 uppercase font-mono mb-1">Email</p>
            <p className="text-sm font-medium">hoangducthien176@gmail.com</p>
          </a>
          <a href="tel:+84357031801" className="glass-card p-6 hover:border-brand-primary/30 transition-all">
            <Phone className="mx-auto mb-4 text-brand-primary" size={24} />
            <p className="text-xs text-zinc-500 uppercase font-mono mb-1">Phone</p>
            <p className="text-sm font-medium">+84 357 031 801</p>
          </a>
          <div className="glass-card p-6">
            <MapPin className="mx-auto mb-4 text-brand-primary" size={24} />
            <p className="text-xs text-zinc-500 uppercase font-mono mb-1">Location</p>
            <p className="text-sm font-medium">Go Vap, HCM, VN</p>
          </div>
        </div>

        <a href="mailto:hoangducthien176@gmail.com" className="btn-primary px-12 py-4 text-lg">
          Say Hello
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-zinc-500 font-mono">
          Designed & Built by Hoang Duc Thien © 2026
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/rudojr" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://kaggle.com/iamrudo1999" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
            <Database size={20} />
          </a>
          <a href="mailto:hoangducthien176@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function Portfolio() {
  return (
    <div className="selection:bg-brand-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
