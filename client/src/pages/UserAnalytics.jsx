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
    name: "John Doe",
    activity: 23,
  },
  {
    id: 2,
    name: "Jane Smith",
    activity: 15,
  },
  {
    id: 3,
    name: "Bob Johnson",
    activity: 10,
  },
  {
    id: 4,
    name: "Alice Lee",
    activity: 27,
  },
  {
    id: 5,
    name: "David Kim",
    activity: 18,
  },
];

export const UserAnalytics = () => {
  const [users] = useState(dummyData);

  const totalUsers = users.length;

  const mostActiveUsers = [...users]
    .sort((a, b) => b.activity - a.activity)
    .slice(0, 5);

  const chartData = mostActiveUsers.map((user) => ({
    name: user.name,
    activity: user.activity,
  }));

  const chartColor = useColorModeValue("teal.500", "teal.300");

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.800")}
      p={8}
      borderRadius="md"
      shadow="md"
      h={"91vh"}
    >
      <Heading size="lg" mb={8}>
        User Analytics
      </Heading>
      <Flex flexWrap={["wrap", null, null, "nowrap"]}>
        <Box
          flex={["1 1 100%", null, null, "0.5"]}
          mr={[null, null, null, 8]}
          mb={[8, null, null, 0]}
        >
          <Table size="sm" variant="striped">
            <Thead>
              <Tr>
                <Th>Total Users</Th>
                <Th>Top 5 Most Active Users</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{totalUsers}</Td>
                <Td>
                  {mostActiveUsers.map((user) => (
                    <Box key={user.id} mb={2}>
                      <Badge mr={2} colorScheme="teal">
                        {user.activity}
                      </Badge>
                      {user.name}
                    </Box>
                  ))}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
        <Box flex="1">
          <Heading size="md" mb={8}>
            Top 5 Most Active Users
          </Heading>
          <Box height="300px">
            <BarChart width={600} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="activity" fill={chartColor} />
            </BarChart>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
