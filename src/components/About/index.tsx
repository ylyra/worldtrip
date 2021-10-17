import { Grid } from "@chakra-ui/layout";
import { Option } from "./Option";

export function About() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      <Option icon="cocktail" text="vida noturna" />
      <Option icon="surf" text="praia" />
      <Option icon="building" text="moderno" />
      <Option icon="museum" text="clássico" />
      <Option icon="earth" text="e mais..." colSpan={[2, 2, 2, 1]} />
    </Grid>
  );
}
