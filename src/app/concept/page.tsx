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
import ColorIntroduction from "@/components/concept/colorintroduction";

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
      gap="m" 
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

      <RevealFx
        translateY="4"
        delay={0.2}
        style={{ width: '100%' }}
      >
        <ColorIntroduction 
          title="Colors"
          colors={concept.brandColors}
        />
      </RevealFx>
    </Flex>
  );
}