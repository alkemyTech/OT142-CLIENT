import { Progress, Spinner, Center } from "@chakra-ui/react";

const Loader = ({ type, size, color, height }) => {
  return type === "spinner" ? (
    <Center>
      <Spinner
        mt="1em"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color={color || "blue.500"}
        size={size || "xl"}
      />
    </Center>
  ) : (
    <Progress
      colorScheme={color || "blue"}
      height={height}
      size={size || "md"}
      value={5}
      isIndeterminate
    />
  );
};

export default Loader;
