import { office } from "@/mock/data";
import { TemplateListPage } from "@/template/ListPage";

export default function Office() {
  return <TemplateListPage data={office.objects} title={office.name} />;
}
