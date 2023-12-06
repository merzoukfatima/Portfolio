import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import HomeSection from "@/components/homeSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Layout><HomeSection/></Layout>;
}
