import './globals.css'
import { Inter } from 'next/font/google'
import { Constants } from './utils/Constants'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: Constants.APP_HEADER,
  description: Constants.APP_SUBHEADER,
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
