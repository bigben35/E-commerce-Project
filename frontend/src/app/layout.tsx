import type { Metadata } from 'next';
import './globals.scss';
import { Providers } from '@/redux/provider';



export const metadata: Metadata = {
  title: 'Outstock - Clean, Minimal eCommerce Next js Template',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
