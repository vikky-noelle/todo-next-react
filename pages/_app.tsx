import { ThemeProvider, theme, CSSReset } from '@chakra-ui/react';
import TodoListContextProvider from '../contexts/todoListContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <TodoListContextProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </TodoListContextProvider>
  )
}

export default MyApp
