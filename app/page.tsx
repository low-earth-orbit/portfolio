"use client";

import { AppShell, Button } from "@mantine/core";
import Header from "../components/Header";

export default function Home() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <p>Main</p>
        <Button variant="filled">Button</Button>
      </AppShell.Main>
    </AppShell>
  );
}
