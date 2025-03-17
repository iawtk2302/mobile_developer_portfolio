import { Linkedin } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="sticky top-[100vh] w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex-1 md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Developed by Tuan Khoi
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <GitHubIcon className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
