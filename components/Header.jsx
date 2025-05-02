import { Group, Burger, Menu } from "@mantine/core";
import classes from "./Header.module.css";
import { useDisclosure } from "@mantine/hooks";
import {
  IconPhoto,
  IconMessageCircle,
  IconMoodSmileBeam,
} from "@tabler/icons-react";

const links = [
  { link: "/about", label: "Features" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

export default function Header() {
  const [opened, { toggle }] = useDisclosure();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <div>🍁 Leo</div>
        </Group>
        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
        </Group>

        <Menu shadow="md" width={250} hiddenFrom="sm">
          <Menu.Target>
            <Burger opened={opened} onClick={toggle} size="sm" />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              leftSection={<IconMoodSmileBeam size={14} />}
              onClick={toggle}
            >
              About
            </Menu.Item>
            <Menu.Item leftSection={<IconPhoto size={14} />} onClick={toggle}>
              My Work
            </Menu.Item>
            <Menu.Item
              leftSection={<IconMessageCircle size={14} />}
              onClick={toggle}
            >
              Contact
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </header>
  );
}
