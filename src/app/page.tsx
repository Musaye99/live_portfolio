import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
