import { personalObjects } from "@/mock/data";
import { TemplateListPage } from "@/template/ListPage";

export default function Personal() {
  return (
    <TemplateListPage
      data={personalObjects.objects}
      title={personalObjects.name}
    />
  );
}
