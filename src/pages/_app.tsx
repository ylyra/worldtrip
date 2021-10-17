import type { AppProps } from "next/app";
import { ChakraProvider, theme as ChakraTheme } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";

import { Header } from "../components/Header";
import { theme } from "../styles/theme";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "../styles/carousel.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress
        color={ChakraTheme.colors.yellow[400]}
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
      />
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
