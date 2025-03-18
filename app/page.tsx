"use client";

import { GitHubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  fadeInUpVariants,
  staggerContainerVariants,
} from "@/hooks/useScrollAnimation";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
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
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { projects, type Project } from "@/lib/data";

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

  // App Services
  { name: "Firebase", category: "Backend", icon: Database },
  { name: "REST APIs", category: "API", icon: Code2 },
  // { name: "GraphQL", category: "API", icon: Code2 },
  { name: "Supabase", category: "Backend", icon: Database },
  { name: "Postman", category: "API Testing", icon: Code2 },

  // Development Tools
  { name: "Git", category: "Version Control", icon: GitBranch },
  { name: "CI/CD", category: "DevOps", icon: Workflow },
  { name: "Figma", category: "Design", icon: PenTool },
  { name: "VS Code", category: "IDE", icon: Code2 },
  { name: "Android Studio", category: "IDE", icon: Code2 },
  { name: "Xcode", category: "IDE", icon: Code2 },
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

// Define animation variants for consistent animations across the page
const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut",
    },
  },
};

// Add hover variants for buttons
const buttonHoverVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

// Add staggered item variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function Home() {
  // Create smooth parallax scroll effect
  const { scrollYProgress } = useScroll();

  // Create smooth transform values for parallax effect
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.3], [1, 0.9, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.3], [1, 0.99, 1]);

  // Refs for each section to detect when they come into view
  const introRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Get inView states
  const introInView = useInView(introRef, { once: true, margin: "-10%" });
  const techStackInView = useInView(techStackRef, {
    once: true,
    margin: "-10%",
  });
  const projectsInView = useInView(projectsRef, { once: true, margin: "-10%" });
  const contactInView = useInView(contactRef, { once: true, margin: "-10%" });

  // Get current theme to force re-render when theme changes
  const { resolvedTheme } = useTheme();
  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 md:py-24"
      >
        <motion.div
          style={{ opacity, scale, willChange: "opacity, transform" }}
          className="w-full"
          initial="hidden"
          animate="visible"
          variants={staggerContainerVariants}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            style={{ willChange: "opacity, transform" }}
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
              <motion.div variants={fadeInUpVariants} custom={3}>
                <motion.div
                  variants={buttonHoverVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Get in Touch
                      <Mail className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div variants={fadeInUpVariants} custom={4}>
                <motion.div
                  variants={buttonHoverVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/projects">
                      View Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 flex justify-center gap-6"
              variants={fadeInUpVariants}
              custom={5}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="icon" variant="ghost" asChild>
                  <Link href="https://github.com/iawtk2302">
                    <GitHubIcon className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="icon" variant="ghost" asChild>
                  <Link href="https://www.linkedin.com/in/khoihaycuoi">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Introduction */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t">
        <div className="w-full max-w-[980px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            style={{ willChange: "opacity, transform" }}
            viewport={{ once: true, margin: "-10%" }}
            className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Avatar - shows first on mobile, second on desktop */}
            <div className="flex justify-center order-first md:order-last">
              <motion.div
                className="relative"
                variants={floatingVariants}
                initial="initial"
                animate="animate"
              >
                <motion.div
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-primary/50 blur-sm"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                ></motion.div>
                <div className="relative rounded-full overflow-hidden border-4 border-background w-64 h-64">
                  <Image
                    src="/images/avatar/avatar.jpg"
                    alt="TuanKhoi"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
            {/* Text - shows second on mobile, first on desktop */}
            <div className="order-last md:order-first">
              <h2 className="text-3xl font-bold mb-4">Hello, I'm Tuan Khoi</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate Mobile Developer with over 1 year of
                  experience in building user-friendly and high-performance
                  mobile applications. My journey started with Flutter, where
                  I've gained hands-on experience in developing and optimizing
                  cross-platform apps.
                </p>
                <p>
                  I focus on writing clean, maintainable code and continuously
                  improving my skills to build applications that are both
                  visually appealing and functional.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block"
                >
                  <Button variant="outline" asChild className="mt-4">
                    <Link href="/about">
                      Learn more about me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I'm Doing */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t">
        <div className="w-full max-w-[980px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            style={{ willChange: "opacity, transform" }}
            viewport={{ once: true, margin: "-10%" }}
          >
            <h2 className="text-3xl font-bold mb-8">What I'm Doing</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            style={{ willChange: "opacity" }}
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Mobile Apps */}
            <motion.div
              key={`card-1-${resolvedTheme}`}
              variants={fadeInUpVariants}
              custom={0.1}
              style={{ willChange: "opacity, transform" }}
              className="p-6 bg-card rounded-lg border border-border transition-all duration-300"
              whileHover={{
                y: -8,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "hsl(var(--primary) / 0.5)",
                backgroundColor: "hsl(var(--card) / 0.95)",
              }}
              initial={{
                y: 0,
                boxShadow: "none",
                borderColor: "hsl(var(--border))",
                backgroundColor: "hsl(var(--card))",
              }}
              animate={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
              }}
              exit={{
                y: 0,
                boxShadow: "none",
                borderColor: "hsl(var(--border))",
                backgroundColor: "hsl(var(--card))",
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  key={`icon-mobile-${resolvedTheme}`}
                  className="p-2 bg-primary/10 rounded-lg"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "hsl(var(--primary) / 0.2)",
                  }}
                  initial={{
                    backgroundColor: "hsl(var(--primary) / 0.1)", 
                  }}
                  animate={{
                    backgroundColor: "hsl(var(--primary) / 0.1)",
                    rotate: [-2, 2, -2]
                  }}
                  transition={{
                    rotate: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Smartphone className="h-6 w-6 text-primary" />
                </motion.div>
                <div>
                  <motion.h3
                    className="text-xl font-semibold mb-2"
                    whileHover={{ color: "hsl(var(--primary))" }}
                  >
                    Mobile App Development
                  </motion.h3>
                  <p className="text-muted-foreground">
                    Building high-performance, cross-platform mobile
                    applications with Flutter, ensuring smooth UI and excellent
                    user experience.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Backend Integration */}
            <motion.div
              key={`card-2-${resolvedTheme}`}
              variants={fadeInUpVariants}
              custom={0.2}
              style={{ willChange: "opacity, transform" }}
              className="p-6 bg-card rounded-lg border border-border transition-all duration-300"
              whileHover={{
                y: -8,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "hsl(var(--primary) / 0.5)",
                backgroundColor: "hsl(var(--card) / 0.95)",
              }}
              initial={{
                y: 0,
                boxShadow: "none",
                borderColor: "hsl(var(--border))",
                backgroundColor: "hsl(var(--card))",
              }}
              animate={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
              }}
              exit={{
                y: 0,
                boxShadow: "none",
                borderColor: "hsl(var(--border))",
                backgroundColor: "hsl(var(--card))",
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  key={`icon-backend-${resolvedTheme}`}
                  className="p-2 bg-primary/10 rounded-lg"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "hsl(var(--primary) / 0.2)",
                  }}
                  initial={{
                    backgroundColor: "hsl(var(--primary) / 0.1)", 
                  }}
                  animate={{
                    backgroundColor: "hsl(var(--primary) / 0.1)",
                    y: [-2, 2, -2]
                  }}
                  transition={{
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <Database className="h-6 w-6 text-primary" />
                </motion.div>
                <div>
                  <motion.h3
                    className="text-xl font-semibold mb-2"
                    whileHover={{ color: "hsl(var(--primary))" }}
                  >
                    Backend Integration
                  </motion.h3>
                  <p className="text-muted-foreground">
                    Integrating with Firebase, Supabase, REST APIs to enable
                    real-time data synchronization.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CI/CD & Deployment */}
            <motion.div
              key={`card-3-${resolvedTheme}`}
              variants={fadeInUpVariants}
              custom={0.3}
              style={{ willChange: "opacity, transform" }}
              className="p-6 bg-card rounded-lg border border-border transition-all duration-300"
              whileHover={{
                y: -8,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "hsl(var(--primary) / 0.5)",
                backgroundColor: "hsl(var(--card) / 0.95)",
              }}
              initial={{
                y: 0,
                boxShadow: "none",
                borderColor: "hsl(var(--border))",
                backgroundColor: "hsl(var(--card))",
              }}
              animate={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
              }}
              exit={{
                y: 0,
                boxShadow: "none",
                borderColor: "hsl(var(--border))",
                backgroundColor: "hsl(var(--card))",
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  key={`icon-cicd-${resolvedTheme}`}
                  className="p-2 bg-primary/10 rounded-lg"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "hsl(var(--primary) / 0.2)",
                  }}
                  initial={{
                    backgroundColor: "hsl(var(--primary) / 0.1)", 
                  }}
                  animate={{
                    backgroundColor: "hsl(var(--primary) / 0.1)",
                    rotate: [0, 360]
                  }}
                  transition={{
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  }}
                >
                  <Workflow className="h-6 w-6 text-primary" />
                </motion.div>
                <div>
                  <motion.h3
                    className="text-xl font-semibold mb-2"
                    whileHover={{ color: "hsl(var(--primary))" }}
                  >
                    CI/CD & Deployment
                  </motion.h3>
                  <p className="text-muted-foreground">
                    Automating build and deployment processes using GitHub
                    Actions and Fastlane for seamless app releases on App Store
                    & Google Play.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Open Source & Tech Sharing */}
            <motion.div
              key={`card-4-${resolvedTheme}`}
              variants={fadeInUpVariants}
              custom={0.4}
              style={{ willChange: "opacity, transform" }}
              className="p-6 bg-card rounded-lg border border-border transition-all duration-300"
              whileHover={{
                y: -8,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "hsl(var(--primary) / 0.5)",
                backgroundColor: "hsl(var(--card) / 0.95)",
              }}
              initial={{
                y: 0,
                boxShadow: "none",
                borderColor: "hsl(var(--border))",
                backgroundColor: "hsl(var(--card))",
              }}
              animate={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
              }}
              exit={{
                y: 0,
                boxShadow: "none",
                borderColor: "hsl(var(--border))",
                backgroundColor: "hsl(var(--card))",
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  key={`icon-opensource-${resolvedTheme}`}
                  className="p-2 bg-primary/10 rounded-lg"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "hsl(var(--primary) / 0.2)",
                  }}
                  initial={{
                    backgroundColor: "hsl(var(--primary) / 0.1)", 
                  }}
                  animate={{
                    backgroundColor: "hsl(var(--primary) / 0.1)",
                    x: [-2, 2, -2]
                  }}
                  transition={{
                    x: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <GitBranch className="h-6 w-6 text-primary" />
                </motion.div>
                <div>
                  <motion.h3
                    className="text-xl font-semibold mb-2"
                    whileHover={{ color: "hsl(var(--primary))" }}
                  >
                    Open Source & Tech Sharing
                  </motion.h3>
                  <p className="text-muted-foreground">
                    Contributing to the open-source community by developing and
                    maintaining Flutter plugins on pub.dev, sharing best
                    practices.
                  </p>
                </div>
              </div>
            </motion.div>
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
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariants}
              style={{ willChange: "opacity, transform" }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <p className="mt-2 text-muted-foreground">
                Some of my recent work that I'm proud of
              </p>
            </motion.div>
            <motion.div key={`view-all-${resolvedTheme}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" asChild>
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            style={{ willChange: "opacity" }}
            viewport={{ once: true, margin: "-10%" }}
            className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.slice(0, 3).map((project, i) => (
              <motion.div
                key={`project-${i}-${resolvedTheme}`}
                variants={fadeInUpVariants}
                custom={i * 0.1}
                style={{ willChange: "opacity, transform" }}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                initial={{
                  y: 0,
                  boxShadow: "none",
                }}
                animate={{
                  y: 0,
                  boxShadow: "none",
                }}
                className="group relative overflow-hidden rounded-lg border bg-background"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <motion.div
                    key={`project-image-${i}-${resolvedTheme}`}
                    whileHover={{ scale: 1.0 }}
                    className="h-full w-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={225}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.technologies}
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    {project.description}
                  </p>
                  <motion.div
                    key={`view-details-${i}-${resolvedTheme}`}
                    className="inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Button variant="link" className="mt-2 px-0" asChild>
                      <Link href="/projects">
                        View details
                        <motion.div
                          key={`arrow-${i}-${resolvedTheme}`}
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop" as const,
                            ease: "easeInOut",
                          }}
                        >
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </motion.div>
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            style={{ willChange: "opacity, transform" }}
            viewport={{ once: true, margin: "-10%" }}
          >
            <h2 className="text-3xl font-bold">Technologies I Use</h2>
            <p className="mt-2 text-muted-foreground">
              Tools and technologies I'm proficient with
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            style={{ willChange: "opacity" }}
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {techStack.map((tech, i) => (
              <motion.div
                key={`tech-${i}-${resolvedTheme}`}
                variants={fadeInUpVariants}
                custom={i * 0.02}
                style={{ willChange: "opacity, transform" }}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  backgroundColor: "hsl(var(--primary) / 0.05)",
                  borderColor: "hsl(var(--primary) / 0.5)",
                }}
                initial={{
                  backgroundColor: "transparent",
                  borderColor: "hsl(var(--border))",
                }}
                animate={{
                  backgroundColor: "transparent",
                  borderColor: "hsl(var(--border))",
                }}
                className="flex flex-col items-center justify-center p-4 rounded-lg border transition-all duration-300"
              >
                <motion.div
                  key={`tech-icon-${i}-${resolvedTheme}`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {<tech.icon className="h-8 w-8 mb-3 text-primary" />}
                </motion.div>
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
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            style={{ willChange: "opacity, transform" }}
            viewport={{ once: true, margin: "-10%" }}
          >
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <p className="mt-2 text-muted-foreground">
              Have a project in mind or want to discuss collaboration
              opportunities?
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUpVariants}
            style={{ willChange: "opacity, transform" }}
            viewport={{ once: true, margin: "-10%" }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="space-y-6">
              <motion.div
                key={`contact-email-${resolvedTheme}`}
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  key={`contact-icon-1-${resolvedTheme}`}
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "hsl(var(--primary) / 0.2)",
                  }}
                  initial={{
                    backgroundColor: "hsl(var(--primary) / 0.1)", 
                  }}
                  animate={{
                    backgroundColor: "hsl(var(--primary) / 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5" />
                </motion.div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    work.tuankhoi.2302@gmail.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <motion.span whileHover={{ x: 5 }} className="inline-block">
                      <Link
                        href="mailto:work.tuankhoi.2302@gmail.com"
                        className="hover:text-primary"
                      >
                        Send Email
                      </Link>
                    </motion.span>
                  </p>
                </div>
              </motion.div>

              <motion.div
                key={`contact-linkedin-${resolvedTheme}`}
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  key={`contact-icon-linkedin-${resolvedTheme}`}
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "hsl(var(--primary) / 0.2)",
                  }}
                  initial={{
                    backgroundColor: "hsl(var(--primary) / 0.1)", 
                  }}
                  animate={{
                    backgroundColor: "hsl(var(--primary) / 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.div>
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">
                    linkedin.com/in/khoihaycuoi
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <motion.span whileHover={{ x: 5 }} className="inline-block">
                      <Link
                        href="https://linkedin.com/in/khoihaycuoi"
                        className="hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Profile
                      </Link>
                    </motion.span>
                  </p>
                </div>
              </motion.div>

              <motion.div
                key={`contact-github-${resolvedTheme}`}
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  key={`contact-icon-github-${resolvedTheme}`}
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "hsl(var(--primary) / 0.2)",
                  }}
                  initial={{
                    backgroundColor: "hsl(var(--primary) / 0.1)", 
                  }}
                  animate={{
                    backgroundColor: "hsl(var(--primary) / 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GitHubIcon className="h-5 w-5" />
                </motion.div>
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <p className="text-sm text-muted-foreground">
                    github.com/iawtk2302
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <motion.span whileHover={{ x: 5 }} className="inline-block">
                      <Link
                        href="https://github.com/iawtk2302"
                        className="hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Profile
                      </Link>
                    </motion.span>
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="bg-card rounded-lg border p-6 shadow-sm"
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="font-medium mb-4">Quick Message</h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button size="lg" className="w-full" asChild>
                    <Link href="/contact">
                      Send me a message
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "loop" as const,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.div>
                    </Link>
                  </Button>
                </motion.div>
                <p className="text-sm text-muted-foreground text-center">
                  Or visit the{" "}
                  <motion.span whileHover={{ x: 2 }} className="inline-block">
                    <Link
                      href="/contact"
                      className="text-primary hover:underline"
                    >
                      contact page
                    </Link>
                  </motion.span>{" "}
                  for more options
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Empty space at the bottom with subtle gradient animation */}
      <motion.div
        key={`bottom-gradient-${resolvedTheme}`}
        className="h-12"
        animate={{
          background: [
            "hsl(var(--card) / 0.7)",
            "hsl(var(--card) / 0.9)",
            "hsl(var(--card) / 0.7)",
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse" as const,
        }}
      ></motion.div>
    </div>
  );
}
