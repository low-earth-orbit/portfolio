"use client";

import { AppShell } from "@mantine/core";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Intro from "../components/AboutMe";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";
export default function Home() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header withBorder={false} style={{ position: "static" }}>
        <Header />
      </AppShell.Header>
      <HeroBanner />

      <Intro />
      <Contact />
      <AppShell.Footer withBorder={false} style={{ position: "static" }}>
        <Footer />
      </AppShell.Footer>

      <ScrollToTop />
    </AppShell>
  );
}
