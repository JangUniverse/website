"use client";

import { mailchimp } from "@/resources";
import { Button, Flex, Heading, Input, Text, Background, Column, useToast } from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { useState } from "react";



type NewsletterProps = {
  display: boolean;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
};

export const Mailchimp = ({ newsletter }: { newsletter: NewsletterProps }) => {
  const [email, setEmail] = useState<string>("");
  const { addToast } = useToast();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      addToast({
        variant: 'danger',
        message: '이메일을 입력해주세요.'
      });
      return;
    }

    if (!validateEmail(email)) {
      addToast({
        variant: 'danger',
        message: '올바른 이메일 형식을 입력해주세요.'
      });
      return;
    }

    try {
      // 실제 Mailchimp API 호출
      const formData = new FormData();
      formData.append('EMAIL', email);
      
      const response = await fetch(mailchimp.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Mailchimp CORS 정책 때문에 필요
      });
      
      // no-cors 모드에서는 응답을 확인할 수 없으므로 성공으로 간주
      addToast({
        variant: 'success',
        message: '구독이 완료되었습니다! 감사합니다.'
      });
      setEmail('');
    } catch (error) {
      addToast({
        variant: 'danger',
        message: '구독 중 오류가 발생했습니다. 다시 시도해주세요.'
      });
    }
  };



  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />
      <Heading style={{ position: "relative" }} marginBottom="s" variant="display-strong-xs">
        {newsletter.title}
      </Heading>
      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"    
        onBackground="neutral-medium"
      >
        {newsletter.description}
      </Text>
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <Flex fillWidth maxWidth={24} mobileDirection="column" gap="8">
          <Input
             id = "email"
             type="text"
             placeholder="Email"
             onChange={handleChange}
             value={email}
             />
          <div className="clear">
            <Flex height="48" vertical="center">
              <Button 
                type="submit"
                size="m" 
                fillWidth
              >
                구독하기
              </Button>
            </Flex>
          </div>
        </Flex>
      </form>

    </Column>
  );
};