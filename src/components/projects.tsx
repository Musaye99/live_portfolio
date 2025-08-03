import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github } from 'lucide-react';

const projects = [
  {
    title: 'UniVerse-College Search Web App',
    description:
      'A responsive Next.js app that helps students search, and save U.S universities, with AI-based recommendations, secure Firebase auth, and real-time data from the College Scorecard API.',
    imageSource: "/Universe-dashboard.png",
    tags: ['Next.js', 'React', 'Typescript', 'Tailwind CSS', 'Firebase', 'API'],
    liveUrl: 'https://universe-ashy.vercel.app/',
    repoUrl: '#',
    imageHint: 'online store',
  },
  {
    title: 'ElevatorSim–Real-Time Elevator Simulation App',
    description: 'A TypeScript-based Next.js app simulating elevator movement, requests, and passenger flow in real time, with a clean UI, intelligent queueing, and visual feedback using Tailwind CSS and ShadCN UI.',
    imageSource: "/ElevatorSim-dashboard.png",
    tags: ['React', 'Next.js', 'Typescript', 'Tailwind CSS', 'ShadCN UI', 'CSS Transitions'],
    liveUrl: '#',
    repoUrl: '#', 
    imageHint: 'kanban board',
  },
  {
    title: 'TipSplit',
    description: 'An AI tip calculator built with Next.js and TypeScript that helps users compute tips based on service quality and split bills among people, featuring tip recommendations.',
    imageSource: "/TipSplit1.png",
    tags: ['React', 'Next.js', 'Typescript', 'Tailwind CSS', 'Google AI'],
    liveUrl: '#',
    repoUrl: '#',
    imageHint: 'writing article',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">My Work</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I've worked on. Each one represents a unique challenge and a learning opportunity.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="p-0">
                <Image
                  src={project.imageSource}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-60 w-full object-cover"
                  data-ai-hint={project.imageHint}
                />
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <CardTitle className="text-xl font-bold text-primary">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 flex justify-between">
                <Button asChild variant="outline">
                  <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
