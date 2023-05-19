import {MainLayout} from "@/components/MainLayout";
import Hero from "@/components/Hero/Hero";
import React from "react";
import TarotLinks from "@/components/TarotLinks/TarotLinks";
import Discover from "@/components/Discover/Discover";
import Direction from "@/components/Direction/Direction";
import {MotionValue, useScroll, useTransform} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [1, 0], [-distance, distance]);
}

export default function Home() {

  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 150);

  return (
    <MainLayout title={"Home page"}>
      <Hero y = {y}/>
      <TarotLinks y = {y}/>
      <Discover y = {y}/>
      <Direction y = {y}/>
    </MainLayout>
  )
}
