"use client";

import { GitHubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  // Define animation variants for consistent behavior
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="container py-12 md:py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mx-auto max-w-[980px]"
      >
        <motion.h1 variants={itemVariants} className="mb-8 text-4xl font-bold">
          Featured Projects
        </motion.h1>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg border bg-background transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)] hover:-translate-y-1"
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
                          className="rounded-full bg-secondary px-3 py-1 text-sm transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex gap-4">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="transition-transform duration-300 hover:scale-105"
                    >
                      <Link href={project.github} target="_blank">
                        <GitHubIcon className="mr-2 h-4 w-4" />
                        View Code
                      </Link>
                    </Button>
                    {project.liveUrl && (
                      <Button
                        asChild
                        size="sm"
                        className="transition-transform duration-300 hover:scale-105"
                      >
                        <Link href={project.liveUrl} target="_blank">
                          Live Demo
                        </Link>
                      </Button>
                    )}
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
