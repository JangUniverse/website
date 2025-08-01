import { Metadata } from "next";
import {
  Flex,
  Heading,
  Text,
  Grid,
  Column,
  InlineCode,
  Badge,
  RevealFx,
} from "@once-ui-system/core";
import { person, concept } from "@/resources";
import SelfDescription from "@/components/concept/selfdescription";

export const metadata: Metadata = {
  title: concept.title,
  description: concept.description,
  openGraph: {
    title: concept.title,
    description: concept.description,
  },
};

export default function ConceptPage() {
  return (
    <Flex 
      maxWidth="xl" 
      direction="column" 
      gap="xl" 
      align="center"
      fillWidth
    >
      <RevealFx
        translateY="4"
        style={{ width: '100%' }}
      >
        <SelfDescription
          title={concept.selfDescription.title}
          nickname={concept.selfDescription.nickname}
          logo={concept.selfDescription.logo}
          images={concept.selfDescription.images}
        />
      </RevealFx>
    </Flex>
  );
}