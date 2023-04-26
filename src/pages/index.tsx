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
import Link from "next/link";
import Header from "@/components/Header";

const Button = (props: ButtonProps) => (
  <ChakraButton height="28" size="lg" colorScheme="purple" {...props} />
);

export default function Home() {
  return <Header />;
}
