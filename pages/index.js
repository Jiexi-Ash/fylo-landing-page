import CTA from "components/CTA/CTA";
import Hero from "components/Hero/Hero";
import Productive from "components/Productive/Productive";
import MainLayout from "components/UI/MainLayout";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <Hero />
        <Productive />
        <CTA />
      </MainLayout>
    </div>
  );
}
