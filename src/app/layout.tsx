import type { Metadata } from "next";

import "@/globals.css";
import Providers from "@/components/Providers";

export type Children = { children: Readonly<React.ReactNode> };

export const metadata: Metadata = {
  title: "Next Foodie Blog",
  description: "All about foods!",
};

export default function MyApp({ children }: Children) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
