import Header from '../header'
import { ThemeProvider } from '@/components/theme-provider'
import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >

        <Meta />
        <div className="min-h-screen">
          <Header />
          <Alert preview={preview} />
          <main>{children}</main>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
