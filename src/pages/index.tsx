import React from "react";
import type { NextPage } from "next";
import cn from "classnames";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { request, gql } from "graphql-request";

const HomePageComponent: NextPage = () => {
  const { status, data, error, isFetching } = usePosts();

  return (
    <div className="flex flex-col items-center justify-start bg-slate-300 py-[5rem] px-[20rem] text-lg">
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
        {isFetching ? (
          <div> Loading ...</div>
        ) : (
          status === "success" &&
          data.map((post: any) => (
            <div className="py-4 text-blue-600 underline" key={post.id}>
              {post.title}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const endpoint = "https://graphqlzero.almansi.me/api";

function usePosts() {
  return useQuery(["posts"], async () => {
    const {
      posts: { data },
    } = await request(
      endpoint,
      gql`
        query {
          posts {
            data {
              id
              title
            }
          }
        }
      `
    );
    return data;
  });
}
export default HomePageComponent;
