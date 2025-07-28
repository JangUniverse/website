'use client';

import React, { useState } from 'react';
import { Avatar, Flex } from '@once-ui-system/core';
import styles from './TechSkill.module.scss';

interface TechSkillProps {
  title: string;
  logo: string;
  alt: string;
  experience: number;
}

export default function TechSkill({ title, logo, alt, experience }: TechSkillProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.techSkillWrapper}>
      <Flex
        className={styles.techSkillContainer}
        padding="16"
        border="neutral-medium"
        borderStyle="solid"
        radius="m"
        vertical="center"
        horizontal="center"
        minWidth="80"
        minHeight="80"
        background="neutral-alpha-weak"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Avatar
          src={logo}
          aria-label={alt}
          size="l"
          style={{ backgroundColor: 'transparent' }}
        />
      </Flex>
      
      {isHovered && (
        <div className={styles.tooltip}>
          <div className={styles.tooltipContent}>
            <div className={styles.skillName}>
              {title}
            </div>
            
            <div className={styles.progressContainer}>
              <div className={styles.progressTrack}>
                <div
                  className={styles.progressBar}
                  style={{
                    '--progress-width': `${experience}%`,
                  } as React.CSSProperties}
                />
              </div>
              
              <span className={styles.experienceText}>
                {experience}%
              </span>
            </div>
            
            <div className={styles.tooltipArrow} />
          </div>
        </div>
      )}
    </div>
  );
}