import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ThemeWrapper from "@/components/ThemeWrapper";
import { fetchAllProjects } from "@/lib/hooks/fetchProjects";
import { projectConfigs } from "@/lib/config/projects";

export default async function Home() {
  const projects = await fetchAllProjects(projectConfigs);

  return (
    <ThemeWrapper>
      <Navbar />
      <About />
      <Projects projects={projects} />
      <Skills />
    </ThemeWrapper>
  );
}
