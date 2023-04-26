import { livingRoom } from "@/mock/data";
import { TemplateListPage } from "@/template/ListPage";
import { Flex } from "@chakra-ui/react";

export default function LivingRoom() {
  return <TemplateListPage data={livingRoom.objects} title={livingRoom.name} />;
}
