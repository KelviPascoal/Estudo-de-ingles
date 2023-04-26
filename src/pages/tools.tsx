import { tools } from "@/mock/data";
import { TemplateListPage } from "@/template/ListPage";

export default function Tools() {
  return <TemplateListPage data={tools.objects} title={tools.name} />;
}
