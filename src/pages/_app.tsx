import type { AppProps } from "next/app";

import DataProvider from "@/components/DataProvider";
import Layout from "@/components/Layout";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
}
