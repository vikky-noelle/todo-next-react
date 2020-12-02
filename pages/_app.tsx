import { ThemeProvider, theme, CSSReset } from '@chakra-ui/react';
import TodoListContextProvider from '../contexts/TodoListContext';
import { AppProps } from 'next/app'
import '../styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
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
