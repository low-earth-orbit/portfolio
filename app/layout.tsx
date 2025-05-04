import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./globals.css";

import { createTheme, MantineProvider } from "@mantine/core";

export const metadata: Metadata = {
  title: "Leo Hong | Full-Stack Web Developer",
  description: "Leo Hong's personal portfolio website.",
  icons: {
    icon: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🍁</text></svg>`,
  },
};

const theme = createTheme({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
