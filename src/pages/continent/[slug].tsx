import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { api } from "../../services/api";
import { Content } from "../../components/Content";
import Cities from "../../components/Cities";

type City = {
  name: string;
  country: string;
  banner: string;
};

type Continent = {
  name: string;
  slug: string;
  description: string;
  content: string;
  banner: string;
  banner_image: string;
  countries: number;
  languages: number;
  cities: City[];
};

type ContinentItemProps = {
  continent: Continent;
};

const ContinentItem: NextPage<ContinentItemProps> = ({ continent }) => {
  return (
    <>
      <Head>
        <title>{continent.name} - Worldtrip</title>
        <meta property="og:description" content={continent.description} />
        <meta name="twitter:title" content={`WorldTrip ${continent.name}`} />

        <meta name="twitter:image" content={continent.banner} />
        <meta name="twitter:image:src" content={continent.banner} />
        <meta property="og:image" content={continent.banner} />
        <meta property="og:image:secure_url" content={continent.banner} />
      </Head>

      <Flex
        w="100%"
        h={["150px", "300px", "500px"]}
        px={["0", "0", "36"]}
        pt={["0", "0", "72"]}
        bgImage={`url('${continent.banner_image}')`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        align="center"
        justify={["center", "center", "flex-start"]}
      >
        <Heading
          textAlign={["center", "left"]}
          fontSize={["1.75rem", "5xl"]}
          color="gray.100"
          fontWeight="500"
        >
          {continent.name}
        </Heading>
      </Flex>

      <Content continent={continent} />
      <Cities cities={continent.cities} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get<Continent[]>("/continents");

  const paths = data.map((continent) => ({
    params: {
      slug: continent.slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

type Params = {
  slug: string;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as Params;

  const response = await api.get<Continent[]>("/continents", {
    params: {
      slug,
    },
  });

  if (response.data.length === 0) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      continent: response.data[0],
    },
    revalidate: 60 * 60 * 24,
  };
};

export default ContinentItem;
