import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'project-n',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className='navbar'>
          <Link href='/'><p>Home</p></Link>
          <Link href='/list'><p>List</p></Link>
          <Link href='/new'><p>New</p></Link>
        </div>
        {children}
      </body>
    </html>
  )
}
