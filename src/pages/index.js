import Layout from "@/components/layout";
import HomeSection from "@/components/homeSection";
import AboutMeSection from "@/components/aboutMeSection";
import ProjectsSection from "@/components/projectsSection";


export default function Home() {
  return (
    <div className="w-full h-screen bg-primary -z-50">
      <Layout>
        <HomeSection />
        <AboutMeSection />
      {/* <ProjectsSection /> */}
      </Layout>
    </div>
  );
}
