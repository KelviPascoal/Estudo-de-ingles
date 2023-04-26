import { kitchen } from "@/mock/data";
import { TemplateListPage } from "@/template/ListPage";

export default function Kitchen() {
  return <TemplateListPage data={kitchen.objects} title={kitchen.name} />;
}
