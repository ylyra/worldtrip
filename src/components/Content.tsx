import React from "react";
import {
  Flex,
  Heading,
  Grid,
  Text,
  Popover,
  PopoverTrigger,
  Icon,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

import { randomizeArray } from "../utils/randomArray";

type City = {
  name: string;
  country: string;
  banner: string;
};

type Continent = {
  content: string;
  banner_image: string;
  countries: number;
  languages: number;
  cities: City[];
};

type ContentProps = {
  continent: Continent;
};

export function Content({ continent }: ContentProps) {
  const randomizedCities = randomizeArray<City[]>({ data: continent.cities })
    .map((city) => city.name)
    .join(", ");

  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
      mx="auto"
      w="100%"
      maxW="1160px"
    >
      <Text fontSize={["lg", "xl"]} color="gray.700" textAlign="justify">
        {continent.content}
      </Text>

      <Flex alignItems="center" justifyContent="space-between">
        <Flex
          direction="column"
          justify="center"
          align={["flex-start", "flex-start", "center"]}
        >
          <Heading
            fontSize={["2xl", "4xl"]}
            color="yellow.400"
            fontWeight="500"
          >
            {continent.countries}
          </Heading>
          <Text fontWeight="500" fontSize="md" color="gray.700">
            países
          </Text>
        </Flex>

        <Flex
          direction="column"
          justify="center"
          align={["flex-start", "flex-start", "center"]}
        >
          <Heading
            fontSize={["2xl", "4xl"]}
            color="yellow.400"
            fontWeight="500"
          >
            {continent.languages}
          </Heading>
          <Text fontWeight="500" fontSize="md" color="gray.700">
            línguas
          </Text>
        </Flex>

        <Flex
          direction="column"
          justify="center"
          align={["flex-start", "flex-start", "center"]}
        >
          <Heading
            fontSize={["2xl", "4xl"]}
            color="yellow.400"
            fontWeight="500"
          >
            {continent.cities.length}
          </Heading>

          <Flex align="center">
            <Text fontWeight="500" fontSize="md" color="gray.700">
              cidades +100
            </Text>
            <Popover>
              <PopoverTrigger>
                <span>
                  <Icon
                    cursor="pointer"
                    as={RiInformationLine}
                    ml="1"
                    color="gray.400"
                    w={["10px", "16px"]}
                    h={["10px", "16px"]}
                  />
                </span>
              </PopoverTrigger>
              <PopoverContent bg="gray.700" color="yellow.400">
                <PopoverArrow bg="gray.700" />
                <PopoverCloseButton />
                <PopoverBody fontWeight="400" fontSize="lg">
                  {randomizedCities}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        </Flex>
      </Flex>
    </Grid>
  );
}
