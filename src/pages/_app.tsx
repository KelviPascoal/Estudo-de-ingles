import Header from "@/components/Header";
import {
  Box,
  ChakraProvider,
  ThemeConfig,
  extendTheme,
} from "@chakra-ui/react";
import { AppProps } from "next/app";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};
const theme = extendTheme({
  config,
});
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box maxWidth="7xl" marginX="auto">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
