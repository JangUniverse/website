'use client';

import React from 'react';
import { Flex, Text, Button, Icon } from '@once-ui-system/core';
import { Github, Mail, Linkedin, MessageCircle, Instagram, FileText } from 'lucide-react';

interface SocialLink {
  platform: string;
  username: string;
  url: string;
  description: string;
  category: string;
}

interface ConnectLinkProps {
  socialLinks: SocialLink[];
}

// Platform에 따른 아이콘 매핑
const getPlatformIcon = (platform: string) => {
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    'GitHub': Github,
    'Email': Mail,
    'LinkedIn': Linkedin,
    'Blog': FileText,
    'Discord': MessageCircle,
    'Instagram': Instagram,
  };

  return iconMap[platform] || FileText;
};

// Platform에 따른 색상 매핑
const getPlatformColor = (platform: string): string => {
  const colorMap: { [key: string]: string } = {
    'GitHub': 'var(--neutral-12)',
    'Email': 'var(--brand-solid)',
    'LinkedIn': 'var(--accent-solid)',
    'Blog': 'var(--neutral-10)',
    'Discord': 'var(--accent-solid)',
    'Instagram': 'var(--brand-solid)',
  };
  
  return colorMap[platform] || 'var(--neutral-10)';
};

// Category별 그룹화 함수
const groupByCategory = (links: SocialLink[]) => {
  return links.reduce((acc, link) => {
    if (!acc[link.category]) {
      acc[link.category] = [];
    }
    acc[link.category].push(link);
    return acc;
  }, {} as { [key: string]: SocialLink[] });
};

// Category 표시명 매핑
const getCategoryLabel = (category: string): string => {
  const labelMap: { [key: string]: string } = {
    'development': '개발',
    'contact': '연락처',
    'professional': '전문',
    'content': '콘텐츠',
    'social': '소셜',
  };
  
  return labelMap[category] || category;
};

export const ConnectLink: React.FC<ConnectLinkProps> = ({ socialLinks }) => {
  const groupedLinks = groupByCategory(socialLinks);
  
  // TODO: Context7 integration for AI-powered social link management
  // This will enable dynamic link prioritization and analytics
  const handleLinkClick = (platform: string, url: string) => {
    // Future Context7 implementation for tracking user interactions
    console.log(`Navigating to ${platform}: ${url}`);
  };

  return (
    <Flex
      direction="column"
      gap="xl"
      fillWidth
    >
      {Object.entries(groupedLinks).map(([category, links]) => (
        <Flex
          key={category}
          direction="column"
          gap="m"
          fillWidth
        >
          <Text
            variant="heading-strong-s"
            onBackground="neutral-weak"
          >
            {getCategoryLabel(category)}
          </Text>
          
          <Flex
            direction="column"
            gap="s"
            fillWidth
          >
            {links.map((link) => {
              const IconComponent = getPlatformIcon(link.platform);
              const platformColor = getPlatformColor(link.platform);
              
              return (
                <Button
                key={link.platform}
                href={link.url}
                target="_blank"
                variant="tertiary"
                size="l"
                fillWidth
                style={{
                  height: '80px',
                  justifyContent: 'flex-start',
                  padding: '0',
                }}
                onClick={() => handleLinkClick(link.platform, link.url)}
              >
                <Flex
                  paddingX="l"
                  paddingY="l"
                  gap="l"
                  align="center"
                  fillWidth
                  style={{
                    minHeight: '80px',
                  }}
                >
                  <Flex
                    align="center"
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '8px',
                      backgroundColor: platformColor,
                      opacity: 0.1,
                    }}
                  >
                    <IconComponent 
                      size={24} 
                      style={{ color: platformColor }}
                    />
                  </Flex>
                  <Text 
                    variant="body-default-m" 
                    style={{ color: platformColor }}
                  >
                    {link.platform}
                  </Text>
                  <Flex fillWidth />
                  <Text 
                    variant="body-default-s" 
                    onBackground="neutral-weak"
                  >
                    {link.username}
                  </Text>
                </Flex>
              </Button>
              );
            })}
          </Flex>
        </Flex>
      ))}
      
      <style jsx>{`
        .connect-link-item:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-color: var(--accent-medium);
        }
      `}</style>
    </Flex>
  );
};

export default ConnectLink;