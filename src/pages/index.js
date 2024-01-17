import Layout from "@/components/layout";
import HomeSection from "@/components/homeSection";
import AboutMeSection from "@/components/aboutMeSection";
import ProjectsSection from "@/components/projectsSection";


export default function Home() {
  return (
    <main className="w-full h-screen bg-primary -z-10">
      <Layout>
        <HomeSection />
        <AboutMeSection />
        <ProjectsSection />
      </Layout>
    </main>
  );
}
