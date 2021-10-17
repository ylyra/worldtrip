import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

type BannerProps = {
  continents?: number;
};

export function Banner({ continents = 0 }: BannerProps) {
  return (
    <Flex
      as="section"
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage={["url('/bg-mobile.jpg')", "url('/bg.jpg')"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <Box>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}
          >
            {continents} continente(s),
            <br />
            infinitas possibilidades.
          </Heading>
          <Text
            color="gray.300"
            mt="5"
            fontSize={["0.8rem", "xl"]}
            maxW={["100%", "100%", "100%", "500px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Image
          w={["300px", "300px", "300px", "430px"]}
          display={["none", "none", "block"]}
          src="/icons/airplane.svg"
          alt="Avião amarelo voando com algumas nuvens ao redor."
          transform="translateY(48px)"
          ml="8"
        />
      </Flex>
    </Flex>
  );
}
