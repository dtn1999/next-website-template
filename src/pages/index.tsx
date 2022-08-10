import React from "react";
import type { NextPage } from "next";
import cn from "classnames";
import { request, gql } from "graphql-request";
import useSWR from "swr";

const HomePageComponent: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-white py-[5rem] px-8 text-lg">
      <p>
        As you visit the posts below, you will notice them in a loading state
        the first time you load them. However, after you return to this list and
        click on any posts you have already visited again, you will see them
        load instantly and background refresh right before your eyes!{" "}
        <strong>
          (You may need to throttle your network speed to simulate longer
          loading sequences)
        </strong>
      </p>
      <div className="mt-8">
        <Posts />
      </div>
      <div>hello </div>
    </div>
  );
};

const query = gql`
  query {
    posts {
      data {
        id
        title
      }
    }
  }
`;

function Posts() {
  const { data } = useSWR(query);
  console.log(data);
  const { posts } = data;
  return (
    <React.Fragment>
      {posts.data.slice(1, 10).map(({ id, title }: any) => (
        <div key={id} className="py-2 text-lg text-green-400">
          {title}
        </div>
      ))}
    </React.Fragment>
  );
}

function Spinner() {
  // animation effect while waiting for rendering
  return (
    <span className="flex h-screen w-full items-center justify-center">
      <span className="relative flex h-10 w-10 animate-ping  rounded-full bg-purple-400 opacity-75"></span>
    </span>
  );
}

export default HomePageComponent;
