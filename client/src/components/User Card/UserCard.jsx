import {
  Box,
  Flex,
  IconButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const users = [
  { id: 1, name: "John Doe", email: "johndoe@example.com" },
  { id: 2, name: "Jane Doe", email: "janedoe@example.com" },
  { id: 3, name: "Bob Smith", email: "bobsmith@example.com" },
];

const UserCard = () => {
  return (
    <Box bg="white" boxShadow="sm" rounded="md" p="4">
      <div>User List</div>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Serial No</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, index) => (
            <Tr key={user.id}>
              <Td>{index + 1}</Td>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>
                <Flex justify="space-around">
                  <IconButton
                    aria-label="View user"
                    icon={<FaEye />}
                    variant="ghost"
                    size="sm"
                    mr="2"
                  />
                  <IconButton
                    aria-label="Edit user"
                    icon={<FaEdit />}
                    variant="ghost"
                    size="sm"
                    mr="2"
                  />
                  <IconButton
                    aria-label="Delete user"
                    icon={<FaTrash />}
                    variant="ghost"
                    size="sm"
                  />
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default UserCard;
