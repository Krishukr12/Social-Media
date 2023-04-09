import React from "react";
import PostCard from "../components/Post Card/PostCard";
import useFetch from "../hooks/useFetch";
import config from "../config/config";
import { Box, Grid } from "@chakra-ui/react";
export const AllPosts = () => {
  const { data, isLoading, error, refetchData } = useFetch(
    `${config.apiUrl}/posts`
  );

  const tempData = new Array(8).fill(0);

  return (
    <Grid w={"75%"} m={"auto"} templateColumns="repeat(4, 1fr)" gap={4}>
      {isLoading ? (
        tempData.map((item, index) => (
          <PostCard loading={isLoading} key={index} />
        ))
      ) : data?.length > 0 ? (
        data.map((item) => (
          <PostCard
            refetchData={refetchData}
            loading={isLoading}
            item={item}
            key={item._id}
          />
        ))
      ) : (
        <Box m="auto">
          {error?.message ? error.message : <h1>No Posts Available</h1>}
        </Box>
      )}
    </Grid>
  );
};
