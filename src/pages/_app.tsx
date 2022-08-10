import { fetcher } from "@app/lib";
import "@app/styles/globals.css";
import request from "graphql-request";
import type { AppProps } from "next/app";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="xs:px-20 flex min-h-screen w-full justify-center bg-slate-100 pt-8 antialiased sm:px-10 md:pt-28">
      <div className="w-full max-w-4xl">
        <SWRConfig
          value={{
            suspense: true,
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </div>
    </div>
  );
}

export default MyApp;
