import React from "react";
import PostCard from "../components/Post Card/PostCard";
import useFetch from "../hooks/useFetch";
import config from "../config/config";
import { Grid } from "@chakra-ui/react";
export const AllPosts = () => {
  const { data, isLoading, error } = useFetch(`${config.apiUrl}/posts`);
  const tempData = new Array(8).fill(0);
  return (
    <Grid w={"75%"} m={"auto"} templateColumns="repeat(4, 1fr)" gap={4}>
      {isLoading ? (
        tempData.map((item, index) => (
          <PostCard loading={isLoading} key={index} />
        ))
      ) : data && data.length > 0 ? (
        data.map((item) => (
          <PostCard loading={isLoading} item={item} key={item._id} />
        ))
      ) : (
        <span style={{ margin: "auto" }}>{error.message}</span>
      )}
    </Grid>
  );
};
