import { Code } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Code className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold text-primary">
            M-CodeCraft
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link
              href="#about"
              className="text-foreground/80 transition-colors hover:text-foreground"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-foreground/80 transition-colors hover:text-foreground"
              prefetch={false}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-foreground/80 transition-colors hover:text-foreground"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
