import { Flex, Grid, Icon, Image, Link as ChakraLink } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";

export function Header() {
  const router = useRouter();

  return (
    <Flex
      as="header"
      w="100%"
      h={["50px", "100px"]}
      bg="white"
      align="center"
      justify="center"
      px={4}
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
      >
        {router.asPath !== "/" && (
          <Link href="/" passHref>
            <ChakraLink justifySelf="start">
              <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} />
            </ChakraLink>
          </Link>
        )}

        <Image
          w={["81px", "184px"]}
          src="/logo.svg"
          alt="Um avião com o texto worldtrip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
