"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Linkedin, Mail, MessageSquare, Send } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, margin: "-100px" }}
        className="mx-auto max-w-[980px]"
      >
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h1 className="mb-8 text-4xl font-bold">Get in Touch</h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Have a project in mind or just want to chat? Feel free to reach
              out. I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your visions.
            </p>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Connect with me</h2>
              <div className="flex flex-col gap-4">
                <Button variant="outline" asChild className="justify-start">
                  <Link href="mailto:john@example.com">
                    <Mail className="mr-2 h-4 w-4" />
                    john@example.com
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start">
                  <Link href="https://github.com" target="_blank">
                    <GitHubIcon className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" asChild className="justify-start">
                  <Link href="https://linkedin.com" target="_blank">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false, margin: "-50px" }}
            className="rounded-lg border bg-card p-6"
          >
            <div className="mb-6 flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Send a Message</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
