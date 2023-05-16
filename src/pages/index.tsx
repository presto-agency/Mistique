import {MainLayout} from "@/components/MainLayout";
import Hero from "@/components/Hero/Hero";
import React from "react";
import TarotLinks from "@/components/TarotLinks/TarotLinks";

export default function Home() {
  return (
    <MainLayout title={"Home page"}>
      <Hero/>
      <TarotLinks/>
    </MainLayout>
  )
}
