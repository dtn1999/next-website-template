import "@app/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="xs:px-20 flex min-h-screen w-full justify-center bg-slate-100 pt-8 antialiased sm:px-10 md:pt-28">
      <div className="w-full max-w-4xl">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
