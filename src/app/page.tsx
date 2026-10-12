import Hero from "@/components/Hero";
import { Leadership, Experience, Skills } from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Leadership />
      <Experience />
      <Projects />
      <Skills />
    </>
  );
}
