import Head from 'next/head'
import {MainLayout} from "@/components/MainLayout";

export default function Home() {
  return (
    <MainLayout title={"page 1"}>
        <h1>
          hello world
        </h1>
        <p>
          hello <strong>hello</strong><small>hello</small>
        </p>
    </MainLayout>
  )
}
