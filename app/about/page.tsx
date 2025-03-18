"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Code2,
  Database,
  Layers,
  Smartphone,
  Sparkles,
  TestTube,
  Zap,
} from "lucide-react";

const skills = [
  {
    category: "Mobile Development",
    icon: <Smartphone className="h-5 w-5" />,
    items: ["Flutter (Dart)", "React Native (JS/TS)", "Android (Kotlin)"],
  },
  {
    category: "State Management",
    icon: <Zap className="h-5 w-5" />,
    items: ["Riverpod", "Provider", "Bloc", "GetX"],
  },
  {
    category: "Backend & Database",
    icon: <Database className="h-5 w-5" />,
    items: [
      "Firebase (Auth, Firestore, Storage, Messaging)",
      "REST APIs",
      "Shared Preferences/ SQLite / Hive",
      "Supabase",
    ],
  },
  {
    category: "Development Tools",
    icon: <Code2 className="h-5 w-5" />,
    items: [
      "Git / SourceTree",
      "CI/CD (GitHub Actions, Fastlane)",
      "Postman",
      "Figma",
    ],
  },
  {
    category: "Testing",
    icon: <TestTube className="h-5 w-5" />,
    items: ["Unit Testing", "Integration Testing", "Widget Testing"],
  },
  {
    category: "Architecture & Best Practices",
    icon: <Layers className="h-5 w-5" />,
    items: [
      "Clean Architecture",
      "MVVM",
      "SOLID Principles",
      "Design Patterns",
    ],
  },
];

const educationData = [
  {
    year: "2020 - 2024",
    degree: "Bachelor of Software Engineering",
    institution: "University of Information Technology, VNU-HCM",
    description:
      "Built a strong foundation in object-oriented programming (OOP), data structures, and algorithms. Specialized in software architecture, design patterns, and mobile application development with a focus on cross-platform frameworks and state management.",
  },
];

const experiences = [
  {
    year: "2024 - Present",
    title: "Junior Flutter Developer",
    company: "ExecutionLab Asia",
    description:
      "Developing and maintaining Flutter applications with advanced state management and real-time features. Collaborating with cross-functional teams to enhance performance and user experience.",
  },
  {
    year: "2023 - 2024",
    title: "Flutter Developer Intern",
    company: "LECLE Vietnam",
    description:
      "Built modular and scalable Flutter applications following Clean Architecture principles. Integrated REST APIs and developed custom animations to improve UI/UX.",
  },
];

export default function About() {
  const { resolvedTheme } = useTheme();
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
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{
                  duration: 0.08,
                  type: "tween"
                }}
              >
                <Avatar className="h-40 w-40">
                  <AvatarImage src="/images/avatar/avatar.jpg" alt="TuanKhoi" />
                  <AvatarFallback>TK</AvatarFallback>
                </Avatar>
              </motion.div>
            </div>
            <div>
              <h1 className="mb-4 text-4xl font-bold">About Me</h1>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  I'm a passionate Mobile Developer with over 1 year of
                  experience in building user-friendly and high-performance
                  mobile applications. My journey started with Flutter, where
                  I’ve gained hands-on experience in developing and optimizing
                  cross-platform apps.
                </p>
                <p>
                  I focus on writing clean, maintainable code and continuously
                  improving my skills to build applications that are both
                  visually appealing and functional. Throughout my experience,
                  I’ve worked on various projects, learning best practices in
                  mobile development and collaborating in team environments to
                  deliver high-quality products. I'm always eager to explore new
                  technologies and improve the user experience in every app I
                  create.
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
                key={`${skill.category}-${resolvedTheme}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  borderColor: "hsl(var(--primary))",
                  transition: {
                    duration: 0.08,
                    type: "tween"
                  },
                }}
                className="rounded-lg border bg-card p-6 transition-all"
              >
                <div className="mb-4 flex items-center gap-3">
                  {skill.icon}
                  <h3 className="font-semibold">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <motion.li
                      key={`${item}-${resolvedTheme}`}
                      className="flex items-center gap-2"
                      whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                      transition={{
                        duration: 0.07,
                        type: "tween"
                      }}
                    >
                      <Sparkles className="h-4 w-4 text-muted-foreground" />
                      <span>{item}</span>
                    </motion.li>
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
                key={`${experience.year}-${resolvedTheme}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{
                  y: -6,
                  scale: 1.015,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  transition: {
                    duration: 0.08,
                    type: "tween"
                  },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative border-l pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary before:content-[''] hover:cursor-pointer p-3 rounded-r-md"
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
                key={`${education.degree}-${resolvedTheme}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{
                  y: -6,
                  scale: 1.015,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  transition: {
                    duration: 0.08,
                    type: "tween"
                  },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative border-l pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary before:content-[''] hover:cursor-pointer p-3 rounded-r-md"
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
