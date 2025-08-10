'use client';

import React from 'react';
import { Flex, Text, Grid } from '@once-ui-system/core';
import { ExternalLink, Github, Twitter, Linkedin, Instagram, Youtube, Twitch, Facebook, Mail, FileText, MessageCircle, Globe, Code, CodeXml } from 'lucide-react';
import styles from './connectlink.module.scss';

interface SocialLink {
  platform: string;
  username: string;
  url: string;
  description?: string;
  category?: string;
  name?: string;
  light?: string;
  dark?: string;
  icon?: string;
}

interface ConnectLinkProps {
  socialLinks: SocialLink[];
  title?: string;
}

const getIconForPlatform = (iconName: string) => {
  const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
    github: Github,
    twitter: Twitter,
    x: Twitter, // X uses Twitter icon
    linkedin: Linkedin,
    instagram: Instagram,
    youtube: Youtube,
    twitch: Twitch,
    facebook: Facebook,
    email: Mail,
    at: Mail, // Alternative for email
    blog: FileText,
    discord: MessageCircle,
    codexml: CodeXml, // Baekjoon OJ uses CodeXml icon
  };
  return iconMap[iconName.toLowerCase()] || Globe;
};

const getColorForPlatform = (): { light: string; dark: string } => {
  // 기본 색상 (링크 객체에 light/dark 속성이 없을 때 사용)
  return { light: '#6366f1', dark: '#8b5cf6' };
};

export const ConnectLink: React.FC<ConnectLinkProps> = ({ socialLinks, title = '연결 링크' }) => {
  if (!socialLinks || socialLinks.length === 0) {
    return (
      <div className={styles.connectContainer}>
        <Text variant="heading-strong-l">{title}</Text>
        <Text variant="body-default-m" className={styles.noLinksMessage}>
          사용 가능한 소셜 링크가 없습니다.
        </Text>
      </div>
    );
  }

  const handleLinkClick = (platform: string, url: string) => {
    try {
      console.log(`Context7 tracking: User clicked ${platform}`);
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Link navigation error:', error);
      window.location.href = url;
    }
  };

  return (
    <div className={styles.connectContainer}>
      <Text variant="heading-strong-l">{title}</Text>
      <div>
        {socialLinks.map((link) => {
          const IconComponent = getIconForPlatform(link.icon || link.platform);
          // 개별 링크에서 light/dark 속성을 우선 사용, 없으면 기본 색상 사용
          const colors = (link.light && link.dark) 
            ? { light: link.light, dark: link.dark }
            : getColorForPlatform();

          return (
            <div
              key={`${link.platform}-${link.username}`}
              className={`${styles.linkItem} ${styles.context7Tracked}`}
              onClick={() => handleLinkClick(link.platform, link.url)}
              style={{
                '--icon-color-light': colors.light,
                '--icon-color-dark': colors.dark,
                '--hover-color': colors.light,
                '--hover-color-dark': colors.dark
              } as React.CSSProperties}
            > 
              <Grid
                columns= '2'
                gap="m"
                align="center"
                className={`${styles.linkContent} context7-link-layout`}
              >
                {/* 왼쪽: 아이콘 + 플랫폼 이름 */}
                <Flex align="center" gap="m" className="context7-left-section">
                  <div className={`${styles.iconContainer} icon-container context7-icon`}>
                    {React.createElement(getIconForPlatform(link.icon || link.platform), {
                      size: 24,
                      className: styles.platformIcon,
                      style: {
                        '--icon-color-light': colors.light,
                        '--icon-color-dark': colors.dark
                      } as React.CSSProperties
                    })}
                  </div>
                  <Flex direction="column" gap="xs">
                    <Text 
                      variant="heading-strong-l"
                      className={`${styles.platformName} context7-platform-name`}
                    >
                      {link.name || link.platform}
                    </Text>
                  </Flex>
                </Flex>

                {/* 오른쪽: 계정명 + 화살표 */}
                <Flex align="center" gap="m" className="context7-right-section">
                  <Text
                    variant="body-default-m"
                    className={`${styles.username} context7-username`}
                  >
                    {link.username}
                  </Text>
                  <div className={`${styles.arrowContainer} arrow-container context7-arrow`}>
                    <ExternalLink size={15} className={styles.arrowIcon}/>
                  </div>
                </Flex>
              </Grid>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConnectLink;
