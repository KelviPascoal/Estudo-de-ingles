import { livingRoom } from "@/mock/data";
import { TemplateListPage } from "@/template/ListPage";

export default function LivingRoom() {
  return <TemplateListPage data={livingRoom.objects} title={livingRoom.name} />;
}
