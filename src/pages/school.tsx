import { schoolObjects } from "@/mock/data";
import { TemplateListPage } from "@/template/ListPage";

export default function School() {
  return (
    <TemplateListPage data={schoolObjects.objects} title={schoolObjects.name} />
  );
}
