import React from "react";
import type { NextPage } from "next";
import ComponentSwitcher from "@app/components";
import { gql } from "graphql-request";
import { SWRConfig } from "swr";

const HomePageComponent: NextPage<any> = ({ fallback }) => {
  const isLoading = true;
  return (
    <SWRConfig value={{ fallback }}>
      <div className="flex flex-col items-center justify-start bg-white py-[5rem] px-8 text-lg">
        <h1 className="mb-8 text-3xl text-yellow-600">
          Welcome the nextjs with Graphcms starter
        </h1>
        <p className="mb-2 text-lg font-light">
          {" "}
          change the code in the{" "}
          <span className="font-black text-green-500 underline underline-offset-2">
            index.tsx
          </span>{" "}
          file to remove the annoying spinner{" "}
        </p>
        <ComponentSwitcher typename="Spinner" />
      </div>
    </SWRConfig>
  );
};

export default HomePageComponent;
