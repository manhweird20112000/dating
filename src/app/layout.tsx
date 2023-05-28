import '@/assets/styles/index.scss'

export const metadata = {
  title: 'Minh Phương & Đinh Mạnh',
  description: '27-11-2022',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
