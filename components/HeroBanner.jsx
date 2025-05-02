import { Button, Container, Group, Text } from "@mantine/core";
import { GithubIcon } from "@mantinex/dev-icons";
import classes from "./HeroBanner.module.css";
import { IconBrandLinkedin } from "@tabler/icons-react";

export default function HeroBanner() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          Hello, I'm{" "}
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            inherit
          >
            leo
          </Text>{" "}
          hong.
        </h1>

        <Text className={classes.description} c="dimmed">
          An aspiring Software Developer.
        </Text>

        <Group className={classes.controls}>
          <Button
            component="a"
            href="https://www.linkedin.com/in/leo-hong/"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className={classes.control}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            leftSection={<IconBrandLinkedin size={20} />}
          >
            LinkedIn
          </Button>

          <Button
            component="a"
            href="https://github.com/low-earth-orbit"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="default"
            className={classes.control}
            leftSection={<GithubIcon size={20} />}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}
