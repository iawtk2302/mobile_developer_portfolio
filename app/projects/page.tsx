"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import Link from "next/link";

const projects = [
  {
    title: "Health & Fitness App",
    description:
      "A comprehensive fitness tracking application with workout plans, nutrition tracking, and progress analytics.",
    technologies: ["Flutter", "Firebase", "Riverpod"],
    image: "/images/featured-projects/project4.jpg",
    github: "https://github.com",
    liveUrl: "https://play.google.com",
  },
  {
    title: "E-commerce Platform",
    description:
      "A feature-rich e-commerce mobile app with real-time inventory, secure payments, and order tracking.",
    technologies: ["Flutter", "Supabase", "GetX"],
    image: "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e",
    github: "https://github.com",
    liveUrl: "https://play.google.com",
  },
  {
    title: "Social Media App",
    description:
      "A social networking app with real-time messaging, story sharing, and content discovery features.",
    technologies: ["Flutter", "Firebase", "Bloc"],
    image: "https://images.unsplash.com/photo-1586336900429-71f0642f66d7",
    github: "https://github.com",
    liveUrl: "https://play.google.com",
  },
];

export default function Projects() {
  return (
    <div className="container py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, margin: "-100px" }}
        className="mx-auto max-w-[980px]"
      >
        <h1 className="mb-8 text-4xl font-bold">Featured Projects</h1>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, margin: "-50px" }}
              className="group relative overflow-hidden rounded-lg border bg-background"
            >
              <div className="flex flex-col gap-6 p-6 md:flex-row">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg md:w-2/5 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg h-full w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4">
                      <Smartphone className="h-6 w-6" />
                      <h2 className="text-2xl font-semibold">
                        {project.title}
                      </h2>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-secondary px-3 py-1 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex gap-4">
                    <Button asChild size="sm" variant="outline">
                      <Link href={project.github} target="_blank">
                        <GitHubIcon className="mr-2 h-4 w-4" />
                        View Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
