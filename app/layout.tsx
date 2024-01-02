import "@/app/ui/global.css";
import { primaryFont, secondaryFont } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={primaryFont.className + "antialiased"}>{children}</body>
    </html>
  );
}
