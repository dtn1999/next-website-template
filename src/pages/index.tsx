import React from "react";
import type { NextPage } from "next";
import ComponentSwitcher from "../components";

const HomePageComponent: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-white py-[5rem] px-8 text-lg">
      <h1 className="text-3xl text-yellow-600"> Welcome to this starter </h1>
      <ComponentSwitcher typename="Spinner" />
    </div>
  );
};

export default HomePageComponent;
