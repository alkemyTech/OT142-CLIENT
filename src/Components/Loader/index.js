import { Progress, Spinner, Center } from "@chakra-ui/react";
import React from "react";

const Loader = ({ type }) => {
  return type === "spinner" ? (
    <Center>
      <Spinner
        mt="1em"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Center>
  ) : (
    <Progress value={20} isIndeterminate />
  );
};

export default Loader;
