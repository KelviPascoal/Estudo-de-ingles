import { Card, CardProps } from "@/components/Card";
import { Flex, VStack, Text } from "@chakra-ui/react";

type TemplateListPageProps = {
  data: CardProps[];
  title: string;
};

export function TemplateListPage({ data, title }: TemplateListPageProps) {
  return (
    <VStack mt="2">
      <Text as="h1" fontSize="4xl" paddingY="2">
        {title}
      </Text>
      <Flex wrap="wrap" gap="12">
        {data.map((item, index) => (
          <Card key={index} src={item.src} name={item.name}></Card>
        ))}
      </Flex>
    </VStack>
  );
}
