import "../styles/globals.css";
import type { AppProps } from "next/app";
import { hygraph } from "../lib";
import { SWRConfig } from "swr";

const fetcher = async (query: string, args: any) => {
  return hygraph.request(query, { ...args });
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
