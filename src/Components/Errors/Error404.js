import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Error404 = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <Box textAlign="center" py={200} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Pagina no encontrada
      </Text>
      <Text color={"gray.500"} mb={6}>
        La pagina que estas buscando no existe!
      </Text>

      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
        onClick={handleClick}
      >
        Ir a home
      </Button>
    </Box>
  );
};

export default Error404;
