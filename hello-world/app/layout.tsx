import "./ui/globals.css"
import { primaryFont } from "./ui/fonts"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" translate="no">
      <body className={`${primaryFont.className} antialiased scroll-smooth bg-[#f5f5f5]`}>{children}</body>
    </html>
  )
}
