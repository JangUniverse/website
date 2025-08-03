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

interface ColorIntroductionProps{
  name: string;
  color: string;
  R: number;
  G: number;
  B: number;
}

interface ColorIntroduction {
  title: string;
  colors: ColorIntroductionProps[];
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

export default function ColorIntroduction({title, colors}: ColorIntroduction){
  const { addToast } = useToast();
  return (
    <Flex direction="column" gap="xl" paddingY="xl" align="center" fillWidth>
      <Heading as="h2" variant="heading-strong-xl" align="center">
        {title}
      </Heading>
      
      {/* 색상 팔레트 테이블 */}
      <Flex direction="column" gap="m" align="center" fillWidth>
        {/* 헤더 */}
        <Grid columns={11} gap="xs" padding="m" background="surface" border="neutral-medium" radius="m" align="center">
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
        {colors.map((color) => {
          const cmyk = rgbToCmyk(color.R, color.G, color.B);
          
          return (
            <Grid key={color.name} columns={11} gap="xs" padding="m" border="neutral-medium" radius="m" align="center">
              {/* 색상 미리보기 */}
              <div 
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: color.color,
                  borderRadius: '4px',
                  border: '1px solid white',
                  justifySelf: 'center'
                }}
              />
              
              {/* 색상 이름 */}
              <Text variant="body-default-s" align="center">
                {color.name}
              </Text>
              
              {/* RGB 값들 */}
              <Text variant="body-default-s" align="center">
                {color.R}
              </Text>
              <Text variant="body-default-s" align="center">
                {color.G}
              </Text>
              <Text variant="body-default-s" align="center">
                {color.B}
              </Text>
              
              {/* HEX 값 */}
              <Text variant="body-default-s" align="center">
                {color.color}
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
                onClick={() => {
                  navigator.clipboard.writeText(color.color);
                  addToast({
                    variant: 'success',
                    message: '복사되었습니다!',
                    
                  });
                }}
                style={{ 
                  border: 'none', 
                  background: 'transparent',
                  padding: '4px',
                  minWidth: 'auto',
                  height: 'auto',
                  justifySelf: 'center'
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