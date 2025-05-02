"use client";

import { AppShell } from "@mantine/core";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner.jsx";

export default function Home() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header withBorder={false} style={{ position: "static" }}>
        <Header />
      </AppShell.Header>
      <HeroBanner />

      {/* <AppShell.Main style={{ minHeight: "unset" }}>
        <p>This is AppShell.Main</p>
      </AppShell.Main> */}

      <AppShell.Footer withBorder={false} style={{ position: "static" }}>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
