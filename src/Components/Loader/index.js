import { Progress, Spinner, Center } from "@chakra-ui/react";

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
    <Progress height="1em" value={5} isIndeterminate />
  );
};

export default Loader;
