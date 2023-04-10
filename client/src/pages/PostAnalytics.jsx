import { useState } from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const dummyData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    likes: 23,
  },
  {
    id: 2,
    title: "Consectetur adipiscing elit",
    likes: 15,
  },
  {
    id: 3,
    title: "Sed do eiusmod tempor incididunt",
    likes: 10,
  },
  {
    id: 4,
    title: "Ut labore et dolore magna aliqua",
    likes: 27,
  },
  {
    id: 5,
    title: "Ut enim ad minim veniam",
    likes: 18,
  },
];

export const PostAnalytics = () => {
  const [posts] = useState(dummyData);

  const totalPosts = posts.length;

  const mostLikedPosts = [...posts]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 5);

  const chartData = mostLikedPosts.map((post) => ({
    name: post.title,
    likes: post.likes,
  }));

  const chartColor = useColorModeValue("purple.500", "purple.300");

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.800")}
      h={"91vh"}
      p={8}
      borderRadius="md"
      shadow="md"
    >
      <Flex flexWrap={["wrap", null, null, "nowrap"]}>
        <Box
          flex={["1 1 100%", null, null, "0.5"]}
          mr={[null, null, null, 8]}
          mb={[8, null, null, 0]}
        >
          <Table size="sm" variant="striped">
            <Thead>
              <Tr>
                <Th>Total Posts</Th>
                <Th>Top 5 Most Liked Posts</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{totalPosts}</Td>
                <Td>
                  {mostLikedPosts.map((post) => (
                    <Box key={post.id} mb={2}>
                      <Badge mr={2} colorScheme="purple">
                        {post.likes}
                      </Badge>
                      {post.title}
                    </Box>
                  ))}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
        <Box flex="1">
          <Heading paddingLeft={"2rem"} size="md" mb={8}>
            Top 5 Most Liked Posts
          </Heading>
          <Box height="300px">
            <BarChart width={600} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="likes" fill={chartColor} />
            </BarChart>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
