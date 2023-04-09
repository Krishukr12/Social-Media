import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  useColorModeValue,
  Skeleton,
} from "@chakra-ui/react";
import { FaHeart, FaRegHeart, FaEdit, FaTrash } from "react-icons/fa";

const PostCard = ({ loading }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(true);
  };

  const handleUnlike = () => {
    setIsLiked(false);
  };

  const likeIcon = isLiked ? <FaHeart /> : <FaRegHeart />;

  const bg = useColorModeValue("white", "gray.700");

  return (
    <Skeleton isLoaded={!loading}>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg={bg}
        boxShadow="md"
        w={"250px"}
      >
        <Box px={4} py={2}>
          <Text>
            iis incidunt deleniti, repellat, ab alias , fugit hic quae
            consequuntur ratione quod repudiandae voluptatum accusantium sunt a
            debitis nisi! Nobis, voluptate cumque! Veniam ipsum est porro.
          </Text>
        </Box>
        <Flex align="center" justify="space-between" px={4} py={2}>
          <IconButton
            aria-label="Like post"
            icon={likeIcon}
            onClick={isLiked ? handleUnlike : handleLike}
          />
          <IconButton aria-label="Edit post" icon={<FaEdit />} mr={2} />
          <IconButton aria-label="Delete post" icon={<FaTrash />} />
        </Flex>
      </Box>
    </Skeleton>
  );
};

export default PostCard;
