"use client";

import { useEffect } from "react";

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      
      if (!link) return;
      
      e.preventDefault();
      
      const targetId = link.getAttribute('href')?.substring(1);
      if (!targetId) return;
      
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;
      
      const headerOffset = 80; // Adjust based on your navbar height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    };
    
    document.addEventListener("click", handleSmoothScroll);
    
    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);
};
