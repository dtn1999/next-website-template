import "../styles/globals.css";
import type { AppProps } from "next/app";
import { client } from "../lib";
import { request } from "graphql-request";
import { SWRConfig } from "swr";

const endpoint = "https://graphqlzero.almansi.me/api";

const fetcher = async (query: string) => {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return request(endpoint, query);
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="xs:px-20 flex min-h-screen w-full justify-center bg-slate-100 pt-8 antialiased sm:px-10 md:pt-28">
      <SWRConfig
        value={{
          fetcher,
          suspense: true,
        }}
      >
        <div className="w-full max-w-4xl">
          <Component {...pageProps} />
        </div>
      </SWRConfig>
    </div>
  );
}

export default MyApp;
