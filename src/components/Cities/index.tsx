import { Box, Grid, Heading } from "@chakra-ui/react";
import { City } from "./City";

type City = {
  name: string;
  country: string;
  banner: string;
};

type CitiesProps = {
  cities: City[];
};

export default function Cities({ cities }: CitiesProps) {
  return (
    <Box mx="auto" w="100%" maxW="1160px" mb={8}>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
        Cidades +100
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        {cities.map((city) => (
          <City
            key={city.name}
            name={city.name}
            country={city.country}
            banner={city.banner}
          />
        ))}
      </Grid>
    </Box>
  );
}
