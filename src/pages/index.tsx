import {MainLayout} from "@/components/MainLayout";
import Hero from "@/sections/Hero/Hero";
import React from "react";

export default function Home() {
  return (
    <MainLayout title={"Home page"}>
      <Hero/>
    </MainLayout>
  )
}
