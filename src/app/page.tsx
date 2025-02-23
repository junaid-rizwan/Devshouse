import { HeroBullets } from "@/components/Hero/HeroBullets";
import Contact from "@/components/Contact";
import Ourteam from "@/components/Ourteam";
import Tracks from "@/components/Tracks";
import FAQ from "@/components/FAQ";
import Prizes from "@/components/prizes/Prizes";
import "./globals.css";
import Timeline from "@/components/Timeline";
import Image from "next/image";

import "./globals.css";
import MarqueeLogo from "@/components/MarqueeLogo";
import Speakers from "@/components/Speakers";

export default function Home() {
  return (
    <>
      <HeroBullets />
      <MarqueeLogo />
      <Tracks />
      <Prizes />
      <Timeline />
      <Speakers/>
      <Ourteam />
      <FAQ />
      <Contact />

      <Ourteam />
    </>
  );
}
