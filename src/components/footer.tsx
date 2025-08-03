import { Code, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">M-CodeCraft</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} M-CodeCraft. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
        <Link href="https://github.com/Musaye99" aria-label="Github Profile" target="_blank"
                rel="noopener noreferrer">
                <Github className="h-7 w-7 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
              <Link href="https://www.linkedin.com/in/muhammed-musa-ahmed-b289a61a4/" aria-label="LinkedIn Profile" target="_blank"
                rel="noopener noreferrer">
                <Linkedin className="h-7 w-7 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
        </div>
      </div>
    </footer>
  );
}
