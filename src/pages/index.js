import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import HomeSection from "@/components/homeSection";
import AboutMeSection from "@/components/aboutMeSection";
import ProjectsSection from "@/components/projectsSection";
import SkillsSection from "@/components/skillsSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <HomeSection />
      {/* <AboutMeSection />
      <SkillsSection />
      <ProjectsSection /> */}
    </Layout>
  );
}
