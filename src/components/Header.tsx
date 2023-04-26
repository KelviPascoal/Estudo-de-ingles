import {
  Button as ChakraButton,
  ButtonProps,
  Flex,
  Icon,
  Link,
  Stack,
  Box,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { MdBathroom, MdLiving, MdOutlineBedroomParent } from "react-icons/md";
import { TbToolsKitchen } from "react-icons/tb";
import { IoSchoolSharp } from "react-icons/io5";
import { FaTshirt, FaTools } from "react-icons/fa";
import { JSXElementConstructor, ReactElement } from "react";

const Button = (props: ButtonProps) => (
  <ChakraButton height="28" size="lg" colorScheme="purple" {...props} />
);

type ListItemProps = {
  href: string;
  leftIcon: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  children: string;
};

const Li = ({ children, href, leftIcon }: ListItemProps) => (
  <ListItem>
    <Link href={href}>
      <Button leftIcon={leftIcon}>{children}</Button>
    </Link>
  </ListItem>
);

export default function Header() {
  return (
    <Stack
      as="header"
      display="flex"
      justifyContent="center"
      gap="2"
      marginTop="4"
    >
      <Box as="nav">
        <UnorderedList
          style={{ listStyle: "none" }}
          display="flex"
          justifyContent="center"
          gap="6"
          alignItems="center"
        >
          <Li href={"bathroom"} leftIcon={<Icon as={MdBathroom} />}>
            Bathroom
          </Li>

          <Li href={"living-room"} leftIcon={<Icon as={MdLiving} />}>
            Living room
          </Li>

          <Li href={"bedroom"} leftIcon={<Icon as={MdOutlineBedroomParent} />}>
            Bedroom
          </Li>

          <Li href={"kitchen"} leftIcon={<Icon as={TbToolsKitchen} />}>
            Kitchen
          </Li>

          <Li href={"school"} leftIcon={<Icon as={IoSchoolSharp} />}>
            School
          </Li>

          <Li href={"personal"} leftIcon={<Icon as={FaTshirt} />}>
            Personal
          </Li>

          <Li href={"tools"} leftIcon={<Icon as={FaTools} />}>
            Tools
          </Li>
        </UnorderedList>
      </Box>
    </Stack>
  );
}
