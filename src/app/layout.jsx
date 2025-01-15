import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: '%s - Emoji AI',
    default: 'Emoji AI - Unleash Your Creativity!',
  },
  description:
    'Turn your words into fun emojis! Generate, copy, and save unique emoji sets or create your own for future use.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <body>{children}</body>
    </html>
  )
}
