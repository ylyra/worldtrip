import React from "react";
import { Divider, Heading } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { About } from "../components/About";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { api } from "../services/api";

type Continent = {
  name: string;
  slug: string;
  description: string;
  banner: string;
};

type HomeProps = {
  continents: Continent[];
};

const Home: NextPage<HomeProps> = ({ continents }) => {
  return (
    <>
      <Head>
        <title>Home - Worldtrip</title>
        <meta name="description" content="Home Page - Worldtrip" />
        <meta property="og:image" content="/og.png" />
        <meta property="og:image:secure_url" content="/og.png" />
        <meta name="twitter:image" content="/og.png" />
        <meta name="twitter:image:src" content="/og.png" />
        <meta property="og:title" content="WorldTrip" />
        <meta name="twitter:title" content="WorldTrip" />
      </Head>

      <Banner continents={continents.length} />
      <About />
      <Divider
        w={["60px", "90px"]}
        mx="auto"
        h="2px"
        bg="gray.700"
        my={["9", "20"]}
      />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>

      <Carousel continents={continents} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<Continent[]>("/continents");

  return {
    props: {
      continents: response.data,
    },
    revalidate: 60 * 60 * 24, // will revalidate every 24 hours
  };
};

export default Home;
