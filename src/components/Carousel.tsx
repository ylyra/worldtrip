import { Flex, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

type Continent = {
  name: string;
  slug: string;
  description: string;
  banner: string;
};

type CarouselProps = {
  continents: Continent[];
};

export function Carousel({ continents }: CarouselProps) {
  return (
    <Flex
      w="100%"
      h={["250px", "450px"]}
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: "100%", flex: "1" }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.slug}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage={`url('${continent.banner}')`}
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
            >
              <Link href={`/continent/${continent.slug}`} passHref>
                <ChakraLink>
                  <Heading
                    fontSize={["3xl", "4xl", "5xl"]}
                    color="gray.100"
                    fontWeight="bold"
                  >
                    {continent.name}
                  </Heading>
                  <Text
                    fontWeight="bold"
                    color="gray.300"
                    fontSize={["0.8rem", "1xl", "2xl"]}
                    mt={["2", "4"]}
                  >
                    {continent.description}
                  </Text>
                </ChakraLink>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
