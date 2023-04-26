import {
  Button as ChakraButton,
  ButtonProps,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { MdBathroom, MdLiving, MdOutlineBedroomParent } from "react-icons/md";
import { TbToolsKitchen } from "react-icons/tb";
import { IoSchoolSharp } from "react-icons/io5";
import { FaTshirt, FaTools } from "react-icons/fa";

const Button = (props: ButtonProps) => <ChakraButton size="lg" {...props} />;

export default function Header() {
  return (
    <Flex as="header" justify="center" gap="2">
      <nav>
        <li>
          <ul>
            <Button leftIcon={<Icon as={MdBathroom} />}>Bathroom</Button>
          </ul>
          <ul>
            <Button leftIcon={<Icon as={MdLiving} />}>Living room</Button>
          </ul>
          <ul>
            <Button leftIcon={<Icon as={MdOutlineBedroomParent} />}>
              Bedroom
            </Button>
          </ul>
          <ul>
            <Button leftIcon={<Icon as={TbToolsKitchen} />}>Kitchen</Button>
          </ul>
          <ul>
            <Button leftIcon={<Icon as={IoSchoolSharp} />}>School</Button>
          </ul>
          <ul>
            <Button leftIcon={<Icon as={FaTshirt} />}>Personal</Button>
          </ul>
          <ul>
            <Button leftIcon={<Icon as={FaTools} />}>Tools</Button>
          </ul>
        </li>
      </nav>
    </Flex>
  );
}
