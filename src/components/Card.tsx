import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export type CardProps = {
  src: string;
  name: string;
};

export const Card = ({ src, name, ...rest }: CardProps) => (
  <Flex
    {...rest}
    backgroundColor="pink"
    flexDir="column"
    padding="12"
    justify="center"
    gap="8"
    align="center"
    borderRadius="2xl"
  >
    <Box width="40">
      <img src={src} alt={name} />
    </Box>
    <Text fontWeight="bold" fontSize="2xl">
      {name}
    </Text>
  </Flex>
);
