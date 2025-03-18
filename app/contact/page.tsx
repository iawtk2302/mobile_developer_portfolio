"use client";

import { GitHubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { emailJsConfig, isEmailJsConfigured } from "@/lib/config";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, MessageSquare, Send } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const formVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  },
  success: {
    scale: [1, 1.02, 1],
    transition: { duration: 0.5 }
  }
};

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if EmailJS is configured using the helper function
      if (!isEmailJsConfigured()) {
        console.error("EmailJS configuration is missing");
        toast({
          title: "Configuration Error",
          description:
            "The contact form is not properly configured. Please set up EmailJS credentials.",
          variant: "destructive",
        });
        return;
      }

      // Get the configuration values from our centralized config
      const { serviceId, templateId, publicKey } = emailJsConfig;

      if (formRef.current) {
        // Since EmailJS is already initialized in the EmailJsProvider,
        // we can just call sendForm with the service ID and template ID
        const result = await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current
        );

        if (result.text === "OK") {
          toast({
            title: "Message sent!",
            description: "Thanks for reaching out. I'll get back to you soon.",
          });
          formRef.current.reset();
          // Add success animation
          const formElement = formRef.current;
          if (formElement) {
            const motionForm = formElement as unknown as { animate: (variants: any) => void };
            motionForm.animate(formVariants.success);
          }
        }
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Error sending message",
        description:
          "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <motion.div 
                className="flex flex-col gap-4"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <Button 
                    variant="outline" 
                    asChild 
                    className="justify-start w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgb(0,0,0,0.1)] dark:hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
                  >
                    <Link href="mailto:work.tuankhoi.2302@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      work.tuankhoi.2302@gmail.com
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <Button 
                    variant="outline" 
                    asChild 
                    className="justify-start w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgb(0,0,0,0.1)] dark:hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
                  >
                    <Link href="https://github.com/iawtk2302" target="_blank">
                      <GitHubIcon className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <Button 
                    variant="outline" 
                    asChild 
                    className="justify-start w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgb(0,0,0,0.1)] dark:hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
                  >
                    <Link
                      href="https://www.linkedin.com/in/khoihaycuoi"
                      target="_blank"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
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
            <motion.form 
              ref={formRef} 
              onSubmit={handleSubmit} 
              className="space-y-4"
              variants={formVariants.container}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="space-y-2"
                variants={formVariants.item}
              >
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </motion.div>
              <motion.div 
                className="space-y-2"
                variants={formVariants.item}
              >
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </motion.div>
              <motion.div 
                className="space-y-2"
                variants={formVariants.item}
              >
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  className="min-h-[150px]"
                  required
                />
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <motion.div whileTap={{ scale: 0.98 }} className="w-full">
                  <Button 
                    type="submit" 
                    className="w-full transition-all duration-300 hover:scale-[1.02]" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
