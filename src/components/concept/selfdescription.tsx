import {
  Media,
  Column,
  Flex,
  Heading,
  Text
} from "@once-ui-system/core";
import React from "react";

interface SelfDescriptionImage {
  url: string;
  alt: string;
  description: string;
}

interface SelfDescriptionProps {
  title: string;
  nickname: React.ReactNode;
  logo: React.ReactNode;
  images: SelfDescriptionImage[];
}

export default function SelfDescription({ title, nickname, logo, images }: SelfDescriptionProps) {
  return (
    <Flex fillWidth gap="xl" paddingY="xl" mobileDirection="column">
      {/* 왼쪽: Nickname과 Logo 박스들 */}
      <Column gap="m" paddingX="m" align="start" style={{ flex: '1' }}>
        {/* Nickname 박스 */}
        <Flex
          radius="m"
          padding="l"
          fillWidth
          border="neutral-medium"
          background="surface"
        >
          <Column gap="m" align="start">
            <Heading
              as="h2"
              variant="heading-strong-l"
              onBackground="neutral-strong"
              align="start"
            >
              Nickname
            </Heading>
            <Text
              variant="body-default-l"
              onBackground="neutral-medium"
              align="start"
            >
              {nickname}
            </Text>
          </Column>
        </Flex>
        
        {/* Logo 박스 */}
        <Flex
          radius="m"
          padding="l"
          fillWidth
          border="neutral-medium"
          background="surface"
        >
          <Column gap="m" align="start">
            <Heading
              as="h2"
              variant="heading-strong-l"
              onBackground="neutral-strong"
              align="start"
            >
              Logo
            </Heading>
            <Text
              variant="body-default-l"
              onBackground="neutral-medium"
              align="start"
            >
              {logo}
            </Text>
          </Column>
        </Flex>
      </Column>

      {/* 오른쪽: 이미지 그리드 */}
      <Column gap="m" paddingX="m" style={{ flex: '1' }}>
        <Flex wrap gap="m" align="center" mobileDirection="column" className="context7">
          {images.map((image, index) => (
            <Column key={index} gap="xs" className="context7-image-container" style={{ 
              minWidth: '200px',
              maxWidth: '300px',
              flex: '1 1 calc(50% - 16px)',
              '@media': {
                '(max-width: 768px)': {
                  flex: '1 1 100%',
                  maxWidth: '100%',
                  maxHeight: '300px',
                  overflow: 'auto',
                  '-webkit-overflow-scrolling': 'touch',
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#888 #f1f1f1',
                  '&::-webkit-scrollbar': {
                    width: '8px'
                  },
                  '&::-webkit-scrollbar-track': {
                    background: '#f1f1f1',
                    borderRadius: '4px'
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: '#888',
                    borderRadius: '4px'
                  },
                  '&::-webkit-scrollbar-thumb:hover': {
                    background: '#555'
                  },
                  '& img': {
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain'
                  }
                }
              }
            }}>
              <Media
                src={image.url}
                alt={image.alt}
                aspectRatio="1/1"
                radius="m"
                sizes="200px"
                style={{
                  width: '200px',
                  height: '200px'
                }}
              />
              <Text 
                variant="body-default-s" 
                onBackground="neutral-weak"
                align="center"
              >
                {image.description}
              </Text>
            </Column>
          ))}
        </Flex>
      </Column>
    </Flex>
  );
}