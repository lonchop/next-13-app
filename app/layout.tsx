import { Navigation } from "./components/Navigation"
import { Poppins } from '@next/font/google'
import "../styles/globals.css"

const font = Poppins({
  weight: ["400", "500", "700"],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className={`bg-black text-white w-full h-full ${font.className}`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
