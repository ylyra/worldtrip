import {
  Flex,
  GridItem,
  GridItemProps,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

type OptionProps = GridItemProps & {
  icon: string;
  text: string;
};

export function Option({ icon, text, ...rest }: OptionProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <GridItem {...rest}>
      <Flex direction={["row", "column"]} align="center" justify="center">
        {isMobile ? (
          <Image
            src={`/icons/${icon}.svg`}
            alt="Option icon"
            w="85px"
            h="85px"
            mb="6"
          />
        ) : (
          <Text color="yellow.400" fontSize="4xl" mr="2">
            •
          </Text>
        )}
        <Text fontWeight="600" color="gray.700" fontSize={["md", "xl", "2xl"]}>
          {text}
        </Text>
      </Flex>
    </GridItem>
  );
}
