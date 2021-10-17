import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import flags from "../../../countries-flags.json";

type CityProps = {
  name: string;
  country: string;
  banner: string;
};

export function City({ name, country, banner }: CityProps) {
  const flag =
    flags
      .find((flag) => flag.name === country)
      ?.file_url.replace("//", "https://") ||
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/250px-Flag_of_the_United_Nations.svg.png";

  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={banner} alt={`${name}, ${country}`} h="170px" w="100%" />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            {name}
          </Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
            {country}
          </Text>
        </Flex>
        <Image
          src={flag}
          alt="flag"
          w="30px"
          h="30px"
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}
