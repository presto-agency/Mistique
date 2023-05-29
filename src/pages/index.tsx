import {MainLayout} from "@/components/MainLayout";
import Hero from "@/components/Hero/Hero";
import React from "react";
import TarotLinks from "@/components/TarotLinks/TarotLinks";
import Discover from "@/components/Discover/Discover";
import Direction from "@/components/Direction/Direction";
import {MotionValue, useScroll, useTransform} from "framer-motion";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 1.1,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {duration: 1}
  },
};

export default function Home() {
  let useParallax = (value: MotionValue<number>)=> {
    return useTransform(value, [0, 1], [0, -250]);
  }

  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress);

  return (
    <MainLayout title={"Home page"}>
      <Hero y = {y} sectionVariants={sectionVariants}/>
      <TarotLinks y = {y} sectionVariants={sectionVariants}/>
      <Discover y = {y} sectionVariants={sectionVariants}/>
      <Direction y = {y} sectionVariants={sectionVariants}/>
    </MainLayout>
  )
}
