"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Database,
  GitBranch,
  Linkedin,
  Mail,
  PenTool,
  Smartphone,
  Workflow,
  Zap,
} from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

// Tech stack
const techStack = [
  // Main Tools
  { name: "Flutter", category: "Cross-platform", icon: Smartphone },
  { name: "Dart", category: "Programming", icon: Code2 },
  // { name: "Firebase", category: "Backend", icon: Database },

  // State Management
  { name: "Provider", category: "State Management", icon: Zap },
  { name: "Riverpod", category: "State Management", icon: Zap },
  { name: "Bloc", category: "State Management", icon: Zap },
  { name: "GetX", category: "State Management", icon: Zap },

  // App Services
  { name: "Firebase", category: "Backend", icon: Database },
  { name: "REST APIs", category: "API", icon: Code2 },
  // { name: "GraphQL", category: "API", icon: Code2 },
  { name: "Supabase", category: "Backend", icon: Database },

  // Development Tools
  { name: "Git", category: "Version Control", icon: GitBranch },
  { name: "CI/CD", category: "DevOps", icon: Workflow },
  { name: "Figma", category: "Design", icon: PenTool },
  { name: "VS Code", category: "IDE", icon: Code2 },
];

const skillsData = [
  // Core Skills
  { name: "Flutter", category: "Cross-platform" },
  { name: "Dart", category: "Programming" },
  { name: "UI/UX", category: "Design" },
  { name: "Animation", category: "Mobile UX" },

  // State Management & Architecture
  { name: "Provider", category: "State Management" },
  { name: "Riverpod", category: "State Management" },
  { name: "Bloc", category: "State Management" },
  { name: "Clean Architecture", category: "Design Pattern" },

  // Backend Integration
  { name: "Firebase", category: "Backend" },
  { name: "REST APIs", category: "API" },
  { name: "GraphQL", category: "API" },
  { name: "Supabase", category: "Backend" },

  // Tools & Deployment
  { name: "Git", category: "Version Control" },
  { name: "CI/CD", category: "DevOps" },
  { name: "App Store", category: "Distribution" },
  { name: "Play Store", category: "Distribution" },

  // Testing
  { name: "Unit Testing", category: "Testing" },
  { name: "Widget Testing", category: "Testing" },
  { name: "Integration Testing", category: "Testing" },
];

const projects = [
  {
    title: "Health & Fitness App",
    description:
      "A comprehensive fitness tracking application with workout plans, nutrition tracking, and progress analytics.",
    technologies: "Flutter • Firebase • Riverpod",
    image: "/images/featured-projects/project4.jpg",
  },
  {
    title: "E-commerce Platform",
    description:
      "A feature-rich e-commerce mobile app with real-time inventory, secure payments, and order tracking.",
    technologies: "Flutter • Supabase • GetX",
    image:
      "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "Social Media App",
    description:
      "A social networking app with real-time messaging, story sharing, and content discovery features.",
    technologies: "React Native • Firebase • Redux",
    image:
      "https://images.unsplash.com/photo-1586336900429-71f0642f66d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 md:py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Building Beautiful <br />
            <span className="text-primary">Mobile Experiences</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Transforming ideas into captivating mobile apps that delight users
            and exceed expectations. Ready to bring your vision to life?
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get in Touch
                <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <Button size="icon" variant="ghost" asChild>
              <Link href="https://github.com">
                <GitHubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <Link href="https://linkedin.com">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Quick Introduction */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t">
        <div className="w-full max-w-[980px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, margin: "-100px" }}
            className="grid gap-8 md:grid-cols-2 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Hello, I'm Tuan Khoi</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a Mobile Developer with over 5 years of experience
                  creating beautiful, high-performance, and user-friendly mobile
                  applications.
                </p>
                <p>
                  My expertise spans both native app development (iOS and
                  Android) and cross-platform development using Flutter and
                  React Native.
                </p>
                <Button variant="outline" asChild className="mt-4">
                  <Link href="/about">
                    Learn more about me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-primary/50 blur-sm"></div>
                <div className="relative rounded-full overflow-hidden border-4 border-background w-64 h-64">
                  <Image
                    src="/images/avatar/avatar.jpg"
                    alt="TuanKhoi"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        id="featured-projects"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t"
      >
        <div className="w-full max-w-[980px] mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <p className="mt-2 text-muted-foreground">
                Some of my recent work that I'm proud of
              </p>
            </motion.div>
            <Button variant="outline" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-lg border bg-background"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.technologies}
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    {project.description}
                  </p>
                  <Button variant="link" className="mt-2 px-0" asChild>
                    <Link href="/projects">
                      View details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section
        id="tech-stack"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t"
      >
        <div className="w-full max-w-[980px] mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold">Technologies I Use</h2>
            <p className="mt-2 text-muted-foreground">
              Tools and technologies I'm proficient with
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, margin: "-50px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex flex-col items-center justify-center p-4 rounded-lg border hover:border-primary transition-colors"
              >
                {<tech.icon className="h-8 w-8 mb-3 text-primary" />}
                <span className="font-medium text-sm">{tech.name}</span>
                <span className="text-xs text-muted-foreground">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Contact */}
      <section
        id="quick-contact"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t"
      >
        <div className="w-full max-w-[980px] mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <p className="mt-2 text-muted-foreground">
              Have a project in mind or want to discuss collaboration
              opportunities?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    contact@tuankhoi.dev
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">
                    linkedin.com/in/tuankhoi
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                  <GitHubIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <p className="text-sm text-muted-foreground">
                    github.com/tuankhoi
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border p-6 shadow-sm">
              <h3 className="font-medium mb-4">Quick Message</h3>
              <div className="space-y-4">
                <Button size="lg" className="w-full" asChild>
                  <Link href="/contact">
                    Send me a message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Or visit the{" "}
                  <Link
                    href="/contact"
                    className="text-primary hover:underline"
                  >
                    contact page
                  </Link>{" "}
                  for more options
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Empty space at the bottom */}
      <div className="h-12"></div>
    </div>
  );
}
