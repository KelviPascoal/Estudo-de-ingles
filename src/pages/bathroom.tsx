import { bathroom } from "@/mock/data";
import { TemplateListPage } from "@/template/ListPage";

export default function Bathroom() {
  return <TemplateListPage data={bathroom.objects} title={bathroom.name} />;
}
