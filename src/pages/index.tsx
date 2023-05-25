import {MainLayout} from "@/components/MainLayout";
import Hero from "@/components/Hero/Hero";
import React from "react";
import TarotLinks from "@/components/TarotLinks/TarotLinks";
import Discover from "@/components/Discover/Discover";
import Direction from "@/components/Direction/Direction";
import {MotionValue, useScroll, useTransform} from "framer-motion";
import Preloader from "@/components/Preloader/Preloader";

export default function Home() {
  let useParallax = (value: MotionValue<number>)=> {
    return useTransform(value, [0, 1], [0, -250]);
  }

  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress);

  return (
    <MainLayout title={"Home page"}>
      <Hero y = {y}/>
      <TarotLinks y = {y}/>
      <Discover y = {y}/>
      <Direction y = {y}/>
    </MainLayout>
  )
}
