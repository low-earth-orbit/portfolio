import { Group } from "@mantine/core";
import classes from "./Header.module.css";

const links = [
  { link: "#about-me", label: "About" },
  { link: "#my-work", label: "My Work" },
  { link: "#contact", label: "Contact" },
];

export default function Header() {
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Group gap={5} className={classes.links}>
            {items}
          </Group>
        </Group>
      </div>
    </header>
  );
}
