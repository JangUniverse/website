'use client';

import React from "react";
import {
  Flex,
  Heading,
  Text,
  Column,
  Grid,
  Button,
  useToast
} from "@once-ui-system/core";
import styles from "./colorintroduction.module.scss";

interface ColorIntroduction {
  title: string;
  colors: Record<string, string>; // 객체 형식으로 변경: {"색상명": "#hex값"}
}

// HEX를 RGB로 변환하는 함수
function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// CMYK 계산 함수
function rgbToCmyk(r: number, g: number, b: number) {
  const rPercent = r / 255;
  const gPercent = g / 255;
  const bPercent = b / 255;
  
  const k = 1 - Math.max(rPercent, gPercent, bPercent);
  const c = k === 1 ? 0 : (1 - rPercent - k) / (1 - k);
  const m = k === 1 ? 0 : (1 - gPercent - k) / (1 - k);
  const y = k === 1 ? 0 : (1 - bPercent - k) / (1 - k);
  
  return {
    c: Math.round(c * 100),
    m: Math.round(m * 100),
    y: Math.round(y * 100),
    k: Math.round(k * 100)
  };
}

export default function ColorIntroduction({title, colors = {}}: ColorIntroduction){
  const { addToast } = useToast();
  
  const handleRowClick = (colorName: string, hexValue: string) => {
    // Context7 추적 (connectlink와 동일한 패턴)
    if (typeof window !== 'undefined' && (window as any).context7) {
      (window as any).context7.track('color_row_click', {
        colorName,
        hexValue,
        timestamp: new Date().toISOString()
      });
    }
  };
  
  return (
    <Flex direction="column" gap="xl" paddingY="xl" align="center" fillWidth className={`${styles.colorContainer} context7`}>
      <Heading as="h2" variant="heading-strong-xl" align="center">
        {title}
      </Heading>
      
      {/* 색상 팔레트 테이블 */}
      <Flex direction="column" gap="m" align="center" fillWidth>
        {/* 헤더 */}
        <Grid columns={11} gap="xs" className={styles.headerRow} align="center">
          <Text variant="body-strong-s" align="center">Color</Text>
          <Text variant="body-strong-s" align="center">Name</Text>
          <Text variant="body-strong-s" align="center">R</Text>
          <Text variant="body-strong-s" align="center">G</Text>
          <Text variant="body-strong-s" align="center">B</Text>
          <Text variant="body-strong-s" align="center">HEX</Text>
          <Text variant="body-strong-s" align="center">C</Text>
          <Text variant="body-strong-s" align="center">M</Text>
          <Text variant="body-strong-s" align="center">Y</Text>
          <Text variant="body-strong-s" align="center">K</Text>
          <Text variant="body-strong-s" align="center">Copy</Text>
        </Grid>
        
        {/* 색상 행들 */}
        {Object.entries(colors).map(([colorName, hexValue]) => {
          // HEX에서 RGB 값 추출
          const rgbValues = hexToRgb(hexValue);
          const R = rgbValues ? rgbValues.r : 0;
          const G = rgbValues ? rgbValues.g : 0;
          const B = rgbValues ? rgbValues.b : 0;
          const cmyk = rgbToCmyk(R, G, B);
          
          return (
            <Grid 
              key={colorName} 
              columns={11} 
              gap="xs" 
              className={`${styles.colorRow} ${styles.context7Tracked} context7-color-row`}
              align="center"
              onClick={() => handleRowClick(colorName, hexValue)}
            >
              {/* 색상 미리보기 */}
              <div 
                className={styles.colorPreview}
                style={{
                  backgroundColor: hexValue,
                  '--hover-color': hexValue,
                  '--hover-color-rgb': `${R}, ${G}, ${B}`
                } as React.CSSProperties}
              />
              
              {/* 색상 이름 */}
              <Text variant="body-default-s" align="center">
                {colorName}
              </Text>
              
              {/* RGB 값들 */}
              <Text variant="body-default-s" align="center">
                {R}
              </Text>
              <Text variant="body-default-s" align="center">
                {G}
              </Text>
              <Text variant="body-default-s" align="center">
                {B}
              </Text>
              
              {/* HEX 값 */}
              <Text variant="body-default-s" align="center">
                {hexValue}
              </Text>
              
              {/* CMYK 값들 */}
              <Text variant="body-default-s" align="center">
                {cmyk.c}
              </Text>
              <Text variant="body-default-s" align="center">
                {cmyk.m}
              </Text>
              <Text variant="body-default-s" align="center">
                {cmyk.y}
              </Text>
              <Text variant="body-default-s" align="center">
                {cmyk.k}
              </Text>
              
              {/* 복사 버튼 */}
              <Button
                variant="tertiary"
                size="s"
                className={`${styles.copyButton} context7-copy`}
                onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation(); // 행 클릭 이벤트 방지
                  try {
                    await navigator.clipboard.writeText(hexValue);
                    addToast({
                      variant: 'success',
                      message: '복사되었습니다!'
                    });
                    
                    // Context7 추적
                    if (typeof window !== 'undefined' && (window as any).context7) {
                      (window as any).context7.track('color_copy', {
                        colorName,
                        hexValue,
                        timestamp: new Date().toISOString()
                      });
                    }
                  } catch (error) {
                    console.error('클립보드 복사 실패:', error);
                    addToast({
                      variant: 'danger',
                      message: '복사에 실패했습니다.'
                    });
                  }
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h10a2 2 0 012 2v1"></path>
                </svg>
              </Button>
            </Grid>
          );
        })}
      </Flex>
    </Flex>
  );
}