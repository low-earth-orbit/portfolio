import { Title, SimpleGrid } from "@mantine/core";
import { Card, Text } from "@mantine/core";
import {
  IconBrandLinkedinFilled,
  IconBrandGithubFilled,
} from "@tabler/icons-react";

export default function Contact() {
  return (
    <div className="mx-4 lg:mx-auto my-20 max-w-[980px] content-center">
      <Title order={2} id="contact">
        Let’s connect!
      </Title>
      <div className="my-4">
        <Text size="xl">
          While I’m not actively seeking for freelance work or employment,
          welcome to connect with me on LinkedIn or GitHub.
        </Text>
      </div>
      <div className="my-4">
        <SimpleGrid cols={2}>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            component="a"
            href="https://www.linkedin.com/in/leo-hong/"
            target="_blank"
            rel="noopener noreferrer"
            className="content-center items-center justify-center"
          >
            <IconBrandLinkedinFilled size={48} />
            <Text>LinkedIn</Text>
          </Card>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            component="a"
            href="https://github.com/low-earth-orbit"
            target="_blank"
            rel="noopener noreferrer"
            className="content-center items-center justify-center"
          >
            <IconBrandGithubFilled size={48} />
            <Text>GitHub</Text>
          </Card>
        </SimpleGrid>
      </div>
    </div>
  );
}
