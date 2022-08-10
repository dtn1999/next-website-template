import React from "react";
import type { NextPage } from "next";
import ComponentSwitcher from "@app/components";

const HomePageComponent: NextPage = () => {
  const isLoading = true;
  return (
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
      {isLoading ? <ComponentSwitcher typename="Spinner" /> : <div></div>}
      {}
    </div>
  );
};

export default HomePageComponent;
