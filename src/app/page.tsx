import React from "react";

import {
  Heading,
  Flex,
  Icon,
  IconButton,
  Text,
  Button,
  Avatar,
  RevealFx,
  Arrow,
  Column,
} from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import classNames from "classnames";

import { baseURL, routes } from "@/app/resources";
import {
  home,
  about,
  person,
  emailOnly,
  newsletter,
} from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import styles from "@/components/about/about.module.scss";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
  return (
    <Column maxWidth="xl" gap="xl" horizontal="start">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Column fillWidth maxWidth="m" paddingY="l">
        <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
          <Avatar src={person.avatar} size="xl" />
        </RevealFx>
        <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
          <Heading wrap="balance" variant="display-strong-xl">
            {home.headline}
          </Heading>
        </RevealFx>
        <RevealFx
          translateY="8"
          delay={0.2}
          fillWidth
          horizontal="start"
          paddingBottom="m"
        >
          <Heading
            as="h2"
            wrap="balance"
            onBackground="neutral-weak"
            variant="body-default-xl"
          >
            {home.subline}
          </Heading>
        </RevealFx>
        <RevealFx
          translateY="8"
          delay={0.2}
          fitWidth
          horizontal="start"
          paddingBottom="m"
        >
          <Flex gap="8" wrap>
            <Button
              id="email"
              href="mailto:contact@nasoavina.site"
              variant="secondary"
              size="l"
              prefixIcon="email"
              arrowIcon
              className={classNames("radius-s")}
              label="Let's Talk"
            />

            {about.calendar.display && (
              <Button
                id="calendar"
                href={about.calendar.link}
                variant="primary"
                size="l"
                prefixIcon="calendar"
                arrowIcon
                className={classNames("radius-s")}
                label="Schedule a call"
              />
            )}
          </Flex>
        </RevealFx>
        <RevealFx
          translateY="8"
          delay={0.2}
          fillWidth
          horizontal="start"
          paddingTop="l"
        >
          <Flex gap="12" vertical="end" wrap>
            <Text variant="heading-strong-xl">{home.years}</Text>
            <Text as="p" variant="body-default-m" onBackground="neutral-weak">
              {home.experience}
            </Text>
          </Flex>
        </RevealFx>
      </Column>
    </Column>
  );
}
