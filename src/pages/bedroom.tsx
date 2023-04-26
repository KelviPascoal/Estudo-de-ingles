import { bedrooms } from "@/mock/data";
import { TemplateListPage } from "@/template/ListPage";

export default function Bedrooms() {
  return <TemplateListPage data={bedrooms.objects} title={bedrooms.name} />;
}
