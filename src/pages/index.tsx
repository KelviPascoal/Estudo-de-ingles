import {
  bathroom,
  bedrooms,
  kitchen,
  livingRoom,
  office,
  personalObjects,
  schoolObjects,
  tools,
} from "@/mock/data";
import { Button } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Button colorScheme="blue">aaaaaaaaaaaaaaa</Button>
      {tools.objects.map((item, index) => (
        <div key={index}>
          <img src={item.src} alt="aaa" width={40} height={40} />
          <p>{item.name}</p>
        </div>
      ))}
    </>
  );
}
