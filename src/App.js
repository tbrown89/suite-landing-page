import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./components/styled/Global"
import Header from "./components/Header"
import Index from "./pages/Index"
import Footer from "./components/Footer"

const theme = {
  colors: {
    dark: '#172339',
    bodyText: '#49566D',
    white: '#FAF8F6',
    footer: '#F3EDE7',
    grad1: '#A060FF',
    grad2: '#CB30E3',
    grad3: '#FFA84E'
  },
  breakpoint: {
    md: '768px',
    lg: '1200px'
  }
}

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Index />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App