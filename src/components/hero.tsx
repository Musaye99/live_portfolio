import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

const skills = [
  { name: "React", icon: <i className="devicon-react-original text-4xl"></i> },
  {
    name: "Next.js",
    icon: <i className="devicon-nextjs-original-wordmark text-4xl"></i>,
  },
  { name: "Node.js", icon: <i className="devicon-nodejs-plain text-4xl"></i> },
  {
    name: "TypeScript",
    icon: <i className="devicon-typescript-plain text-4xl"></i>,
  },
  {
    name: "Tailwind CSS",
    icon: <i className="devicon-tailwindcss-plain text-4xl"></i>,
  },
  {
    name: "Firebase",
    icon: <i className="devicon-firebase-plain text-4xl"></i>,
  },
];

export default function Hero() {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src="/me.JPEG"
              alt="Muhammed Musa"
              width={200}
              height={200}
              className="rounded-full mb-4 object-cover"
              data-ai-hint="profile picture"
            />
            <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
              Muhammed Musa
            </h1>
            <h2 className="text-2xl font-medium text-foreground/90">
              Frontend Developer
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              I am a passionate developer with expertise in creating modern,
              responsive, and user-friendly web applications. I thrive on
              solving complex problems and turning ideas into reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <Link
                href="https://github.com/Musaye99"
                aria-label="Github Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="h-7 w-7 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/muhammed-musa-ahmed-b289a61a4/"
                aria-label="LinkedIn Profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="h-7 w-7 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
              <Link href="mailto:mmusaye99@gmail.com" aria-label="Email">
                <MailIcon className="h-7 w-7 text-muted-foreground transition-colors hover:text-foreground" />
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">My Skills</h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 rounded-lg bg-background p-3 shadow-sm transition-transform hover:scale-105"
                >
                  <div className="text-accent">{skill.icon}</div>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
