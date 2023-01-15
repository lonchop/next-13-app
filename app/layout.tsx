import { Navigation } from "./components/Navigation"
import "../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="bg-black text-white w-full h-full flex flex-col justify-center items-center">
        <Navigation/>
        {children}</body>
    </html>
  )
}
