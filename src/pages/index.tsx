import {MainLayout} from "@/components/MainLayout";
import Hero from "@/components/Hero/Hero";
import React from "react";
import TarotLinks from "@/components/TarotLinks/TarotLinks";
import Discover from "@/components/Discover/Discover";

export default function Home() {
  return (
    <MainLayout title={"Home page"}>
      <Hero/>
      <TarotLinks/>
      <Discover/>
    </MainLayout>
  )
}
