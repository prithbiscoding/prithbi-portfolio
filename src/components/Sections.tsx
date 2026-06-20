"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Monitor,
  Database,
  Terminal,
  Mail,
  Trophy,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Sections() {
  const skills = [
    {
      name: "Languages",
      icon: Code2,
      skills: "C • C++ • Java • Python • JavaScript",
    },

    {
      name: "Frontend",
      icon: Monitor,
      skills: "React • Next.js • Tailwind CSS",
    },

    {
      name: "Backend",
      icon: Database,
      skills: "Node.js • Spring Boot • MySQL • PostgreSQL",
    },

    {
      name: "Tools",
      icon: Terminal,
      skills: "Docker • Linux • Git • AWS",
    },
  ];

  const projects = [
    {
      title: "HearWrite",
      desc: "Accessibility platform generating subtitles for deaf users with 95%+ transcription accuracy across 10+ languages.",
      tech: "Spring Boot • React • Whisper ASR • PostgreSQL",
      link: "#",
    },

    {
      title: "BlueFind",
      desc: "Bluetooth mesh friend finder for concerts and crowded events. Works without internet and achieves 100m+ range.",
      tech: "Kotlin • BLE Mesh • C++ • Python",
      link: "#",
    },

    {
      title: "NeuralDocs",
      desc: "RAG-powered document intelligence app for querying PDFs and documents.",
      tech: "LangChain • FastAPI • React • ChromaDB",
      link: "#",
    },

    {
      title: "ByteShell",
      desc: "Feature complete Unix shell built from scratch with process management, pipes and signal handling.",
      tech: "C • Linux • POSIX",
      link: "#",
    },
  ];

  const achievements = [
    "🏆 Smart India Hackathon 2024 - Top 30 Finalist",

    "🏆 ComputerHack 2024 - Top 20 Finalist",

    "🥉 HackSRM 6.0 - 3rd Place",

    "☁ AWS Cloud Practitioner Essentials",
  ];

  return (
    <div className="flex flex-col gap-[50vh] pb-[20vh]">
      {/* ABOUT */}

      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-4 relative z-10 pt-[20vh]"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card max-w-5xl w-full"
        >
          <h2 className="text-5xl font-bold mb-8 text-accentOrange">
            About Me
          </h2>

          <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
            <p>
              I'm{" "}
              <span className="text-accentOrange font-semibold">
                Prithbi Biswas
              </span>
              , a 3rd year Computer Science Engineering student at SRM Institute
              of Science & Technology.
            </p>

            <p>
              I enjoy building products at the intersection of
              <span className="text-accentBlue"> AI</span>,
              <span className="text-accentBlue">
                {" "}
                Systems Programming
              </span>{" "}
              and
              <span className="text-accentBlue">
                {" "}
                Full Stack Development
              </span>
              .
            </p>

            <p>
              My projects range from accessibility software like
              <span className="text-accentOrange"> HearWrite</span> to
              Bluetooth mesh networking systems like
              <span className="text-accentOrange"> BlueFind</span> and
              RAG-powered AI applications.
            </p>

            <p>
              Currently looking for Software Engineering and AI internships
              where I can build impactful products and grow as an engineer.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}

      <section
        id="skills"
        className="min-h-screen flex items-center justify-center px-4 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card max-w-6xl w-full"
        >
          <h2 className="text-5xl font-bold mb-12 text-center text-accentBlue">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -10, scale: 1.03 }}
                className="glass p-8 rounded-2xl text-center"
              >
                <skill.icon className="w-12 h-12 mx-auto mb-5 text-accentBlue" />

                <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>

                <p className="text-gray-400">{skill.skills}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-4 relative z-10"
      >
        <div className="max-w-7xl w-full">
          <h2 className="text-5xl font-bold text-center mb-16 text-accentOrange">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -8 }}
                className="glass-card"
              >
                <h3 className="text-3xl font-bold mb-4 text-accentOrange">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6">{project.desc}</p>

                <div className="text-accentBlue mb-6">
                  {project.tech}
                </div>

                <a
                  href={project.link}
                  className="font-semibold hover:text-accentBlue"
                >
                  View Project →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}

      <section
        id="achievements"
        className="min-h-screen flex items-center justify-center px-4 relative z-10"
      >
        <div className="glass-card max-w-5xl w-full">
          <h2 className="text-5xl font-bold text-center mb-12 text-accentBlue">
            Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement}
                className="glass p-8 rounded-2xl flex gap-4 items-center"
              >
                <Trophy className="text-yellow-400 w-8 h-8 flex-shrink-0" />

                <p className="text-lg">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="min-h-[80vh] flex items-center justify-center px-4 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass-card max-w-3xl w-full text-center"
        >
          <h2 className="text-5xl font-bold mb-6">
            Let's Connect
          </h2>

          <p className="text-xl text-gray-300 mb-10">
            I'm actively looking for Software Engineering and AI internships.
            Feel free to reach out!
          </p>

          <a
            href="mailto:prithbi015@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accentOrange text-white font-bold text-lg hover:scale-105 transition mb-12"
          >
            <Mail className="w-6 h-6" />

            Email Me
          </a>

          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/prithbiscoding"
              target="_blank"
              className="p-4 glass rounded-full hover:scale-110 transition"
            >
              <FaGithub className="w-8 h-8" />
            </a>

            <a
              href="https://linkedin.com/in/prithbi-biswas-029bb4324"
              target="_blank"
              className="p-4 glass rounded-full hover:scale-110 transition"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
