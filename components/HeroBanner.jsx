import { Button, Container, Group, Text } from "@mantine/core";
import { GithubIcon } from "@mantinex/dev-icons";
import classes from "./HeroBanner.module.css";

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
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
          >
            Get started
          </Button>

          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
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
