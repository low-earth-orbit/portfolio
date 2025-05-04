import classes from "./AboutMe.module.css";
import { Accordion, Title, Text } from "@mantine/core";

const groceries = [
  {
    emoji: "🤟",
    value: "My tech stack",
    description:
      "Technologies I use for web development include TypeScript/JavaScript, React, Redux, Next.js, Node.js/Express, Amazon Web Services, GraphQL, DynamoDB, PostgreSQL, and more. In addition to web development, I am currently learning include artificial intelligence, distributed systems, and cloud computing.",
  },
  {
    emoji: "🚀",
    value: "My journey to technology",
    description:
      "I’ve lived in three Canadian provinces, and before becoming a software developer, I briefly worked as a surveyor on land development projects in Southern Ontario. I returned to school at the University of New Brunswick, originally with the goal of becoming a licensed Land Surveyor or Professional Engineer. Along the way, I discovered how deeply programming was shaping the world of design and planning. Out of curiosity, I enrolled in a few computer science courses. Just enough to earn a minor, I thought. But that curiosity turned into something more. It led me to pursue a co-op internship with a local tech company.",
  },
  {
    emoji: "🏃",
    value: "A first-generation immigrant",
    description:
      "Born in the wild suburbs of southern China, I grew up with crop fields on rolling hills, rivers and waters, although I witnessed rapid urbanization. It wasn’t until much later in my adolescence that I ever imagined moving to another country. I miss the golden, miraculous years of openness and progress. When I moved to Canada, I didn’t think much about the future — I just wanted to explore, to wonder...",
  },
  {
    emoji: "🎾",
    value: "Hobbies",
    description:
      "Away from coding, I enjoy reading, hiking and playing tennis. Some of my favourite authors are Michel Foucault, Pierre Bourdieu and Thomas Piketty. I play a lot of tennis and am also skilled in Chinese calligraphy.",
  },
];

export default function Intro() {
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div className="mx-4 lg:mx-auto my-20 max-w-[1024px] content-center">
      <Title order={2} id="about-me">
        about me
      </Title>
      <div className="my-4">
        <Text size="xl">
          I'm a Full-Stack Software Developer based in Fredericton, Canada. I
          build interactive user experiences for web applications.
        </Text>
      </div>
      <Accordion defaultValue="My tech stack" classNames={classes}>
        {items}
      </Accordion>
    </div>
  );
}
