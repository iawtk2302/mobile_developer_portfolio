"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Code2, Database, Smartphone, Sparkles, Zap } from "lucide-react";

const skills = [
  {
    category: "Mobile Development",
    icon: <Smartphone className="h-5 w-5" />,
    items: ["Flutter", "React Native", "Android (Kotlin)"],
  },
  {
    category: "State Management",
    icon: <Zap className="h-5 w-5" />,
    items: ["Riverpod", "Provider", "Bloc", "GetX"],
  },
  {
    category: "Backend & Database",
    icon: <Database className="h-5 w-5" />,
    items: ["Firebase", "Supabase", "REST APIs"],
  },
  {
    category: "Development Tools",
    icon: <Code2 className="h-5 w-5" />,
    items: ["Git", "CI/CD", "Sourcetree", "Figma"],
  },
];

const educationData = [
  {
    year: "2015 - 2019",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    description:
      "Specialized in Mobile Application Development with a thesis on cross-platform frameworks.",
  },
  {
    year: "2019 - 2020",
    degree: "Master of Computer Science",
    institution: "Digital Innovation Academy",
    description:
      "Focus on Human-Computer Interaction and Mobile User Experience Design.",
  },
  {
    year: "2022",
    degree: "Professional Certificate in Flutter Development",
    institution: "Google Developer Program",
    description:
      "Advanced training in Flutter framework, state management, and performance optimization.",
  },
];

const experiences = [
  {
    year: "2023 - Present",
    title: "Senior Mobile Developer",
    company: "Tech Innovators Inc.",
    description:
      "Leading the mobile development team, architecting scalable solutions, and mentoring junior developers.",
  },
  {
    year: "2021 - 2023",
    title: "Mobile Developer",
    company: "Digital Solutions Ltd.",
    description:
      "Developed and maintained multiple Flutter applications with complex state management and real-time features.",
  },
  {
    year: "2019 - 2021",
    title: "Junior Developer",
    company: "StartUp Mobile",
    description:
      "Started my journey in mobile development, working on both iOS and Android platforms.",
  },
];

export default function About() {
  return (
    <div className="container py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[980px]"
      >
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
            <div className="flex-shrink-0">
              <Avatar className="h-40 w-40">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="TuanKhoi"
                />
                <AvatarFallback>TK</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <h1 className="mb-4 text-4xl font-bold">About Me</h1>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  I'm a passionate Mobile Developer with over 5 years of
                  experience in creating beautiful, performant, and
                  user-friendly mobile applications. My journey in mobile
                  development started with native iOS and Android development,
                  and I've since specialized in cross-platform development using
                  Flutter.
                </p>
                <p>
                  I believe in writing clean, maintainable code and creating
                  applications that not only look great but also provide real
                  value to users. My experience spans from early-stage startups
                  to large enterprises, giving me a broad perspective on
                  different development approaches and methodologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Technical Skills</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg border bg-card p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  {skill.icon}
                  <h3 className="font-semibold">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-muted-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Experience</h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.year}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative border-l pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary before:content-['']"
              >
                <div className="absolute -left-[9px] top-[24px] h-[18px] w-[18px] rounded-full border-[4px] border-background bg-primary" />
                <span className="text-sm text-muted-foreground">
                  {experience.year}
                </span>
                <h3 className="mt-2 text-xl font-semibold">
                  {experience.title}
                </h3>
                <p className="text-muted-foreground">{experience.company}</p>
                <p className="mt-2">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-3xl font-bold">Education</h2>
          <div className="space-y-8">
            {educationData.map((education, index) => (
              <motion.div
                key={education.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative border-l pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary before:content-['']"
              >
                <div className="absolute -left-[9px] top-[24px] h-[18px] w-[18px] rounded-full border-[4px] border-background bg-primary" />
                <span className="text-sm text-muted-foreground">
                  {education.year}
                </span>
                <h3 className="mt-2 text-xl font-semibold">
                  {education.degree}
                </h3>
                <p className="text-muted-foreground">{education.institution}</p>
                <p className="mt-2">{education.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
}
