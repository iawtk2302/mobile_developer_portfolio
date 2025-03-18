"use client";

import { emailJsConfig } from "@/lib/config";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

interface EmailJsProviderProps {
  children: React.ReactNode;
}

/**
 * Client component that initializes EmailJS at the application level
 * This is more efficient than initializing it on every contact form submission
 */
export function EmailJsProvider({ children }: EmailJsProviderProps) {
  useEffect(() => {
    // Initialize EmailJS if the public key is available
    if (emailJsConfig.publicKey) {
      emailjs.init(emailJsConfig.publicKey);
    }
  }, []);

  return <>{children}</>;
}
