export type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Easy Video Editor Plugin",
    description:
      "A lightweight Flutter plugin for video editing without FFmpeg dependency.",
    technologies: ["Flutter", "Kotlin", "Swift"],
    image: "/images/featured-projects/project-1.jpg",
    github: "https://github.com/iawtk2302/easy_video_editor.git",
    liveUrl: "https://pub.dev/packages/easy_video_editor",
  },
  {
    title: "E-commerce App",
    description:
      "This E-commerce App enables seamless shopping with modern tech, ensuring efficiency and ease of use.",
    technologies: ["Flutter", "Firebase", "Bloc"],
    image: "/images/featured-projects/project-2.jpg",
    github: "https://github.com/iawtk2302/Ecommerce-App.git",
    // liveUrl: "https://play.google.com",
  },
  {
    title: "2K App",
    description:
      "A sneaker e-commerce app with product listings, cart management, and smooth ordering for a seamless shopping experience.",
    technologies: ["Flutter", "Firebase", "Bloc"],
    image: "/images/featured-projects/project-3.jpg",
    github: "https://github.com/iawtk2302/2K.git",
    // liveUrl: "https://play.google.com",
  },
  {
    title: "Go Together App",
    description:
      "A social media app for travelers to connect, socialize, and easily plan and manage their trips.",
    technologies: ["Flutter", "Firebase", "Bloc"],
    image: "/images/featured-projects/project-4.jpg",
    github: "https://github.com/iawtk2302/GoTogether.git",
    // liveUrl: "https://play.google.com",
  },
  {
    title: "Elysian App",
    description:
      "A beverage ordering app for easy browsing, customization, and seamless ordering.",
    technologies: ["React Native", "Firebase", "Redux"],
    image: "/images/featured-projects/project-5.jpg",
    github: "https://github.com/iawtk2302/Elysian.git",
    // liveUrl: "https://play.google.com",
  },
];
