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

const Button = (props: ButtonProps) => (
  <ChakraButton height="28" size="lg" colorScheme="purple" {...props} />
);

export default function Home() {
  return (
    <Flex justify="center" gap="2" alignItems="center" height="60vh">
      <Button leftIcon={<Icon as={MdBathroom} />}>Bathroom</Button>
      <Button leftIcon={<Icon as={MdLiving} />}>Living room</Button>
      <Button leftIcon={<Icon as={MdOutlineBedroomParent} />}>Bedroom</Button>
      <Button leftIcon={<Icon as={TbToolsKitchen} />}>Kitchen</Button>
      <Button leftIcon={<Icon as={IoSchoolSharp} />}>School</Button>
      <Button leftIcon={<Icon as={FaTshirt} />}>Personal</Button>
      <Button leftIcon={<Icon as={FaTools} />}>Tools</Button>
    </Flex>
  );
}
