import React from 'react';
import {
  Avatar,
  Column,
  Flex,
  Heading,
  Media,
  Text,
} from "@once-ui-system/core";
import { person } from "@/resources";

interface SelfDescriptionImage {
  url: string;
  alt: string;
  description: string;
}

interface SelfDescriptionProps {
  title: string;
  description: string;
  images: SelfDescriptionImage[];
}

export default function SelfDescription({ title, description, images }: SelfDescriptionProps) {
  return (
    <Flex fillWidth mobileDirection="column" horizontal="center" gap="xl">
      {/* 왼쪽 이미지 그리드 */}
      <Column flex={2} gap="m">
        <Flex wrap gap="m">
          {images.map((image, index) => (
            <Column key={index} gap="xs" style={{ width: '48%' }}>
              <Media
                src={image.url}
                alt={image.alt}
                aspectRatio="1 / 1"
                radius="m"
                style={{
                  width: '100%',
                  objectFit: 'cover'
                }}
              />
              <Text size="s" variant="body" color="neutral-weak">
                {image.description}
              </Text>
            </Column>
          ))}
        </Flex>
      </Column>

      {/* 오른쪽 텍스트 내용 */}
      <Column flex={3} gap="m">
        <Column gap="m">
          <Heading
            as="h1"
            size="xl"
            weight="strong"
          >
            {title}
          </Heading>
          <Text
            size="l"
            variant="body"
            color="neutral-medium"
          >
            {description}
          </Text>
        </Column>
      </Column>
    </Flex>
  );
}