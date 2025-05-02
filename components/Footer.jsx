import { Text, Container } from "@mantine/core";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text c="dimmed" size="sm">
          &copy; {new Date().getFullYear()} Leo Hong. All rights reserved.
        </Text>
      </Container>
    </div>
  );
}
