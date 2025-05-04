import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Transition, ActionIcon } from "@mantine/core";

export default function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <ActionIcon
              variant="filled"
              color="gray"
              size="xl"
              radius="xl"
              aria-label="Back to top"
              onClick={() => scrollTo({ y: 0 })}
            >
              <IconArrowUp style={transitionStyles} />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </>
  );
}
